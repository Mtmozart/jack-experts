export default function formatDate(date: Date) {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date));
}
