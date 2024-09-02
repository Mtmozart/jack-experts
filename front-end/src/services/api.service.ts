import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IMethod, IMethodType } from '../interfaces/httpService';
import { getTokenToLocalStorage } from './localStorage.service';

const api = process.env.API_URI || 'http://localhost:8080';

function responseJson(response: AxiosResponse): any {
  if (response.status >= 400) {
    // Erro do servidor ou do cliente
    throw response.data;
  }

  return response.data;
}

function isUrl(url: string): boolean {
  const regex =
    /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  return regex.test(url);
}

export async function request(
  url: string,
  method?: IMethodType,
  body?: { [key: string]: any } | null,
  headers?: { [key: string]: string },
  options?: { [key: string]: any },
) {
  const token = getTokenToLocalStorage();

  const updatedHeader = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    ...(headers || {}),
  };

  //axios
  const config: AxiosRequestConfig = {
    url: isUrl(url) ? url : `${api}/${url}`,
    method: method,
    headers: updatedHeader,
    data: body || null,
    ...options,
  };

  try {
    const response: AxiosResponse = await axios(config);
    return responseJson(response);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || { message: error.message };
    } else {
      throw { message: 'Erro desconhecido.' };
    }
  }
}

function buildUrl(baseUrl: string, params?: { [key: string]: any }): string {
  if (!params) {
    return baseUrl;
  }

  const queryString = Object.keys(params)
    .map((k) => {
      if (Array.isArray(params[k])) {
        return params[k]
          .map(
            (param: any) =>
              `${encodeURIComponent(k)}=${encodeURIComponent(param)}`,
          )
          .join('&');
      }
      return `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`;
    })
    .join('&');

  return `${baseUrl}${queryString ? `?${queryString}` : ''}`;
}

export async function get(
  url: string,
  { params, headers, options }: Omit<IMethod, 'data'> = {},
) {
  return await request(buildUrl(url, params), 'GET', null, headers, options);
}

export async function post(
  url: string,
  { data, params, headers, options }: IMethod = {},
) {
  return await request(buildUrl(url, params), 'POST', data, headers, options);
}

export async function put(
  url: string,
  { data, params, headers, options }: IMethod = {},
) {
  return await request(buildUrl(url, params), 'PUT', data, headers, options);
}

export async function patch(
  url: string,
  { data, params, headers, options }: IMethod = {},
) {
  return await request(buildUrl(url, params), 'PATCH', data, headers, options);
}

export async function del(
  url: string,
  { data, params, headers, options }: IMethod = {},
) {
  return await request(buildUrl(url, params), 'DELETE', data, headers, options);
}
