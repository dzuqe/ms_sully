import IUser from './IUser'
class EthereumUser implements IUser
{

  login()
  {
  
  }

  logout()
  {
  
  }

  isLoggedIn(): boolean
  {
    return false;
  }

  getNfts()
  {
  
  }

  getOpenseaNfts()
  {
  
  }

  getRaribleNfts()
  {
  
  }

  getBalance(): Promise<number>
  {
    return 0;
  }

}

export default EthereumUser;
