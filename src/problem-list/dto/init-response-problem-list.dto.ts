export class InitResponseProblemListDto {
  initialState: InitialState;
  subAppName: string;
  spanName: string;
  canaryConfig: CanaryConfig;
}

class InitialState {
  common: Common;
  loading: Loading;
  entities: Entities;
  currentUser: string;
  account: Account;
  settings: Settings6;
  notification: Notification2;
  people: People;
  env: Env;
  me: Me;
  label: Label;
  ecommerce: Ecommerce;
  comments: Comments2;
  commentsV2: CommentsV2;
  pushNotifications: PushNotifications;
  messages: Messages;
  register: Register;
  login: Login;
  switches: Switches;
  captcha: Captcha;
  sms: Sms;
  chat: Chat;
  emoticons: Emoticons;
  creator: Creator;
  creators: Creators;
  question: Question7;
  shareTexts: ShareTexts;
  answers: Answers3;
  banner: Banner;
  topic: Topic2;
  explore: Explore2;
  articles: Articles2;
  favlists: Favlists3;
  pins: Pins2;
  topstory: Topstory;
  upload: Upload;
  video: Video2;
  zvideos: Zvideos2;
  guide: Guide;
  reward: Reward;
  search: Search2;
  creatorSalt: CreatorSalt;
  publicEditPermission: PublicEditPermission;
  readStatus: ReadStatus;
  draftHistory: DraftHistory;
  notifications: Notifications2;
  specials: Specials2;
  collections: Collections2;
  userProfit: UserProfit;
  mcn: Mcn2;
  mcnActivity: McnActivity;
  brand: Brand2;
  host: Host;
  campaign: Campaign;
  knowledgePlan: KnowledgePlan;
  wallE: WallE;
  roundtables: Roundtables3;
  helpCenter: HelpCenter;
  republish: Republish;
  commercialReport: CommercialReport;
  creatorMCN: CreatorMcn;
  commentManage: CommentManage;
  commentPermission: CommentPermission;
  creatorRightStatus: CreatorRightStatus;
  zhiPlus: ZhiPlus;
  streaming: Streaming;
  creationRanking: CreationRanking;
  eduSections: EduSections;
  adPromotion: AdPromotion;
  editVideo: EditVideo;
}

class Common {
  ask: Ask;
}

class Ask {}

class Loading {
  global: Global;
  local: Local;
}

class Global {
  count: number;
}

class Local {
  'question/get/': boolean;
  'question/getUpdatedAnswers/275359100': boolean;
}

class Entities {
  users: Users;
  questions: Questions;
  answers: Answers;
  articles: Articles;
  columns: Columns;
  topics: Topics;
  roundtables: Roundtables;
  favlists: Favlists;
  comments: Comments;
  notifications: Notifications;
  ebooks: Ebooks;
  activities: Activities;
  feeds: Feeds;
  pins: Pins;
  promotions: Promotions;
  drafts: Drafts;
  chats: Chats;
  posts: Posts;
  zvideos: Zvideos;
  zvideoContributions: ZvideoContributions;
  briefs: Briefs;
  eduCourses: EduCourses;
}

class Users {}

class Questions {
  '275359100': N275359100;
}

class N275359100 {
  type: string;
  id: number;
  title: string;
  questionType: string;
  created: number;
  updatedTime: number;
  url: string;
  isMuted: boolean;
  isVisible: boolean;
  isNormal: boolean;
  isEditable: boolean;
  adminClosedComment: boolean;
  hasPublishingDraft: boolean;
  answerCount: number;
  visitCount: number;
  commentCount: number;
  followerCount: number;
  collapsedAnswerCount: number;
  excerpt: string;
  commentPermission: string;
  detail: string;
  editableDetail: string;
  status: Status;
  relationship: Relationship;
  topics: Topic[];
  author: Author;
  canComment: CanComment;
  thumbnailInfo: ThumbnailInfo;
  reviewInfo: ReviewInfo;
  relatedCards: any[];
  muteInfo: MuteInfo;
  showAuthor: boolean;
  isLabeled: boolean;
  isBannered: boolean;
  showEncourageAuthor: boolean;
  voteupCount: number;
  canVote: boolean;
  reactionInstruction: ReactionInstruction;
}

class Status {
  isLocked: boolean;
  isClose: boolean;
  isEvaluate: boolean;
  isSuggest: boolean;
}

class Relationship {
  isAuthor: boolean;
  isFollowing: boolean;
  isAnonymous: boolean;
  canLock: boolean;
  canStickAnswers: boolean;
  canCollapseAnswers: boolean;
  voting: number;
}

class Topic {
  id: string;
  type: string;
  url: string;
  name: string;
  avatarUrl: string;
  topicType: string;
}

class Author {
  id: string;
  urlToken: string;
  name: string;
  avatarUrl: string;
  avatarUrlTemplate: string;
  isOrg: boolean;
  type: string;
  url: string;
  userType: string;
  headline: string;
  badge: any[];
  badgeV2: BadgeV2;
  gender: number;
  isAdvertiser: boolean;
  isPrivacy: boolean;
}

class BadgeV2 {
  title: string;
  mergedBadges: any[];
  detailBadges: any[];
  icon: string;
  nightIcon: string;
}

class CanComment {
  status: boolean;
  reason: string;
}

class ThumbnailInfo {
  count: number;
  type: string;
  thumbnails: any[];
}

class ReviewInfo {
  type: string;
  tips: string;
  editTips: string;
  isReviewing: boolean;
  editIsReviewing: boolean;
}

class MuteInfo {
  type: string;
}

class ReactionInstruction {}

class Answers {
  [id: string]: N1584947855;
}

