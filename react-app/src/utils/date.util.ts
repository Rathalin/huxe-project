export const now = new Date();
export const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
export const todayDateString = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
export const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
export const endOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59)
export const beginningOfThisWeek = new Date(endOfToday.getFullYear(), endOfToday.getMonth(), endOfToday.getDate() + 1 - (endOfToday.getDay()));

export function getDaysPerMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}
