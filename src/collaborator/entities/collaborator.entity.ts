import { Position } from 'src/position/entities/position.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class Collaborator {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Position, (position) => position.users)
  position: Position;

  @Column()
  salary: number;

  @Column()
  dateAdmission: Date;
}
