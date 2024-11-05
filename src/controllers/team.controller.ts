import { Controller, Get, Query } from '@nestjs/common';
import { TeamService } from '../services/team.service';
import { Team } from '../entities/team.entity';

@Controller('/teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}
  @Get()
  async getAll(@Query('sort') sort?: string): Promise<Team[]> {
    return this.teamService.findAll(sort);
  }
}
