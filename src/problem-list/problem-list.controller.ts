import { Controller, Get, Query } from '@nestjs/common';
import { ProblemListService } from './problem-list.service';
import { QueryProblemListDto } from './dto/query-problem-list.dto';

@Controller('problem-list')
export class ProblemListController {
  constructor(private readonly problemListService: ProblemListService) {}

  @Get()
  findOne(@Query() query: QueryProblemListDto) {
    return this.problemListService.findOne(query);
  }
}
