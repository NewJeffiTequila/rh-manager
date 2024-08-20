import { Position } from 'src/position/entities/position.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity({name:"users"})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  positionId:number

  @ManyToOne(() => Position, (position) => position.users)
  position: Position;

  @Column()
  dateOfAdmission: Date;
}
