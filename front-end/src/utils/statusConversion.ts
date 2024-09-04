export function statusConversion(status: string) {
  const statusObject = {
    Criado: 'created',
    Pendente: 'pending',
    Progresso: 'in_progress',
    Completa: 'completed',
    Cancelada: 'cancelled',
  };

  if (status in statusObject) {
    return statusObject[status as keyof typeof statusObject];
  }

  return '';
}
