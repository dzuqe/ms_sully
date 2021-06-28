import IUser from './IUser'
//import * as api from 'near-api-js'
import {connect, Near, WalletConnection, keyStores} from 'near-api-js'
import axios from 'axios'
import INft from './INft'

class NearUser implements IUser
{
  id: string = "";
  pk: string = "";
  ak: string = "";
  loggedin: boolean;
  nfts: INft[];
  wallet: WalletConnection = null;
  near: Near = null;
  config: any = null;

  async login()
  {
    
    if (this.near === null) { 
      this.near = await connect(this.config);
      this.wallet = new WalletConnection(this.near);
    }
  
    let account = this.wallet.isSignedIn() ? this.wallet.account() : this.wallet.requestSignIn("example-contract.testnet");
  
  
    console.log("ACCOUNT: ", account);
  }

  logout()
  {
    this.wallet.signOut();
  }

  async loginWithId(id: string, pk: string, ak: string)
  {
    if (this.near === null) { 
      this.near = await connect(this.config);
    }

    this.id = id;
    this.pk = pk;
    this.ak = ak;

    let account = await this.near.account(this.id);
    console.log("ACCOUNT: ", account);
  }

  isLoggedIn(): boolean
  {
    return this.wallet.isSignedIn();
  }

  getNfts()
  {
    console.log("get nfts");
  }

  async getParasNfts()
  {
    // main net paras near get tokens with creatorId as opgames.near and user ownership as this user
    let url = `https://mainnet-api.paras.id/tokens?ownerId=${this.id}`;
    let data = await axios(url);
    console.log(data);
    return new Array(new INft());
  }

  constructor()
  {
    this.config = {
      networkId: "testnet",
      keyStore: new keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl: "https://rpc.testnet.near.org",
      walletUrl: "https://wallet.testnet.near.org",
      helperUrl: "https://helper.testnet.near.org",
      explorerUrl: "https://explorer.testnet.near.org",
    };
  
    this.nfts = new Array();
  }

  getId()
  {
    return this.wallet.getAccountId();
  }

}

export default NearUser;
