interface IUser
{

  login();
  logout();
  isLoggedIn(): boolean;
  getNfts();
}

export default IUser;
