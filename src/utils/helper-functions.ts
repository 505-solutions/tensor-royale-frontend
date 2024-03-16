export function getDate(timestamp: number) {
  const date = new Date(timestamp);
  return date.toDateString();
}

export function dateToTimestamp(date: any) {
  return Math.floor(new Date(date).getTime() / 1000);
}
