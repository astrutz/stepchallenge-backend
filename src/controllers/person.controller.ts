import { Controller, Get, Query } from '@nestjs/common';
import { Person } from '../entities/person.entity';
import { PersonService } from '../services/person.service';

@Controller('/persons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}
  @Get()
  async getAll(@Query('sort') sort?: string): Promise<Person[]> {
    return this.personService.findAll(sort);
  }
}
