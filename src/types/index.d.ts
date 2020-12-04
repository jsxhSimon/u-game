interface Banner {
  pic: string;
  url: string;
}

interface HotMatch {
  id: number;
  homeImg: string;
  homeName: string;
  awayImg: string;
  awayName: string;
  isDisabled: number;
  matchId: number;
  matchTime: number;
  type: number;
  url: string;
  title: string;
}

interface ScrollBallMatchs {
  [attr: string]: Match
}

interface Match {
  Id: string;
  Cid: string;
  Album: string;
  AwayTeamId: string;
  AwayTeamName: string;
  AwayTeamPic: string;
  HomeTeamId: string;
  HomeTeamName: string;
  HomeTeamPic: string;
  CategoryPic: string;
  LeagueName: string;
  Score: string;
  StartTime: string;
  StartTimeInt: number;
  Status: number;
  active_markets_count: number;
  live_show: boolean;
}

interface RecentGame {
  id: number;
  code: string;
  pic: string;
  title: string;
  url: string;
  type: number;
}

interface Activity {
  pic: string;
  url: string;
}

type CurrentGrade = {
  code: string;
  ename: string;
  id: number;
  rank: 3,
  point: number;
  profit: number;
}

interface UserInfo {
  login: boolean;
  UserName: string;
  NickName: string;
  /** 异地登录 需要验证手机尾号 */
  tailNumber: string;
  isFundsPwd: boolean;
  current_grade: CurrentGrade;
  setUserInfo: Function;
  getUserInfo: Function;
  getIsFundsPwd: Function;
}

type SubsetOfUserInfo = Partial<UserInfo>

interface HttpResult {
  data: any;
  message: string;
  state: boolean;
}