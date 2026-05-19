const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "0.0.0.0";

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml",
};

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host}`);
  let filePath = path.join(root, decodeURIComponent(requestUrl.pathname));

  if (requestUrl.pathname === "/" || requestUrl.pathname.endsWith("/")) {
    filePath = path.join(root, "index.html");
  }

  const resolvedPath = path.resolve(filePath);
  const insideRoot = resolvedPath === root || resolvedPath.startsWith(`${root}${path.sep}`);

  if (!insideRoot) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(resolvedPath, (error, content) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200, { "Content-Type": types[path.extname(resolvedPath)] || "application/octet-stream" });
    res.end(content);
  });
});

server.listen(port, host, () => {
  console.log(`Dashboard operativo listo en http://${host}:${port}`);
});
