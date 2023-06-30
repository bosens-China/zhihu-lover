import { IsOptional, IsString, IsNumber } from 'class-validator';

export class QueryProblemListDto {
  @IsString()
  id: string;
  // 筛选日期

  @IsOptional()
  @IsNumber()
  range?: number;
}
