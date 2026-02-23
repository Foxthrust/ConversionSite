const categories = [
  {
    id: "length",
    label: "Length",
    kind: "linear",
    subtitle: "Fast, frictionless conversion for length measurements.",
    tip: "Switch between metric and imperial units without leaving this panel.",
    defaultFrom: "ft",
    defaultTo: "m",
    defaultValue: 10,
    units: [
      { key: "mm", label: "Millimeters (mm)", factor: 0.001, aliases: ["millimeter", "millimeters", "millimetre", "millimetres"] },
      { key: "cm", label: "Centimeters (cm)", factor: 0.01, aliases: ["centimeter", "centimeters", "centimetre", "centimetres"] },
      { key: "m", label: "Meters (m)", factor: 1, aliases: ["meter", "meters", "metre", "metres"] },
      { key: "km", label: "Kilometers (km)", factor: 1000, aliases: ["kilometer", "kilometers", "kilometre", "kilometres"] },
      { key: "in", label: "Inches (in)", factor: 0.0254, aliases: ["inch", "inches"] },
      { key: "ft", label: "Feet (ft)", factor: 0.3048, aliases: ["foot", "feet"] },
      { key: "yd", label: "Yards (yd)", factor: 0.9144, aliases: ["yard", "yards"] },
      { key: "mi", label: "Miles (mi)", factor: 1609.344, aliases: ["mile", "miles"] }
    ]
  },
  {
    id: "weight",
    label: "Weight",
    kind: "linear",
    subtitle: "Convert mass units for cooking, shipping, and engineering.",
    tip: "Use kilograms for SI workflows and pounds/ounces for imperial tasks.",
    defaultFrom: "kg",
    defaultTo: "lb",
    defaultValue: 10,
    units: [
      { key: "mg", label: "Milligrams (mg)", factor: 0.000001, aliases: ["milligram", "milligrams"] },
      { key: "g", label: "Grams (g)", factor: 0.001, aliases: ["gram", "grams"] },
      { key: "kg", label: "Kilograms (kg)", factor: 1, aliases: ["kilogram", "kilograms"] },
      { key: "oz", label: "Ounces (oz)", factor: 0.028349523125, aliases: ["ounce", "ounces"] },
      { key: "lb", label: "Pounds (lb)", factor: 0.45359237, aliases: ["pound", "pounds", "lbs"] },
      { key: "st", label: "Stone (st)", factor: 6.35029318, aliases: ["stone", "stones"] }
    ]
  },
  {
    id: "volume",
    label: "Volume",
    kind: "linear",
    subtitle: "Reliable liquid and container volume conversions.",
    tip: "Use liters and milliliters for precision. Cups and gallons for recipes.",
    defaultFrom: "l",
    defaultTo: "gal",
    defaultValue: 5,
    units: [
      { key: "ml", label: "Milliliters (ml)", factor: 0.001, aliases: ["milliliter", "milliliters", "millilitre", "millilitres"] },
      { key: "l", label: "Liters (l)", factor: 1, aliases: ["liter", "liters", "litre", "litres"] },
      { key: "cup", label: "Cups (cup)", factor: 0.2365882365, aliases: ["cups"] },
      { key: "pt", label: "Pints (pt)", factor: 0.473176473, aliases: ["pint", "pints"] },
      { key: "qt", label: "Quarts (qt)", factor: 0.946352946, aliases: ["quart", "quarts"] },
      { key: "gal", label: "Gallons (gal)", factor: 3.785411784, aliases: ["gallon", "gallons"] }
    ]
  },
  {
    id: "temperature",
    label: "Temperature",
    kind: "temperature",
    subtitle: "Instant temperature conversion with standard formulas.",
    tip: "Temperature conversion is non-linear. Formulas adapt automatically.",
    defaultFrom: "c",
    defaultTo: "f",
    defaultValue: 37,
    units: [
      { key: "c", label: "Celsius (°C)", aliases: ["celsius", "degc", "centigrade", "c"] },
      { key: "f", label: "Fahrenheit (°F)", aliases: ["fahrenheit", "degf", "f"] },
      { key: "k", label: "Kelvin (K)", aliases: ["kelvin", "k"] }
    ]
  },
  {
    id: "currency",
    label: "Currency",
    kind: "linear",
    subtitle: "Live exchange rates (USD base) with offline fallback.",
    tip: "Rates refresh automatically. Verify before financial decisions.",
    defaultFrom: "usd",
    defaultTo: "eur",
    defaultValue: 500,
    units: [
      { key: "usd", label: "US Dollar (USD)", factor: 1, aliases: ["dollar", "dollars", "$", "usd"] },
      { key: "eur", label: "Euro (EUR)", factor: 1.09, aliases: ["euros", "€", "eur"] },
      { key: "gbp", label: "British Pound (GBP)", factor: 1.27, aliases: ["sterling", "£", "gbp"] },
      { key: "jpy", label: "Japanese Yen (JPY)", factor: 0.0067, aliases: ["yen", "¥", "jpy"] },
      { key: "cad", label: "Canadian Dollar (CAD)", factor: 0.74, aliases: ["canadiandollar", "cad"] },
      { key: "aud", label: "Australian Dollar (AUD)", factor: 0.66, aliases: ["australiandollar", "aud"] },
      { key: "inr", label: "Indian Rupee (INR)", factor: 0.012, aliases: ["rupee", "rupees", "₹", "inr"] },
      { key: "mxn", label: "Mexican Peso (MXN)", factor: 0.058, aliases: ["peso", "pesos", "mxn"] }
    ]
  },
  {
    id: "timezone",
    label: "Time Zone",
    kind: "timezone",
    subtitle: "DST-aware city and UTC conversions using IANA zones.",
    tip: "Timezone conversion uses current daylight-saving offsets for each selected city.",
    defaultFrom: "la",
    defaultTo: "nyc",
    defaultValue: 12,
    units: [
      { key: "la", label: "Los Angeles (America/Los_Angeles)", tz: "America/Los_Angeles", aliases: ["la", "losangeles", "pacific", "pt", "pst", "pdt"] },
      { key: "nyc", label: "New York (America/New_York)", tz: "America/New_York", aliases: ["ny", "nyc", "newyork", "eastern", "et", "est", "edt"] },
      { key: "london", label: "London (Europe/London)", tz: "Europe/London", aliases: ["london", "uk", "gmt", "bst"] },
      { key: "paris", label: "Paris (Europe/Paris)", tz: "Europe/Paris", aliases: ["paris", "cet", "cest"] },
      { key: "dubai", label: "Dubai (Asia/Dubai)", tz: "Asia/Dubai", aliases: ["dubai", "uae", "gst"] },
      { key: "delhi", label: "Delhi (Asia/Kolkata)", tz: "Asia/Kolkata", aliases: ["delhi", "india", "ist"] },
      { key: "tokyo", label: "Tokyo (Asia/Tokyo)", tz: "Asia/Tokyo", aliases: ["tokyo", "jst"] },
      { key: "sydney", label: "Sydney (Australia/Sydney)", tz: "Australia/Sydney", aliases: ["sydney", "aest", "aedt"] },
      { key: "utc", label: "UTC (UTC+0)", tz: "UTC", aliases: ["utc", "zulu"] }
    ]
  },
  {
    id: "area",
    label: "Area",
    kind: "linear",
    subtitle: "Area conversion across metric and imperial systems.",
    tip: "Great for floor plans, land plots, and map measurements.",
    defaultFrom: "ft2",
    defaultTo: "m2",
    defaultValue: 100,
    units: [
      { key: "m2", label: "Square meters (m²)", factor: 1, aliases: ["sqm", "squaremeter", "squaremeters", "m^2"] },
      { key: "km2", label: "Square kilometers (km²)", factor: 1000000, aliases: ["sqkm", "squarekilometer", "squarekilometers", "km^2"] },
      { key: "ft2", label: "Square feet (ft²)", factor: 0.09290304, aliases: ["sqft", "squarefoot", "squarefeet", "ft^2"] },
      { key: "yd2", label: "Square yards (yd²)", factor: 0.83612736, aliases: ["sqyd", "squareyard", "squareyards", "yd^2"] },
      { key: "acre", label: "Acres (acre)", factor: 4046.8564224, aliases: ["acres"] },
      { key: "ha", label: "Hectares (ha)", factor: 10000, aliases: ["hectare", "hectares"] }
    ]
  },
  {
    id: "data",
    label: "Digital Data",
    kind: "linear",
    subtitle: "Digital storage conversion with binary factors.",
    tip: "Use this for file size estimates and storage planning.",
    defaultFrom: "gb",
    defaultTo: "mb",
    defaultValue: 2.5,
    units: [
      { key: "b", label: "Bytes (B)", factor: 1, aliases: ["byte", "bytes"] },
      { key: "kb", label: "Kilobytes (KB)", factor: 1024, aliases: ["kilobyte", "kilobytes"] },
      { key: "mb", label: "Megabytes (MB)", factor: 1048576, aliases: ["megabyte", "megabytes"] },
      { key: "gb", label: "Gigabytes (GB)", factor: 1073741824, aliases: ["gigabyte", "gigabytes"] },
      { key: "tb", label: "Terabytes (TB)", factor: 1099511627776, aliases: ["terabyte", "terabytes"] }
    ]
  }
];

const IS_ES = document.documentElement.lang.toLowerCase().startsWith("es");
const QUICK_CONNECTOR = IS_ES ? "a" : "to";

