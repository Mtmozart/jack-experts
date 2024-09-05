export function statusConversionToPortugueseRecord(
  status: string,
): 'Criado' | 'Pendente' | 'Progresso' | 'Completa' | 'Cancelada' | undefined {
  const statusObject: Record<
    string,
    'Criado' | 'Pendente' | 'Progresso' | 'Completa' | 'Cancelada'
  > = {
    created: 'Criado',
    pending: 'Pendente',
    in_progress: 'Progresso',
    completed: 'Completa',
    cancelled: 'Cancelada',
  };

  return statusObject[status] || undefined;
}
