interface IUser
{

  login();
  logout();
  isLoggedIn(): boolean;
  getNfts();
  getBalance(): Promise<number>;
}

export default IUser;
