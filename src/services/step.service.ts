import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Step } from '../entities/step.entity';

export class StepService {
  constructor(
    @InjectRepository(Step)
    private readonly stepRepository: Repository<Step>,
  ) {}

  async findAll(sortBy?: string): Promise<Step[]> {
    try {
      const steps = await this.stepRepository.find({
        relations: ['person'],
      });

      return steps;
    } catch (error) {
      console.error('Error fetching players:', error);
      throw error; // Or handle it appropriately
    }
  }
}
