function padTo2Digits(num: number) {
  return num.toString().padStart(2, "0");
}

export function formatDate(date: string) {
  const dateNew = new Date(date);

  return [
    padTo2Digits(dateNew.getDate()),
    padTo2Digits(dateNew.getMonth() + 1),
    dateNew.getFullYear(),
  ].join("/");
}
