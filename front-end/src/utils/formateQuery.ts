import { ITaskSearchApi } from '../interfaces/task';

export function formatterQueryParams(data: ITaskSearchApi): string {
  const params = new URLSearchParams();
  Object.keys(data).forEach((key) => {
    let value = data[key as keyof ITaskSearchApi];
    if (key === 'favorite') {
      if (value === 'Sim') {
        value = 'true';
      } else if (value === 'Não') {
        value = 'false';
      } else {
        return;
      }
    }

    if (value !== null && value !== undefined && value !== '') {
      params.append(key, String(value));
    }
  });
  return params.toString();
}
