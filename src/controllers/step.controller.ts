import { BadRequestException, Controller, Get, Param, Query } from "@nestjs/common";
import { StepService } from '../services/step.service';
import { Step } from '../entities/step.entity';

@Controller('/steps')
export class StepController {
  constructor(private readonly stepService: StepService) {}

  @Get()
  async getAll(@Query('sort') sort?: string): Promise<Step[]> {
    return this.stepService.findAll(sort);
  }

  @Get('/:id')
  async getStepById(@Param('id') id: number): Promise<Step> {
    const step = await this.stepService.findById(id);
    if (step) {
      return step;
    }
    throw new BadRequestException('Invalid ID');
  }
}
