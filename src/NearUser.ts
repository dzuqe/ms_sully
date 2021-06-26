import IUser from './IUser'
class NearUser implements IUser
{
  address: string;
  loggedin: boolean;

  login()
  {
  /*
    let networkId = "default";
    let nodeUrl = "https://rpc.testnet.near.org";
    let walletUrl = "https://wallet.testnet.near.org";
    let walletUrl = "counter";
   
    let near = new Near({networkId, nodeUrl, walletUrl});
  
    let wallet = new WalletAccount(near);
    let account = (wallet.isSignedIn()) ? wallet.account() : wallet.requestSignIn(contractName);
  
    console.log("Logged in: ", account, near, wallet);
  */
  }

  logout()
  {
  
  }

  isLoggedIn(): boolean
  {
    return this.loggedin;
  }

}

export default NearUser;
