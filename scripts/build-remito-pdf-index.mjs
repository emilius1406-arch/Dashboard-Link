import { writeFile } from "node:fs/promises";

const ROOT_FOLDER_ID = "1Luk5tllqqkX4UViNXUAiKSF08OprI3Cx";
const OUTPUT_FILE = new URL("../data/remitos-pdfs.json", import.meta.url);
const DRIVE_FOLDER_URL = "https://drive.google.com/drive/folders/";

const visitedFolders = new Set();
const pdfs = new Map();

function decodeDriveIvd(html) {
  const match = html.match(/window\['_DRIVE_ivd'\]\s*=\s*'([\s\S]*?)';/);
  if (!match) {
    return null;
  }

  try {
    const decoded = Function(`"use strict"; return '${match[1]}';`)();
    return JSON.parse(decoded);
  } catch (error) {
    return null;
  }
}

function collectDriveNodes(value, nodes = []) {
  if (!Array.isArray(value)) {
    return nodes;
  }

  const [id, parents, name, mimeType] = value;
  if (
    typeof id === "string" &&
    Array.isArray(parents) &&
    typeof name === "string" &&
    typeof mimeType === "string"
  ) {
    nodes.push({ id, name, mimeType });
  }

  value.forEach((item) => collectDriveNodes(item, nodes));
  return nodes;
}

function remitoDigits(name) {
  return String(name || "").replace(/\D/g, "");
}

async function readFolder(folderId, path = []) {
  if (visitedFolders.has(folderId)) {
    return;
  }
  visitedFolders.add(folderId);

  const url = `${DRIVE_FOLDER_URL}${folderId}?usp=sharing`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`No se pudo leer carpeta ${folderId}: ${response.status}`);
  }

  const html = await response.text();
  const data = decodeDriveIvd(html);
  const nodes = collectDriveNodes(data);

  for (const node of nodes) {
    if (node.mimeType === "application/vnd.google-apps.folder") {
      await readFolder(node.id, [...path, node.name]);
      continue;
    }

    if (node.mimeType !== "application/pdf") {
      continue;
    }

    pdfs.set(node.id, {
      id: node.id,
      name: node.name,
      fileName: node.name,
      remito: remitoDigits(node.name),
      url: `https://drive.google.com/file/d/${node.id}/view?usp=sharing`,
      previewUrl: `https://drive.google.com/file/d/${node.id}/preview`,
      path,
    });
  }
}

await readFolder(ROOT_FOLDER_ID);

const index = [...pdfs.values()].sort((a, b) =>
  a.path.join("/").localeCompare(b.path.join("/")) || a.name.localeCompare(b.name)
);

await writeFile(OUTPUT_FILE, `${JSON.stringify(index, null, 2)}\n`, "utf8");
console.log(`PDFs indexados: ${index.length}`);
console.log(`Carpetas recorridas: ${visitedFolders.size}`);
