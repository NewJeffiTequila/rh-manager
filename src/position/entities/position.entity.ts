import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Department } from 'src/department/entities/department.entity';

@Entity()
export class Position {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @ManyToOne(() => Department, (department) => department.positions)
  department: Department;

  @OneToMany(() => User, (user) => user.position)
  users: User[];
}