class N1584947855 {
  adminClosedComment: boolean;
  annotationAction: any;
  answerType: string;
  attachedInfo: string;
  author: Author2;
  canComment: CanComment2;
  collapseReason: string;
  collapsedBy: string;
  commentCount: number;
  commentPermission: string;
  content: string;
  contentMark: ContentMark;
  createdTime: number;
  decorativeLabels: any[];
  editableContent: string;
  excerpt: string;
  extras: string;
  id: number;
  isCollapsed: boolean;
  isCopyable: boolean;
  isLabeled: boolean;
  isMine: boolean;
  isNormal: boolean;
  isSticky: boolean;
  isVisible: boolean;
  markInfos: any[];
  question: Question;
  reactionInstruction: ReactionInstruction2;
  relationship: Relationship3;
  relevantInfo: RelevantInfo;
  reshipmentSettings: string;
  rewardInfo: RewardInfo;
  settings: Settings;
  stickyInfo: string;
  suggestEdit: SuggestEdit;
  thanksCount: number;
  thumbnailInfo: ThumbnailInfo2;
  type: string;
  updatedTime: number;
  url: string;
  visibleOnlyToAuthor: boolean;
  voteupCount: number;
  zhiPlusExtraInfo: string;
}

class Author2 {
  avatarUrl: string;
  avatarUrlTemplate: string;
  badge: any[];
  badgeV2: BadgeV22;
  exposedMedal: ExposedMedal;
  followerCount: number;
  gender: number;
  headline: string;
  id: string;
  isAdvertiser: boolean;
  isFollowed: boolean;
  isFollowing: boolean;
  isOrg: boolean;
  isPrivacy: boolean;
  name: string;
  type: string;
  url: string;
  urlToken: string;
  userType: string;
}

class BadgeV22 {
  detailBadges: any[];
  icon: string;
  mergedBadges: any[];
  nightIcon: string;
  title: string;
}

class ExposedMedal {
  avatarUrl: string;
  description: string;
  medalAvatarFrame: string;
  medalId: string;
  medalName: string;
  miniAvatarUrl: string;
}

class CanComment2 {
  reason: string;
  status: boolean;
}

class ContentMark {}

class Question {
  created: number;
  id: number;
  questionType: string;
  relationship: Relationship2;
  title: string;
  type: string;
  updatedTime: number;
  url: string;
}

class Relationship2 {}

class ReactionInstruction2 {}

class Relationship3 {
  isAuthor: boolean;
  isAuthorized: boolean;
  isNothelp: boolean;
  isThanked: boolean;
  upvotedFollowees: any[];
  voting: number;
}

class RelevantInfo {
  isRelevant: boolean;
  relevantText: string;
  relevantType: string;
}

class RewardInfo {
  canOpenReward: boolean;
  isRewardable: boolean;
  rewardMemberCount: number;
  rewardTotalMoney: number;
  tagline: string;
}

class Settings {
  tableOfContents: TableOfContents;
}

class TableOfContents {
  enabled: boolean;
}

class SuggestEdit {
  reason: string;
  status: boolean;
  tip: string;
  title: string;
  unnormalDetails: UnnormalDetails;
  url: string;
}

class UnnormalDetails {
  description: string;
  note: string;
  reason: string;
  reasonId: number;
  status: string;
}

class ThumbnailInfo2 {
  count: number;
  thumbnails: any[];
  type: string;
}

class Articles {}

class Columns {}

class Topics {}

class Roundtables {}

class Favlists {}

class Comments {}

class Notifications {}

class Ebooks {}

class Activities {}

class Feeds {}

class Pins {}

class Promotions {}

class Drafts {}

class Chats {}

class Posts {}

class Zvideos {}

class ZvideoContributions {}

class Briefs {}

class EduCourses {}

class Account {
  lockLevel: LockLevel;
  unlockTicketStatus: boolean;
  unlockTicket: any;
  challenge: any[];
  errorStatus: boolean;
  message: string;
  isFetching: boolean;
  accountInfo: AccountInfo;
  urlToken: UrlToken;
  cardUserInfo: CardUserInfo;
  handleWidget: HandleWidget;
  widgetList: any[];
  userWidgetId: string;
}

class LockLevel {}

class AccountInfo {}

class UrlToken {
  loading: boolean;
}

class CardUserInfo {
  vipInfo: VipInfo2;
}

class VipInfo2 {}

class HandleWidget {}

class Settings6 {
  socialBind: any;
  inboxMsg: any;
  notification: Notification;
  email: Email;
  privacyFlag: any;
  blockedUsers: BlockedUsers;
  blockedFollowees: BlockedFollowees;
  ignoredTopics: IgnoredTopics;
  restrictedTopics: any;
  laboratory: Laboratory;
}

class Notification {}

class Email {}

class BlockedUsers {
  isFetching: boolean;
  paging: Paging;
  data: any[];
}

class Paging {
  pageNo: number;
  pageSize: number;
}

class BlockedFollowees {
  isFetching: boolean;
  paging: Paging2;
  data: any[];
}

class Paging2 {
  pageNo: number;
  pageSize: number;
}

class IgnoredTopics {
  isFetching: boolean;
  paging: Paging3;
  data: any[];
}

class Paging3 {
  pageNo: number;
  pageSize: number;
}

class Laboratory {}

class Notification2 {}

