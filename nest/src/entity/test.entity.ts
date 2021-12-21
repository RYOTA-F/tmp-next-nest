import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Tests {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  score: number;
}
