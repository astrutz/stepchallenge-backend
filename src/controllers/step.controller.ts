import { Controller, Get, Query } from '@nestjs/common';
import { StepService } from '../services/step.service';
import { Step } from '../entities/step.entity';

@Controller('/steps')
export class StepController {
  constructor(private readonly stepService: StepService) {}
  @Get()
  async getAll(@Query('sort') sort?: string): Promise<Step[]> {
    return this.stepService.findAll(sort);
  }
}
