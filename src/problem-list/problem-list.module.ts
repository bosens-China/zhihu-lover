import { Module } from '@nestjs/common';
import { ProblemListService } from './problem-list.service';
import { ProblemListController } from './problem-list.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ProblemListController],
  providers: [ProblemListService],
})
export class ProblemListModule {}