const CATEGORY_I18N = {
  length: {
    label: "Longitud",
    subtitle: "Conversión rápida y precisa para medidas de longitud.",
    tip: "Cambia entre unidades métricas e imperiales sin salir de este panel."
  },
  weight: {
    label: "Peso",
    subtitle: "Convierte unidades de masa para cocina, envíos e ingeniería.",
    tip: "Usa kilogramos para flujos SI y libras/onzas para tareas imperiales."
  },
  volume: {
    label: "Volumen",
    subtitle: "Conversión confiable de líquidos y volúmenes de recipientes.",
    tip: "Usa litros y mililitros para precisión; tazas y galones para recetas."
  },
  temperature: {
    label: "Temperatura",
    subtitle: "Conversión instantánea de temperatura con fórmulas estándar.",
    tip: "La temperatura es no lineal; las fórmulas se adaptan automáticamente."
  },
  currency: {
    label: "Moneda",
    subtitle: "Tipos de cambio en vivo (base USD) con respaldo sin conexión.",
    tip: "Las tasas se actualizan automáticamente. Verifica antes de decidir."
  },
  timezone: {
    label: "Zona Horaria",
    subtitle: "Conversiones de ciudad y UTC con horario de verano usando zonas IANA.",
    tip: "La conversión usa los desfases actuales de horario de verano por ciudad."
  },
  area: {
    label: "Área",
    subtitle: "Conversión de área entre sistemas métrico e imperial.",
    tip: "Ideal para planos, terrenos y mediciones de mapas."
  },
  data: {
    label: "Datos Digitales",
    subtitle: "Conversión de almacenamiento digital con factores binarios.",
    tip: "Úsalo para estimar tamaños de archivo y planificación de almacenamiento."
  }
};

function i18n(enText, esText) {
  return IS_ES ? esText : enText;
}

function getCategoryLabel(category) {
  return IS_ES ? CATEGORY_I18N[category.id]?.label || category.label : category.label;
}

function getCategorySubtitle(category) {
  return IS_ES ? CATEGORY_I18N[category.id]?.subtitle || category.subtitle : category.subtitle;
}

function getCategoryTip(category) {
  return IS_ES ? CATEGORY_I18N[category.id]?.tip || category.tip : category.tip;
}

const currencyDefaultsUsdPerUnit = {
  usd: 1,
  eur: 1.09,
  gbp: 1.27,
  jpy: 0.0067,
  cad: 0.74,
  aud: 0.66,
  inr: 0.012,
  mxn: 0.058
};

const STORAGE_KEYS = {
  history: "toolsite_history_v2",
  favorites: "toolsite_favorites_v2",
  workflows: "toolsite_workflows_v2",
  palette: "toolsite_palette_v2",
  loan: "toolsite_loan_v1"
};

const MAX_HISTORY = 12;
const MAX_FAVORITES = 30;
const MAX_WORKFLOWS = 12;
const TZ_FORMAT_CACHE = new Map();

const state = {
  activeCategoryId: "length",
  history: [],
  favorites: [],
  workflows: [],
  palette: {
    primary: "#3B82F6",
    scheme: "monochromatic",
    generation: 0,
    current: []
  },
  loan: {
    amount: 250000,
    rate: 6.5,
    years: 30
  },
  currency: {
    source: "offline",
    date: "",
    loading: false,
    error: "",
    provider: "Frankfurter API",
    lastFetchedAt: 0
  },
  ui: {
    suggestions: []
  }
};

const categoriesById = new Map(categories.map((category) => [category.id, category]));
const aliasIndex = new Map();

for (const category of categories) {
  category.unitMap = new Map(category.units.map((unit) => [unit.key, unit]));
  for (const unit of category.units) {
    addAlias(unit.key, category.id, unit.key);
    addAlias(unit.label, category.id, unit.key);
    for (const alias of unit.aliases || []) {
      addAlias(alias, category.id, unit.key);
    }
  }
}

function addAlias(alias, categoryId, unitKey) {
  const token = normalizeAlias(alias);
  if (!token) return;
  if (!aliasIndex.has(token)) {
    aliasIndex.set(token, []);
  }
  aliasIndex.get(token).push({ categoryId, unitKey });
}

function normalizeAlias(raw) {
  return String(raw || "")
    .toLowerCase()
    .trim()
    .replace(/,/g, "")
    .replace(/degrees?/g, "")
    .replace(/°/g, "")
    .replace(/\s+/g, "")
    .replace(/\./g, "");
}

function formatNumber(value) {
  if (!Number.isFinite(value)) return i18n("Invalid", "Inválido");
  const absolute = Math.abs(value);
  if (absolute > 0 && (absolute < 0.000001 || absolute > 1e9)) {
    return value.toExponential(4);
  }
  return value.toLocaleString(undefined, { maximumFractionDigits: 6 });
}

function cleanUnitTitle(label) {
  return String(label || "").replace(/\s*\(.+\)\s*$/, "").trim();
}

function formatDate(isoDate) {
  if (!isoDate) return "";
  const date = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(date.getTime())) return isoDate;
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function debounce(callback, waitMs = 120) {
  let timeoutId = 0;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, waitMs);
  };
}

function runWhenIdle(callback, timeout = 400) {
  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(callback, { timeout });
    return;
  }
  window.setTimeout(callback, 1);
}

function safeReadStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function safeWriteStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage write failures.
  }
}

function loadPersistedState() {
  const persistedHistory = safeReadStorage(STORAGE_KEYS.history, []);
  if (Array.isArray(persistedHistory)) {
    state.history = persistedHistory
      .filter((item) => item && typeof item.text === "string" && Number.isFinite(item.time))
      .slice(0, MAX_HISTORY);
  }

  const persistedFavorites = safeReadStorage(STORAGE_KEYS.favorites, []);
  if (Array.isArray(persistedFavorites)) {
    state.favorites = persistedFavorites
      .filter((item) => typeof item === "string" && item.includes(":"))
      .slice(0, MAX_FAVORITES);
  }

  const persistedWorkflows = safeReadStorage(STORAGE_KEYS.workflows, []);
  if (Array.isArray(persistedWorkflows)) {
    state.workflows = persistedWorkflows
      .filter(
        (item) =>
          item &&
          typeof item.id === "string" &&
          typeof item.name === "string" &&
          typeof item.categoryId === "string" &&
          typeof item.fromKey === "string" &&
          typeof item.toKey === "string"
      )
      .slice(0, MAX_WORKFLOWS);
  }

  const persistedPalette = safeReadStorage(STORAGE_KEYS.palette, null);
  if (persistedPalette && typeof persistedPalette === "object") {
    if (typeof persistedPalette.primary === "string") {
      const normalized = normalizeHexColor(persistedPalette.primary);
      if (normalized) state.palette.primary = normalized;
    }
    if (typeof persistedPalette.scheme === "string") {
      state.palette.scheme = persistedPalette.scheme;
    }
  }

  const persistedLoan = safeReadStorage(STORAGE_KEYS.loan, null);
  if (persistedLoan && typeof persistedLoan === "object") {
    const amount = Number.parseFloat(persistedLoan.amount);
    const rate = Number.parseFloat(persistedLoan.rate);
    const years = Number.parseFloat(persistedLoan.years);

    if (Number.isFinite(amount) && amount > 0) {
      state.loan.amount = amount;
    }
    if (Number.isFinite(rate) && rate >= 0) {
      state.loan.rate = rate;
    }
    if (Number.isFinite(years) && years > 0) {
      state.loan.years = years;
    }
  }
}

function persistHistory() {
  safeWriteStorage(STORAGE_KEYS.history, state.history);
}

function persistFavorites() {
  safeWriteStorage(STORAGE_KEYS.favorites, state.favorites);
}

function persistWorkflows() {
  safeWriteStorage(STORAGE_KEYS.workflows, state.workflows);
}

function persistPalette() {
  safeWriteStorage(STORAGE_KEYS.palette, {
    primary: state.palette.primary,
    scheme: state.palette.scheme
  });
}

function persistLoan() {
  safeWriteStorage(STORAGE_KEYS.loan, {
    amount: state.loan.amount,
    rate: state.loan.rate,
    years: state.loan.years
  });
}

function getActiveCategory() {
  return categoriesById.get(state.activeCategoryId);
}

function getCurrentConversionSignature() {
  const category = getActiveCategory();
  if (!category) return "";
  const fromKey = document.getElementById("from-unit").value;
  const toKey = document.getElementById("to-unit").value;
  return `${category.id}:${fromKey}:${toKey}`;
}

function renderCategoryChips() {
  const row = document.getElementById("category-chip-row");
  row.innerHTML = categories
    .map(
      (category) =>
        `<button type="button" class="category-chip ${category.id === state.activeCategoryId ? "active" : ""}" data-category-id="${category.id}">${getCategoryLabel(category)}</button>`
    )
    .join("");

  row.addEventListener("click", (event) => {
    const button = event.target.closest(".category-chip");
    if (!button) return;
    setActiveCategory(button.dataset.categoryId);
  });
}

function setActiveCategory(categoryId, options = {}) {
  const category = categoriesById.get(categoryId);
  if (!category) return;

  state.activeCategoryId = categoryId;
  const fromSelect = document.getElementById("from-unit");
  const toSelect = document.getElementById("to-unit");
  const valueInput = document.getElementById("main-value");
  const tipLine = document.getElementById("tip-line");

  document.querySelectorAll(".category-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.categoryId === categoryId);
  });

  const optionsHtml = category.units
    .map((unit) => `<option value="${unit.key}">${unit.label}</option>`)
    .join("");
  fromSelect.innerHTML = optionsHtml;
  toSelect.innerHTML = optionsHtml;

  const fromUnit = options.fromUnit && category.unitMap.has(options.fromUnit)
    ? options.fromUnit
    : category.defaultFrom || category.units[0].key;
  const toUnit = options.toUnit && category.unitMap.has(options.toUnit)
    ? options.toUnit
    : category.defaultTo || category.units[Math.min(1, category.units.length - 1)].key;

  fromSelect.value = fromUnit;
  toSelect.value = toUnit;

  const nextValue = Number.isFinite(options.value) ? options.value : category.defaultValue ?? 1;
  valueInput.value = `${nextValue}`;

  document.getElementById("converter-subtitle").textContent = getCategorySubtitle(category);
  if (tipLine) {
    tipLine.textContent = getCategoryTip(category);
  }
  updateFavoriteVisual();
  runConversion(false);
}

function getTimeZoneFormatter(timeZone) {
  if (!TZ_FORMAT_CACHE.has(timeZone)) {
    TZ_FORMAT_CACHE.set(
      timeZone,
      new Intl.DateTimeFormat("en-US", {
        timeZone,
        hour12: false,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      })
    );
  }
  return TZ_FORMAT_CACHE.get(timeZone);
}

