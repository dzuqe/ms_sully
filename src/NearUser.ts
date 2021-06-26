import IUser from './IUser'
import * as api from 'near-api-js'

class NearUser implements IUser
{
  address: string;
  loggedin: boolean;

  login()
  {
    let config = {
      networkId: "default",
      nodeUrl: "https://rpc.testnet.near.org",
      walletUrl: "https://wallet.testnet.near.org",
      contractName: "counter",
    };
  
    let near = api.connect(config);
    /*
    let wallet = new WalletAccount(near);
    let account = (wallet.isSignedIn()) ? wallet.account() : wallet.requestSignIn(contractName);
  */
    console.log("Logged in: ", api, near);
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
