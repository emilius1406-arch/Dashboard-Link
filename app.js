const clients = [
  {
    id: "steck",
    name: "Steck",
    initials: "STECK",
    color: "#e30613",
    accent: "#111111",
    sites: "Base Pilar",
    active: 1,
    pending: 0,
    sla: "100%",
    alerts: "Base Pilar operativa",
    tasks: ["Control de ingreso a base", "Estado de servicios", "Parte operativo diario"],
  },
  {
    id: "syngenta",
    name: "Syngenta",
    accessColumns: ["Syngenta", "Norte Retail"],
    initials: "SYN",
    color: "#2f3f8f",
    sites: "Operacion Syngenta",
    active: 0,
    pending: 0,
    sla: "100%",
    alerts: "Cliente en configuracion",
    tasks: ["Configurar indicadores", "Validar maestro operativo", "Definir tableros Syngenta"],
  },
  {
    id: "andes",
    name: "Andes Salud",
    initials: "AS",
    color: "#6b5b2a",
    sites: "5 sedes",
    active: 29,
    pending: 4,
    sla: "98%",
    alerts: "Operacion estable",
    tasks: ["Guardias activas", "Insumos sensibles", "Mantenimiento preventivo"],
  },
  {
    id: "puerto",
    name: "Puerto Energia",
    initials: "PE",
    color: "#9a4f1f",
    sites: "2 plantas",
    active: 18,
    pending: 11,
    sla: "88%",
    alerts: "Atencion requerida",
    tasks: ["Ordenes demoradas", "Auditoria de seguridad", "Parte diario"],
  },
];

const GOOGLE_SHEET_ID = "1jXNfXBNryqHaPDHgxxxSxx3AovlYLJBi1af0q5CAd1o";
const ACCESS_SHEET_ID = "11SV3n8CkGJLx1sgKZhgXCg-Si3cdUcjZYeqAmQasJVs";
const GOOGLE_SHEETS = {
  indicators: `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:csv&sheet=Indicadores`,
  routes: `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:csv&sheet=Hojas%20de%20Ruta`,
  clientMaster: `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:csv&sheet=Ultimo%20maestro%20de%20clientes`,
  users: `https://docs.google.com/spreadsheets/d/${ACCESS_SHEET_ID}/gviz/tq?tqx=out:csv&gid=0`,
};
const REMITO_PDF_INDEX_URL = "https://script.google.com/macros/s/AKfycbz7xg8fZntkmT5zha-bu6CvbBpzZSsFsE-4tLJ2kxHaIjICRDhHnLsnpIP1Ipjn0S5MyA/exec";
const REMITO_PDF_FALLBACK_URL = "data/remitos-pdfs.json";
const UNIT_QUANTITY_INDEX_URL = "data/unidades-remito.json";
const SYNGENTA_FORKLIFT_STORAGE_KEY = "syngentaForkliftManagement";
const SYNGENTA_PLANTS = [
  { id: "araucaria", name: "La Araucaria", manager: "Matias Cordoba" },
  { id: "vt1", name: "VT1", manager: "Responsable VT1" },
  { id: "vt2", name: "VT2", manager: "Responsable VT2" },
];

let steckIndicators = [
  { date: "2026-04-07", unitsToPick: 23128, utilitarios: 1, chasis: 0, containersChina: 0, containersBrazil: 0, palletsIn: 0, previousMonthPositions: 0 },
  { date: "2026-04-08", unitsToPick: 290, utilitarios: 3, chasis: 0, containersChina: 0, containersBrazil: 0, palletsIn: 0, previousMonthPositions: 0 },
  { date: "2026-04-09", unitsToPick: 1948, utilitarios: 3, chasis: 0, containersChina: 0, containersBrazil: 0, palletsIn: 0, previousMonthPositions: 0 },
  { date: "2026-04-10", unitsToPick: 1175, utilitarios: 0, chasis: 0, containersChina: 0, containersBrazil: 0, palletsIn: 0, previousMonthPositions: 0 },
  { date: "2026-04-13", unitsToPick: 547, utilitarios: 1, chasis: 0, containersChina: 0, containersBrazil: 0, palletsIn: 0, previousMonthPositions: 0 },
  { date: "2026-04-14", unitsToPick: 3225, utilitarios: 1, chasis: 0, containersChina: 0, containersBrazil: 0, palletsIn: 0, previousMonthPositions: 0 },
  { date: "2026-04-15", unitsToPick: 999, utilitarios: 1, chasis: 0, containersChina: 0, containersBrazil: 0, palletsIn: 0, previousMonthPositions: 0 },
  { date: "2026-04-16", unitsToPick: 2978, utilitarios: 1, chasis: 0, containersChina: 0, containersBrazil: 0, palletsIn: 0, previousMonthPositions: 0 },
  { date: "2026-04-17", unitsToPick: 311, utilitarios: 0, chasis: 0, containersChina: 0, containersBrazil: 0, palletsIn: 0, previousMonthPositions: 0 },
  { date: "2026-04-20", unitsToPick: 2795, utilitarios: 1, chasis: 0, containersChina: 0, containersBrazil: 0, palletsIn: 0, previousMonthPositions: 0 },
  { date: "2026-04-21", unitsToPick: 3832, utilitarios: 1, chasis: 0, containersChina: 0, containersBrazil: 0, palletsIn: 0, previousMonthPositions: 0 },
  { date: "2026-04-22", unitsToPick: 3047, utilitarios: 1, chasis: 0, containersChina: 0, containersBrazil: 0, palletsIn: 0, previousMonthPositions: 0 },
  { date: "2026-04-23", unitsToPick: 1878, utilitarios: 1, chasis: 0, containersChina: 0, containersBrazil: 0, palletsIn: 0, previousMonthPositions: 0 },
  { date: "2026-04-24", unitsToPick: 272, utilitarios: 1, chasis: 0, containersChina: 0, containersBrazil: 0, palletsIn: 0, previousMonthPositions: 0 },
  { date: "2026-04-27", unitsToPick: 7504, utilitarios: 1, chasis: 0, containersChina: 0, containersBrazil: 0, palletsIn: 0, previousMonthPositions: 0 },
  { date: "2026-04-28", unitsToPick: 8, utilitarios: 1, chasis: 0, containersChina: 0, containersBrazil: 0, palletsIn: 0, previousMonthPositions: 0 },
  { date: "2026-05-05", unitsToPick: 7161, utilitarios: 0, chasis: 0, containersChina: 0, containersBrazil: 0, palletsIn: 0, previousMonthPositions: 0 },
  { date: "2026-05-06", unitsToPick: 869, utilitarios: 2, chasis: 0, containersChina: 0, containersBrazil: 0, palletsIn: 0, previousMonthPositions: 0 },
  { date: "2026-05-07", unitsToPick: 457, utilitarios: 1, chasis: 0, containersChina: 0, containersBrazil: 0, palletsIn: 0, previousMonthPositions: 0 },
  { date: "2026-05-08", unitsToPick: 3832, utilitarios: 1, chasis: 0, containersChina: 0, containersBrazil: 0, palletsIn: 0, previousMonthPositions: 0 },
];

const fallbackUsers = [
  {
    id: "admin",
    username: "admin",
    password: "Link@since2016",
    name: "Emiliano Fernandez",
    role: "Gerente de Operaciones",
    company: "Link Soluciones Logisticas",
    position: "Gerente de Operaciones",
    clientIds: clients.map((client) => client.id),
    system: true,
    isAdmin: true,
  },
  {
    id: "supervisor",
    username: "supervisor",
    password: "super123",
    name: "Supervisor Regional",
    role: "Acceso a cartera",
    company: "Link Soluciones Logisticas",
    position: "Supervisor",
    clientIds: ["steck", "syngenta", "andes"],
    system: true,
  },
  {
    id: "cliente",
    username: "cliente",
    password: "cliente123",
    name: "Usuario Steck",
    role: "Acceso cliente",
    company: "Steck",
    position: "Cliente",
    clientIds: ["steck"],
    system: true,
  },
  {
    id: "gmarchetta",
    username: "gmarchetta",
    password: "Steck1234",
    name: "Gabriela Marchetta",
    role: "Usuario Steck",
    company: "Steck",
    position: "Usuario",
    clientIds: ["steck"],
    system: true,
  },
  {
    id: "mlancelotti",
    username: "mlancelotti",
    password: "Since@2016",
    name: "Marcelo Lancelotti",
    role: "Gerente General",
    company: "Link Soluciones Logisticas",
    position: "Gerente General",
    clientIds: ["steck"],
    system: true,
  },
];

let users = fallbackUsers.map(normalizeUserRecord);
let usersLoadedFromSheet = false;

const app = document.querySelector("#app");
let session = null;
let selectedClient = null;
let activeSteckModule = "daily";
let activeSyngentaModule = "forklifts";
let routeRows = null;
let remitoPdfIndex = null;
let unitQuantityIndex = null;
let clientMasterRows = null;
let indicatorsLoaded = false;
let dailyDateFrom = "";
let dailyDateTo = "";

function normalizeUsername(username) {
  return String(username || "").trim().toLowerCase();
}

function normalizeUserRecord(user) {
  const username = normalizeUsername(user.username);
  return {
    id: String(user.id || username || createUserId()),
    username,
    password: String(user.password || ""),
    name: String(user.name || ""),
    role: String(user.role || ""),
    company: String(user.company || ""),
    position: String(user.position || ""),
    clientIds: Array.isArray(user.clientIds) ? user.clientIds.filter((id) => clients.some((client) => client.id === id)) : [],
    system: Boolean(user.system),
    isAdmin: Boolean(user.isAdmin),
  };
}

