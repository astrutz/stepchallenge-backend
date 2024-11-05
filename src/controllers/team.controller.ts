import { BadRequestException, Controller, Get, Param, Query } from '@nestjs/common';
import { TeamService } from '../services/team.service';
import { Team } from '../entities/team.entity';

@Controller('/teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}
  @Get()
  async getAll(@Query('sort') sort?: string): Promise<Team[]> {
    return this.teamService.findAll(sort);
  }

  @Get('/:id')
  async getTeamById(@Param('id') id: number): Promise<Team> {
    const team = await this.teamService.findById(id);
    if (team) {
      return team;
    }
    throw new BadRequestException('Invalid ID');
  }
}
