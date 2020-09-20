interface IUserInfo {
  name: string;
  email: string;
}
interface IUserContext {
  isLoading: boolean;
  userInfo: IUserInfo | undefined;
  addr: string | undefined;
  getAddr: (addr: string | undefined) => void;
  login: (email: string, password: string) => void;
  getUserInfo: () => void;
  logout: () => void;
}