function getTimeZoneOffsetMinutes(timeZone, date = new Date()) {
  try {
    const formatter = getTimeZoneFormatter(timeZone);
    const parts = formatter.formatToParts(date);
    const map = {};
    for (const part of parts) {
      if (part.type !== "literal") {
        map[part.type] = part.value;
      }
    }

    const asUtc = Date.UTC(
      Number.parseInt(map.year, 10),
      Number.parseInt(map.month, 10) - 1,
      Number.parseInt(map.day, 10),
      Number.parseInt(map.hour, 10),
      Number.parseInt(map.minute, 10),
      Number.parseInt(map.second, 10)
    );

    return (asUtc - date.getTime()) / 60000;
  } catch {
    return 0;
  }
}

function wrap24Hour(value) {
  let wrapped = value;
  while (wrapped < 0) wrapped += 24;
  while (wrapped >= 24) wrapped -= 24;
  return wrapped;
}

function formatTimeOfDay(value) {
  if (!Number.isFinite(value)) return "Invalid";
  const wrapped = wrap24Hour(value);
  const hour = Math.floor(wrapped);
  let minute = Math.round((wrapped - hour) * 60);
  let adjustedHour = hour;
  if (minute === 60) {
    minute = 0;
    adjustedHour = (hour + 1) % 24;
  }
  return `${String(adjustedHour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function formatUtcOffset(hours) {
  const sign = hours >= 0 ? "+" : "-";
  const absolute = Math.abs(hours);
  const whole = Math.floor(absolute);
  const minutes = Math.round((absolute - whole) * 60);
  return `UTC${sign}${String(whole).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function convertValue(category, value, fromKey, toKey) {
  if (category.kind === "temperature") {
    let celsius;
    if (fromKey === "c") celsius = value;
    if (fromKey === "f") celsius = ((value - 32) * 5) / 9;
    if (fromKey === "k") celsius = value - 273.15;
    if (celsius == null) return null;

    if (toKey === "c") return celsius;
    if (toKey === "f") return (celsius * 9) / 5 + 32;
    if (toKey === "k") return celsius + 273.15;
    return null;
  }

  if (category.kind === "timezone") {
    const fromUnit = category.unitMap.get(fromKey);
    const toUnit = category.unitMap.get(toKey);
    if (!fromUnit || !toUnit || !fromUnit.tz || !toUnit.tz) return null;

    const reference = new Date();
    const fromOffsetHours = getTimeZoneOffsetMinutes(fromUnit.tz, reference) / 60;
    const toOffsetHours = getTimeZoneOffsetMinutes(toUnit.tz, reference) / 60;
    return wrap24Hour(value + (toOffsetHours - fromOffsetHours));
  }

  const fromUnit = category.unitMap.get(fromKey);
  const toUnit = category.unitMap.get(toKey);
  if (!fromUnit || !toUnit || fromUnit.factor == null || toUnit.factor == null) return null;
  const baseValue = value * fromUnit.factor;
  return baseValue / toUnit.factor;
}

function formatValueForCategory(category, value) {
  if (!Number.isFinite(value)) return i18n("Invalid", "Inválido");
  if (category.kind === "timezone") return formatTimeOfDay(value);
  return formatNumber(value);
}

function updateHeaderAndInfo(category, fromUnit, toUnit, sampleConverted) {
  const title = i18n(
    `${cleanUnitTitle(fromUnit.label)} to ${cleanUnitTitle(toUnit.label)} Converter`,
    `Convertidor de ${cleanUnitTitle(fromUnit.label)} a ${cleanUnitTitle(toUnit.label)}`
  );
  document.getElementById("converter-title").textContent = title;
  document.getElementById("how-title").textContent = i18n(
    `How to convert ${cleanUnitTitle(fromUnit.label).toLowerCase()} to ${cleanUnitTitle(toUnit.label).toLowerCase()}?`,
    `¿Cómo convertir ${cleanUnitTitle(fromUnit.label).toLowerCase()} a ${cleanUnitTitle(toUnit.label).toLowerCase()}?`
  );

  const ratio = convertValue(category, 1, fromUnit.key, toUnit.key);
  const formulaLine = document.getElementById("formula-line");
  const formulaChip = document.getElementById("how-formula");
  const howText = document.getElementById("how-text");

  if (category.kind === "temperature") {
    formulaLine.textContent = i18n(
      "formula : uses standard temperature conversion formulas",
      "fórmula : usa fórmulas estándar de conversión de temperatura"
    );
    formulaChip.textContent = i18n(
      `${cleanUnitTitle(toUnit.label).toLowerCase()} from ${cleanUnitTitle(fromUnit.label).toLowerCase()} using canonical temperature equations`,
      `${cleanUnitTitle(toUnit.label).toLowerCase()} desde ${cleanUnitTitle(fromUnit.label).toLowerCase()} usando ecuaciones canónicas de temperatura`
    );
    howText.textContent =
      i18n(
        "Temperature conversion is non-linear, so formulas adapt automatically to the selected unit pair.",
        "La conversión de temperatura es no lineal, por lo que las fórmulas se adaptan automáticamente al par de unidades seleccionado."
      );
  } else if (category.kind === "timezone") {
    const now = new Date();
    const fromOffset = getTimeZoneOffsetMinutes(fromUnit.tz, now) / 60;
    const toOffset = getTimeZoneOffsetMinutes(toUnit.tz, now) / 60;
    formulaLine.textContent = i18n(
      `formula : local target = source + (${formatUtcOffset(toOffset)} - ${formatUtcOffset(fromOffset)})`,
      `fórmula : hora local destino = origen + (${formatUtcOffset(toOffset)} - ${formatUtcOffset(fromOffset)})`
    );
    formulaChip.textContent = i18n(
      `target hour = source hour + (${formatUtcOffset(toOffset)} - ${formatUtcOffset(fromOffset)})`,
      `hora destino = hora origen + (${formatUtcOffset(toOffset)} - ${formatUtcOffset(fromOffset)})`
    );
    howText.textContent =
      i18n(
        "Timezone conversion is DST-aware and uses current IANA city offsets for each selected location.",
        "La conversión de zona horaria considera el horario de verano y usa los desfases IANA actuales para cada ciudad seleccionada."
      );
  } else {
    formulaLine.textContent = i18n(
      `formula : 1 ${fromUnit.key} = ${formatNumber(ratio)} ${toUnit.key}`,
      `fórmula : 1 ${fromUnit.key} = ${formatNumber(ratio)} ${toUnit.key}`
    );
    formulaChip.textContent = `${cleanUnitTitle(toUnit.label).toLowerCase()} = ${cleanUnitTitle(fromUnit.label).toLowerCase()} × ${formatNumber(ratio)}`;
    howText.textContent =
      i18n(
        `To convert from ${cleanUnitTitle(fromUnit.label).toLowerCase()} to ${cleanUnitTitle(toUnit.label).toLowerCase()}, multiply by the conversion ratio.`,
        `Para convertir de ${cleanUnitTitle(fromUnit.label).toLowerCase()} a ${cleanUnitTitle(toUnit.label).toLowerCase()}, multiplica por la razón de conversión.`
      );
  }

  document.getElementById("ref-col-a").textContent = fromUnit.label;
  document.getElementById("ref-col-b").textContent = toUnit.label;

  const body = document.getElementById("reference-body");
  const values = category.kind === "timezone" ? [0, 8, 12, 18] : [1, 5, 10, 25];
  body.innerHTML = values
    .map((rawValue) => {
      const converted = convertValue(category, rawValue, fromUnit.key, toUnit.key);
      return `<tr><td>${formatValueForCategory(category, rawValue)}</td><td>${formatValueForCategory(category, converted)}</td></tr>`;
    })
    .join("");

  if (sampleConverted != null) {
    document.getElementById("converted-value").value = formatValueForCategory(category, sampleConverted);
  }
}

function renderMultiTarget(result) {
  const body = document.getElementById("multi-target-body");
  if (!result) {
    body.innerHTML = `<tr><td colspan="2">${i18n("Results will appear after conversion.", "Los resultados aparecerán después de convertir.")}</td></tr>`;
    return;
  }

  const category = categoriesById.get(result.categoryId);
  if (!category) {
    body.innerHTML = `<tr><td colspan="2">${i18n("Category unavailable.", "Categoría no disponible.")}</td></tr>`;
    return;
  }

  const units = category.units.filter((unit) => unit.key !== result.fromKey);
  units.sort((a, b) => {
    if (a.key === result.toKey) return -1;
    if (b.key === result.toKey) return 1;
    return 0;
  });

  const rows = units.slice(0, 6);
  body.innerHTML = rows
    .map((unit) => {
      const converted = convertValue(category, result.rawValue, result.fromKey, unit.key);
      return `<tr><td>${unit.label}</td><td>${formatValueForCategory(category, converted)}</td></tr>`;
    })
    .join("");
}

function runConversion(recordHistory) {
  const category = getActiveCategory();
  if (!category) return null;

  const fromKey = document.getElementById("from-unit").value;
  const toKey = document.getElementById("to-unit").value;
  const fromUnit = category.unitMap.get(fromKey);
  const toUnit = category.unitMap.get(toKey);
  const rawValue = Number.parseFloat(document.getElementById("main-value").value);

  if (!Number.isFinite(rawValue) || !fromUnit || !toUnit) {
    document.getElementById("converted-value").value = "";
    renderMultiTarget(null);
    return null;
  }

  const converted = convertValue(category, rawValue, fromKey, toKey);
  if (converted == null || Number.isNaN(converted)) {
    document.getElementById("converted-value").value = "";
    renderMultiTarget(null);
    return null;
  }

  updateHeaderAndInfo(category, fromUnit, toUnit, converted);
  const output = `${formatValueForCategory(category, rawValue)} ${fromUnit.label} = ${formatValueForCategory(category, converted)} ${toUnit.label}`;

  if (recordHistory) {
    pushHistory(output);
    const quickResult = document.getElementById("quick-result");
    quickResult.className = "quick-result success";
    quickResult.textContent = output;
  }

  const result = { categoryId: category.id, fromKey, toKey, rawValue, converted, output };
  renderMultiTarget(result);
  updateFavoriteVisual();
  updateUrlFromCurrentState();
  return result;
}

function pushHistory(entryText) {
  state.history.unshift({
    text: entryText,
    time: Date.now()
  });
  if (state.history.length > MAX_HISTORY) {
    state.history = state.history.slice(0, MAX_HISTORY);
  }
  persistHistory();
  renderHistory();
}

function relativeTime(epochMs) {
  const diffMs = Date.now() - epochMs;
  const minutes = Math.floor(diffMs / 60000);
  if (minutes <= 0) return i18n("just now", "justo ahora");
  if (minutes === 1) return i18n("1 min ago", "hace 1 min");
  if (minutes < 60) return i18n(`${minutes} mins ago`, `hace ${minutes} min`);
  const hours = Math.floor(minutes / 60);
  if (hours === 1) return i18n("1 hour ago", "hace 1 hora");
  if (hours < 24) return i18n(`${hours} hours ago`, `hace ${hours} horas`);
  const days = Math.floor(hours / 24);
  if (days === 1) return i18n("1 day ago", "hace 1 día");
  return i18n(`${days} days ago`, `hace ${days} días`);
}

function renderHistory() {
  const list = document.getElementById("history-list");
  if (!list) return;
  if (!state.history.length) {
    list.innerHTML = `<li class="history-empty">${i18n("Conversions will appear here.", "Las conversiones aparecerán aquí.")}</li>`;
    return;
  }

  list.innerHTML = state.history
    .map(
      (entry) => `<li>
        <p class="history-main">${escapeHtml(entry.text)}</p>
        <p class="history-time">${relativeTime(entry.time)}</p>
      </li>`
    )
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function updateFavoriteVisual() {
  const button = document.getElementById("favorite-btn");
  const signature = getCurrentConversionSignature();
  const active = signature ? state.favorites.includes(signature) : false;
  button.classList.toggle("active", active);
  button.textContent = active ? "★" : "☆";
}

function toggleFavoriteCurrent() {
  const signature = getCurrentConversionSignature();
  if (!signature) return;

  const index = state.favorites.indexOf(signature);
  if (index >= 0) {
    state.favorites.splice(index, 1);
  } else {
    state.favorites.unshift(signature);
    if (state.favorites.length > MAX_FAVORITES) {
      state.favorites = state.favorites.slice(0, MAX_FAVORITES);
    }
  }

  persistFavorites();
  updateFavoriteVisual();
}

function getCurrentConversionConfig() {
  const category = getActiveCategory();
  if (!category) return null;
  const fromKey = document.getElementById("from-unit").value;
  const toKey = document.getElementById("to-unit").value;
  const value = Number.parseFloat(document.getElementById("main-value").value);
  const fromUnit = category.unitMap.get(fromKey);
  const toUnit = category.unitMap.get(toKey);
  if (!fromUnit || !toUnit) return null;

  return {
    categoryId: category.id,
    fromKey,
    toKey,
    value: Number.isFinite(value) ? value : category.defaultValue ?? 1,
    name: `${getCategoryLabel(category)}: ${cleanUnitTitle(fromUnit.label)} → ${cleanUnitTitle(toUnit.label)}`
  };
}

function renderWorkflows() {
  const list = document.getElementById("workflow-list");
  if (!list) return;
  if (!state.workflows.length) {
    list.innerHTML = `<li class="history-empty">${i18n("Saved presets will appear here.", "Los ajustes guardados aparecerán aquí.")}</li>`;
    return;
  }

  list.innerHTML = state.workflows
    .map(
      (workflow) => `<li class="workflow-item">
        <div>
          <p class="history-main">${escapeHtml(workflow.name)}</p>
          <p class="history-time">${i18n("Default", "Predeterminado")}: ${escapeHtml(formatNumber(workflow.value))}</p>
        </div>
        <div class="workflow-actions">
          <button type="button" class="workflow-btn" data-action="apply" data-id="${workflow.id}">${i18n("Use", "Usar")}</button>
          <button type="button" class="workflow-btn" data-action="remove" data-id="${workflow.id}">✕</button>
        </div>
      </li>`
    )
    .join("");
}

function saveCurrentWorkflow() {
  const config = getCurrentConversionConfig();
  if (!config) return;

  const workflowId = `${config.categoryId}:${config.fromKey}:${config.toKey}`;
  const existing = state.workflows.find((item) => item.id === workflowId);

  if (existing) {
    existing.value = config.value;
    existing.updatedAt = Date.now();
  } else {
    state.workflows.unshift({
      id: workflowId,
      name: config.name,
      categoryId: config.categoryId,
      fromKey: config.fromKey,
      toKey: config.toKey,
      value: config.value,
      createdAt: Date.now(),
      updatedAt: Date.now()
    });
    if (state.workflows.length > MAX_WORKFLOWS) {
      state.workflows = state.workflows.slice(0, MAX_WORKFLOWS);
    }
  }

  persistWorkflows();
  renderWorkflows();

  const resultLine = document.getElementById("quick-result");
  resultLine.className = "quick-result success";
  resultLine.textContent = i18n("Workflow saved.", "Flujo guardado.");
}

function applyWorkflowById(workflowId) {
  const workflow = state.workflows.find((item) => item.id === workflowId);
  if (!workflow) return;

  setActiveCategory(workflow.categoryId, {
    fromUnit: workflow.fromKey,
    toUnit: workflow.toKey,
    value: workflow.value
  });

  const resultLine = document.getElementById("quick-result");
  resultLine.className = "quick-result success";
  resultLine.textContent = i18n(`Applied workflow: ${workflow.name}`, `Flujo aplicado: ${workflow.name}`);
}

function removeWorkflowById(workflowId) {
  state.workflows = state.workflows.filter((item) => item.id !== workflowId);
  persistWorkflows();
  renderWorkflows();
}

function findCandidates(token) {
  return aliasIndex.get(normalizeAlias(token)) || [];
}

function resolveQuickUnits(fromToken, toToken) {
  const fromCandidates = findCandidates(fromToken);
  const toCandidates = findCandidates(toToken);

  if (!fromCandidates.length || !toCandidates.length) {
    return { error: i18n("Unit not recognized. Try symbols like ft, m, lb, c, gb, usd, la, nyc.", "Unidad no reconocida. Prueba símbolos como ft, m, lb, c, gb, usd, la, nyc.") };
  }

  const matches = [];
  for (const fromItem of fromCandidates) {
    for (const toItem of toCandidates) {
      if (fromItem.categoryId === toItem.categoryId) {
        matches.push({
          categoryId: fromItem.categoryId,
          fromKey: fromItem.unitKey,
          toKey: toItem.unitKey
        });
      }
    }
  }

  const unique = [];
  const seen = new Set();
  for (const item of matches) {
    const key = `${item.categoryId}:${item.fromKey}:${item.toKey}`;
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(item);
  }

  if (!unique.length) {
    return { error: i18n("Those units are from different categories.", "Esas unidades pertenecen a categorías diferentes.") };
  }
  if (unique.length > 1) {
    return { error: i18n("Request is ambiguous. Use explicit unit symbols.", "La solicitud es ambigua. Usa símbolos de unidad explícitos.") };
  }
  return unique[0];
}

function getQuickSuggestions(raw) {
  const trimmed = raw.trim();
  const numericMatch = trimmed.match(/^-?\d+(?:\.\d+)?/);
  const valueToken = numericMatch ? numericMatch[0] : "10";
  const fallbacks = [
    `${valueToken} ft ${QUICK_CONNECTOR} m`,
    `${valueToken} kg ${QUICK_CONNECTOR} lb`,
    `${valueToken} c ${QUICK_CONNECTOR} f`,
    `${valueToken} usd ${QUICK_CONNECTOR} eur`,
    `${valueToken} la ${QUICK_CONNECTOR} london`,
    `${valueToken} gb ${QUICK_CONNECTOR} mb`
  ];

  if (!trimmed) return fallbacks;

  const suggestions = [];
  const structureMatch = trimmed.match(/^(-?\d+(?:\.\d+)?)\s*([^\s]*)\s*(?:to|in|into|->|a|en|hacia)?\s*([^\s]*)$/i);
  if (!structureMatch) {
    return fallbacks;
  }

  const fromPartial = normalizeAlias(structureMatch[2] || "");
  const toPartial = normalizeAlias(structureMatch[3] || "");

  if (fromPartial) {
    const fromCandidates = findCandidates(fromPartial).slice(0, 10);
    for (const fromCandidate of fromCandidates) {
      const category = categoriesById.get(fromCandidate.categoryId);
      const fromUnit = category?.unitMap.get(fromCandidate.unitKey);
      if (!category || !fromUnit) continue;

      const targetUnits = category.units.filter((unit) => {
        if (unit.key === fromUnit.key) return false;
        if (!toPartial) return true;
        const k = normalizeAlias(unit.key);
        const l = normalizeAlias(unit.label);
        return k.startsWith(toPartial) || l.includes(toPartial);
      });

      if (!targetUnits.length) continue;
      suggestions.push(`${valueToken} ${fromUnit.key} ${QUICK_CONNECTOR} ${targetUnits[0].key}`);
    }
  }

  const unique = [];
  const seen = new Set();
  for (const suggestion of [...suggestions, ...fallbacks]) {
    if (seen.has(suggestion)) continue;
    seen.add(suggestion);
    unique.push(suggestion);
    if (unique.length >= 6) break;
  }

  return unique;
}

function renderQuickSuggestions(suggestions) {
  const container = document.getElementById("quick-suggestions");
  state.ui.suggestions = suggestions;
  if (!suggestions.length) {
    container.hidden = true;
    container.innerHTML = "";
    return;
  }

  container.hidden = false;
  container.innerHTML = suggestions
    .map((suggestion) => `<button type="button" class="quick-suggestion-chip" data-suggestion="${escapeHtml(suggestion)}">${escapeHtml(suggestion)}</button>`)
    .join("");
}

function handleQuickSubmit(event) {
  event.preventDefault();
  const input = document.getElementById("quick-input");
  const resultLine = document.getElementById("quick-result");
  const raw = input.value.trim();

  if (!raw) {
    resultLine.className = "quick-result error";
    resultLine.textContent = i18n('Type a request like: "10kg to lbs"', 'Escribe una solicitud como: "10kg a lbs"');
    return;
  }

  const match = raw.match(/^(-?\d+(?:\.\d+)?)\s*([^\s]+)\s*(?:to|in|into|->|a|en|hacia)\s*([^\s]+)$/i);
  if (!match) {
    resultLine.className = "quick-result error";
    resultLine.textContent = i18n(
      "Format not recognized. Use: value unit to unit",
      "Formato no reconocido. Usa: valor unidad a unidad"
    );
    return;
  }

  const value = Number.parseFloat(match[1]);
  const resolved = resolveQuickUnits(match[2], match[3]);
  if (resolved.error) {
    resultLine.className = "quick-result error";
    resultLine.textContent = resolved.error;
    return;
  }

  setActiveCategory(resolved.categoryId, {
    value,
    fromUnit: resolved.fromKey,
    toUnit: resolved.toKey
  });

  const output = runConversion(true);
  if (!output) {
    resultLine.className = "quick-result error";
    resultLine.textContent = i18n("Unable to convert this request.", "No se pudo convertir esta solicitud.");
    return;
  }

  if (resolved.categoryId === "currency") {
    const suffix =
      state.currency.source === "live"
        ? state.currency.date
          ? i18n(` (live rates: ${formatDate(state.currency.date)})`, ` (tasas en vivo: ${formatDate(state.currency.date)})`)
          : i18n(" (live rates)", " (tasas en vivo)")
        : i18n(" (offline fallback rates)", " (tasas de respaldo sin conexión)");
    resultLine.className = "quick-result success";
    resultLine.textContent = `${output.output}${suffix}`;
  }
}

function updateFxStatus() {
  const line = document.getElementById("fx-status");
  const trustLine = document.getElementById("fx-trust");
  line.className = "fx-status";
  trustLine.className = "fx-trust";

  if (state.currency.loading) {
    line.textContent = i18n("Currency rates: updating live data...", "Tasas de moneda: actualizando datos en vivo...");
    trustLine.textContent = i18n("Source: Frankfurter API • Checking freshness...", "Fuente: API Frankfurter • Comprobando actualización...");
    return;
  }

  if (state.currency.source === "live") {
    line.classList.add("live");
    line.textContent = state.currency.date
      ? i18n(
        `Currency rates: live (base USD, market date ${formatDate(state.currency.date)}).`,
        `Tasas de moneda: en vivo (base USD, fecha de mercado ${formatDate(state.currency.date)}).`
      )
      : i18n("Currency rates: live (base USD).", "Tasas de moneda: en vivo (base USD).");

    let stale = false;
    let ageLabel = "";
    if (state.currency.date) {
      const marketDate = new Date(`${state.currency.date}T00:00:00Z`);
      if (!Number.isNaN(marketDate.getTime())) {
        const ageDays = Math.max(0, Math.floor((Date.now() - marketDate.getTime()) / 86400000));
        stale = ageDays > 2;
        ageLabel = ` (${ageDays}d old)`;
      }
    }

    trustLine.classList.add(stale ? "warn" : "good");
    trustLine.textContent = i18n(
      `Source: ${state.currency.provider}${state.currency.date ? ` • Updated ${formatDate(state.currency.date)}` : ""}${ageLabel} • ${stale ? "Stale" : "Fresh"}`,
      `Fuente: ${state.currency.provider}${state.currency.date ? ` • Actualizado ${formatDate(state.currency.date)}` : ""}${ageLabel} • ${stale ? "Desactualizado" : "Reciente"}`
    );
    return;
  }

  if (state.currency.error) {
    line.classList.add("error");
    line.textContent = i18n("Currency rates: offline fallback active.", "Tasas de moneda: respaldo sin conexión activo.");
    trustLine.classList.add("warn");
    trustLine.textContent = i18n(
      "Source: Offline fallback table • Live feed unavailable.",
      "Fuente: tabla de respaldo sin conexión • Fuente en vivo no disponible."
    );
    return;
  }

  line.textContent = i18n(
    "Currency rates: offline preset rates active.",
    "Tasas de moneda: tasas predefinidas sin conexión activas."
  );
  trustLine.classList.add("warn");
  trustLine.textContent = i18n("Source: Offline preset table.", "Fuente: tabla predefinida sin conexión.");
}

function applyCurrencyFactors(usdPerUnitMap) {
  const currency = categoriesById.get("currency");
  if (!currency) return;
  for (const unit of currency.units) {
    const factor = usdPerUnitMap[unit.key];
    if (Number.isFinite(factor) && factor > 0) {
      unit.factor = factor;
    }
  }
}

async function refreshCurrencyRates() {
  if (state.currency.loading) return;
  state.currency.loading = true;
  state.currency.error = "";
  updateFxStatus();

  const currency = categoriesById.get("currency");
  const symbols = currency.units
    .filter((unit) => unit.key !== "usd")
    .map((unit) => unit.key.toUpperCase())
    .join(",");

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(
      `https://api.frankfurter.app/latest?from=USD&symbols=${symbols}`,
      { signal: controller.signal }
    );

    if (!response.ok) {
      throw new Error(`Rates API returned ${response.status}`);
    }

    const payload = await response.json();
    const map = { usd: 1 };

    for (const unit of currency.units) {
      if (unit.key === "usd") continue;
      const rate = payload.rates?.[unit.key.toUpperCase()];
      map[unit.key] = Number.isFinite(rate) && rate > 0 ? 1 / rate : currencyDefaultsUsdPerUnit[unit.key];
    }

    applyCurrencyFactors(map);
    state.currency.source = "live";
    state.currency.date = payload.date || "";
    state.currency.provider = "Frankfurter API";
    state.currency.lastFetchedAt = Date.now();
    state.currency.error = "";
  } catch (error) {
    applyCurrencyFactors(currencyDefaultsUsdPerUnit);
    state.currency.source = "offline";
    state.currency.error = error?.message || "Unable to fetch rates.";
  } finally {
    clearTimeout(timeoutId);
    state.currency.loading = false;
    updateFxStatus();

    if (state.activeCategoryId === "currency") {
      runConversion(false);
    }
  }
}

function buildStateSearchParams() {
  const category = getActiveCategory();
  if (!category) return new URLSearchParams();

  const params = new URLSearchParams();
  const fromKey = document.getElementById("from-unit").value;
  const toKey = document.getElementById("to-unit").value;
  const value = document.getElementById("main-value").value;

  params.set("c", category.id);
  params.set("from", fromKey);
  params.set("to", toKey);
  params.set("v", value);
  return params;
}

function updateUrlFromCurrentState() {
  try {
    const params = buildStateSearchParams();
    const query = params.toString();
    const next = query ? `${window.location.pathname}?${query}` : window.location.pathname;
    window.history.replaceState({}, "", next);
  } catch {
    // Ignore URL update failures.
  }
}

function setRuntimeSeoMeta() {
  const isHttpPage = window.location.protocol === "http:" || window.location.protocol === "https:";
  const pathname = window.location.pathname || "/";
  const canonicalPath = pathname === "/index.html" ? "/" : pathname;
  const canonicalUrl = isHttpPage ? `${window.location.origin}${canonicalPath}` : "/";
  const enUrl = isHttpPage ? `${window.location.origin}/` : "/";
  const esUrl = isHttpPage ? `${window.location.origin}/index-es.html` : "/index-es.html";

  const canonicalLink = document.getElementById("canonical-link");
  if (canonicalLink) {
    canonicalLink.setAttribute("href", canonicalUrl);
  }

  const hreflangUs = document.getElementById("hreflang-en-us");
  if (hreflangUs) {
    hreflangUs.setAttribute("href", enUrl);
  }

  const hreflangEs = document.getElementById("hreflang-es");
  if (hreflangEs) {
    hreflangEs.setAttribute("href", esUrl);
  }

  const hreflangDefault = document.getElementById("hreflang-default");
  if (hreflangDefault) {
    hreflangDefault.setAttribute("href", enUrl);
  }

  const ogUrl = document.getElementById("og-url");
  if (ogUrl) {
    ogUrl.setAttribute("content", canonicalUrl);
  }

  const schemaNode = document.getElementById("schema-webapp");
  if (!schemaNode) return;

  const socialProfiles = Array.from(document.querySelectorAll(".social-profile-link"))
    .map((link) => link.href)
    .filter(Boolean)
    .slice(0, 8);

  const schemaPayload = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "QuickToolApp",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    url: canonicalUrl,
    description:
      i18n(
        "Convert units, currencies, and time zones with utility tools for batch workflows, loan estimates, and design contrast checks.",
        "Convierte unidades, monedas y zonas horarias con herramientas para conversiones por lote, estimaciones de préstamos y comprobación de contraste de diseño."
      ),
    inLanguage: IS_ES ? "es" : "en-US",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
  };

  if (socialProfiles.length) {
    schemaPayload.sameAs = socialProfiles;
  }

  schemaNode.textContent = JSON.stringify(schemaPayload);
}

function buildShareUrl() {
  const url = new URL(window.location.href);
  const params = buildStateSearchParams();
  url.search = params.toString();
  return url.toString();
}

function applyStateFromUrl() {
  try {
    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get("c");
    if (!categoryId || !categoriesById.has(categoryId)) {
      return false;
    }

    const category = categoriesById.get(categoryId);
    const from = params.get("from");
    const to = params.get("to");
    const rawValue = params.get("v");
    const parsedValue = rawValue == null ? NaN : Number.parseFloat(rawValue);

    setActiveCategory(categoryId, {
      fromUnit: from && category.unitMap.has(from) ? from : undefined,
      toUnit: to && category.unitMap.has(to) ? to : undefined,
      value: Number.isFinite(parsedValue) ? parsedValue : undefined
    });

    return true;
  } catch {
    return false;
  }
}

function parseBatchValue(raw, category) {
  const trimmed = String(raw || "").trim();
  if (!trimmed) return null;

  if (category.kind === "timezone") {
    const hhmm = trimmed.match(/^(\d{1,2}):(\d{2})$/);
    if (hhmm) {
      const hour = Number.parseInt(hhmm[1], 10);
      const minute = Number.parseInt(hhmm[2], 10);
      if (hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59) {
        return hour + minute / 60;
      }
    }
  }

  const numeric = Number.parseFloat(trimmed);
  return Number.isFinite(numeric) ? numeric : null;
}

function runBatchConversion() {
  const category = getActiveCategory();
  const fromKey = document.getElementById("from-unit").value;
  const toKey = document.getElementById("to-unit").value;
  const fromUnit = category?.unitMap.get(fromKey);
  const toUnit = category?.unitMap.get(toKey);
  const input = document.getElementById("batch-input").value;
  const output = document.getElementById("batch-output");

  if (!category || !fromUnit || !toUnit) {
    output.textContent = i18n("Choose valid units first.", "Primero selecciona unidades válidas.");
    return;
  }

  const lines = input
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, 200);

  if (!lines.length) {
    output.textContent = i18n(
      "Add one value per line and run batch.",
      "Agrega un valor por línea y ejecuta el lote."
    );
    return;
  }

  const rendered = lines.map((line) => {
    const value = parseBatchValue(line, category);
    if (value == null) {
      return `${line} -> ${i18n("invalid", "inválido")}`;
    }

    const converted = convertValue(category, value, fromKey, toKey);
    if (converted == null || Number.isNaN(converted)) {
      return `${line} -> ${i18n("invalid", "inválido")}`;
    }

    return `${formatValueForCategory(category, value)} -> ${formatValueForCategory(category, converted)}`;
  });

  output.textContent = rendered.join("\n");
}

