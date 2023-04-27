export function getMonthFromDate(date: string) {
  return Number(date.substring(date.indexOf('.') + 2, date.lastIndexOf('.'))) - 1;
}