function createUserId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }

  return `user-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function isAdminSession() {
  return session && session.isAdmin;
}

async function loadUsersFromSheet() {
  try {
    const response = await fetch(GOOGLE_SHEETS.users, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("No se pudo leer la configuracion de usuarios");
    }

    const csv = await response.text();
    const parsedUsers = parseUserRows(csv);
    if (parsedUsers.length) {
      users = parsedUsers;
      usersLoadedFromSheet = true;
      syncActiveSessionUser();
    }
  } catch (error) {
    usersLoadedFromSheet = false;
  }
}

function parseUserRows(csv) {
  const { headers, rows } = parseCsv(csv);
  return rows
    .map((row) => {
      const item = rowToObject(headers, row);
      const username = normalizeUsername(item.Usuario);
      const clientIds = clients
        .filter((client) => getClientAccessColumns(client).some((column) => isYesValue(item[column])))
        .map((client) => client.id);

      return normalizeUserRecord({
        id: username,
        username,
        password: item["Contraseña"],
        name: item["Nombre Visible"],
        role: item.Cargo,
        company: item.Empresa,
        position: item.Cargo,
        clientIds,
        system: true,
        isAdmin: username === "admin",
      });
    })
    .filter((user) => user.username && user.password && user.clientIds.length);
}

function isYesValue(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") === "si";
}

function getClientAccessColumns(client) {
  return client.accessColumns || [client.name];
}

function syncActiveSessionUser() {
  if (!session) {
    return;
  }

  const updated = users.find((user) => user.id === session.id || user.username === session.username);
  if (!updated) {
    logout();
    return;
  }

  session = updated;
  if (selectedClient && !session.clientIds.includes(selectedClient.id)) {
    selectedClient = null;
  }
}

async function refreshUsersFromSheet() {
  const previousSession = session;
  await loadUsersFromSheet();
  if (previousSession && session) {
    render();
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderPortalLogo(size = "normal") {
  return `
    <div class="link-logo link-logo-${size}" aria-label="Link Soluciones Logisticas">
      <img src="assets/logo-link-transparent.png" alt="Link Soluciones Logisticas">
    </div>
  `;
}

function clientById(id) {
  return clients.find((client) => client.id === id);
}

function allowedClients() {
  return session.clientIds.map(clientById).filter(Boolean);
}

function renderClientLogo(client) {
  if (client.id === "steck") {
    return `
      <div class="client-logo client-logo-steck" aria-label="Steck">
        <img src="assets/logo-steck.png" alt="Steck">
      </div>
    `;
  }

  if (client.id === "syngenta") {
    return `
      <div class="client-logo client-logo-syngenta" aria-label="Syngenta">
        <img src="assets/logo-syngenta.png" alt="Syngenta">
      </div>
    `;
  }

  return `<div class="client-logo" style="background:${client.color}">${client.initials}</div>`;
}

function todayIso() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function monthKey(dateIso) {
  return dateIso.slice(0, 7);
}

function formatNumber(value) {
  return new Intl.NumberFormat("es-AR").format(value || 0);
}

function currentMonthRows(rows, dateIso) {
  return rows
    .filter((row) => row.date.slice(0, 7) === monthKey(dateIso) && row.date <= dateIso)
    .sort((a, b) => a.date.localeCompare(b.date));
}

function previousMonthKey(dateIso) {
  const [year, month] = dateIso.split("-").map(Number);
  const previous = new Date(year, month - 2, 1);
  return `${previous.getFullYear()}-${String(previous.getMonth() + 1).padStart(2, "0")}`;
}

function cumulativeSeries(rows, field) {
  let total = 0;
  return rows.map((row) => {
    total += row[field] || 0;
    return { label: row.date.slice(8, 10), value: total };
  });
}

function sumRows(rows, field) {
  return rows.reduce((total, row) => total + (row[field] || 0), 0);
}

function rowsBetweenDates(rows, from, to) {
  return rows
    .filter((row) => row.date && row.date >= from && row.date <= to)
    .sort((a, b) => a.date.localeCompare(b.date));
}

function sumDispatched(rows) {
  return rows.reduce((total, row) => total + (row.utilitarios || 0) + (row.chasis || 0), 0);
}

function averageRows(rows, field) {
  const values = rows.map((row) => row[field]).filter((value) => typeof value === "number");
  if (!values.length) {
    return 0;
  }

  return Math.round(values.reduce((total, value) => total + value, 0) / values.length);
}

function renderLineChart(series, title) {
  const safeSeries = series.length ? series : [{ label: "", value: 0 }];
  const max = Math.max(...safeSeries.map((point) => point.value), 1);
  const width = 420;
  const height = 150;
  const pad = 18;
  const points = safeSeries.map((point, index) => {
    const x = safeSeries.length === 1 ? width / 2 : pad + (index * (width - pad * 2)) / (safeSeries.length - 1);
    const y = height - pad - (point.value / max) * (height - pad * 2);
    return { ...point, x, y };
  });
  const path = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" ");
  const areaPath = `${path} L ${points[points.length - 1].x.toFixed(1)} ${height - pad} L ${points[0].x.toFixed(1)} ${height - pad} Z`;

  return `
    <figure class="line-chart" aria-label="${title}">
      <svg viewBox="0 0 ${width} ${height}" role="img">
        <path class="chart-area" d="${areaPath}"></path>
        <path class="chart-line" d="${path}"></path>
        ${points.map((point) => `<circle class="chart-dot" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="4"></circle>`).join("")}
      </svg>
      <figcaption>
        <span>Acumulado mes</span>
        <strong>${formatNumber(points[points.length - 1].value)}</strong>
      </figcaption>
    </figure>
  `;
}

function render() {
  if (!session) {
    renderLogin();
    resetScroll();
    return;
  }

  if (allowedClients().length === 1) {
    selectedClient = allowedClients()[0];
  }

  if (!selectedClient) {
    renderClientSelector();
    resetScroll();
    return;
  }

  renderDashboard(selectedClient);
  resetScroll();
}

function resetScroll() {
  requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0 }));
}

function renderLogin() {
  app.innerHTML = `
    <section class="login-view">
      <div class="login-visual">
        <img class="login-visual-logo" src="assets/logo-link-transparent.png" alt="Link Soluciones Logisticas">
        <h1>Dashboard Operativo</h1>
      </div>
      <div class="login-panel">
        <form class="login-card" id="loginForm">
          <div class="brand-lockup">
            ${renderPortalLogo("login")}
            <div>
              <strong>Ingreso seguro</strong>
              <span>Portal operativo Link</span>
            </div>
          </div>
          <label class="field">
            <span>Usuario</span>
            <input id="username" name="username" autocomplete="username" required>
          </label>
          <label class="field">
            <span>Clave</span>
            <div class="password-control">
              <input id="password" name="password" type="password" autocomplete="current-password" required>
              <button id="togglePassword" class="password-toggle" type="button" aria-label="Mostrar clave" title="Mostrar clave">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>
          </label>
          <button class="primary-btn" type="submit">Ingresar</button>
          <p class="error" id="loginError"></p>
        </form>
      </div>
    </section>
  `;

  document.querySelector("#loginForm").addEventListener("submit", handleLogin);
  document.querySelector("#togglePassword").addEventListener("click", togglePasswordVisibility);
}

function togglePasswordVisibility() {
  const input = document.querySelector("#password");
  const button = document.querySelector("#togglePassword");
  const shouldShow = input.type === "password";
  input.type = shouldShow ? "text" : "password";
  button.setAttribute("aria-label", shouldShow ? "Ocultar clave" : "Mostrar clave");
  button.setAttribute("title", shouldShow ? "Ocultar clave" : "Mostrar clave");
}

async function handleLogin(event) {
  event.preventDefault();
  const error = document.querySelector("#loginError");
  const submitButton = event.currentTarget.querySelector("button[type='submit']");
  const form = new FormData(event.currentTarget);
  const username = String(form.get("username")).trim().toLowerCase();
  const password = String(form.get("password"));

  error.textContent = "Validando accesos...";
  submitButton.disabled = true;
  await loadUsersFromSheet();
  submitButton.disabled = false;

  const user = users.find((item) => item.username === username && item.password === password);

  if (!user) {
    error.textContent = usersLoadedFromSheet ? "Usuario o clave incorrectos." : "Usuario o clave incorrectos. No se pudo actualizar la planilla de accesos.";
    return;
  }

  loginAs(user);
}

function loginAs(user) {
  session = user;
  selectedClient = null;
  activeSteckModule = "daily";
  activeSyngentaModule = "forklifts";
  render();
}

function logout() {
  session = null;
  selectedClient = null;
  activeSteckModule = "daily";
  activeSyngentaModule = "forklifts";
  render();
}

function renderTopbar(subtitle) {
  const canSwitch = allowedClients().length > 1 && selectedClient;
  return `
    <header class="topbar">
      <div class="topbar-left">
        ${renderPortalLogo("topbar")}
        <div class="topbar-title">
          <strong>${session.name}</strong>
          <span>${subtitle}</span>
        </div>
      </div>
      <div class="topbar-actions">
        ${canSwitch ? `<button class="ghost-btn" type="button" id="switchClient">Cambiar cliente</button>` : ""}
        <button class="icon-btn" type="button" id="logout" aria-label="Cerrar sesion" title="Cerrar sesion">X</button>
      </div>
    </header>
  `;
}

function bindTopbar() {
  document.querySelector("#logout").addEventListener("click", logout);
  const switchButton = document.querySelector("#switchClient");
  if (switchButton) {
    switchButton.addEventListener("click", () => {
      selectedClient = null;
      render();
    });
  }
}

function renderClientSelector() {
  const options = allowedClients();
  app.innerHTML = `
    ${renderTopbar(`${session.role} - ${options.length} clientes habilitados`)}
    <section class="page">
      <div class="section-title">
        <div>
          <h2>Elegir cliente</h2>
          <p class="muted">Tu perfil puede operar estos tableros.</p>
        </div>
      </div>
      <div class="client-grid">
        ${options.map((client) => `
          <button class="client-card" type="button" data-client="${client.id}">
            <div class="client-head">
              ${renderClientLogo(client)}
              <div>
                <h3>${client.name}</h3>
                <span class="muted">${client.sites}</span>
              </div>
            </div>
            <div class="tag-row">
              <span class="tag">${client.active} activos</span>
              <span class="tag">${client.pending} pendientes</span>
              <span class="tag">SLA ${client.sla}</span>
            </div>
          </button>
        `).join("")}
      </div>
    </section>
  `;

  bindTopbar();
  document.querySelectorAll("[data-client]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedClient = clientById(button.dataset.client);
      render();
    });
  });
}

function renderDashboard(client) {
  if (client.id === "steck") {
    renderSteckDashboard(client);
    return;
  }

  if (isSyngentaClient(client)) {
    renderSyngentaDashboard({ ...clients.find((item) => item.id === "syngenta"), ...client, id: "syngenta", name: "Syngenta" });
    return;
  }

  const statusClass = client.pending > 10 ? "warn" : "";
  app.innerHTML = `
    ${renderTopbar(`${session.role} - ${client.name}`)}
    <section class="page">
      <div class="section-title">
        <div class="client-head">
          ${renderClientLogo(client)}
          <div>
            <h2>${client.name}</h2>
            <p class="muted">${client.sites} - tablero operativo</p>
          </div>
        </div>
        <div class="status-row">
          <span class="status-pill ${statusClass}">${client.alerts}</span>
        </div>
      </div>

      <div class="metrics">
        <article class="metric">
          <span>Operaciones activas</span>
          <strong>${client.active}</strong>
        </article>
        <article class="metric">
          <span>Pendientes</span>
          <strong>${client.pending}</strong>
        </article>
        <article class="metric">
          <span>Cumplimiento SLA</span>
          <strong>${client.sla}</strong>
        </article>
      </div>

      <div class="dashboard-grid">
        <section class="panel">
          <h3>Prioridades del dia</h3>
          <ul class="task-list">
            ${client.tasks.map((task, index) => `
              <li>
                <span>${task}</span>
                <span class="tag">${index === 0 ? "Alta" : "Media"}</span>
              </li>
            `).join("")}
          </ul>
        </section>
        <section class="panel">
          <h3>Actividad reciente</h3>
          <ul class="activity-list">
            <li><span>Ingreso validado por ${session.name}</span><time>Ahora</time></li>
            <li><span>Parte operativo actualizado</span><time>09:40</time></li>
            <li><span>Control documental sincronizado</span><time>08:15</time></li>
          </ul>
        </section>
      </div>
    </section>
    <nav class="bottom-nav" aria-label="Navegacion movil">
      <button class="active" type="button">Inicio</button>
      <button type="button">Alertas</button>
      <button type="button">Perfil</button>
    </nav>
  `;

  bindTopbar();
}

function isSyngentaClient(client) {
  return client?.id === "syngenta" || normalizeSearchText(client?.name) === "syngenta";
}

function renderSyngentaDashboard(client) {
  app.innerHTML = `
    ${renderTopbar(`${session.role} - ${client.name}`)}
    <section class="page syngenta-page">
      <div class="section-title">
        <div class="client-head">
          ${renderClientLogo(client)}
          <div>
            <h2>Syngenta</h2>
            <p class="muted">${client.sites} - tablero operativo</p>
          </div>
        </div>
        <div class="status-row">
          <span class="status-pill">${client.alerts}</span>
        </div>
      </div>

      ${renderSyngentaModuleNav()}
      ${renderSyngentaModuleContent()}
    </section>
  `;

  bindTopbar();
  bindSyngentaModuleNav();
  bindForkliftManagement();
}

function renderSyngentaModuleNav() {
  const modules = [
    ["forklifts", "Gestion de Autoelevadores"],
    ["daily", "Indicadores Diarios"],
    ["staff", "Gestion de Personal"],
  ];

  return `
    <nav class="module-nav syngenta-module-nav" aria-label="Modulos Syngenta">
      ${modules.map(([id, label]) => `
        <button class="${activeSyngentaModule === id ? "active" : ""}" type="button" data-syngenta-module="${id}">${label}</button>
      `).join("")}
    </nav>
  `;
}

function bindSyngentaModuleNav() {
  document.querySelectorAll("[data-syngenta-module]").forEach((button) => {
    button.addEventListener("click", () => {
      activeSyngentaModule = button.dataset.syngentaModule;
      render();
    });
  });
}

function renderSyngentaModuleContent() {
  if (activeSyngentaModule === "forklifts") {
    return renderForkliftManagement();
  }

  const content = {
    daily: {
      title: "INDICADORES DIARIOS",
      body: "Modulo preparado para cargar y consultar indicadores diarios de la operacion Syngenta.",
    },
    staff: {
      title: "GESTION DE PERSONAL",
      body: "Modulo preparado para administrar dotacion, asistencia y asignaciones operativas.",
    },
  }[activeSyngentaModule] || {
    title: "MODULO SYNGENTA",
    body: "Modulo en preparacion.",
  };

  return `
    <section class="ops-section">
      <article class="ops-card syngenta-module-card">
        <span class="kpi-label">${content.title}</span>
        <div class="empty-state">
          <strong>Modulo en preparacion</strong>
          <span>${content.body}</span>
        </div>
      </article>
    </section>
  `;
}

function renderForkliftManagement() {
  const data = loadForkliftData();
  const activeForklifts = data.forklifts.filter((forklift) => forklift.status === "active");
  const closedForklifts = data.forklifts.filter((forklift) => forklift.status === "closed");
  const pendingRepairs = data.repairs.filter((repair) => repair.authorizationStatus === "pending");
  const currentMonth = todayIso().slice(0, 7);
  const rentalReport = buildForkliftRentalReport(data.forklifts, currentMonth);
  const repairReport = buildForkliftRepairReport(data.repairs, currentMonth);

  return `
    <section class="ops-section">
      <article class="ops-card syngenta-module-card forklift-shell">
        <div class="search-head">
          <span class="kpi-label">GESTION DE AUTOELEVADORES</span>
          <p class="muted">Control de altas, bajas, check-in, check-out, reparaciones y reportes mensuales del proveedor Hovsep.</p>
        </div>

        <div class="forklift-kpis">
          <div><span>Autoelevadores activos</span><strong>${formatNumber(activeForklifts.length)}</strong></div>
          <div><span>Plantas</span><strong>${formatNumber(SYNGENTA_PLANTS.length)}</strong></div>
          <div><span>Autorizaciones pendientes</span><strong>${formatNumber(pendingRepairs.length)}</strong></div>
          <div><span>Alquiler ${formatDisplayMonth(currentMonth)}</span><strong>$ ${formatNumber(Math.round(rentalReport.total))}</strong></div>
        </div>

        <div class="forklift-layout">
          <section class="forklift-panel">
            <h3>Alta / Check-in</h3>
            <form id="forkliftCheckInForm" class="forklift-form">
              <label class="field">
                <span>Codigo interno</span>
                <input name="code" placeholder="Ej: SYN-AE-001" required>
              </label>
              <label class="field">
                <span>Planta</span>
                <select name="plant" required>${renderPlantOptions()}</select>
              </label>
              <label class="field">
                <span>Responsable Link</span>
                <input name="responsible" value="Matias Cordoba" required>
              </label>
              <label class="field">
                <span>Fecha de alta</span>
                <input name="startDate" type="date" value="${todayIso()}" required>
              </label>
              <label class="field">
                <span>Alquiler mensual estimado</span>
                <input name="monthlyRate" inputmode="decimal" placeholder="Ej: 1200000" required>
              </label>
              <label class="field full">
                <span>Fotos / videos check-in</span>
                <input name="files" type="file" accept="image/*,video/*" multiple>
              </label>
              <label class="field full">
                <span>Comentarios de estado</span>
                <textarea name="comments" rows="3" placeholder="Estado general, golpes, cubiertas, horquillas, bateria, luces..."></textarea>
              </label>
              <button class="primary-btn" type="submit">Registrar check-in</button>
            </form>
          </section>

          <section class="forklift-panel">
            <h3>Reparacion / Autorizacion</h3>
            <form id="forkliftRepairForm" class="forklift-form">
              <label class="field">
                <span>Autoelevador</span>
                <select name="forkliftId" required>${renderForkliftOptions(activeForklifts)}</select>
              </label>
              <label class="field">
                <span>Fecha</span>
                <input name="date" type="date" value="${todayIso()}" required>
              </label>
              <label class="field">
                <span>Causa</span>
                <select name="cause">
                  <option value="mal uso">Mal uso / negligencia</option>
                  <option value="desgaste">Desgaste operativo</option>
                  <option value="proveedor">A cargo proveedor</option>
                </select>
              </label>
              <label class="field">
                <span>Costo estimado</span>
                <input name="estimatedCost" inputmode="decimal" placeholder="Ej: 180000" required>
              </label>
              <label class="field">
                <span>Estado autorizacion</span>
                <select name="authorizationStatus">
                  <option value="pending">Pendiente</option>
                  <option value="authorized">Autorizada</option>
                  <option value="rejected">Rechazada</option>
                </select>
              </label>
              <label class="field">
                <span>Autorizado por</span>
                <input name="authorizedBy" placeholder="Responsable de planta">
              </label>
              <label class="field full">
                <span>Pedido / diagnostico Hovsep</span>
                <textarea name="description" rows="3" required></textarea>
              </label>
              <button class="primary-btn" type="submit">Registrar reparacion</button>
            </form>
          </section>

          <section class="forklift-panel">
            <h3>Baja / Check-out</h3>
            <form id="forkliftCheckOutForm" class="forklift-form">
              <label class="field">
                <span>Autoelevador</span>
                <select name="forkliftId" required>${renderForkliftOptions(activeForklifts)}</select>
              </label>
              <label class="field">
                <span>Fecha de baja</span>
                <input name="endDate" type="date" value="${todayIso()}" required>
              </label>
              <label class="field">
                <span>Responsable Link</span>
                <input name="responsible" required>
              </label>
              <label class="field full">
                <span>Fotos / videos check-out</span>
                <input name="files" type="file" accept="image/*,video/*" multiple>
              </label>
              <label class="field full">
                <span>Comentarios de devolucion</span>
                <textarea name="comments" rows="3" placeholder="Comparacion contra check-in y discrepancias detectadas."></textarea>
              </label>
              <button class="primary-btn" type="submit">Registrar check-out</button>
            </form>
          </section>
        </div>

        ${renderForkliftInventory(activeForklifts, closedForklifts, data.repairs)}
        ${renderForkliftReports(currentMonth, rentalReport, repairReport)}
      </article>
    </section>
  `;
}

function renderPlantOptions(selected = "") {
  return SYNGENTA_PLANTS.map((plant) => `<option value="${plant.id}" ${plant.id === selected ? "selected" : ""}>${plant.name} - ${plant.manager}</option>`).join("");
}

function renderForkliftOptions(forklifts) {
  if (!forklifts.length) {
    return `<option value="">Sin autoelevadores activos</option>`;
  }

  return forklifts.map((forklift) => `<option value="${forklift.id}">${forklift.code} - ${getPlantName(forklift.plant)}</option>`).join("");
}

function renderForkliftInventory(activeForklifts, closedForklifts, repairs) {
  const all = [...activeForklifts, ...closedForklifts];
  return `
    <section class="forklift-panel wide">
      <div class="forklift-panel-head">
        <h3>Inventario e historial</h3>
        <span>${formatNumber(all.length)} equipos registrados</span>
      </div>
      ${all.length ? `
        <div class="forklift-list">
          ${all.map((forklift) => {
            const forkliftRepairs = repairs.filter((repair) => repair.forkliftId === forklift.id);
            return `
              <details class="forklift-row" ${forklift.status === "active" ? "open" : ""}>
                <summary>
                  <div><strong>${escapeHtml(forklift.code)}</strong><span>${getPlantName(forklift.plant)} - Hovsep</span></div>
                  <div><span>Alta</span><strong>${formatDisplayDate(forklift.startDate)}</strong></div>
                  <div><span>Estado</span><strong>${forklift.status === "active" ? "Activo" : "Baja"}</strong></div>
                  <div><span>Alquiler mensual</span><strong>$ ${formatNumber(forklift.monthlyRate)}</strong></div>
                </summary>
                <div class="forklift-detail-grid">
                  <div><span>Check-in responsable</span><strong>${escapeHtml(forklift.checkIn.responsible || "-")}</strong></div>
                  <div><span>Archivos check-in</span><strong>${formatFileList(forklift.checkIn.files)}</strong></div>
                  <div><span>Comentarios check-in</span><strong>${escapeHtml(forklift.checkIn.comments || "-")}</strong></div>
                  <div><span>Check-out</span><strong>${forklift.checkOut ? formatDisplayDate(forklift.checkOut.date) : "-"}</strong></div>
                  <div><span>Archivos check-out</span><strong>${forklift.checkOut ? formatFileList(forklift.checkOut.files) : "-"}</strong></div>
                  <div><span>Comentarios check-out</span><strong>${escapeHtml(forklift.checkOut?.comments || "-")}</strong></div>
                </div>
                <div class="repair-history">
                  <strong>Historial de reparaciones</strong>
                  ${forkliftRepairs.length ? forkliftRepairs.map((repair) => `
                    <div class="repair-line">
                      <span>${formatDisplayDate(repair.date)} - ${escapeHtml(repair.cause)} - ${escapeHtml(repair.authorizationStatus)}</span>
                      <strong>$ ${formatNumber(repair.estimatedCost)} - ${escapeHtml(repair.authorizedBy || "Sin autorizador")}</strong>
                    </div>
                  `).join("") : `<span class="muted">Sin reparaciones registradas.</span>`}
                </div>
              </details>
            `;
          }).join("")}
        </div>
      ` : `
        <div class="empty-state">
          <strong>Sin autoelevadores cargados</strong>
          <span>Registra el primer check-in para comenzar la trazabilidad.</span>
        </div>
      `}
    </section>
  `;
}

function renderForkliftReports(month, rentalReport, repairReport) {
  return `
    <section class="forklift-panel wide">
      <div class="forklift-panel-head">
        <h3>Control mensual Hovsep</h3>
        <span>${formatDisplayMonth(month)}</span>
      </div>
      <form class="forklift-report-form" id="forkliftReportForm">
        <label class="field">
          <span>Mes de cierre</span>
          <input name="month" type="month" value="${month}">
        </label>
        <button class="secondary-btn" type="button" id="downloadRentalReport">Descargar alquileres</button>
        <button class="secondary-btn" type="button" id="downloadRepairReport">Descargar reparaciones</button>
      </form>
      <div class="forklift-report-grid">
        <div>
          <span>Alquileres estimados</span>
          <strong>$ ${formatNumber(Math.round(rentalReport.total))}</strong>
        </div>
        <div>
          <span>Reparaciones estimadas</span>
          <strong>$ ${formatNumber(Math.round(repairReport.total))}</strong>
        </div>
      </div>
      <div class="district-list">
        ${rentalReport.byPlant.map((row) => `
          <div class="district-row">
            <span>${row.plant}</span>
            <strong>$ ${formatNumber(Math.round(row.amount))}</strong>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function bindForkliftManagement() {
  const checkInForm = document.querySelector("#forkliftCheckInForm");
  if (!checkInForm) {
    return;
  }

  checkInForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(checkInForm);
    const data = loadForkliftData();
    data.forklifts.push({
      id: createUserId(),
      code: String(form.get("code") || "").trim(),
      plant: form.get("plant"),
      provider: "Hovsep",
      monthlyRate: parseSheetNumber(form.get("monthlyRate")),
      startDate: form.get("startDate"),
      endDate: "",
      status: "active",
      checkIn: {
        date: form.get("startDate"),
        responsible: form.get("responsible"),
        comments: form.get("comments"),
        files: getFileNames(checkInForm.elements.files.files),
      },
      checkOut: null,
    });
    saveForkliftData(data);
    render();
  });

  document.querySelector("#forkliftRepairForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = loadForkliftData();
    const forklift = data.forklifts.find((item) => item.id === form.get("forkliftId"));
    if (!forklift) {
      return;
    }

    data.repairs.push({
      id: createUserId(),
      forkliftId: forklift.id,
      forkliftCode: forklift.code,
      plant: forklift.plant,
      provider: "Hovsep",
      date: form.get("date"),
      cause: form.get("cause"),
      description: form.get("description"),
      estimatedCost: parseSheetNumber(form.get("estimatedCost")),
      authorizationStatus: form.get("authorizationStatus"),
      authorizedBy: form.get("authorizedBy"),
      authorizedDate: form.get("authorizationStatus") === "authorized" ? todayIso() : "",
    });
    saveForkliftData(data);
    render();
  });

  document.querySelector("#forkliftCheckOutForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const data = loadForkliftData();
    const forklift = data.forklifts.find((item) => item.id === form.get("forkliftId"));
    if (!forklift) {
      return;
    }

    forklift.endDate = form.get("endDate");
    forklift.status = "closed";
    forklift.checkOut = {
      date: form.get("endDate"),
      responsible: form.get("responsible"),
      comments: form.get("comments"),
      files: getFileNames(formElement.elements.files.files),
    };
    saveForkliftData(data);
    render();
  });

  document.querySelector("#downloadRentalReport").addEventListener("click", () => {
    const month = document.querySelector("#forkliftReportForm [name='month']").value || todayIso().slice(0, 7);
    downloadForkliftRentalReport(month);
  });

  document.querySelector("#downloadRepairReport").addEventListener("click", () => {
    const month = document.querySelector("#forkliftReportForm [name='month']").value || todayIso().slice(0, 7);
    downloadForkliftRepairReport(month);
  });
}

function loadForkliftData() {
  try {
    const saved = JSON.parse(localStorage.getItem(SYNGENTA_FORKLIFT_STORAGE_KEY) || "{}");
    return {
      forklifts: Array.isArray(saved.forklifts) ? saved.forklifts : [],
      repairs: Array.isArray(saved.repairs) ? saved.repairs : [],
    };
  } catch (error) {
    return { forklifts: [], repairs: [] };
  }
}

function saveForkliftData(data) {
  localStorage.setItem(SYNGENTA_FORKLIFT_STORAGE_KEY, JSON.stringify(data));
}

function getPlantName(plantId) {
  return SYNGENTA_PLANTS.find((plant) => plant.id === plantId)?.name || plantId || "-";
}

function getFileNames(fileList) {
  return Array.from(fileList || []).map((file) => file.name);
}

function formatFileList(files = []) {
  if (!files.length) {
    return "-";
  }

  return `${formatNumber(files.length)} archivo${files.length === 1 ? "" : "s"}: ${files.join(", ")}`;
}

function buildForkliftRentalReport(forklifts, month) {
  const byPlant = SYNGENTA_PLANTS.map((plant) => ({ plant: plant.name, amount: 0, rows: [] }));
  const monthStart = new Date(`${month}-01T00:00:00`);
  const monthEnd = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0);
  const daysInMonth = monthEnd.getDate();

  forklifts.forEach((forklift) => {
    const activeStart = new Date(`${forklift.startDate}T00:00:00`);
    const activeEnd = forklift.endDate ? new Date(`${forklift.endDate}T00:00:00`) : monthEnd;
    const from = activeStart > monthStart ? activeStart : monthStart;
    const to = activeEnd < monthEnd ? activeEnd : monthEnd;
    if (to < monthStart || from > monthEnd || to < from) {
      return;
    }

    const billableDays = Math.floor((to - from) / 86400000) + 1;
    const amount = (Number(forklift.monthlyRate) || 0) * (billableDays / daysInMonth);
    const plantRow = byPlant.find((row) => row.plant === getPlantName(forklift.plant));
    if (plantRow) {
      plantRow.amount += amount;
      plantRow.rows.push({ forklift, billableDays, amount });
    }
  });

  return {
    total: byPlant.reduce((total, row) => total + row.amount, 0),
    byPlant,
  };
}

function buildForkliftRepairReport(repairs, month) {
  const rows = repairs.filter((repair) => repair.date?.slice(0, 7) === month);
  return {
    total: rows.reduce((total, repair) => total + (Number(repair.estimatedCost) || 0), 0),
    rows,
  };
}

function downloadForkliftRentalReport(month) {
  const data = loadForkliftData();
  const report = buildForkliftRentalReport(data.forklifts, month);
  const rows = [["Planta", "Codigo", "Proveedor", "Desde", "Hasta", "Dias facturables", "Alquiler mensual", "Importe estimado"]];
  report.byPlant.forEach((plant) => {
    plant.rows.forEach((row) => {
      rows.push([
        plant.plant,
        row.forklift.code,
        "Hovsep",
        row.forklift.startDate,
        row.forklift.endDate || "Activo",
        row.billableDays,
        row.forklift.monthlyRate,
        Math.round(row.amount),
      ]);
    });
  });
  downloadCsv(`syngenta-alquileres-${month}.csv`, rows);
}

function downloadForkliftRepairReport(month) {
  const data = loadForkliftData();
  const report = buildForkliftRepairReport(data.repairs, month);
  const rows = [["Planta", "Codigo", "Fecha", "Causa", "Descripcion", "Costo estimado", "Estado autorizacion", "Autorizado por"]];
  report.rows.forEach((repair) => {
    rows.push([
      getPlantName(repair.plant),
      repair.forkliftCode,
      repair.date,
      repair.cause,
      repair.description,
      repair.estimatedCost,
      repair.authorizationStatus,
      repair.authorizedBy || "",
    ]);
  });
  downloadCsv(`syngenta-reparaciones-${month}.csv`, rows);
}

function downloadCsv(filename, rows) {
  const csv = rows.map((row) => row.map((cell) => `"${String(cell ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function formatDisplayMonth(month) {
  if (!month) {
    return "-";
  }

  const [year, monthNumber] = month.split("-");
  return `${monthNumber}/${year}`;
}

function renderSteckDashboard(client) {
  const dateIso = todayIso();
  let rangeFrom = dailyDateFrom || dateIso;
  let rangeTo = dailyDateTo || dailyDateFrom || dateIso;
  if (rangeFrom > rangeTo) {
    [rangeFrom, rangeTo] = [rangeTo, rangeFrom];
  }
  const isRangeView = rangeFrom !== rangeTo;
  const referenceDate = rangeTo;
  const dayRow = steckIndicators.find((row) => row.date === referenceDate) || {};
  const rangeRows = rowsBetweenDates(steckIndicators, rangeFrom, rangeTo);
  const monthRows = currentMonthRows(steckIndicators, referenceDate);
  const chartRows = isRangeView ? rangeRows : monthRows;
  const kpiRow = isRangeView ? {
    unitsToPick: sumRows(rangeRows, "unitsToPick"),
    utilitarios: sumRows(rangeRows, "utilitarios"),
    chasis: sumRows(rangeRows, "chasis"),
    containersChina: sumRows(rangeRows, "containersChina"),
    containersBrazil: sumRows(rangeRows, "containersBrazil"),
    palletsIn: sumRows(rangeRows, "palletsIn"),
  } : dayRow;
  const pickSeries = cumulativeSeries(chartRows, "unitsToPick");
  const dispatchRows = chartRows.map((row) => ({
    ...row,
    dispatched: (row.utilitarios || 0) + (row.chasis || 0),
  }));
  const dispatchSeries = cumulativeSeries(dispatchRows, "dispatched");
  const totalRows = isRangeView ? rangeRows : monthRows;
  const totalContainers = totalRows.reduce((total, row) => total + (row.containersChina || 0) + (row.containersBrazil || 0), 0);
  const todayChina = kpiRow.containersChina || 0;
  const todayBrazil = kpiRow.containersBrazil || 0;
  const todayPallets = kpiRow.palletsIn || 0;
  const totalPallets = sumRows(totalRows, "palletsIn");
  const previousRows = steckIndicators.filter((row) => row.date.slice(0, 7) === previousMonthKey(referenceDate));
  const previousMonthPositions = averageRows(previousRows, "previousMonthPositions");
  const periodLabel = isRangeView ? "EN EL RANGO" : referenceDate === dateIso ? "HOY" : `DEL ${formatDisplayDate(referenceDate)}`;
  const detailPeriodLabel = isRangeView ? "en el rango" : referenceDate === dateIso ? "hoy" : `del ${formatDisplayDate(referenceDate)}`;
  const accumulatedLabel = isRangeView ? "acumulados en el rango" : "acumulados en el mes";
  const chartPeriodLabel = isRangeView ? "del rango" : "mensual";

  app.innerHTML = `
    ${renderTopbar(`${session.role} - ${client.name}`)}
    <section class="page steck-page">
      <div class="section-title">
        <div class="client-head">
            ${renderClientLogo(client)}
            <div>
            <p class="muted">${client.sites} - ${isRangeView ? `operacion del ${formatDisplayDate(rangeFrom)} al ${formatDisplayDate(rangeTo)}` : `operacion del dia ${formatDisplayDate(referenceDate)}`}</p>
            </div>
          </div>
        <div class="status-row">
          <span class="status-pill">Datos desde Google Sheets</span>
        </div>
      </div>

      ${renderModuleNav()}

      ${activeSteckModule === "remitos" ? renderRemitoSearch() : activeSteckModule === "heatmap" ? renderHeatmap() : activeSteckModule === "declaredValue" ? renderDeclaredValueByRoute() : activeSteckModule === "clientMaster" ? renderClientMasterSearch() : `
      <section class="ops-section">
        <article class="ops-card daily-filter-card">
          <div class="search-head">
            <span class="kpi-label">INDICADORES DIARIOS</span>
            <p class="muted">Por defecto muestra el dia corriente. Tambien podes consultar un rango.</p>
          </div>
          <form class="heatmap-filters">
            <label class="field">
              <span>Desde</span>
              <input id="dailyDateFrom" type="date" value="${rangeFrom}">
            </label>
            <label class="field">
              <span>Hasta</span>
              <input id="dailyDateTo" type="date" value="${rangeTo}">
            </label>
            <button class="primary-btn" id="applyDailyIndicators" type="button">Aplicar</button>
            <button class="ghost-btn" id="resetDailyIndicators" type="button">Hoy</button>
          </form>
        </article>
      </section>

      <section class="ops-section">
        <article class="ops-card hero-kpi">
          <span class="kpi-label">UNIDADES A PICKEAR ${periodLabel}</span>
          <strong>${formatNumber(kpiRow.unitsToPick)}</strong>
          ${renderLineChart(pickSeries, `Acumulado ${chartPeriodLabel} de unidades a pickear`)}
        </article>
      </section>

      <section class="ops-section">
        <article class="ops-card">
          <div class="ops-card-head">
            <span class="kpi-label">UNIDADES DESPACHADAS ${periodLabel}</span>
            <strong>${formatNumber(sumDispatched([kpiRow]))}</strong>
          </div>
          <div class="vehicle-row">
            <div class="vehicle-item">
              <img class="vehicle-photo" src="assets/utilitario-link.png" alt="Utilitario Link">
              <div>
                <strong>${formatNumber(kpiRow.utilitarios)}</strong>
                <span>Utilitarios</span>
              </div>
            </div>
            <div class="vehicle-item">
              <img class="vehicle-photo" src="assets/chasis-link.png" alt="Chasis Link">
              <div>
                <strong>${formatNumber(kpiRow.chasis)}</strong>
                <span>Chasis</span>
              </div>
            </div>
          </div>
          ${renderLineChart(dispatchSeries, `Acumulado ${chartPeriodLabel} de unidades despachadas`)}
        </article>
      </section>

      <section class="ops-section">
        <article class="ops-card">
          <div class="ops-card-head">
            <span class="kpi-label">IMPORTACIONES</span>
          </div>
          <div class="imports-total">
            <strong>${formatNumber(totalContainers)}</strong>
            <span>Contenedores ${accumulatedLabel}</span>
          </div>
          <div class="import-grid">
            <div class="import-item">
              <img class="container-photo" src="assets/container-china-steck.png" alt="Contenedor Steck China">
              <div>
                <strong>${formatNumber(todayChina)}</strong>
                <span>Contenedores de China ${detailPeriodLabel}</span>
              </div>
            </div>
            <div class="import-item">
              <img class="container-photo" src="assets/container-brasil-steck.png" alt="Contenedor Steck Brasil">
              <div>
                <strong>${formatNumber(todayBrazil)}</strong>
                <span>Contenedores de Brasil ${detailPeriodLabel}</span>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section class="ops-section">
        <article class="ops-card pallets-card">
          <div>
            <span class="kpi-label">PALLETS IN</span>
          </div>
          <div class="pallets-content">
            <div class="pallets-today">
              <img class="pallets-photo" src="assets/operario-pallet-in.png" alt="Operario Link ingresando pallet Steck">
              <div>
                <strong>${formatNumber(todayPallets)}</strong>
                <span>Pallets ${detailPeriodLabel}</span>
              </div>
            </div>
            <div class="pallets-metrics">
              <div class="pallets-month">
                <img class="pallets-photo" src="assets/acumulado-pallets-in.png" alt="Pallets Steck acumulados">
                <div>
                  <strong>${formatNumber(totalPallets)}</strong>
                  <span>Pallets ${accumulatedLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section class="ops-section">
        <article class="ops-card positions-card">
          <span class="kpi-label">TOTAL POSICIONES MES ANTERIOR</span>
          <div class="positions-content">
            <img class="positions-photo" src="assets/posiciones-mes-anterior.png" alt="Posiciones Steck mes anterior">
            <div>
              <strong>${formatNumber(previousMonthPositions)}</strong>
              <span>Promedio de posiciones sobre días informados del mes anterior</span>
            </div>
          </div>
        </article>
      </section>
      `}
    </section>
    <nav class="bottom-nav" aria-label="Navegacion movil">
      <button class="active" type="button">Inicio</button>
      <button type="button">Alertas</button>
      <button type="button">Perfil</button>
    </nav>
  `;

  bindTopbar();
  bindModuleNav();
  bindDailyIndicators();
  bindRemitoSearch();
  bindAmbaHeatmap();
  bindDeclaredValueByRoute();
  bindClientMasterSearch();
}

function renderModuleNav() {
  const modules = [
    ["daily", "Indicadores Diarios"],
    ["remitos", "Buscador de Remitos"],
    ["heatmap", "Mapa de Calor"],
    ["declaredValue", "Buscador de HR"],
    ["clientMaster", "Maestro de Clientes"],
  ];

  return `
    <nav class="module-nav" aria-label="Modulos Steck">
      ${modules.map(([id, label]) => `
        <button class="${activeSteckModule === id ? "active" : ""}" type="button" data-module="${id}">${label}</button>
      `).join("")}
    </nav>
  `;
}

function bindModuleNav() {
  document.querySelectorAll("[data-module]").forEach((button) => {
    button.addEventListener("click", () => {
      activeSteckModule = button.dataset.module;
      render();
    });
  });
}

function bindDailyIndicators() {
  const applyButton = document.querySelector("#applyDailyIndicators");
  if (!applyButton) {
    return;
  }

  applyButton.addEventListener("click", () => {
    dailyDateFrom = document.querySelector("#dailyDateFrom").value || todayIso();
    dailyDateTo = document.querySelector("#dailyDateTo").value || dailyDateFrom;
    render();
  });

  document.querySelector("#resetDailyIndicators").addEventListener("click", () => {
    dailyDateFrom = "";
    dailyDateTo = "";
    render();
  });
}

function renderRemitoSearch() {
  return `
    <section class="ops-section">
      <article class="ops-card search-card">
        <div class="search-head">
          <span class="kpi-label">BUSCADOR DE REMITOS</span>
          <p class="muted">Buscar por numero de remito o por dia de despacho.</p>
        </div>
        <form class="search-form">
          <label class="field">
            <span>Numero de remito</span>
            <input id="remitoQuery" type="search" inputmode="numeric" placeholder="Ej: 1000025807">
          </label>
          <label class="field">
            <span>Dia de despacho</span>
            <input id="dispatchDateQuery" type="date">
          </label>
          <button class="primary-btn" id="searchRemitos" type="button">Buscar</button>
        </form>
        <div class="empty-state" id="searchResults">
          <strong>Sin busqueda activa</strong>
          <span>Ingresa un remito o una fecha para consultar la informacion de despacho.</span>
        </div>
      </article>
    </section>
  `;
}

function renderHeatmap() {
  return `
    <section class="ops-section">
      <article class="ops-card heatmap-card">
        <div class="search-head">
          <span class="kpi-label">MAPA DE CALOR</span>
          <p class="muted">AMBA agrupa por partido/localidad de entrega. Pais agrupa por provincia del cliente final.</p>
        </div>
        <form class="heatmap-filters">
          <label class="field">
            <span>Zona</span>
            <select id="heatmapScope">
              <option value="amba">AMBA</option>
              <option value="pais">Pais</option>
            </select>
          </label>
          <label class="field">
            <span>Medicion</span>
            <select id="heatmapMetric">
              <option value="remitos">Por remito</option>
              <option value="boca">Por boca de entrega</option>
              <option value="units">Cantidad de unidades</option>
      <option value="value">Valor declarado USD</option>
            </select>
          </label>
          <label class="field">
            <span>Desde</span>
            <input id="ambaDateFrom" type="date">
          </label>
          <label class="field">
            <span>Hasta</span>
            <input id="ambaDateTo" type="date">
          </label>
          <button class="primary-btn" id="filterAmbaHeatmap" type="button">Aplicar</button>
        </form>
        <div class="empty-state" id="ambaHeatmap">
          <strong>Cargando mapa...</strong>
          <span>Consultando Hojas de Ruta.</span>
        </div>
      </article>
    </section>
  `;
}

function renderClientMasterSearch() {
  return `
    <section class="ops-section">
      <article class="ops-card search-card">
        <div class="search-head">
          <span class="kpi-label">MAESTRO DE CLIENTES</span>
          <p class="muted">Buscar clientes por nombre parcial o codigo. Datos desde la solapa Ultimo maestro de clientes.</p>
        </div>
        <form class="client-master-form">
          <label class="field">
            <span>Nombre del cliente</span>
            <input id="clientNameQuery" type="search" placeholder="Ej: electric">
          </label>
          <label class="field">
            <span>Codigo de cliente</span>
            <input id="clientCodeQuery" type="search" inputmode="numeric" placeholder="Ej: 25807">
          </label>
          <button class="primary-btn" id="searchClientMaster" type="button">Buscar</button>
        </form>
        <div class="empty-state" id="clientMasterResults">
          <strong>Sin busqueda activa</strong>
          <span>Ingresa un nombre o codigo para consultar el maestro.</span>
        </div>
      </article>
    </section>
  `;
}

function renderComingSoon(title) {
  return `
    <section class="ops-section">
      <article class="ops-card">
        <span class="kpi-label">${title}</span>
        <div class="empty-state">
          <strong>Modulo en preparacion</strong>
          <span>Esta pantalla queda lista para sumar el proximo desarrollo.</span>
        </div>
      </article>
    </section>
  `;
}

function renderDeclaredValueByRoute() {
  return `
    <section class="ops-section">
      <article class="ops-card search-card">
        <div class="search-head">
          <span class="kpi-label">BUSCADOR DE HR</span>
          <p class="muted">Buscar hojas de ruta despachadas por rango de fechas.</p>
        </div>
        <form class="declared-form">
          <label class="field">
            <span>Desde</span>
            <input id="declaredDateFrom" type="date">
          </label>
          <label class="field">
            <span>Hasta</span>
            <input id="declaredDateTo" type="date">
          </label>
          <button class="primary-btn" id="searchDeclaredRoutes" type="button">Buscar</button>
        </form>
        <div class="empty-state" id="declaredRouteResults">
          <strong>Sin busqueda activa</strong>
          <span>Elegí un rango de fechas para ver el valor declarado por hoja de ruta.</span>
        </div>
      </article>
    </section>
  `;
}

function bindDeclaredValueByRoute() {
  const searchButton = document.querySelector("#searchDeclaredRoutes");
  if (!searchButton) {
    return;
  }

  searchButton.addEventListener("click", async () => {
    const from = document.querySelector("#declaredDateFrom").value;
    const to = document.querySelector("#declaredDateTo").value;
    const container = document.querySelector("#declaredRouteResults");

    if (!from && !to) {
      container.className = "empty-state";
      container.innerHTML = `
        <strong>Sin busqueda activa</strong>
        <span>Elegí un rango de fechas para ver el valor declarado por hoja de ruta.</span>
      `;
      return;
    }

    container.className = "empty-state";
    container.innerHTML = `<strong>Buscando...</strong><span>Calculando valor declarado por HR.</span>`;

    const rows = await loadRouteRows();
    const results = groupDeclaredValueByRoute(rows, from, to);
    renderDeclaredRouteResults(results, container, from, to);
  });
}

function groupDeclaredValueByRoute(rows, from = "", to = "") {
  const grouped = new Map();

  rows
    .filter((row) => row.dispatchDate && (!from || row.dispatchDate >= from) && (!to || row.dispatchDate <= to))
    .forEach((row) => {
      const route = row.route || "Sin HR";
      const current = grouped.get(route) || {
        route,
        dispatchDate: row.dispatchDate,
        domain: row.domain || "-",
        driver: row.driver || "-",
        remitos: 0,
        declaredValue: 0,
        rows: [],
      };

      current.remitos += 1;
      current.declaredValue += Number(row.declaredValue) || 0;
      current.rows.push(row);
      grouped.set(route, current);
    });

  return [...grouped.values()].sort((a, b) => b.declaredValue - a.declaredValue || a.route.localeCompare(b.route));
}

function renderDeclaredRouteResults(results, container, from = "", to = "") {
  if (!results.length) {
    container.className = "empty-state";
    container.innerHTML = `
      <strong>Sin resultados</strong>
      <span>No encontramos hojas de ruta despachadas para ese rango.</span>
    `;
    return;
  }

  const totals = results.reduce((acc, row) => {
    acc.remitos += row.remitos;
    acc.declaredValue += row.declaredValue;
    return acc;
  }, { remitos: 0, declaredValue: 0 });
  const range = `${from ? formatDisplayDate(from) : "inicio"} - ${to ? formatDisplayDate(to) : "hoy"}`;

  container.className = "declared-results";
  container.innerHTML = `
    <div class="declared-summary">
      <div>
        <span>Rango</span>
        <strong>${range}</strong>
      </div>
      <div>
        <span>Valor declarado USD</span>
        <strong>USD ${formatNumber(Math.round(totals.declaredValue))}</strong>
      </div>
      <div>
        <span>Remitos</span>
        <strong>${formatNumber(totals.remitos)}</strong>
      </div>
    </div>
    <div class="route-list">
      ${results.map((row) => `
        <details class="route-row">
          <summary>
            <div>
              <strong>${row.route}</strong>
              <span>${formatDisplayDate(row.dispatchDate)} - Dominio ${row.domain}</span>
            </div>
            <div>
              <span>Valor declarado USD</span>
              <strong>USD ${formatNumber(Math.round(row.declaredValue))}</strong>
            </div>
            <div>
              <span>Remitos</span>
              <strong>${formatNumber(row.remitos)}</strong>
            </div>
          </summary>
          <div class="route-detail-list">
            ${row.rows.map((detail) => `
              <article class="route-detail">
                <div><span>REMITOS</span><strong>${detail.remito || "-"}</strong></div>
                <div><span>CANT. BULTOS</span><strong>${detail.packages || "0"}</strong></div>
                <div><span>CODIGO</span><strong>${detail.code || "-"}</strong></div>
                <div><span>RAZON SOCIAL</span><strong>${detail.customer || "-"}</strong></div>
                <div><span>DIRECCION DE ENTREGA</span><strong>${detail.address || "-"}</strong></div>
                <div><span>PARTIDO DE ENTREGA</span><strong>${detail.district || "-"}</strong></div>
                <div><span>STATUS</span>${renderStatusBadge(detail.status)}</div>
                <div><span>CHOFER</span><strong>${detail.driver || "-"}</strong></div>
                <div><span>DOMINIO</span><strong>${detail.domain || "-"}</strong></div>
                <div><span>VALOR DECLARADO USD</span><strong>USD ${formatNumber(Math.round(Number(detail.declaredValue) || 0))}</strong></div>
                <div><span>UBICACION C/PROVINCIA</span><strong>${detail.location || detail.province || "-"}</strong></div>
              </article>
            `).join("")}
          </div>
        </details>
      `).join("")}
    </div>
  `;
}

function bindClientMasterSearch() {
  const searchButton = document.querySelector("#searchClientMaster");
  if (!searchButton) {
    return;
  }

  searchButton.addEventListener("click", runClientMasterSearch);
  document.querySelector("#clientNameQuery").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      runClientMasterSearch();
    }
  });
  document.querySelector("#clientCodeQuery").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      runClientMasterSearch();
    }
  });
}

