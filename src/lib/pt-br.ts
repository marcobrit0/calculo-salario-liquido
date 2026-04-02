export function parsePtBrNumber(value?: string | string[]) {
  const rawValue = Array.isArray(value) ? value[0] : value;
  const sanitized = (rawValue ?? "").trim().replace(/\s+/g, "");

  if (!sanitized) {
    return 0;
  }

  const normalized =
    sanitized.includes(",") && sanitized.includes(".")
      ? sanitized.replace(/\./g, "").replace(",", ".")
      : sanitized.replace(",", ".");
  const numeric = Number(normalized.replace(/[^\d.-]/g, ""));

  return Number.isFinite(numeric) ? numeric : 0;
}

export function parseNonNegativeInteger(value?: string | string[]) {
  const rawValue = Array.isArray(value) ? value[0] : value;
  const numeric = Number.parseInt((rawValue ?? "").replace(/[^\d-]/g, ""), 10);

  return Number.isFinite(numeric) ? Math.max(0, numeric) : 0;
}

export function formatPtBrCurrencyInput(value: number) {
  return value
    ? value.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : "";
}

export function formatPtBrIntegerInput(value: number) {
  return String(Math.max(0, Math.trunc(value)));
}