function formatCurrency(value) {
  if (!Number.isFinite(value)) return "$0.00";
  return value.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2
  });
}

function calculateLoan(loanAmount, annualRatePercent, years) {
  if (!Number.isFinite(loanAmount) || !Number.isFinite(annualRatePercent) || !Number.isFinite(years)) {
    return null;
  }
  if (loanAmount <= 0 || years <= 0 || annualRatePercent < 0) {
    return null;
  }

  const months = years * 12;
  const monthlyRate = annualRatePercent / 100 / 12;

  let monthlyPayment;
  if (monthlyRate === 0) {
    monthlyPayment = loanAmount / months;
  } else {
    monthlyPayment =
      (loanAmount * monthlyRate) / (1 - (1 + monthlyRate) ** -months);
  }

  const totalPaid = monthlyPayment * months;
  const totalInterest = totalPaid - loanAmount;

  return {
    monthlyPayment,
    totalInterest,
    totalPaid
  };
}

function renderLoanCalculator() {
  const amountInput = document.getElementById("loan-amount");
  const rateInput = document.getElementById("loan-rate");
  const yearsInput = document.getElementById("loan-years");
  const monthlyEl = document.getElementById("loan-monthly");
  const interestEl = document.getElementById("loan-interest");
  const totalEl = document.getElementById("loan-total");
  const noteEl = document.getElementById("loan-note");

  if (!amountInput || !rateInput || !yearsInput || !monthlyEl || !interestEl || !totalEl || !noteEl) {
    return;
  }

  const amount = Number.parseFloat(amountInput.value);
  const rate = Number.parseFloat(rateInput.value);
  const years = Number.parseFloat(yearsInput.value);
  const result = calculateLoan(amount, rate, years);

  if (!result) {
    monthlyEl.textContent = "$0.00";
    interestEl.textContent = "$0.00";
    totalEl.textContent = "$0.00";
    noteEl.textContent = i18n(
      "Enter valid values to calculate a payment estimate.",
      "Ingresa valores válidos para calcular una estimación de pago."
    );
    return;
  }

  monthlyEl.textContent = formatCurrency(result.monthlyPayment);
  interestEl.textContent = formatCurrency(result.totalInterest);
  totalEl.textContent = formatCurrency(result.totalPaid);
  noteEl.textContent = i18n(
    "Estimates exclude taxes, insurance, and fees.",
    "Las estimaciones no incluyen impuestos, seguros ni cargos."
  );
}

