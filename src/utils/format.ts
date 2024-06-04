export const formatNumberToString = (value: number): string => {
  if (value < 10) {
    return `0${value}`;
  } else if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}m`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  } else {
    return value.toString();
  }
};

export const formatNanosecondsToDate = (seconds: number): string => {
  const date = new Date(seconds * 1000);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
