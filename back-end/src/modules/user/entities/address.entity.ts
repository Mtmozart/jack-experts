import { Column } from 'typeorm';

export class Address {
  @Column()
  cep: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  neighborhood: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column({ nullable: true })
  complement: string;
}
