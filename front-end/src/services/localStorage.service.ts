export function setTokenToLocalStorage(name: string, value: string) {
  localStorage.setItem(name, value);
}

export const getTokenToLocalStorage = () => localStorage.getItem('token');
