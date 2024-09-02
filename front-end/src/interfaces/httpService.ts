export type IMethodType = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';

export interface IMethod {
  data?: Record<string, any>;
  params?: Record<string, any>;
  headers?: Record<string, string>;
  options?: Record<string, any>;
}