class People {
  profileStatus: ProfileStatus;
  activitiesByUser: ActivitiesByUser;
  answersByUser: AnswersByUser;
  answersSortByVotesByUser: AnswersSortByVotesByUser;
  answersIncludedByUser: AnswersIncludedByUser;
  votedAnswersByUser: VotedAnswersByUser;
  thankedAnswersByUser: ThankedAnswersByUser;
  voteAnswersByUser: VoteAnswersByUser;
  thankAnswersByUser: ThankAnswersByUser;
  topicAnswersByUser: TopicAnswersByUser;
  zvideosByUser: ZvideosByUser;
  articlesByUser: ArticlesByUser;
  articlesSortByVotesByUser: ArticlesSortByVotesByUser;
  articlesIncludedByUser: ArticlesIncludedByUser;
  pinsByUser: PinsByUser;
  questionsByUser: QuestionsByUser;
  commercialQuestionsByUser: CommercialQuestionsByUser;
  favlistsByUser: FavlistsByUser;
  followingByUser: FollowingByUser;
  followersByUser: FollowersByUser;
  mutualsByUser: MutualsByUser;
  followingColumnsByUser: FollowingColumnsByUser;
  followingQuestionsByUser: FollowingQuestionsByUser;
  followingFavlistsByUser: FollowingFavlistsByUser;
  followingTopicsByUser: FollowingTopicsByUser;
  publicationsByUser: PublicationsByUser;
  columnsByUser: ColumnsByUser;
  allFavlistsByUser: AllFavlistsByUser;
  brands: any;
  creationsByUser: CreationsByUser;
  creationsSortByVotesByUser: CreationsSortByVotesByUser;
  creationsFeed: CreationsFeed;
  infinity: Infinity;
  batchUsers: BatchUsers;
  profileInfinity: any;
}

class ProfileStatus {}

class ActivitiesByUser {}

class AnswersByUser {}

class AnswersSortByVotesByUser {}

class AnswersIncludedByUser {}

class VotedAnswersByUser {}

class ThankedAnswersByUser {}

class VoteAnswersByUser {}

class ThankAnswersByUser {}

class TopicAnswersByUser {}

class ZvideosByUser {}

class ArticlesByUser {}

class ArticlesSortByVotesByUser {}

class ArticlesIncludedByUser {}

class PinsByUser {}

class QuestionsByUser {}

class CommercialQuestionsByUser {}

class FavlistsByUser {}

class FollowingByUser {}

class FollowersByUser {}

class MutualsByUser {}

class FollowingColumnsByUser {}

class FollowingQuestionsByUser {}

class FollowingFavlistsByUser {}

class FollowingTopicsByUser {}

class PublicationsByUser {}

class ColumnsByUser {}

class AllFavlistsByUser {}

class CreationsByUser {}

class CreationsSortByVotesByUser {}

class CreationsFeed {}

class Infinity {}

class BatchUsers {}

class Env {
  ab: Ab;
  abV2: AbV2;
  userAgent: UserAgent;
  appViewConfig: AppViewConfig;
  ctx: Ctx;
  trafficSource: string;
  edition: Edition;
  theme: string;
  appHeaderTheme: AppHeaderTheme;
  enableShortcut: boolean;
  referer: string;
  xUDId: string;
  mode: string;
  conf: Conf;
  xTrafficFreeOrigin: string;
  ipInfo: IpInfo;
  logged: boolean;
  vars: Vars;
}

class Ab {
  config: Config;
  triggers: Triggers;
}

class Config {
  params: any[];
  experiments: any[];
  chains: any[];
  encodedParams: string;
}

class Triggers {}

class AbV2 {
  config: Config2;
  triggers: Triggers2;
}

class Config2 {
  paramMap: ParamMap;
  abMap: AbMap;
}

class ParamMap {
  ws_platform_new: WsPlatformNew;
  in_editor_title: InEditorTitle;
  ws_sug_fix: WsSugFix;
  pm_new_task: PmNewTask;
}

class WsPlatformNew {
  value: string;
}

class InEditorTitle {
  value: string;
}

class WsSugFix {
  value: string;
}

class PmNewTask {
  value: string;
}

class AbMap {}

class Triggers2 {}

class UserAgent {
  Edge: boolean;
  IE: boolean;
  Wechat: boolean;
  Weibo: boolean;
  QQ: boolean;
  MQQBrowser: boolean;
  Qzone: boolean;
  Mobile: boolean;
  Android: boolean;
  iOS: boolean;
  isAppleDevice: boolean;
  Zhihu: boolean;
  ZhihuHybrid: boolean;
  isBot: boolean;
  Tablet: boolean;
  UC: boolean;
  Quark: boolean;
  Sogou: boolean;
  Qihoo: boolean;
  Baidu: boolean;
  BaiduApp: boolean;
  Safari: boolean;
  GoogleBot: boolean;
  AndroidDaily: boolean;
  iOSDaily: boolean;
  WxMiniProgram: boolean;
  BaiduMiniProgram: boolean;
  QQMiniProgram: boolean;
  JDMiniProgram: boolean;
  isWebView: boolean;
  isMiniProgram: boolean;
  origin: string;
}

class AppViewConfig {}

class Ctx {
  path: string;
  query: Query;
  href: string;
  host: string;
}

class Query {}

class Edition {
  beijing: boolean;
  baidu: boolean;
  sogou: boolean;
  baiduBeijing: boolean;
  sogouBeijing: boolean;
  sogouInput: boolean;
  oppoSearch: boolean;
  baiduSearch: boolean;
  googleSearch: boolean;
  shenma: boolean;
  miniProgram: boolean;
  xiaomi: boolean;
  huaweiSearch: boolean;
}

class AppHeaderTheme {
  current: string;
  disable: boolean;
  normal: Normal;
  custom: Custom;
}

class Normal {
  bgColor: string;
}

class Custom {
  bgColor: string;
}

class Conf {}

class IpInfo {}

class Vars {
  passThroughHeaders: PassThroughHeaders;
}

class PassThroughHeaders {}

class Me {
  columnContributions: any[];
}

