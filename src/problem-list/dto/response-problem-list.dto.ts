export class ResponseProblemListDto {
  data: Daum[];
  session: Session;
  paging: Paging;
}

class Daum {
  type: string;
  target_type: string;
  target: Target;
  skip_count: boolean;
  position: number;
  cursor: string;
}

class Target {
  admin_closed_comment: boolean;
  annotation_action: any;
  answer_type: string;
  attached_info: string;
  author: Author;
  can_comment: CanComment;
  collapse_reason: string;
  collapsed_by: string;
  comment_count: number;
  comment_permission: string;
  content: string;
  content_mark: ContentMark;
  created_time: number;
  decorative_labels: any[];
  editable_content: string;
  excerpt: string;
  extras: string;
  id: number;
  is_collapsed: boolean;
  is_copyable: boolean;
  is_labeled: boolean;
  is_mine: boolean;
  is_normal: boolean;
  is_sticky: boolean;
  is_visible: boolean;
  mark_infos: any[];
  question: Question;
  reaction_instruction: ReactionInstruction;
  relationship: Relationship2;
  relevant_info: RelevantInfo;
  reshipment_settings: string;
  reward_info: RewardInfo;
  settings?: Settings;
  sticky_info: string;
  suggest_edit: SuggestEdit;
  thanks_count: number;
  thumbnail_info: ThumbnailInfo;
  type: string;
  updated_time: number;
  url: string;
  visible_only_to_author: boolean;
  voteup_count: number;
  zhi_plus_extra_info: string;
}

class Author {
  avatar_url: string;
  avatar_url_template: string;
  badge: any[];
  badge_v2: BadgeV2;
  exposed_medal?: ExposedMedal;
  follower_count: number;
  gender: number;
  headline: string;
  id: string;
  is_advertiser: boolean;
  is_followed: boolean;
  is_following: boolean;
  is_org: boolean;
  is_privacy: boolean;
  name: string;
  type: string;
  url: string;
  url_token: string;
  user_type: string;
  is_blocked?: boolean;
  is_blocking?: boolean;
  is_celebrity?: boolean;
  vip_info?: VipInfo;
}

class BadgeV2 {
  detail_badges: any[];
  icon: string;
  merged_badges: any[];
  night_icon: string;
  title: string;
}

class ExposedMedal {
  avatar_url: string;
  description: string;
  medal_avatar_frame: string;
  medal_id: string;
  medal_name: string;
  mini_avatar_url: string;
}

class VipInfo {
  is_vip: boolean;
  vip_icon: VipIcon;
}

class VipIcon {
  night_mode_url: string;
  url: string;
}

class CanComment {
  reason: string;
  status: boolean;
}

class ContentMark {}

class Question {
  created: number;
  id: number;
  question_type: string;
  relationship: Relationship;
  title: string;
  type: string;
  updated_time: number;
  url: string;
}

class Relationship {}

class ReactionInstruction {}

class Relationship2 {
  is_author: boolean;
  is_authorized: boolean;
  is_nothelp: boolean;
  is_thanked: boolean;
  upvoted_followees: any[];
  voting: number;
}

class RelevantInfo {
  is_relevant: boolean;
  relevant_text: string;
  relevant_type: string;
}

class RewardInfo {
  can_open_reward: boolean;
  is_rewardable: boolean;
  reward_member_count: number;
  reward_total_money: number;
  tagline: string;
}

class Settings {
  table_of_contents: TableOfContents;
}

class TableOfContents {
  enabled: boolean;
}

class SuggestEdit {
  reason: string;
  status: boolean;
  tip: string;
  title: string;
  unnormal_details: UnnormalDetails;
  url: string;
}

class UnnormalDetails {
  description: string;
  note: string;
  reason: string;
  reason_id: number;
  status: string;
}

class ThumbnailInfo {
  count: number;
  thumbnails: Thumbnail[];
  type: string;
}

class Thumbnail {
  height: number;
  token: string;
  type: string;
  url: string;
  width: number;
}

class Session {
  id: string;
}

class Paging {
  page: number;
  is_end: boolean;
  next: string;
}
