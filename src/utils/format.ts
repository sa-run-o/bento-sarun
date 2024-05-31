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