class Label {
  recognizerLists: RecognizerLists;
}

class RecognizerLists {}

class Ecommerce {}

class Comments2 {
  pagination: Pagination;
  collapsed: Collapsed;
  reverse: Reverse;
  reviewing: Reviewing;
  conversation: Conversation;
  parent: Parent;
}

class Pagination {}

class Collapsed {}

class Reverse {}

class Reviewing {}

class Conversation {}

class Parent {}

class CommentsV2 {
  stickers: any[];
  commentWithPicPermission: CommentWithPicPermission;
  notificationsComments: NotificationsComments;
  pagination: Pagination2;
  collapsed: Collapsed2;
  reverse: Reverse2;
  reviewing: Reviewing2;
  conversation: Conversation2;
  conversationMore: ConversationMore;
  parent: Parent2;
}

class CommentWithPicPermission {}

class NotificationsComments {}

class Pagination2 {}

class Collapsed2 {}

class Reverse2 {}

class Reviewing2 {}

class Conversation2 {}

class ConversationMore {}

class Parent2 {}

class PushNotifications {
  default: Default;
  follow: Follow;
  vote_thank: VoteThank;
  currentTab: string;
  notificationsCount: NotificationsCount;
}

class Default {
  isFetching: boolean;
  isDrained: boolean;
  ids: any[];
}

class Follow {
  isFetching: boolean;
  isDrained: boolean;
  ids: any[];
}

class VoteThank {
  isFetching: boolean;
  isDrained: boolean;
  ids: any[];
}

class NotificationsCount {
  default: number;
  follow: number;
  vote_thank: number;
}

class Messages {
  data: Data;
  currentTab: string;
  messageCount: number;
}

class Data {}

class Register {
  registerValidateSucceeded: any;
  registerValidateErrors: RegisterValidateErrors;
  registerConfirmError: any;
  sendDigitsError: any;
  registerConfirmSucceeded: any;
}

class RegisterValidateErrors {}

class Login {
  loginUnregisteredError: boolean;
  loginBindWechatError: boolean;
  loginConfirmError: any;
  sendDigitsError: any;
  needSMSIdentify: boolean;
  validateDigitsError: boolean;
  loginConfirmSucceeded: any;
  qrcodeLoginToken: string;
  qrcodeLoginScanStatus: number;
  qrcodeLoginError: any;
  qrcodeLoginReturnNewToken: boolean;
}

class Switches {}

class Captcha {
  captchaNeeded: boolean;
  captchaValidated: boolean;
}

class Sms {
  supportedCountries: any[];
}

class Chat {
  chats: Chats2;
  inbox: Inbox;
  global: Global2;
}

class Chats2 {}

class Inbox {
  recents: Recents;
  strangers: Strangers;
  friends: Friends;
  search: Search;
  config: Config3;
}

class Recents {
  isFetching: boolean;
  isDrained: boolean;
  isPrevDrained: boolean;
  result: any[];
  next: any;
  key: any;
}

class Strangers {
  isFetching: boolean;
  isDrained: boolean;
  isPrevDrained: boolean;
  result: any[];
  next: any;
  key: any;
}

class Friends {
  isFetching: boolean;
  isDrained: boolean;
  isPrevDrained: boolean;
  result: any[];
  next: any;
  key: any;
}

class Search {
  isFetching: boolean;
  isDrained: boolean;
  isPrevDrained: boolean;
  result: any[];
  next: any;
  key: any;
}

class Config3 {
  newCount: number;
  strangerMessageSwitch: boolean;
  strangerMessageUnread: boolean;
  friendCount: number;
}

class Global2 {
  isChatMqttExisted: boolean;
}

class Emoticons {
  emoticonGroupList: any[];
  emoticonGroupDetail: EmoticonGroupDetail;
}

class EmoticonGroupDetail {}

class Creator {
  tools: Tools;
  explore: Explore;
  levelUpperLimit: number;
  mcn: Mcn;
  mcnManage: McnManage;
  tasks: Tasks;
  announcement: Announcement;
  creatorsRecommendInfo: CreatorsRecommendInfo;
}

class Tools {
  question: Question6;
  recommend: Recommend;
}

class Question6 {
  invitationCount: InvitationCount;
}

class InvitationCount {
  questionFolloweeCount: number;
  questionTotalCount: number;
}

class Recommend {
  recommendTimes: RecommendTimes;
}

class RecommendTimes {}

class Explore {}

class Mcn {}

class McnManage {}

class Tasks {}

class Announcement {}

class CreatorsRecommendInfo {}

class Creators {
  common: Common2;
  bayesDomains: BayesDomains;
  school: School;
  faq: Faq;
  knowledgeIncome: KnowledgeIncome;
  safeguardRights: SafeguardRights;
  analytics: Analytics;
  account: Account2;
  KMResource: Kmresource;
  training: Training;
  ToolsQuestion: ToolsQuestion;
  ToolsHotspot: ToolsHotspot;
  ToolsRecommend: ToolsRecommend;
  ToolsCustomPromotion: ToolsCustomPromotion;
  ToolsSearchQuestion: ToolsSearchQuestion;
  editorSetting: EditorSetting;
  MCNManage: Mcnmanage;
  knowledgeTasks: KnowledgeTasks;
  incomeAnalysis: IncomeAnalysis;
  creationManage: CreationManage;
  activity: Activity;
  announcement: Announcement2;
  home: Home;
  videoSupport: VideoSupport;
  videoDistribution: VideoDistribution;
  profilePoster: ProfilePoster;
}

class Common2 {
  applyStatus: ApplyStatus;
  rightsStatus: RightsStatus;
}

class ApplyStatus {}

class RightsStatus {}

class BayesDomains {
  status: Status2;
  options: Options;
  contents: any;
}

