import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Person } from './person.entity';

@Entity()
export class Step {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Day: Date;

  @Column()
  count: number;

  @ManyToOne(() => Person)
  person: Person;
}
