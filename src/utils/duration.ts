/**
 * Calculates a human-readable "X years Y months" label from a duration
 * string already formatted as "MMM YYYY – MMM YYYY" (the en dash used
 * throughout resume.ts). Never reads the current date — the label is
 * derived strictly from the two stored dates, so it stays correct for
 * historical roles without ever implying an entry is ongoing.
 */

const MONTH_INDEX: Record<string, number> = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

interface ParsedMonth {
  year: number;
  month: number;
}

function parseMonthToken(token: string): ParsedMonth | null {
  const match = /^([A-Za-z]{3})\s+(\d{4})$/.exec(token.trim());
  if (!match) return null;

  const month = MONTH_INDEX[match[1]!.toLowerCase()];
  if (month === undefined) return null;

  return { year: Number(match[2]), month };
}

function formatUnit(value: number, unit: string): string {
  return `${value} ${unit}${value === 1 ? '' : 's'}`;
}

export function calculateDurationLabel(duration: string): string | null {
  const [startToken, endToken] = duration.split('–');
  if (!startToken || !endToken) return null;

  const start = parseMonthToken(startToken);
  const end = parseMonthToken(endToken);
  if (!start || !end) return null;

  const totalMonths = (end.year - start.year) * 12 + (end.month - start.month);
  if (totalMonths <= 0) return null;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(formatUnit(years, 'year'));
  if (months > 0) parts.push(formatUnit(months, 'month'));

  return parts.length > 0 ? parts.join(' ') : null;
}