class Status2 {}

class Options {
  topDomains: any;
  allDomains: any;
  editable: number;
}

class School {
  tabs: any[];
  contents: any[];
  banner: any;
  entities: Entities2;
}

class Entities2 {}

class Faq {
  tabs: any[];
  article: Article;
}

class Article {}

class KnowledgeIncome {}

class SafeguardRights {}

class Analytics {
  all: All;
  answer: Answer;
  zvideo: Zvideo;
  article: Article2;
  pin: Pin;
  singleContent: SingleContent;
}

class All {}

class Answer {}

class Zvideo {}

class Article2 {}

class Pin {}

class SingleContent {}

class Account2 {
  growthLevel: GrowthLevel;
}

class GrowthLevel {}

class Kmresource {}

class Training {}

class ToolsQuestion {
  goodatTopics: any[];
}

class ToolsHotspot {
  domains: any[];
}

class ToolsRecommend {}

class ToolsCustomPromotion {
  itemLists: ItemLists;
  baseInfo: BaseInfo;
}

class ItemLists {}

class BaseInfo {}

class ToolsSearchQuestion {}

class EditorSetting {}

class Mcnmanage {}

class KnowledgeTasks {}

class IncomeAnalysis {
  income: Income;
}

class Income {
  aggregation: Aggregation;
}

class Aggregation {}

class CreationManage {
  editModal: EditModal;
}

class EditModal {
  status: boolean;
}

class Activity {}

class Announcement2 {}

class Home {
  currentCreatorUrlToken: any;
  rights: any[];
  newRights: any[];
  scoreInfo: ScoreInfo;
  menusShowControlByServer: MenusShowControlByServer;
  newTasks: NewTasks;
  bannerList: any[];
  recentlyCreated: any[];
  homecard: Homecard;
}

class ScoreInfo {}

class MenusShowControlByServer {
  bVipRecomend: boolean;
  creationRelationship: boolean;
}

class NewTasks {
  creatorTask: CreatorTask;
}

class CreatorTask {
  tasks: any[];
  des: any[];
}

class Homecard {}

class VideoSupport {
  textBenefit: TextBenefit;
}

class TextBenefit {}

class VideoDistribution {}

class ProfilePoster {
  creatorPosterConfig: CreatorPosterConfig;
  creatorPosterData: CreatorPosterData;
}

class CreatorPosterConfig {}

class CreatorPosterData {}

class Question7 {
  followers: Followers;
  concernedFollowers: ConcernedFollowers;
  answers: Answers2;
  hiddenAnswers: HiddenAnswers;
  updatedAnswers: UpdatedAnswers;
  ariaAnswers: AriaAnswers;
  collapsedAnswers: CollapsedAnswers;
  notificationAnswers: NotificationAnswers;
  invitedQuestions: InvitedQuestions;
  laterQuestions: LaterQuestions;
  waitingQuestions: WaitingQuestions;
  invitationCandidates: InvitationCandidates;
  inviters: Inviters;
  invitees: Invitees;
  similarQuestions: SimilarQuestions;
  questionBanners: QuestionBanners;
  relatedCommodities: RelatedCommodities;
  bio: Bio;
  brand: Brand;
  permission: Permission;
  adverts: Adverts;
  advancedStyle: AdvancedStyle;
  commonAnswerCount: number;
  hiddenAnswerCount: number;
  topicMeta: TopicMeta;
  bluestarRanklist: BluestarRanklist;
  relatedSearch: RelatedSearch;
  autoInvitation: AutoInvitation;
  simpleConcernedFollowers: SimpleConcernedFollowers;
  draftStatus: DraftStatus;
  disclaimers: Disclaimers;
  isShowMobileSignInModal: boolean;
}

class Followers {}

class ConcernedFollowers {}

class Answers2 {}

class HiddenAnswers {}

class UpdatedAnswers {
  [id: string]: N2753591002;
}

class N2753591002 {
  isFetching: boolean;
  isDrained: boolean;
  ids: Id[];
  newIds: NewId[];
  antiSpider: boolean;
  error: boolean;
  next: string;
  sessionId: string;
}

class Id {
  type: string;
  targetType: string;
  target: number;
  skipCount: boolean;
  position: number;
  cursor: string;
}

class NewId {
  type: string;
  targetType: string;
  target: number;
  skipCount: boolean;
  position: number;
  cursor: string;
}

class AriaAnswers {}

class CollapsedAnswers {}

class NotificationAnswers {}

class InvitedQuestions {
  total: Total;
  followees: Followees;
}

class Total {
  count: any;
  isEnd: boolean;
  isLoading: boolean;
  questions: any[];
}

class Followees {
  count: any;
  isEnd: boolean;
  isLoading: boolean;
  questions: any[];
}

class LaterQuestions {
  count: any;
  isEnd: boolean;
  isLoading: boolean;
  questions: any[];
}

class WaitingQuestions {
  recommend: Recommend2;
  invite: Invite;
  newest: Newest;
  hot: Hot;
}

class Recommend2 {
  isEnd: boolean;
  isLoading: boolean;
  questions: any[];
}

class Invite {
  isEnd: boolean;
  isLoading: boolean;
  questions: any[];
}

class Newest {
  isEnd: boolean;
  isLoading: boolean;
  questions: any[];
}

class Hot {
  isEnd: boolean;
  isLoading: boolean;
  questions: any[];
}

class InvitationCandidates {}

class Inviters {}

class Invitees {}

class SimilarQuestions {}

class QuestionBanners {}

class RelatedCommodities {}

class Bio {}

class Brand {}

class Permission {}

class Adverts {}

class AdvancedStyle {}

class TopicMeta {}

class BluestarRanklist {}

