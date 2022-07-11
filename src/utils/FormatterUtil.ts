import { format } from 'date-fns';
  
type DateFormatType = 'MMM d'

export function formatNumberToPercentage(num: number): string {
  const options = {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  return Intl.NumberFormat('default', options).format(num / 100);
}

export function formatNumberToAbbreviated(num: number): string {
  if (num >= 1000 && num < 1000000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  if (num >= 1000000 && num < 1000000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + 'B';
  }
  return num.toString();
}

export function formatDate(date: string, dateFormat: DateFormatType = 'MMM d'): string {
  return format(new Date(date), dateFormat)
}
  