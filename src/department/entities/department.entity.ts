import { Position } from 'src/position/entities/position.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @OneToMany(() => Position, (position) => position.department)
  positions: Position[];
}