class RelatedSearch {}

class AutoInvitation {}

class SimpleConcernedFollowers {}

class DraftStatus {}

class Disclaimers {}

class ShareTexts {}

class Answers3 {
  voters: Voters;
  copyrightApplicants: CopyrightApplicants;
  favlists: Favlists2;
  newAnswer: NewAnswer;
  entityWords: EntityWords;
  concernedUpvoters: ConcernedUpvoters;
  simpleConcernedUpvoters: SimpleConcernedUpvoters;
  paidContent: PaidContent;
  settings: Settings7;
}

class Voters {}

class CopyrightApplicants {}

class Favlists2 {}

class NewAnswer {}

class EntityWords {}

class ConcernedUpvoters {}

class SimpleConcernedUpvoters {}

class PaidContent {}

class Settings7 {}

class Banner {}

class Topic2 {
  bios: Bios;
  hot: Hot2;
  newest: Newest2;
  top: Top;
  sticky: Sticky;
  pin: Pin2;
  unanswered: Unanswered;
  questions: Questions2;
  zivdeo: Zivdeo;
  'zvideo-new': ZvideoNew;
  followers: Followers2;
  contributors: Contributors;
  parent: Parent3;
  children: Children;
  bestAnswerers: BestAnswerers;
  wikiMeta: WikiMeta;
  index: Index;
  intro: Intro;
  meta: Meta;
  schema: Schema;
  creatorWall: CreatorWall;
  wikiEditInfo: WikiEditInfo;
  committedWiki: CommittedWiki;
  landingBasicData: LandingBasicData;
  landingExcellentItems: any[];
  landingExcellentEditors: any[];
  landingCatalog: any[];
  landingEntries: LandingEntries;
}

class Bios {}

class Hot2 {}

class Newest2 {}

class Top {}

class Sticky {}

class Pin2 {}

class Unanswered {}

class Questions2 {}

class Zivdeo {}

class ZvideoNew {}

class Followers2 {}

class Contributors {}

class Parent3 {}

class Children {}

class BestAnswerers {}

class WikiMeta {}

class Index {}

class Intro {}

class Meta {}

class Schema {}

class CreatorWall {}

class WikiEditInfo {}

class CommittedWiki {}

class LandingBasicData {}

class LandingEntries {}

class Explore2 {
  recommendations: Recommendations;
  specials: Specials;
  roundtables: Roundtables2;
  collections: Collections;
  columns: Columns2;
  square: Square;
}

class Recommendations {}

class Specials {
  entities: Entities3;
  order: any[];
}

class Entities3 {}

class Roundtables2 {
  entities: Entities4;
  order: any[];
}

class Entities4 {}

class Collections {}

class Columns2 {}

class Square {
  hotQuestionList: any[];
  potentialList: any[];
}

class Articles2 {
  voters: Voters2;
  concernedUpvoters: ConcernedUpvoters2;
}

class Voters2 {}

class ConcernedUpvoters2 {}

class Favlists3 {
  relations: Relations;
}

class Relations {}

class Pins2 {
  reviewing: Reviewing3;
}

class Reviewing3 {}

class Topstory {
  recommend: Recommend3;
  follow: Follow2;
  followWonderful: FollowWonderful;
  sidebar: any;
  announcement: Announcement3;
  hotList: any[];
  guestFeeds: GuestFeeds;
  followExtra: FollowExtra;
  hotDaily: HotDaily;
  hotHighlight: HotHighlight;
  banner: Banner2;
  commercialBanner: CommercialBanner;
  video: Video;
}

class Recommend3 {
  isFetching: boolean;
  isDrained: boolean;
  afterId: number;
  items: any[];
  next: any;
}

class Follow2 {
  isFetching: boolean;
  isDrained: boolean;
  afterId: number;
  items: any[];
  next: any;
}

class FollowWonderful {
  isFetching: boolean;
  isDrained: boolean;
  afterId: number;
  items: any[];
  next: any;
}

class Announcement3 {}

class GuestFeeds {
  isFetching: boolean;
  isDrained: boolean;
  afterId: number;
  items: any[];
  next: any;
}

class FollowExtra {
  isNewUser: any;
  isFetched: boolean;
  followCount: number;
  followers: any[];
}

class HotDaily {
  data: any[];
  paging: Paging4;
}

class Paging4 {}

class HotHighlight {
  isFetching: boolean;
  isDrained: boolean;
  data: any[];
  paging: Paging5;
}

class Paging5 {}

class Banner2 {}

class CommercialBanner {
  show: boolean;
  banner: Banner3;
  trackData: TrackData;
}

class Banner3 {}

class TrackData {}

class Video {
  items: any[];
  next: any;
  isLoading: boolean;
  isDrained: boolean;
}

class Upload {}

class Video2 {
  data: Data2;
  shareVideoDetail: ShareVideoDetail;
  last: Last;
}

class Data2 {}

class ShareVideoDetail {}

class Last {}

class Zvideos2 {
  campaignVideoList: CampaignVideoList;
  campaigns: Campaigns;
  tagoreCategory: any[];
  recommendations: Recommendations2;
  insertable: Insertable;
  recruit: Recruit;
  qyActivityData: QyActivityData;
  talkActivityData: TalkActivityData;
  party2022ActivityData: Party2022ActivityData;
  batchVideos: BatchVideos;
  contribution: Contribution;
  creationReferences: CreationReferences;
  zvideoCollection: ZvideoCollection;
  zvideoGrant: ZvideoGrant;
  collectData: CollectData;
  videoSource: VideoSource;
}

class CampaignVideoList {}

class Campaigns {}

class Recommendations2 {}

class Insertable {}

class Recruit {
  form: Form;
  submited: boolean;
  ranking: any[];
}

