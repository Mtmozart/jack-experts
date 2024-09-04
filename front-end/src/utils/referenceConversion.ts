export function referenceConversion(status: string) {
  const statusObject = {
    favorita: 'favorite',
    status: 'status',
  };

  if (status in statusObject) {
    return statusObject[status as keyof typeof statusObject];
  }

  return '';
}
