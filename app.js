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
    id: "norte",
    name: "Norte Retail",
    initials: "NR",
    color: "#0f766e",
    sites: "12 tiendas",
    active: 76,
    pending: 14,
    sla: "91%",
    alerts: "Picos de demanda",
    tasks: ["Reposicion critica", "Reclamos abiertos", "Seguimiento nocturno"],
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
const GOOGLE_SHEETS = {
  indicators: `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:csv&sheet=Indicadores`,
  routes: `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:csv&sheet=Hojas%20de%20Ruta`,
};

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

const users = [
  {
    username: "admin",
    password: "admin123",
    name: "Operacion Central",
    role: "Acceso total",
    clientIds: clients.map((client) => client.id),
  },
  {
    username: "supervisor",
    password: "super123",
    name: "Supervisor Regional",
    role: "Acceso a cartera",
    clientIds: ["steck", "norte", "andes"],
  },
  {
    username: "cliente",
    password: "cliente123",
    name: "Usuario Steck",
    role: "Acceso cliente",
    clientIds: ["steck"],
  },
  {
    username: "gmarchetta",
    password: "Steck1234",
    name: "Gabriela Marchetta",
    role: "Usuario Steck",
    clientIds: ["steck"],
  },
];

const app = document.querySelector("#app");
let session = null;
let selectedClient = null;
let activeSteckModule = "daily";
let routeRows = null;
let indicatorsLoaded = false;
let dailyDateFrom = "";
let dailyDateTo = "";

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
            <input id="password" name="password" type="password" autocomplete="current-password" required>
          </label>
          <button class="primary-btn" type="submit">Ingresar</button>
          <p class="error" id="loginError"></p>
        </form>
      </div>
    </section>
  `;

  document.querySelector("#loginForm").addEventListener("submit", handleLogin);
}

function handleLogin(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const username = String(form.get("username")).trim().toLowerCase();
  const password = String(form.get("password"));
  const user = users.find((item) => item.username === username && item.password === password);

  if (!user) {
    document.querySelector("#loginError").textContent = "Usuario o clave incorrectos.";
    return;
  }

  loginAs(user);
}

function loginAs(user) {
  session = user;
  selectedClient = null;
  activeSteckModule = "daily";
  render();
}

function logout() {
  session = null;
  selectedClient = null;
  activeSteckModule = "daily";
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

      ${activeSteckModule === "remitos" ? renderRemitoSearch() : activeSteckModule === "heatmap" ? renderHeatmap() : activeSteckModule === "declaredValue" ? renderDeclaredValueByRoute() : `
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
}

function renderModuleNav() {
  const modules = [
    ["daily", "Indicadores Diarios"],
    ["remitos", "Buscador de Remitos"],
    ["heatmap", "Mapa de Calor"],
    ["declaredValue", "Buscador de HR"],
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
          <p class="muted">Analisis por zona y criterio operativo.</p>
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
      const group = scope === "pais" ? getProvinceLabel(row) : normalizeDistrictName(row.district || "Sin partido");
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
    const response = await fetch(GOOGLE_SHEETS.routes, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("No se pudo leer Google Sheets");
    }

    const csv = await response.text();
    routeRows = parseRouteRows(csv);
  } catch (error) {
    const response = await fetch("data/hojas-ruta.json");
    routeRows = await response.json();
  }

  return routeRows;
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

function parseRouteRows(csv) {
  const { headers, rows } = parseCsv(csv);
  return rows
    .map((row) => {
      const item = rowToObject(headers, row);
      return {
        remito: normalizeRemito(item.REMITOS),
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
        quantity: parseSheetNumber(item.CANTIDAD),
        fullAddress: item["DIRECCION COMPLETA"] || "",
        locationLs: item.UBICACION_LS || "",
        province: item.PROVINCIA || "",
        location: item["UBICACION C/PROVINCIA"] || "",
      };
    })
    .filter((row) => row.remito || row.route || row.dispatchDate);
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
        <dl>
          <div><dt>Cliente</dt><dd>${row.customer || "-"}</dd></div>
          <div><dt>Status</dt><dd>${renderStatusBadge(row.status)}</dd></div>
          <div><dt>Hoja de ruta</dt><dd>${row.route || "-"}</dd></div>
          <div><dt>Dominio</dt><dd>${row.domain || "-"}</dd></div>
          <div><dt>Chofer</dt><dd>${row.driver || "-"}</dd></div>
          <div><dt>Bultos</dt><dd>${row.packages || "0"}</dd></div>
          <div><dt>Direccion</dt><dd>${row.address || "-"}</dd></div>
          <div><dt>Partido</dt><dd>${row.district || "-"}</dd></div>
          <div><dt>Provincia</dt><dd>${row.province || "-"}</dd></div>
        </dl>
      </article>
    `).join("")}
  `;
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
loadSteckIndicators().then(() => {
  if (indicatorsLoaded && session && selectedClient?.id === "steck") {
    render();
  }
});