class Form {
  platform: string;
  nickname: string;
  followerCount: string;
  domain: string;
  contact: string;
}

class QyActivityData {}

class TalkActivityData {}

class Party2022ActivityData {}

class BatchVideos {}

class Contribution {
  selectedContribution: any;
  campaign: any;
  configs: Configs;
  contributionLists: ContributionLists;
  recommendQuestions: RecommendQuestions;
  questionSearchResults: QuestionSearchResults;
}

class Configs {}

class ContributionLists {}

class RecommendQuestions {
  isLoading: boolean;
  paging: Paging6;
  data: any[];
}

class Paging6 {
  isEnd: boolean;
  isStart: boolean;
  totals: number;
}

class QuestionSearchResults {
  isLoading: boolean;
  paging: Paging7;
  data: any[];
}

class Paging7 {
  isEnd: boolean;
  isStart: boolean;
  totals: number;
}

class CreationReferences {}

class ZvideoCollection {}

class ZvideoGrant {}

class CollectData {
  isFetching: boolean;
  list: any[];
}

class VideoSource {
  isLoaded: boolean;
}

class Guide {
  guide: Guide2;
}

class Guide2 {
  isFetching: boolean;
  isShowGuide: boolean;
}

class Reward {
  answer: Answer2;
  article: Article3;
  question: Question8;
}

class Answer2 {}

class Article3 {}

class Question8 {}

class Search2 {
  recommendSearch: any[];
  topSearch: TopSearch;
  searchValue: SearchValue;
  suggestSearch: SuggestSearch;
  attachedInfo: AttachedInfo;
  nextOffset: NextOffset;
  topicReview: TopicReview;
  sidebar: Sidebar;
  calendar: Calendar;
  scores: any;
  majors: Majors;
  university: University;
  generalByQuery: GeneralByQuery3;
  generalByQueryInADay: GeneralByQueryInAday;
  generalByQueryInAWeek: GeneralByQueryInAweek;
  generalByQueryInThreeMonths: GeneralByQueryInThreeMonths;
  peopleByQuery: PeopleByQuery;
  topicByQuery: TopicByQuery;
  zvideoByQuery: ZvideoByQuery;
  scholarByQuery: ScholarByQuery;
  columnByQuery: ColumnByQuery;
  liveByQuery: LiveByQuery;
  albumByQuery: AlbumByQuery;
  eBookByQuery: EBookByQuery;
  kmGeneralByQuery: KmGeneralByQuery;
  kmCourseByQuery: KmCourseByQuery;
  customFilter: CustomFilter;
}

class TopSearch {}

class SearchValue {}

class SuggestSearch {}

class AttachedInfo {
  generalByQuery: GeneralByQuery;
}

class GeneralByQuery {}

class NextOffset {
  generalByQuery: GeneralByQuery2;
}

class GeneralByQuery2 {}

class TopicReview {}

class Sidebar {}

class Calendar {}

class Majors {}

class University {}

class GeneralByQuery3 {}

class GeneralByQueryInAday {}

class GeneralByQueryInAweek {}

class GeneralByQueryInThreeMonths {}

class PeopleByQuery {}

class TopicByQuery {}

class ZvideoByQuery {}

class ScholarByQuery {}

class ColumnByQuery {}

class LiveByQuery {}

class AlbumByQuery {}

class EBookByQuery {}

class KmGeneralByQuery {}

class KmCourseByQuery {}

class CustomFilter {
  requestFinished: boolean;
  keys: any[];
  tags: any[];
}

class CreatorSalt {
  recommendQuestionList: any[];
  bannerList: any[];
  claimBannerList: any[];
  sites: any[];
  domains: Domains;
  hasRecored: boolean;
  hasClaim: boolean;
  hasContributedList: any[];
  notContributedList: any[];
  contributesTotal: any;
  previewPageTitle: string;
  previewPageContent: string;
  restContributionNumber: string;
}

class Domains {}

class PublicEditPermission {}

class ReadStatus {}

class DraftHistory {
  history: History;
  drafts: Drafts2;
}

class History {}

class Drafts2 {}

class Notifications2 {
  recent: Recent;
  history: History2;
  notificationActors: NotificationActors;
  recentNotificationEntry: string;
}

class Recent {
  isFetching: boolean;
  isDrained: boolean;
  isPrevDrained: boolean;
  result: any[];
  next: any;
  key: any;
}

class History2 {
  isFetching: boolean;
  isDrained: boolean;
  isPrevDrained: boolean;
  result: any[];
  next: any;
  key: any;
}

class NotificationActors {
  isFetching: boolean;
  isDrained: boolean;
  isPrevDrained: boolean;
  result: any[];
  next: any;
  key: any;
}

class Specials2 {
  entities: Entities5;
  all: All2;
}

class Entities5 {}

class All2 {
  data: any[];
  paging: Paging8;
  isLoading: boolean;
}

class Paging8 {}

class Collections2 {
  hot: Hot3;
  collectionFeeds: CollectionFeeds;
}

class Hot3 {
  data: any[];
  paging: Paging9;
  isLoading: boolean;
}

class Paging9 {}

class CollectionFeeds {}

class UserProfit {
  permission: Permission2;
  linkCardLimit: number;
}

class Permission2 {
  permissionStatus: PermissionStatus;
  visible: boolean;
}

class PermissionStatus {
  zhiZixuan: number;
  recommend: number;
  task: number;
  plugin: number;
  infinity: number;
}

class Mcn2 {
  bindInfo: BindInfo;
  memberCategoryList: any[];
  producerList: any[];
  categoryList: any[];
  lists: Lists;
  banners: Banners;
  protocolStatus: ProtocolStatus;
  probationCountdownDays: number;
}

