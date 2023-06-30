import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchModule } from './search/search.module';
import { ProblemListModule } from './problem-list/problem-list.module';

@Module({
  imports: [SearchModule, ProblemListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