async function runClientMasterSearch() {
  const nameQuery = document.querySelector("#clientNameQuery").value.trim();
  const codeQuery = document.querySelector("#clientCodeQuery").value.trim();
  const container = document.querySelector("#clientMasterResults");

  if (!nameQuery && !codeQuery) {
    container.className = "empty-state";
    container.innerHTML = `
      <strong>Sin busqueda activa</strong>
      <span>Ingresa un nombre o codigo para consultar el maestro.</span>
    `;
    return;
  }

  container.className = "empty-state";
  container.innerHTML = `<strong>Buscando...</strong><span>Consultando Ultimo maestro de clientes.</span>`;

  try {
    const rows = await loadClientMasterRows();
    const results = searchClientMasterRows(rows, { nameQuery, codeQuery });
    renderClientMasterResults(results, container);
  } catch (error) {
    container.className = "empty-state";
    container.innerHTML = `
      <strong>No se pudo cargar el maestro</strong>
      <span>Revisa que la solapa Ultimo maestro de clientes este disponible.</span>
    `;
  }
}

function searchClientMasterRows(rows, { nameQuery = "", codeQuery = "" }) {
  const normalizedName = normalizeSearchText(nameQuery);
  const normalizedCode = normalizeSearchText(codeQuery);

  return rows
    .filter((row) => {
      const matchesName = !normalizedName || normalizeSearchText(row.name).includes(normalizedName);
      const matchesCode = !normalizedCode || normalizeSearchText(row.code).includes(normalizedCode);
      return matchesName && matchesCode;
    })
    .slice(0, 80);
}

