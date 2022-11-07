export const now = new Date();
export const todayDateString = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
export const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
export const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

export function getDaysPerMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}
