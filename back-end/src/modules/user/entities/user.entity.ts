import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Address } from './address.entity';
import { TypeUser } from '../enum/typeUserEnum';
import { Task } from '../../task/entity/task.entity';

@Entity()
@Index(['email', 'username'], { unique: true })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column(() => Address)
  address: Address;

  @Column('simple-array')
  roles: string[];

  @Column({
    type: 'enum',
    enum: TypeUser,
    default: TypeUser.CLIENT,
  })
  type: TypeUser;

  @OneToMany(() => Task, (task) => task.user, {
    cascade: ['remove'],
    onDelete: 'CASCADE',
  })
  tasks: Task[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date;
}