function bindLoanCalculator() {
  const amountInput = document.getElementById("loan-amount");
  const rateInput = document.getElementById("loan-rate");
  const yearsInput = document.getElementById("loan-years");
  const calcButton = document.getElementById("loan-calc-btn");
  const resetButton = document.getElementById("loan-reset-btn");

  if (!amountInput || !rateInput || !yearsInput || !calcButton || !resetButton) {
    return;
  }

  amountInput.value = `${state.loan.amount}`;
  rateInput.value = `${state.loan.rate}`;
  yearsInput.value = `${state.loan.years}`;

  const run = () => {
    renderLoanCalculator();
    const amount = Number.parseFloat(amountInput.value);
    const rate = Number.parseFloat(rateInput.value);
    const years = Number.parseFloat(yearsInput.value);

    if (Number.isFinite(amount) && amount > 0) state.loan.amount = amount;
    if (Number.isFinite(rate) && rate >= 0) state.loan.rate = rate;
    if (Number.isFinite(years) && years > 0) state.loan.years = years;
    persistLoan();
  };

  calcButton.addEventListener("click", run);
  amountInput.addEventListener("input", run);
  rateInput.addEventListener("input", run);
  yearsInput.addEventListener("input", run);

  resetButton.addEventListener("click", () => {
    amountInput.value = "250000";
    rateInput.value = "6.5";
    yearsInput.value = "30";
    state.loan.amount = 250000;
    state.loan.rate = 6.5;
    state.loan.years = 30;
    persistLoan();
    run();
  });

  run();
}

