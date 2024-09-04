import { ITaskSearchApi } from '../interfaces/task';

export function formatterQueryParams(data: ITaskSearchApi): string {
  const params = new URLSearchParams();

  Object.keys(data).forEach((key) => {
    const value = data[key as keyof ITaskSearchApi];
    if (value !== null && value !== undefined && value !== '') {
      params.append(key, String(value));
    }
  });

  return params.toString();
}