class BindInfo {}

class Lists {}

class Banners {}

class ProtocolStatus {
  isAgreedNew: boolean;
  isAgreedOld: boolean;
}

class McnActivity {
  household: Household;
}

class Household {
  products: Products;
  rankList: RankList;
}

class Products {}

class RankList {
  total: Total2;
  yesterday: Yesterday;
}

class Total2 {}

class Yesterday {}

class Brand2 {
  contentPlugin: ContentPlugin;
}

class ContentPlugin {}

class Host {
  roundtable: Roundtable;
  special: Special;
}

class Roundtable {
  subjects: Subjects;
  applications: Applications;
  online: Online;
  applies: Applies;
  details: Details;
  includedResource: IncludedResource;
  hotQuestions: HotQuestions;
  warmupContents: WarmupContents;
  batchInclude: BatchInclude;
}

class Subjects {}

class Applications {
  total: number;
}

class Online {
  total: number;
}

class Applies {}

class Details {}

class IncludedResource {}

class HotQuestions {}

class WarmupContents {}

class BatchInclude {}

class Special {
  applications: Applications2;
  censorHistory: CensorHistory;
  drafts: Drafts3;
}

class Applications2 {
  total: number;
  pages: Pages;
  entities: Entities6;
}

class Pages {}

class Entities6 {}

class CensorHistory {}

class Drafts3 {}

class Campaign {
  single: Single;
  list: List;
  videoMakerAcq: VideoMakerAcq;
  vote: Vote;
  cardCollecting: CardCollecting;
  zhiboPandian2020: any;
  boarding: Boarding;
  searchGaokaoSubPage: SearchGaokaoSubPage;
  searchHealth: SearchHealth;
}

class Single {}

class List {}

class VideoMakerAcq {}

class Vote {}

class CardCollecting {
  message: any;
  profile: Profile;
  sharePoster: SharePoster;
  shareLink: any;
  shareIntention: string;
  shareKey: any;
  shareCardId: any;
  inviterInfo: any;
  giverInfo: any;
  prize: any;
  receivedCard: any;
  newCoinCount: any;
  newCardList: any[];
  newUserCardCount: number;
  taskList: any[];
  prizeList: any;
  cardList: any;
  panel: Panel;
  modal: Modal;
}

class Profile {
  balance: string;
  chance: number;
  coinNum: number;
  gatherClose: boolean;
  isGotMagicCard: boolean;
  isPay: boolean;
  partitionStart: boolean;
  totalDone: number;
  withdrawStart: boolean;
}

class SharePoster {
  share: string;
  sendCard: string;
  invite: string;
}

class Panel {
  showTaskPanel: boolean;
  showRewardPanel: boolean;
}

class Modal {
  showWelcomeModal: boolean;
  showFusionModal: boolean;
  showFusionPromptModal: boolean;
  showShareModal: boolean;
  showBackModal: boolean;
}

class Boarding {}

class SearchGaokaoSubPage {}

class SearchHealth {}

class KnowledgePlan {
  lists: Lists2;
  allCreationRankList: AllCreationRankList;
  featuredQuestions: FeaturedQuestions;
}

class Lists2 {}

class AllCreationRankList {}

class FeaturedQuestions {}

class WallE {
  protectHistory: ProtectHistory;
}

class ProtectHistory {
  total: number;
  pages: Pages2;
  entities: Entities7;
}

class Pages2 {}

class Entities7 {}

class Roundtables3 {
  hotQuestions: HotQuestions2;
  warmupContents: WarmupContents2;
  hotDiscussions: HotDiscussions;
  selectedContents: SelectedContents;
  roundtables: Roundtables4;
}

class HotQuestions2 {}

class WarmupContents2 {}

class HotDiscussions {}

class SelectedContents {}

class Roundtables4 {}

class HelpCenter {
  entities: Entities8;
  categories: any[];
  commonQuestions: any[];
  relatedQuestions: RelatedQuestions;
  faqTypes: any[];
}

class Entities8 {
  question: Question9;
  category: Category;
}

class Question9 {}

class Category {}

class RelatedQuestions {}

class Republish {}

class CommercialReport {
  commercialTypes: any[];
}

class CreatorMcn {
  mcn: Mcn3;
  mcnStatistics: McnStatistics;
  isNoAuth: boolean;
  creatorManageData: any[];
  creatorManageDataTotal: number;
  mcnDomains: any[];
  bill: Bill;
}

class Mcn3 {}

class McnStatistics {}

class Bill {
  list: List2;
  detail: Detail;
}

class List2 {}

class Detail {}

class CommentManage {
  commentList: CommentList;
  subCommentList: SubCommentList;
}

class CommentList {
  ids: any[];
  entities: Entities9;
  nextOffset: number;
  urlToken: string;
}

class Entities9 {}

class SubCommentList {
  ids: any[];
  entities: Entities10;
  paging: Paging10;
}

class Entities10 {}

class Paging10 {
  next: string;
  isEnd: boolean;
}

class CommentPermission {}

class CreatorRightStatus {
  list: any[];
}

class ZhiPlus {
  permissionStatus: number;
}

class Streaming {}

class CreationRanking {}

class EduSections {
  eduSectionState: EduSectionState;
}

class EduSectionState {}

class AdPromotion {
  answer: Answer3;
  article: Article4;
}

class Answer3 {}

class Article4 {}

class EditVideo {
  editVideoEnabled: boolean;
}

class CanaryConfig {
  test_canary: string;
  use_new_player: string;
  player_vendor: string;
  use_hevc: string;
  upload_use_signature: string;
  use_backdrop_blur: string;
  article_title_imagex: string;
  play_station: string;
}