function bindConverterControls() {
  const runConversionDebounced = debounce(() => {
    runConversion(false);
  }, 110);

  document.getElementById("main-value").addEventListener("input", runConversionDebounced);

  document.getElementById("from-unit").addEventListener("change", () => {
    runConversion(false);
    updateFavoriteVisual();
  });

  document.getElementById("to-unit").addEventListener("change", () => {
    runConversion(false);
    updateFavoriteVisual();
  });

  document.getElementById("swap-btn").addEventListener("click", () => {
    const fromSelect = document.getElementById("from-unit");
    const toSelect = document.getElementById("to-unit");
    const current = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = current;
    runConversion(false);
    updateFavoriteVisual();
  });

  document.getElementById("convert-btn").addEventListener("click", () => {
    runConversion(true);
  });

  document.getElementById("copy-btn").addEventListener("click", async () => {
    const result = runConversion(false);
    if (!result || !navigator.clipboard?.writeText) return;

    await navigator.clipboard.writeText(result.output);
    const quickResult = document.getElementById("quick-result");
    quickResult.className = "quick-result success";
    quickResult.textContent = i18n(
      "Copied current conversion to clipboard.",
      "Conversión actual copiada al portapapeles."
    );
  });

  document.getElementById("reset-btn").addEventListener("click", () => {
    const category = getActiveCategory();
    setActiveCategory(category.id);
    const quickResult = document.getElementById("quick-result");
    quickResult.className = "quick-result";
    quickResult.textContent = i18n("Result appears here.", "El resultado aparece aquí.");
  });

  document.getElementById("favorite-btn").addEventListener("click", () => {
    toggleFavoriteCurrent();
  });

  document.getElementById("share-btn").addEventListener("click", async () => {
    const url = buildShareUrl();
    const quickResult = document.getElementById("quick-result");

    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
      quickResult.className = "quick-result success";
      quickResult.textContent = i18n(
        "Share link copied to clipboard.",
        "Enlace para compartir copiado al portapapeles."
      );
      return;
    }

    quickResult.className = "quick-result";
    quickResult.textContent = url;
  });

  const clearHistoryButton = document.getElementById("clear-history-btn");
  if (clearHistoryButton) {
    clearHistoryButton.addEventListener("click", () => {
      state.history = [];
      persistHistory();
      renderHistory();
    });
  }

  document.getElementById("refresh-multi-target").addEventListener("click", () => {
    runConversion(false);
  });

  document.getElementById("run-batch-btn").addEventListener("click", () => {
    runBatchConversion();
  });

  document.getElementById("batch-input").addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
      runBatchConversion();
    }
  });

  const saveWorkflowButton = document.getElementById("save-workflow-btn");
  if (saveWorkflowButton) {
    saveWorkflowButton.addEventListener("click", () => {
      saveCurrentWorkflow();
    });
  }

  const workflowList = document.getElementById("workflow-list");
  if (workflowList) {
    workflowList.addEventListener("click", (event) => {
      const button = event.target.closest(".workflow-btn");
      if (!button) return;

      const { action, id } = button.dataset;
      if (!id) return;

      if (action === "apply") {
        applyWorkflowById(id);
      }

      if (action === "remove") {
        removeWorkflowById(id);
      }
    });
  }
}

