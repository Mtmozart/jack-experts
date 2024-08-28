import { User } from '../../entities/user.entity';

export class DefaultUserClientDto {
  id: string;
  name: string;
  email: string;
  username: string;
  cep: string;
  state: string;
  country: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  complement?: string;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.username = user.username;
    this.cep = user.address.cep;
    this.state = user.address.state;
    this.country = user.address.country;
    this.neighborhood = user.address.neighborhood;
    this.city = user.address.city;
    this.street = user.address.street;
    this.number = user.address.number;
    this.complement = user.address.complement;
  }
}
