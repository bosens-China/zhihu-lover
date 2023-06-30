import 'dayjs/locale/zh-cn';
import { Injectable } from '@nestjs/common';
import { QueryProblemListDto } from './dto/query-problem-list.dto';
import { load } from 'cheerio';
import { HttpService } from '@nestjs/axios';
import { ResponseProblemListDto } from './dto/response-problem-list.dto';
import { firstValueFrom } from 'rxjs';
import { InitResponseProblemListDto } from './dto/init-response-problem-list.dto';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
// import _ from 'lodash';
import snakecaseKeys from 'snakecase-keys';
dayjs.locale('zh-cn');
dayjs.extend(isBetween);

@Injectable()
export class ProblemListService {
  constructor(private readonly httpService: HttpService) {}

  async findOne(body: QueryProblemListDto) {
    const { id, range } = body;
    const initData = await this.initialInformation(id);
    const data = this.adapter(id, initData);
    // 如果范围存在，按照范围取值
    if (range) {
      // let isEnd = data.data.some(f => f.target.time)
    }
    return data;
  }

  async query(url: string) {
    const { data } = await firstValueFrom(
      this.httpService.get<ResponseProblemListDto>(url),
    );
    return data;
  }

  async initialInformation(id: string) {
    const href = `https://www.zhihu.com/question/${id}/answers/updated`;
    const { data } = await firstValueFrom(this.httpService.get<string>(href));
    const $ = load(data, null, false);
    const html = $('#js-initialData').html();
    const obj = JSON.parse(html || '') as InitResponseProblemListDto;

    return obj;
  }

  // 转换结构，跟ResponseProblemListDto保持一致
  adapter(id: string, obj: InitResponseProblemListDto): ResponseProblemListDto {
    const values = Object.values(obj.initialState.entities.answers).map((f) => {
      return {
        type: 'question_feed_card',
        target_type: 'answer',
        target: {
          admin_closed_comment: f.adminClosedComment,
          annotation_action: f.annotationAction,
          answer_type: f.answerType,
          attached_info: f.attachedInfo,
          author: snakecaseKeys(f.author) as any,
          can_comment: f.canComment,
          collapse_reason: f.collapseReason,
          collapsed_by: f.collapsedBy,
          comment_count: f.commentCount,
          comment_permission: f.commentPermission,
          content: f.content,
          content_mark: f.contentMark,
          created_time: f.createdTime,
          decorative_labels: f.decorativeLabels,
          editable_content: f.editableContent,
          excerpt: f.excerpt,
          extras: f.extras,
          id: f.id,
          is_collapsed: f.isCollapsed,
          is_copyable: f.isCopyable,
          is_labeled: f.isLabeled,
          is_mine: f.isMine,
          is_normal: f.isNormal,
          is_sticky: f.isSticky,
          is_visible: f.isVisible,
          mark_infos: f.markInfos,
          question: snakecaseKeys(f.question),
          reaction_instruction: f.reactionInstruction,
          relationship: snakecaseKeys(f.relationship),
          relevant_info: snakecaseKeys(f.relevantInfo),
          reshipment_settings: f.reshipmentSettings,
          reward_info: snakecaseKeys(f.rewardInfo),
          settings: snakecaseKeys(f.settings),
          sticky_info: f.stickyInfo,
          suggest_edit: snakecaseKeys(f.suggestEdit) as any,
          thanks_count: f.thanksCount,
          thumbnail_info: snakecaseKeys(f.thumbnailInfo) as any,
          type: f.type,
          updated_time: f.updatedTime,
          url: f.url,
          visible_only_to_author: f.visibleOnlyToAuthor,
          voteup_count: f.voteupCount,
          zhi_plus_extra_info: f.zhiPlusExtraInfo,
        },
        skip_count: false,
        position: 0,
        cursor: f.author.id,
      };
    });
    const updatedAnswers = obj.initialState.question.updatedAnswers[id];
    return {
      data: values,
      session: {
        id: updatedAnswers.sessionId,
      },
      paging: {
        page: 1,
        is_end: !updatedAnswers.next,
        next: updatedAnswers.next,
      },
    };
  }
}