function bindQuickInputHelpers() {
  const quickInput = document.getElementById("quick-input");
  const suggestionContainer = document.getElementById("quick-suggestions");
  const updateSuggestions = debounce(() => {
    const suggestions = getQuickSuggestions(quickInput.value);
    renderQuickSuggestions(suggestions);
  }, 100);

  quickInput.addEventListener("input", updateSuggestions);

  quickInput.addEventListener("focus", () => {
    renderQuickSuggestions(getQuickSuggestions(quickInput.value));
  });

  quickInput.addEventListener("blur", () => {
    setTimeout(() => {
      suggestionContainer.hidden = true;
    }, 100);
  });

  suggestionContainer.addEventListener("click", (event) => {
    const button = event.target.closest(".quick-suggestion-chip");
    if (!button) return;

    const suggestion = button.dataset.suggestion;
    if (!suggestion) return;

    quickInput.value = suggestion;
    renderQuickSuggestions([]);
    document.getElementById("quick-form").requestSubmit();
  });
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function normalizeHue(hue) {
  const normalized = hue % 360;
  return normalized < 0 ? normalized + 360 : normalized;
}

function normalizeHexColor(value) {
  const raw = String(value || "").trim();
  if (/^#[0-9a-fA-F]{6}$/.test(raw)) return raw.toUpperCase();
  if (/^[0-9a-fA-F]{6}$/.test(raw)) return `#${raw.toUpperCase()}`;
  return null;
}

function hexToRgb(hex) {
  const normalized = normalizeHexColor(hex);
  if (!normalized) return null;
  const cleaned = normalized.slice(1);
  if (!/^[0-9a-fA-F]{6}$/.test(cleaned)) return null;
  return {
    r: Number.parseInt(cleaned.slice(0, 2), 16),
    g: Number.parseInt(cleaned.slice(2, 4), 16),
    b: Number.parseInt(cleaned.slice(4, 6), 16)
  };
}

function rgbToHex(r, g, b) {
  const toHex = (channel) =>
    Math.max(0, Math.min(255, Math.round(channel)))
      .toString(16)
      .padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function rgbToHsl(r, g, b) {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const delta = max - min;
  let hue = 0;

  if (delta !== 0) {
    if (max === rn) hue = ((gn - bn) / delta) % 6;
    else if (max === gn) hue = (bn - rn) / delta + 2;
    else hue = (rn - gn) / delta + 4;
  }

  hue = normalizeHue(hue * 60);
  const lightness = (max + min) / 2;
  const saturation = delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));

  return {
    h: hue,
    s: saturation * 100,
    l: lightness * 100
  };
}

function hslToRgb(h, s, l) {
  const hue = normalizeHue(h);
  const sat = clamp(s, 0, 100) / 100;
  const light = clamp(l, 0, 100) / 100;
  const c = (1 - Math.abs(2 * light - 1)) * sat;
  const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
  const m = light - c / 2;

  let r = 0;
  let g = 0;
  let b = 0;

  if (hue < 60) [r, g, b] = [c, x, 0];
  else if (hue < 120) [r, g, b] = [x, c, 0];
  else if (hue < 180) [r, g, b] = [0, c, x];
  else if (hue < 240) [r, g, b] = [0, x, c];
  else if (hue < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];

  return {
    r: (r + m) * 255,
    g: (g + m) * 255,
    b: (b + m) * 255
  };
}

function shiftColor(baseHsl, hueShift, saturationShift, lightnessShift) {
  const rgb = hslToRgb(
    baseHsl.h + hueShift,
    clamp(baseHsl.s + saturationShift, 14, 95),
    clamp(baseHsl.l + lightnessShift, 10, 93)
  );
  return rgbToHex(rgb.r, rgb.g, rgb.b);
}

function seededUnit(seed) {
  const value = Math.sin(seed * 12.9898) * 43758.5453123;
  return value - Math.floor(value);
}

function seededRange(seed, range) {
  return (seededUnit(seed) * 2 - 1) * range;
}

function buildHarmonyPalette(baseHex, scheme) {
  const normalized = normalizeHexColor(baseHex) || "#3B82F6";
  const baseRgb = hexToRgb(normalized);
  if (!baseRgb) return [];

  const baseHsl = rgbToHsl(baseRgb.r, baseRgb.g, baseRgb.b);
  const presets = {
    monochromatic: [
      { name: "Primary", role: "main accent", h: 0, s: 0, l: 0 },
      { name: "Deep Shade", role: "strong text", h: 0, s: 8, l: -22 },
      { name: "Core Shade", role: "active controls", h: 0, s: 5, l: -10 },
      { name: "Soft Tint", role: "light containers", h: 0, s: -14, l: 18 },
      { name: "Surface Tint", role: "background layer", h: 0, s: -24, l: 30 }
    ],
    analogous: [
      { name: "Analog Left", role: "secondary accent", h: -30, s: 6, l: 2 },
      { name: "Near Left", role: "support action", h: -15, s: 4, l: 10 },
      { name: "Primary", role: "main accent", h: 0, s: 0, l: 0 },
      { name: "Near Right", role: "highlight", h: 15, s: 4, l: 8 },
      { name: "Analog Right", role: "soft highlight", h: 30, s: -8, l: 20 }
    ],
    complementary: [
      { name: "Primary", role: "main accent", h: 0, s: 0, l: 0 },
      { name: "Primary Tint", role: "buttons / states", h: 0, s: -10, l: 22 },
      { name: "Complement", role: "contrast accent", h: 180, s: 8, l: -4 },
      { name: "Complement Tint", role: "support chips", h: 180, s: -4, l: 16 },
      { name: "Complement Surface", role: "background accent", h: 180, s: -14, l: 28 }
    ],
    "split-complementary": [
      { name: "Primary", role: "main accent", h: 0, s: 0, l: 0 },
      { name: "Split A", role: "balance accent", h: 150, s: 6, l: 0 },
      { name: "Split B", role: "balance accent", h: 210, s: 6, l: 0 },
      { name: "Split A Tint", role: "support surfaces", h: 150, s: -8, l: 18 },
      { name: "Split B Tint", role: "support surfaces", h: 210, s: -8, l: 18 }
    ],
    triadic: [
      { name: "Primary", role: "main accent", h: 0, s: 0, l: 0 },
      { name: "Triad B", role: "secondary accent", h: 120, s: 8, l: -2 },
      { name: "Triad C", role: "secondary accent", h: 240, s: 8, l: -2 },
      { name: "Triad B Tint", role: "light surface", h: 120, s: -10, l: 16 },
      { name: "Triad C Tint", role: "light surface", h: 240, s: -10, l: 16 }
    ],
    tetradic: [
      { name: "Primary", role: "main accent", h: 0, s: 0, l: 0 },
      { name: "Tetrad B", role: "accent pair", h: 60, s: 6, l: 0 },
      { name: "Tetrad C", role: "accent pair", h: 180, s: 6, l: 0 },
      { name: "Tetrad D", role: "accent pair", h: 240, s: 6, l: 0 },
      { name: "Primary Tint", role: "surface blend", h: 0, s: -16, l: 22 }
    ],
    square: [
      { name: "Square A", role: "primary accent", h: 0, s: 0, l: 0 },
      { name: "Square B", role: "other accent", h: 90, s: 8, l: -2 },
      { name: "Square C", role: "other accent", h: 180, s: 8, l: -2 },
      { name: "Square D", role: "other accent", h: 270, s: 8, l: -2 },
      { name: "Square Tint", role: "soft surface", h: 270, s: -12, l: 20 }
    ],
    compound: [
      { name: "Primary", role: "main accent", h: 0, s: 0, l: 0 },
      { name: "Compound A", role: "warm support", h: 30, s: 6, l: 2 },
      { name: "Compound B", role: "cool support", h: 210, s: 8, l: -2 },
      { name: "Compound C", role: "contrast support", h: 165, s: 4, l: 8 },
      { name: "Compound Tint", role: "surface blend", h: 30, s: -10, l: 20 }
    ]
  };

  const selected = presets[scheme] || presets.monochromatic;
  const intensity = state.palette.generation > 0 ? 1 : 0;

  return selected.map((entry, index) => {
    const seed = state.palette.generation * 101 + index * 37 + 17;
    const hueJitter = intensity ? seededRange(seed, 9) : 0;
    const satJitter = intensity ? seededRange(seed + 7, 7) : 0;
    const lightJitter = intensity ? seededRange(seed + 13, 8) : 0;

    const hex =
      entry.h === 0 && entry.s === 0 && entry.l === 0
        ? normalized
        : shiftColor(baseHsl, entry.h + hueJitter, entry.s + satJitter, entry.l + lightJitter);

    return { ...entry, hex };
  });
}

function formatSchemeLabel(scheme) {
  return String(scheme)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function channelLinear(channel) {
  const value = channel / 255;
  return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}

function luminance(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;
  return 0.2126 * channelLinear(rgb.r) + 0.7152 * channelLinear(rgb.g) + 0.0722 * channelLinear(rgb.b);
}

function contrastRatio(foreground, background) {
  const l1 = luminance(foreground);
  const l2 = luminance(background);
  const bright = Math.max(l1, l2);
  const dark = Math.min(l1, l2);
  return (bright + 0.05) / (dark + 0.05);
}

function recommendContrastPair(palette, primaryHex) {
  const normalizedPrimary = normalizeHexColor(primaryHex) || "#3B82F6";
  const paletteColors = Array.from(
    new Set(
      palette
        .map((entry) => normalizeHexColor(entry.hex))
        .filter(Boolean)
    )
  );

  const paletteSet = new Set(paletteColors);
  const expandedTextCandidates = Array.from(new Set([...paletteColors, "#0F172A", "#111827", "#FFFFFF"]));
  const expandedBgCandidates = Array.from(new Set([...paletteColors, "#F8FAFC", "#0B1220"]));

  function findBest(textCandidates, bgCandidates, options = {}) {
    let best = null;

    for (const textColor of textCandidates) {
      for (const bgColor of bgCandidates) {
        if (textColor === bgColor) continue;
        const ratio = contrastRatio(textColor, bgColor);
        if (options.requireGood && ratio < 4.5) continue;
        if (options.requirePalette && !paletteSet.has(textColor) && !paletteSet.has(bgColor)) continue;

        const paletteCoverage = (paletteSet.has(textColor) ? 1 : 0) + (paletteSet.has(bgColor) ? 1 : 0);
        const primaryUse = textColor === normalizedPrimary || bgColor === normalizedPrimary ? 1 : 0;
        const score = ratio + paletteCoverage * 0.7 + primaryUse * 0.25;

        if (!best || score > best.score) {
          best = { text: textColor, background: bgColor, ratio, score };
        }
      }
    }

    return best;
  }

  const recommended =
    findBest(paletteColors, paletteColors, { requireGood: true }) ||
    findBest(expandedTextCandidates, expandedBgCandidates, { requireGood: true, requirePalette: true }) ||
    findBest(paletteColors, paletteColors) ||
    findBest(expandedTextCandidates, expandedBgCandidates) || {
      text: "#0F172A",
      background: "#F8FAFC",
      ratio: contrastRatio("#0F172A", "#F8FAFC"),
      score: 0
    };

  return {
    text: recommended.text,
    background: recommended.background,
    ratio: recommended.ratio
  };
}

function slugifyToken(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getPaletteEntriesForExport() {
  const palette = state.palette.current?.length
    ? state.palette.current
    : buildHarmonyPalette(state.palette.primary, state.palette.scheme);

  return palette.map((entry, index) => ({
    name: entry.name,
    role: entry.role,
    hex: entry.hex,
    token: slugifyToken(entry.name) || `color-${index + 1}`
  }));
}

function buildCssExport(entries) {
  const lines = [":root {"];
  for (const entry of entries) {
    lines.push(`  --${entry.token}: ${entry.hex};`);
  }
  lines.push("}");
  return lines.join("\n");
}

function buildTailwindExport(entries) {
  const colorLines = entries
    .map((entry) => `        "${entry.token}": "${entry.hex}",`)
    .join("\n");

  return [
    "export default {",
    "  theme: {",
    "    extend: {",
    "      colors: {",
    "        toolsite: {",
    colorLines,
    "        }",
    "      }",
    "    }",
    "  }",
    "};"
  ].join("\n");
}

function buildTokenJsonExport(entries) {
  const color = {};
  for (const entry of entries) {
    color[entry.token] = {
      value: entry.hex,
      role: entry.role,
      type: "color"
    };
  }

  return JSON.stringify({
    palette: {
      scheme: state.palette.scheme,
      primary: state.palette.primary
    },
    color
  }, null, 2);
}

function buildFigmaExport(entries) {
  return JSON.stringify(
    {
      name: i18n("QuickToolApp Palette", "Paleta de QuickToolApp"),
      mode: "Default",
      variables: entries.map((entry) => ({
        name: entry.name,
        key: entry.token,
        value: entry.hex,
        description: entry.role,
        type: "COLOR"
      }))
    },
    null,
    2
  );
}

async function copyExportText(text, label) {
  const status = document.getElementById("export-status");

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      status.textContent = i18n(
        `${label} copied to clipboard.`,
        `${label} copiado al portapapeles.`
      );
      return;
    }

    console.log(`[${label}]\n${text}`);
    status.textContent = i18n(
      `${label} logged to console (clipboard unavailable).`,
      `${label} enviado a la consola (portapapeles no disponible).`
    );
  } catch {
    status.textContent = i18n(
      `${label} export failed. Try again.`,
      `La exportación de ${label} falló. Inténtalo de nuevo.`
    );
  }
}

function bindExportButtons() {
  document.getElementById("export-css-btn").addEventListener("click", async () => {
    const entries = getPaletteEntriesForExport();
    await copyExportText(buildCssExport(entries), "CSS variables");
  });

  document.getElementById("export-tailwind-btn").addEventListener("click", async () => {
    const entries = getPaletteEntriesForExport();
    await copyExportText(buildTailwindExport(entries), "Tailwind config");
  });

  document.getElementById("export-json-btn").addEventListener("click", async () => {
    const entries = getPaletteEntriesForExport();
    await copyExportText(buildTokenJsonExport(entries), "JSON tokens");
  });

  document.getElementById("export-figma-btn").addEventListener("click", async () => {
    const entries = getPaletteEntriesForExport();
    await copyExportText(buildFigmaExport(entries), "Figma JSON");
  });
}

function renderPalette() {
  const container = document.getElementById("palette-swatches");
  const palette = buildHarmonyPalette(state.palette.primary, state.palette.scheme);
  state.palette.current = palette;

  container.innerHTML = palette
    .map(
      (entry) => `
      <div class="palette-row">
        <span class="palette-dot" style="background:${entry.hex}"></span>
        <div>
          <p class="palette-name">${entry.name}</p>
          <p class="palette-note">${entry.hex}</p>
        </div>
        <p class="palette-role">${entry.role}</p>
      </div>`
    )
    .join("");

  const recommendation = recommendContrastPair(palette, state.palette.primary);
  document.getElementById("contrast-text").value = recommendation.text;
  document.getElementById("contrast-bg").value = recommendation.background;

  const recommendationLine = document.getElementById("contrast-recommendation");
  if (recommendationLine) {
    const rating = recommendation.ratio >= 4.5
      ? i18n("Good", "Bueno")
      : recommendation.ratio >= 3
        ? i18n("Mid", "Medio")
        : i18n("Bad", "Bajo");
    recommendationLine.textContent = i18n(
      `Recommended (${rating}) for ${formatSchemeLabel(state.palette.scheme)}: ${recommendation.text} on ${recommendation.background}`,
      `Recomendado (${rating}) para ${formatSchemeLabel(state.palette.scheme)}: ${recommendation.text} sobre ${recommendation.background}`
    );
  }

  updateContrastPreview();
}

function setPalettePrimary(rawColor) {
  const normalized = normalizeHexColor(rawColor);
  if (!normalized) return false;
  state.palette.primary = normalized;
  document.getElementById("palette-primary").value = normalized;
  document.getElementById("palette-primary-hex").value = normalized;
  persistPalette();
  return true;
}

function bindPaletteControls() {
  const colorInput = document.getElementById("palette-primary");
  const hexInput = document.getElementById("palette-primary-hex");
  const schemeSelect = document.getElementById("palette-scheme");
  const generateButton = document.getElementById("generate-palette");

  schemeSelect.value = state.palette.scheme;
  setPalettePrimary(state.palette.primary);

  colorInput.addEventListener("input", () => {
    if (setPalettePrimary(colorInput.value)) {
      state.palette.generation = 0;
      renderPalette();
    }
  });

  hexInput.addEventListener("input", () => {
    const normalized = normalizeHexColor(hexInput.value);
    if (!normalized) return;
    setPalettePrimary(normalized);
    state.palette.generation = 0;
    renderPalette();
  });

  hexInput.addEventListener("blur", () => {
    if (!setPalettePrimary(hexInput.value)) {
      hexInput.value = state.palette.primary;
      return;
    }
    state.palette.generation = 0;
    renderPalette();
  });

  schemeSelect.addEventListener("change", () => {
    state.palette.scheme = schemeSelect.value;
    state.palette.generation = 0;
    persistPalette();
    renderPalette();
  });

  generateButton.addEventListener("click", () => {
    state.palette.scheme = schemeSelect.value;
    if (!setPalettePrimary(hexInput.value)) {
      setPalettePrimary(state.palette.primary);
    }
    state.palette.generation += 1;
    persistPalette();
    renderPalette();
  });
}

function updateContrastPreview() {
  const textInput = document.getElementById("contrast-text");
  const bgInput = document.getElementById("contrast-bg");
  const textColor = normalizeHexColor(textInput.value) || "#1E3A8A";
  const bgColor = normalizeHexColor(bgInput.value) || "#DBEAFE";
  const ratio = contrastRatio(textColor, bgColor);

  const ratioElement = document.getElementById("contrast-ratio");
  const wcagElement = document.getElementById("contrast-wcag");
  const livePanel = document.getElementById("contrast-live-panel");
  const sample = document.getElementById("contrast-live-sample");

  let rating = i18n("Bad", "Bajo");
  let ratingColor = "#991b1b";
  let borderColor = "rgba(153, 27, 27, 0.35)";
  let badgeBg = "rgba(254, 242, 242, 0.82)";

  if (ratio >= 4.5) {
    rating = i18n("Good", "Bueno");
    ratingColor = "#166534";
    borderColor = "rgba(22, 101, 52, 0.35)";
    badgeBg = "rgba(236, 253, 245, 0.82)";
  } else if (ratio >= 3) {
    rating = i18n("Mid", "Medio");
    ratingColor = "#9a3412";
    borderColor = "rgba(154, 52, 18, 0.35)";
    badgeBg = "rgba(255, 247, 237, 0.82)";
  }

  const normalAA = ratio >= 4.5;
  const normalAAA = ratio >= 7;
  const largeAA = ratio >= 3;
  const largeAAA = ratio >= 4.5;

  textInput.value = textColor;
  bgInput.value = bgColor;

  ratioElement.textContent = rating;
  ratioElement.style.color = ratingColor;
  ratioElement.style.borderColor = borderColor;
  ratioElement.style.background = badgeBg;

  wcagElement.textContent = i18n(
    `WCAG: Normal ${normalAA ? "AA pass" : "AA fail"}${normalAAA ? " / AAA pass" : ""} • Large ${largeAA ? "AA pass" : "AA fail"}${largeAAA ? " / AAA pass" : ""}`,
    `WCAG: Normal ${normalAA ? "AA aprueba" : "AA falla"}${normalAAA ? " / AAA aprueba" : ""} • Grande ${largeAA ? "AA aprueba" : "AA falla"}${largeAAA ? " / AAA aprueba" : ""}`
  );
  wcagElement.style.color = normalAA ? "#166534" : largeAA ? "#9a3412" : "#991b1b";

  livePanel.style.backgroundColor = bgColor;
  sample.style.color = textColor;
}

function initialize() {
  setRuntimeSeoMeta();
  loadPersistedState();
  renderCategoryChips();
  bindConverterControls();
  bindQuickInputHelpers();
  bindLoanCalculator();

  document.getElementById("quick-form").addEventListener("submit", handleQuickSubmit);

  if (!applyStateFromUrl()) {
    setActiveCategory("length");
  }

  updateFxStatus();

  runWhenIdle(() => {
    renderHistory();
    renderWorkflows();
    refreshCurrencyRates();
    setInterval(refreshCurrencyRates, 15 * 60 * 1000);
    bindPaletteControls();
    bindExportButtons();
    document.getElementById("contrast-text").addEventListener("input", updateContrastPreview);
    document.getElementById("contrast-bg").addEventListener("input", updateContrastPreview);
    renderPalette();
    runBatchConversion();
    renderQuickSuggestions(getQuickSuggestions(""));
  });
}

initialize();
