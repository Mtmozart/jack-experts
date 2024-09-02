export interface IAddress {
  cep: string;
  state: string;
  country: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  complement?: string;
}

export interface IAddressCreate {
  cep: string;
  state: string;
  country: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  complement?: string;
}
