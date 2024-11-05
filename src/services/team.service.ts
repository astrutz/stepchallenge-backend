import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from '../entities/team.entity';

export class TeamService {
  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
  ) {}

  async findAll(sortBy?: string): Promise<Team[]> {
    try {
      const teams = await this.teamRepository.find({
        relations: [],
      });

      return teams;
    } catch (error) {
      console.error('Error fetching players:', error);
      throw error; // Or handle it appropriately
    }
  }

  async findById(id: number): Promise<Team | null> {
    const team = await this.teamRepository.findOne({
      where: { id: id },
      relations: ['persons'],
    });
    return team;
  }
}
