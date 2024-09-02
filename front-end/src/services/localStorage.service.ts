export function setTokenToLocalStorage(name: string, value: string) {
  localStorage.setItem(name, value);
}

export function getTokenToLocalStorage() {
  localStorage.getItem('token');
}