function renderClientMasterResults(results, container) {
  if (!results.length) {
    container.className = "empty-state";
    container.innerHTML = `
      <strong>Sin resultados</strong>
      <span>No encontramos clientes para los filtros ingresados.</span>
    `;
    return;
  }

  container.className = "client-master-results";
  container.innerHTML = `
    <div class="results-summary">
      <strong>${formatNumber(results.length)} resultado${results.length === 1 ? "" : "s"}</strong>
      <span>Mostrando hasta 80 coincidencias.</span>
    </div>
    <div class="client-master-list">
      ${results.map((row) => `
        <article class="client-master-card">
          <div class="client-master-head">
            <strong>${escapeHtml(row.name || "-")}</strong>
            <strong>Codigo Cliente ${escapeHtml(row.code || "-")}</strong>
            <span class="status-pill">${escapeHtml(row.expressZone || "Sin zona")}</span>
          </div>
          <div class="client-master-bands">
            <dl>
              <div><dt>Direccion cliente</dt><dd>${escapeHtml(row.address || "-")}</dd></div>
              <div><dt>Municipio / partido</dt><dd>${escapeHtml(row.ambaLabel || row.municipality || "-")}</dd></div>
              <div><dt>Provincia cliente final</dt><dd>${escapeHtml(row.countryLabel || row.provinceName || row.province || "-")}</dd></div>
            </dl>
            <dl>
              <div><dt>Direccion de entrega</dt><dd>${escapeHtml(row.deliveryAddress || "-")}</dd></div>
              <div><dt>Localidad de entrega</dt><dd>${escapeHtml(row.deliveryCity || "-")}</dd></div>
              <div><dt>Transporte</dt><dd>${escapeHtml(row.transportLabel || "-")}</dd></div>
            </dl>
            <dl>
              <div><dt>Mapa AMBA</dt><dd>${escapeHtml(row.ambaLabel || "-")}</dd></div>
              <div><dt>Mapa Pais</dt><dd>${escapeHtml(row.countryLabel || "-")}</dd></div>
              <div><dt>Observaciones</dt><dd>${escapeHtml(row.observations || "-")}</dd></div>
            </dl>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderStatusBadge(status) {
  const value = status || "-";
  const isDelivered = value.toUpperCase() === "ENTREGADO";
  return `<strong class="status-badge ${isDelivered ? "delivered" : ""}">${value}</strong>`;
}

function bindAmbaHeatmap() {
  const container = document.querySelector("#ambaHeatmap");
  if (!container) {
    return;
  }

  const renderFiltered = async () => {
    const rows = await loadRouteRows();
    const from = document.querySelector("#ambaDateFrom").value;
    const to = document.querySelector("#ambaDateTo").value;
    const scope = document.querySelector("#heatmapScope").value;
    const metric = document.querySelector("#heatmapMetric").value;
    const counts = countHeatmap(rows, { from, to, scope, metric });
    renderHeatmapResults(counts, container, { from, to, scope, metric });
  };

  renderFiltered().catch(() => {
    container.className = "empty-state";
    container.innerHTML = `
      <strong>No se pudo cargar el mapa</strong>
      <span>Revisa que el archivo de Hojas de Ruta este disponible.</span>
    `;
  });

  document.querySelector("#filterAmbaHeatmap").addEventListener("click", () => {
    container.className = "empty-state";
    container.innerHTML = `<strong>Actualizando...</strong><span>Aplicando rango de fechas.</span>`;
    renderFiltered();
  });
}

function countHeatmap(rows, options) {
  const { from = "", to = "", scope = "amba", metric = "remitos" } = options;
  const counts = new Map();
  const bocaKeys = new Set();

  rows
    .filter((row) => row.dispatchDate && (!from || row.dispatchDate >= from) && (!to || row.dispatchDate <= to) && (!row.status || row.status.toUpperCase().includes("ENTREGADO")))
    .forEach((row) => {
      const group = scope === "pais" ? getProvinceLabel(row) : getAmbaPartyLabel(row.district || row.address || "Sin partido");
      let value = 1;

      if (metric === "boca") {
        const bocaKey = `${row.dispatchDate}|${group}|${normalizeDistrictName(row.address || row.customer || row.remito)}`;
        if (bocaKeys.has(bocaKey)) {
          return;
        }
        bocaKeys.add(bocaKey);
      }

      if (metric === "units") {
        value = Number(row.quantity) || 0;
      }

      if (metric === "value") {
        value = Number(row.declaredValue) || 0;
      }

      counts.set(group, (counts.get(group) || 0) + value);
    });

  return [...counts.entries()]
    .map(([district, count]) => ({ district, count }))
    .sort((a, b) => b.count - a.count || a.district.localeCompare(b.district));
}

function normalizeDistrictName(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getAmbaPartyLabel(value) {
  const normalized = normalizeDistrictName(value);
  const key = normalizeSearchText(normalized);
  const enabledParties = new Set([
    "ciudad autonoma de buenos aires",
    "almirante brown",
    "avellaneda",
    "berazategui",
    "esteban echeverria",
    "ezeiza",
    "florencio varela",
    "general san martin",
    "hurlingham",
    "ituzaingo",
    "jose c paz",
    "la matanza",
    "lanus",
    "lomas de zamora",
    "malvinas argentinas",
    "merlo",
    "moron",
    "quilmes",
    "san fernando",
    "san isidro",
    "san miguel",
    "tigre",
    "tres de febrero",
    "vicente lopez",
    "escobar",
    "general rodriguez",
    "marcos paz",
    "moreno",
    "pilar",
    "presidente peron",
    "san vicente",
    "zarate",
    "campana",
    "exaltacion de la cruz",
    "lujan",
    "mercedes",
    "general las heras",
    "canuelas",
    "la plata",
    "berisso",
    "ensenada",
  ]);
  const partyByLocality = {
    "caseros": "Tres de Febrero",
    "santos lugares": "Tres de Febrero",
    "ciudadela": "Tres de Febrero",
    "saenz pena": "Tres de Febrero",
    "villa bosch": "Tres de Febrero",
    "martin coronado": "Tres de Febrero",
    "loma hermosa": "Tres de Febrero",
    "el palomar": "Moron",
    "castelar": "Moron",
    "haedo": "Moron",
    "ramos mejia": "La Matanza",
    "san justo": "La Matanza",
    "isidro casanova": "La Matanza",
    "laferrere": "La Matanza",
    "villa luzuriaga": "La Matanza",
    "tapiales": "La Matanza",
    "martinez": "San Isidro",
    "acassuso": "San Isidro",
    "beccar": "San Isidro",
    "boulogne": "San Isidro",
    "florida": "Vicente Lopez",
    "munro": "Vicente Lopez",
    "olivos": "Vicente Lopez",
    "vicente lopez": "Vicente Lopez",
    "wilde": "Avellaneda",
    "sarandi": "Avellaneda",
    "dock sud": "Avellaneda",
    "bernal": "Quilmes",
    "don bosco": "Quilmes",
    "ezpeleta": "Quilmes",
    "banfield": "Lomas De Zamora",
    "temperley": "Lomas De Zamora",
    "turdera": "Lomas De Zamora",
    "remedios de escalada": "Lanus",
    "monte chingolo": "Lanus",
    "gerli": "Lanus",
    "adrogue": "Almirante Brown",
    "burzaco": "Almirante Brown",
    "longchamps": "Almirante Brown",
    "claypole": "Almirante Brown",
    "rafael calzada": "Almirante Brown",
    "monte grande": "Esteban Echeverria",
    "luis guillon": "Esteban Echeverria",
    "el jaguel": "Esteban Echeverria",
    "ezeiza": "Ezeiza",
    "tristan suarez": "Ezeiza",
    "canning": "Ezeiza",
    "san fernando": "San Fernando",
    "victoria": "San Fernando",
    "virreyes": "San Fernando",
    "tigre": "Tigre",
    "don torcuato": "Tigre",
    "benavidez": "Tigre",
    "pacheco": "Tigre",
    "pilar": "Pilar",
    "del viso": "Pilar",
    "villa rosa": "Pilar",
    "garin": "Escobar",
    "belen de escobar": "Escobar",
    "maschwitz": "Escobar",
    "general rodriguez": "General Rodriguez",
    "marcos paz": "Marcos Paz",
    "presidente peron": "Presidente Peron",
    "guernica": "Presidente Peron",
    "san vicente": "San Vicente",
    "alejandro korn": "San Vicente",
    "zarate": "Zarate",
    "campana": "Campana",
    "exaltacion de la cruz": "Exaltacion De La Cruz",
    "capilla del senor": "Exaltacion De La Cruz",
    "lujan": "Lujan",
    "mercedes": "Mercedes",
    "general las heras": "General Las Heras",
    "canuelas": "Canuelas",
    "la plata": "La Plata",
    "tolosa": "La Plata",
    "gonnet": "La Plata",
    "city bell": "La Plata",
    "villa elisa": "La Plata",
    "berisso": "Berisso",
    "ensenada": "Ensenada",
    "berazategui": "Berazategui",
    "florencio varela": "Florencio Varela",
    "jose c paz": "Jose C Paz",
    "grand bourg": "Malvinas Argentinas",
    "tortuguitas": "Malvinas Argentinas",
    "los polvorines": "Malvinas Argentinas",
    "bella vista": "San Miguel",
    "muniz": "San Miguel",
    "hurlingham": "Hurlingham",
    "villa tesei": "Hurlingham",
    "ituzaingo": "Ituzaingo",
    "merlo": "Merlo",
    "libertad": "Merlo",
    "padua": "Merlo",
    "moreno": "Moreno",
    "paso del rey": "Moreno",
    "moron": "Moron",
    "quilmes": "Quilmes",
    "avellaneda": "Avellaneda",
    "lanus": "Lanus",
    "lomas de zamora": "Lomas De Zamora",
    "almirante brown": "Almirante Brown",
    "esteban echeverria": "Esteban Echeverria",
    "la matanza": "La Matanza",
    "tres de febrero": "Tres de Febrero",
    "san isidro": "San Isidro",
    "san martin": "General San Martin",
    "general san martin": "General San Martin",
    "ciudad autonoma de buenos aires": "Ciudad Autónoma de Buenos Aires",
    "capital federal": "Ciudad Autónoma de Buenos Aires",
    "caba": "Ciudad Autónoma de Buenos Aires",
  };

  const mapped = partyByLocality[key] || normalized;
  return enabledParties.has(normalizeSearchText(mapped)) ? mapped : normalized;
}

function getProvinceLabel(row) {
  const province = String(row.province || "").trim();
  const invalidProvinces = ["#N/A", "N/A", "-", "SIN PROVINCIA"];
  if (province && !invalidProvinces.includes(province.toUpperCase())) {
    return normalizeDistrictName(province);
  }

  const location = String(row.location || "");
  const match = location.match(/Provincia de\s+([^,]+)/i);
  if (match?.[1]) {
    return normalizeDistrictName(match[1]);
  }

  if (/Ciudad Aut/i.test(location)) {
    return "Ciudad Autonoma De Buenos Aires";
  }

  return "Sin provincia";
}

function renderHeatmapResults(counts, container, options) {
  const { from = "", to = "", scope = "amba", metric = "remitos" } = options;
  if (!counts.length) {
    container.className = "empty-state";
    container.innerHTML = `
      <strong>Sin datos</strong>
      <span>No encontramos partidos de entrega para el rango seleccionado.</span>
    `;
    return;
  }

  const max = Math.max(...counts.map((item) => item.count));
  const heatmapGroups = scope === "pais" ? counts : counts.slice(0, 20);
  const rangeText = from || to ? `${from ? formatDisplayDate(from) : "inicio"} - ${to ? formatDisplayDate(to) : "hoy"}` : "Todos los despachos";
  const groupLabel = scope === "pais" ? "provincias" : "partidos";
  const metricLabel = getHeatmapMetricLabel(metric);

  container.className = "heatmap-content";
  container.innerHTML = `
    <div class="heatmap-range">${rangeText} - ${scope === "pais" ? "Pais" : "AMBA"} - ${metricLabel}</div>
    <div class="heatmap-grid" aria-label="Mapa de calor por ${groupLabel}">
      ${heatmapGroups.map((item) => {
        const level = Math.max(1, Math.ceil((item.count / max) * 5));
        return `
          <div class="heat-tile heat-${level}">
            <strong>${item.district}</strong>
            <span>${formatHeatmapValue(item.count, metric)}</span>
          </div>
        `;
      }).join("")}
    </div>
    <div class="district-list">
      <div class="results-summary">
        <strong>${formatHeatmapValue(counts.reduce((total, item) => total + item.count, 0), metric)}</strong>
        <span>${formatNumber(counts.length)} ${groupLabel}</span>
      </div>
      ${counts.map((item, index) => `
        <div class="district-row">
          <span>${index + 1}. ${item.district}</span>
          <strong>${formatHeatmapValue(item.count, metric)}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function getHeatmapMetricLabel(metric) {
  const labels = {
    remitos: "Por remito",
    boca: "Por boca de entrega",
    units: "Cantidad de unidades",
    value: "Valor declarado USD",
  };
  return labels[metric] || labels.remitos;
}

function formatHeatmapValue(value, metric) {
  if (metric === "value") {
    return `USD ${formatNumber(Math.round(value || 0))}`;
  }

  return formatNumber(Math.round(value || 0));
}

function bindRemitoSearch() {
  const searchButton = document.querySelector("#searchRemitos");
  if (!searchButton) {
    return;
  }

  searchButton.addEventListener("click", async () => {
    const remitoQuery = document.querySelector("#remitoQuery").value.replace(/\D/g, "");
    const dispatchDateQuery = document.querySelector("#dispatchDateQuery").value;
    const resultsContainer = document.querySelector("#searchResults");

    if (!remitoQuery && !dispatchDateQuery) {
      resultsContainer.className = "empty-state";
      resultsContainer.innerHTML = `
        <strong>Sin busqueda activa</strong>
        <span>Ingresa un remito o una fecha para consultar la informacion de despacho.</span>
      `;
      return;
    }

    resultsContainer.className = "empty-state";
    resultsContainer.innerHTML = `<strong>Buscando...</strong><span>Consultando hojas de ruta.</span>`;

    const rows = await loadRouteRows();
    const matches = rows.filter((row) => {
      const remitoMatches = remitoQuery ? row.remito.includes(remitoQuery) : false;
      const dateMatches = dispatchDateQuery ? row.dispatchDate === dispatchDateQuery : false;
      return remitoMatches || dateMatches;
    });

    renderRouteResults(matches, resultsContainer);
  });
}

async function loadRouteRows() {
  if (routeRows) {
    return routeRows;
  }

  try {
    const quantities = await loadUnitQuantityIndex();
    const response = await fetch(GOOGLE_SHEETS.routes, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("No se pudo leer Google Sheets");
    }

    const csv = await response.text();
    routeRows = parseRouteRows(csv, quantities);
  } catch (error) {
    const quantities = await loadUnitQuantityIndex();
    const response = await fetch("data/hojas-ruta.json");
    routeRows = (await response.json()).map((row) => ({
      ...row,
      quantity: quantities[normalizePdfDigits(row.remito)] || row.quantity,
    }));
  }

  return routeRows;
}

async function loadClientMasterRows() {
  if (clientMasterRows) {
    return clientMasterRows;
  }

  const response = await fetch(GOOGLE_SHEETS.clientMaster, { cache: "no-store" });
  if (!response.ok) {
    throw new Error("No se pudo leer Ultimo maestro de clientes");
  }

  const csv = await response.text();
  clientMasterRows = parseClientMasterRows(csv);
  return clientMasterRows;
}

async function loadUnitQuantityIndex() {
  if (unitQuantityIndex) {
    return unitQuantityIndex;
  }

  try {
    const response = await fetch(UNIT_QUANTITY_INDEX_URL, { cache: "no-store" });
    const rows = response.ok ? await response.json() : [];
    unitQuantityIndex = rows.reduce((index, row) => {
      const remito = normalizePdfDigits(row.remito || row.remitoOriginal);
      if (remito) {
        index[remito] = parseSheetNumber(row.cantidad);
      }
      return index;
    }, {});
  } catch (error) {
    unitQuantityIndex = {};
  }

  return unitQuantityIndex;
}

async function loadSteckIndicators() {
  try {
    const response = await fetch(GOOGLE_SHEETS.indicators, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("No se pudo leer Indicadores");
    }

    const csv = await response.text();
    const rows = parseIndicatorRows(csv);
    if (rows.length) {
      steckIndicators = rows;
      indicatorsLoaded = true;
    }
  } catch (error) {
    indicatorsLoaded = false;
  }
}

function parseIndicatorRows(csv) {
  const { headers, rows } = parseCsv(csv);
  return rows
    .map((row) => {
      const item = rowToObject(headers, row);
      return {
        date: parseSheetDate(item.Fecha),
        client: item.Cliente || "",
        unitsToPick: parseSheetNumber(item["Unidades A Pickear"]),
        remitos: parseSheetNumber(item.Remitos),
        utilitarios: parseSheetNumber(item.Utilitarios),
        chasis: parseSheetNumber(item.Chasis),
        containersChina: parseSheetNumber(item["Desc. Cont. China"]),
        containersBrazil: parseSheetNumber(item["Desc. Cont. Brasil"]),
        palletsIn: parseSheetNumber(item["Pallets In"]),
        previousMonthPositions: parseSheetNumber(item["Posiciones Mes Ant."]),
      };
    })
    .filter((row) => row.date)
    .sort((a, b) => a.date.localeCompare(b.date));
}

function parseRouteRows(csv, quantityIndex = {}) {
  const { headers, rows } = parseCsv(csv);
  return rows
    .map((row) => {
      const item = rowToObject(headers, row);
      const remito = normalizeRemito(item.REMITOS);
      const indexedQuantity = quantityIndex[normalizePdfDigits(remito)];
      return {
        remito,
        packages: parseSheetNumber(item["CANT. BULTOS"]),
        code: item.CODIGO || "",
        customer: item["RAZON SOCIAL"] || "",
        zone: item["EXPRESO/ZONA"] || "",
        address: item["DIRECCION DE ENTREGA"] || "",
        district: item["PARTIDO DE ENTREGA"] || "",
        observations: item.OBSERVACIONES || "",
        status: item.STATUS || "",
        driver: item.CHOFER || "",
        dispatchDate: parseSheetDate(item.ENTREGA),
        domain: item.DOMINIO || "",
        route: item.HR || "",
        declaredValue: parseSheetNumber(row[20]),
        quantity: indexedQuantity || parseSheetNumber(item.CANTIDAD),
        fullAddress: item["DIRECCION COMPLETA"] || "",
        locationLs: item.UBICACION_LS || "",
        province: item.PROVINCIA || "",
        location: item["UBICACION C/PROVINCIA"] || "",
      };
    })
    .filter((row) => row.remito || row.route || row.dispatchDate);
}

function parseClientMasterRows(csv) {
  const { headers, rows } = parseCsv(csv);
  return rows
    .map((row) => {
      const item = rowToObject(headers, row);
      const province = item.Prov || "";
      const provinceName = getClientProvinceName(province);
      const municipality = item.Municipio || "";
      const deliveryCity = item["Localidad de Entrega"] || "";
      const expressZone = item["Expreso/Zona"] || "";
      const transportName = item["Nombre Transporte"] || "";

      return {
        code: item.Codigo || "",
        name: item.Nombre || "",
        address: item.Direccion || "",
        province,
        provinceName,
        municipality,
        postalCode: item.CP || "",
        phone: item.Telefono || "",
        taxId: item["CUIT/CUIL"] || "",
        transport: item["Transp."] || "",
        transportName,
        systemAddress: item["Direccion por sistema"] || "",
        transportTaxId: item["CUIT Transporte"] || "",
        expressZone,
        deliveryAddress: item["Direccion de entrega"] || "",
        deliveryCity,
        observations: item.Observaciones || "",
        transportLabel: getClientTransportLabel(transportName, expressZone),
        ambaLabel: getAmbaPartyLabel(deliveryCity || municipality || "Sin partido"),
        countryLabel: provinceName || normalizeDistrictName(province || "Sin provincia"),
      };
    })
    .filter((row) => row.code || row.name);
}

function getClientProvinceName(value) {
  const key = String(value || "").trim().toUpperCase();
  const provinces = {
    BA: "Buenos Aires",
    CF: "Ciudad Autónoma de Buenos Aires",
    CABA: "Ciudad Autónoma de Buenos Aires",
    C: "Ciudad Autónoma de Buenos Aires",
    CORDOBA: "Cordoba",
    CBA: "Cordoba",
    SF: "Santa Fe",
    SFE: "Santa Fe",
    MZA: "Mendoza",
  };

  return provinces[key] || normalizeDistrictName(value);
}

function getClientTransportLabel(transportName, expressZone) {
  const transport = String(transportName || "").trim();
  const zone = String(expressZone || "").trim();
  if (normalizeSearchText(transport) === "propio") {
    return "Propio";
  }

  if (transport) {
    return `Expreso por ${zone ? `${zone} - ` : ""}${transport}`;
  }

  return zone ? `Expreso por ${zone}` : "-";
}

function normalizeSearchText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function parseCsv(csv) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;

  for (let index = 0; index < csv.length; index += 1) {
    const char = csv[index];
    const next = csv[index + 1];

    if (char === "\"") {
      if (inQuotes && next === "\"") {
        cell += "\"";
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(cell);
      cell = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") {
        index += 1;
      }
      row.push(cell);
      if (row.some((value) => value.trim() !== "")) {
        rows.push(row);
      }
      row = [];
      cell = "";
      continue;
    }

    cell += char;
  }

  row.push(cell);
  if (row.some((value) => value.trim() !== "")) {
    rows.push(row);
  }

  return {
    headers: rows[0] || [],
    rows: rows.slice(1),
  };
}

function rowToObject(headers, row) {
  return headers.reduce((object, header, index) => {
    object[header.trim()] = (row[index] || "").trim();
    return object;
  }, {});
}

function parseSheetDate(value) {
  const raw = String(value || "").trim();
  if (!raw) {
    return "";
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
    return raw;
  }

  const [datePart] = raw.split(" ");
  const parts = datePart.split(/[/-]/).map((part) => part.trim());
  if (parts.length !== 3) {
    return "";
  }

  if (parts[0].length === 4) {
    return `${parts[0]}-${parts[1].padStart(2, "0")}-${parts[2].padStart(2, "0")}`;
  }

  return `${parts[2]}-${parts[1].padStart(2, "0")}-${parts[0].padStart(2, "0")}`;
}

function parseSheetNumber(value) {
  let raw = String(value ?? "").trim();
  if (!raw) {
    return 0;
  }

  raw = raw.replace(/\s/g, "").replace(/[$]/g, "").replace(/USD/gi, "").replace(/US\$/gi, "");
  if (raw.includes(",") && raw.includes(".")) {
    if (raw.lastIndexOf(".") > raw.lastIndexOf(",")) {
      raw = raw.replace(/,/g, "");
    } else {
      raw = raw.replace(/\./g, "").replace(",", ".");
    }
  } else if (raw.includes(".")) {
    const parts = raw.split(".");
    if (parts.length === 2 && parts[1].length === 3) {
      raw = parts.join("");
    }
  } else if (raw.includes(",")) {
    const parts = raw.split(",");
    raw = parts.length === 2 && parts[1].length === 3 ? parts.join("") : raw.replace(",", ".");
  }

  const number = Number(raw);
  return Number.isFinite(number) ? number : 0;
}

function normalizeRemito(value) {
  const raw = String(value || "").trim();
  if (!raw) {
    return "";
  }

  const numeric = Number(raw.replace(",", "."));
  if (Number.isFinite(numeric) && /e/i.test(raw)) {
    return Math.trunc(numeric).toString();
  }

  return raw.replace(/\D/g, "") || raw;
}

function renderRouteResults(matches, container) {
  if (!matches.length) {
    container.className = "empty-state";
    container.innerHTML = `
      <strong>Sin resultados</strong>
      <span>No encontramos remitos para los filtros ingresados.</span>
    `;
    return;
  }

  container.className = "results-list";
  container.innerHTML = `
    <div class="results-summary">
      <strong>${formatNumber(matches.length)} resultado${matches.length === 1 ? "" : "s"}</strong>
      <span>Mostrando hasta 50 coincidencias.</span>
    </div>
    ${matches.slice(0, 50).map((row) => `
      <article class="result-card">
        <div class="result-card-head">
          <strong>Remito ${row.remito}</strong>
          <span>${formatDisplayDate(row.dispatchDate)}</span>
        </div>
        <div class="result-card-body">
          <dl>
            <div><dt>Cliente</dt><dd>${row.customer || "-"}</dd></div>
            <div><dt>Status</dt><dd>${renderStatusBadge(row.status)}</dd></div>
          <div><dt>Hoja de ruta</dt><dd>${row.route || "-"}</dd></div>
          <div><dt>Dominio</dt><dd>${row.domain || "-"}</dd></div>
          <div><dt>Chofer</dt><dd>${row.driver || "-"}</dd></div>
          <div><dt>Bultos</dt><dd>${row.packages || "0"}</dd></div>
          <div><dt>Unidades</dt><dd>${formatNumber(row.quantity)}</dd></div>
          <div><dt>Valor declarado USD</dt><dd>USD ${formatNumber(Math.round(Number(row.declaredValue) || 0))}</dd></div>
          <div><dt>Direccion</dt><dd>${row.address || "-"}</dd></div>
          <div><dt>Partido</dt><dd>${row.district || "-"}</dd></div>
          <div><dt>Provincia</dt><dd>${row.province || "-"}</dd></div>
          </dl>
          <div class="result-actions">
            <button class="view-remito-btn" type="button" data-remito="${row.remito}">Ver remito</button>
          </div>
        </div>
      </article>
    `).join("")}
  `;

  bindRemitoPdfButtons(container);
}

function bindRemitoPdfButtons(container) {
  container.querySelectorAll("[data-remito]").forEach((button) => {
    button.addEventListener("click", async () => {
      const remito = button.dataset.remito;
      button.disabled = true;
      button.textContent = "Buscando...";

      try {
        const index = await loadRemitoPdfIndex();
        const match = findRemitoPdf(remito, index);
        showRemitoPdfViewer(remito, match);
      } finally {
        button.disabled = false;
        button.textContent = "Ver remito";
      }
    });
  });
}

async function loadRemitoPdfIndex() {
  if (remitoPdfIndex) {
    return remitoPdfIndex;
  }

  try {
    const response = await fetch(REMITO_PDF_INDEX_URL, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("No se pudo cargar el indice completo");
    }
    remitoPdfIndex = await response.json();
  } catch (error) {
    try {
      const response = await fetch(REMITO_PDF_FALLBACK_URL, { cache: "no-store" });
      remitoPdfIndex = response.ok ? await response.json() : [];
    } catch (fallbackError) {
      remitoPdfIndex = [];
    }
  }

  return Array.isArray(remitoPdfIndex) ? remitoPdfIndex : [];
}

function findRemitoPdf(remito, index) {
  const full = normalizePdfDigits(remito);
  if (!full) {
    return null;
  }

  const candidates = index
    .map((file) => {
      const label = `${file.remito || ""} ${file.name || ""} ${file.fileName || ""} ${file.title || ""}`;
      const digits = normalizePdfDigits(label);
      let score = 0;

      if (digits === full) score = 100;
      else if (digits.includes(full)) score = 95;
      else if (full.includes(digits) && digits.length >= 5) score = 85;
      else if (digits.endsWith(full.slice(-7))) score = 75;
      else if (digits.endsWith(full.slice(-6))) score = 65;
      else if (digits.endsWith(full.slice(-5))) score = 55;

      return { file, score };
    })
    .filter((candidate) => candidate.score > 0)
    .sort((a, b) => b.score - a.score);

  return candidates[0]?.file || null;
}

function normalizePdfDigits(value) {
  return normalizeRemito(value).replace(/^0+/, "");
}

function showRemitoPdfViewer(remito, file) {
  const existing = document.querySelector("#remitoPdfModal");
  if (existing) {
    existing.remove();
  }

  const url = file ? getPdfPreviewUrl(file.url || file.webViewLink || file.downloadUrl || file.previewUrl || "") : "";
  const modal = document.createElement("div");
  modal.className = "pdf-modal";
  modal.id = "remitoPdfModal";
  modal.innerHTML = `
    <div class="pdf-modal-card" role="dialog" aria-modal="true" aria-label="Remito ${remito}">
      <div class="pdf-modal-head">
        <div>
          <span class="kpi-label">REMITO CONFORMADO</span>
          <strong>${remito}</strong>
        </div>
        <button class="icon-btn" type="button" id="closeRemitoPdf">X</button>
      </div>
      ${url ? `
        <iframe class="pdf-frame" src="${url}" title="Remito ${remito}"></iframe>
        <div class="pdf-actions">
          <a class="view-remito-btn" href="${url}" target="_blank" rel="noopener">Abrir en otra pestaña</a>
        </div>
      ` : `
        <div class="empty-state">
          <strong>Remito conformado no encontrado</strong>
          <span>No encontramos este PDF en el indice publicado. Puede estar fuera de los primeros archivos que Google Drive permite listar publicamente por carpeta.</span>
        </div>
      `}
    </div>
  `;

  document.body.appendChild(modal);
  document.querySelector("#closeRemitoPdf").addEventListener("click", () => modal.remove());
}

function getPdfPreviewUrl(url) {
  const raw = String(url || "").trim();
  const driveFile = raw.match(/\/file\/d\/([^/]+)/) || raw.match(/[?&]id=([^&]+)/);
  if (driveFile?.[1]) {
    return `https://drive.google.com/file/d/${driveFile[1]}/preview`;
  }

  return raw;
}

function formatDisplayDate(dateIso) {
  if (!dateIso) {
    return "-";
  }

  return dateIso.split("-").reverse().join("/");
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  });
}

render();
loadUsersFromSheet().then(() => {
  if (!session) {
    render();
  }
});
loadSteckIndicators().then(() => {
  if (indicatorsLoaded && session && selectedClient?.id === "steck") {
    render();
  }
});
setInterval(refreshUsersFromSheet, 60000);
