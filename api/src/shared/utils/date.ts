import { format } from 'date-fns';

export function FormatDate(date: Date) {
  const dateISO = new Date(date);

  const dateformat = format(dateISO, 'dd/MM/yyyy');

  return dateformat;
}
