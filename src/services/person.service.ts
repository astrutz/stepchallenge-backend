import { InjectRepository } from '@nestjs/typeorm';
import { Person } from '../entities/person.entity';
import { Repository } from 'typeorm';

export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}

  async findAll(sortBy?: string): Promise<Person[]> {
    try {
      const persons = await this.personRepository.find({
        relations: [],
      });

      return persons;
    } catch (error) {
      console.error('Error fetching players:', error);
      throw error; // Or handle it appropriately
    }
  }

  async findById(id: number): Promise<Person | null> {
    const person = await this.personRepository.findOne({
      where: { id: id },
      relations: ['team', 'steps'],
    });
    return person;
  }
}
