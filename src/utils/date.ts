function parseDate(date: Date | string | undefined) {
  if (!date) return null;
  const datetime = new Date(date);
  const year = datetime.getFullYear();
  const month = datetime.getMonth() + 1;
  const day = datetime.getDate();

  return `${year.toString()}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
}

export default parseDate;
