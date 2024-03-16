export function getDate(timestamp: number) {
  const date = new Date(timestamp);
  return date.toDateString();
}
