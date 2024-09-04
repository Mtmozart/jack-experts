export function statusConversionToPortuguese(status: string): string {
  const statusObject: Record<string, string> = {
    created: 'Criado',
    pending: 'Pendente',
    in_progress: 'Progresso',
    completed: 'Completa',
    cancelled: 'Cancelada',
  };

  return statusObject[status] || '';
}
