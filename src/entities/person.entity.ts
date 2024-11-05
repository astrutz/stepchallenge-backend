import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Team } from './team.entity';
import { Step } from './step.entity';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  shortcut: string;

  @ManyToOne(() => Team)
  team: Team;

  @OneToMany(() => Step, (step) => step.person, { nullable: true })
  steps: Step[];
}
