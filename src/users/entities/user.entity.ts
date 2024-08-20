import { Position } from 'src/position/entities/position.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @ManyToOne(() => Position, (position) => position.users)
  position: Position;

  @Column()
  dateAdmission: Date;
}
