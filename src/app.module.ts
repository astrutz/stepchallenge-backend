import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Team } from './entities/team.entity';
import { Person } from './entities/person.entity';
import { Step } from './entities/step.entity';
import { PersonController } from './controllers/person.controller';
import { PersonService } from './services/person.service';
import { TeamService } from './services/team.service';
import { TeamController } from './controllers/team.controller';
import { StepService } from './services/step.service';
import { StepController } from './controllers/step.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // This makes the config globally accessible
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get<string>('DB_HOST'),
          port: configService.get<number>('DB_PORT'),
          username: configService.get<string>('DB_USERNAME'),
          password: configService.get<string>('DB_PASSWORD'),
          database: configService.get<string>('DB_NAME'),
          entities: [Team, Person, Step],
          synchronize: true, // Don't use true in production!+
          ssl: { rejectUnauthorized: false }, // or `ssl: true` for basic SSL
        };
      },
    }),
    TypeOrmModule.forFeature([Person, Team, Step]),
  ],
  controllers: [AppController, PersonController, TeamController, StepController],
  providers: [AppService, PersonService, TeamService, StepService],
})
export class AppModule {}
