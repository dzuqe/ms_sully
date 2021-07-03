import IUser from './IUser'
//import * as api from 'near-api-js'
import {connect, Near, WalletConnection, keyStores, utils} from 'near-api-js'
import axios from 'axios'
import INft from './INft'
import Nft from './Nft'

class NearUser implements IUser
{
  address: string = "scribble.near";
  loggedin: boolean;
  nfts: INft[];
  wallet: WalletConnection = null;
  near: Near = null;
  config: any = null;
  id: string = "";
  pk: string = "";
  ak: string = "";
  account: any;
  utils: any;
  booted: boolean = false;

  async login()
  {
    let config = {
      networkId: "testnet",
      keyStore: new keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl: "https://rpc.testnet.near.org",
      walletUrl: "https://wallet.testnet.near.org",
      helperUrl: "https://helper.testnet.near.org",
      explorerUrl: "https://explorer.testnet.near.org",
    };
    
    if (this.near === null) { 
      this.near = await connect(config);
      this.wallet = new WalletConnection(this.near);
    }
  
    let account = this.wallet.isSignedIn() ? this.wallet.account() : this.wallet.requestSignIn("example-contract.testnet");
  
  
    console.log("ACCOUNT: ", account);
  }

  logout()
  {
    this.wallet.signOut();
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
      let url = `https://mainnet-api.paras.id/tokens?ownerId=${this.address}`;
      let tdata = await axios(url);
      let data = tdata.data.data;
      for (var i = 0; i < data.results.length; i++)
      {
         this.nfts.push(new Nft(
            data.results[i].metadata.name,
            data.results[i].metadata.description,
            data.results[i].metadata.image,
            data.results[i].metadata.collection,
            data.results[i].creatorId
        ));
      }
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
    this.update();
  
  }

  getId()
  {
    return this.wallet.getAccountId();
  }

  async loginWithId(id: string, pk: string, ak: string)
  {
    if (this.near === null) { 
      this.near = await connect(this.config);
    }
  
    this.id = id;
    this.pk = pk;
    this.ak = ak;
  
    this.account = await this.near.account(this.id);
  }

  async getBalance(): Promise<number>
  {
    if (this.account === null) {
    }
    let amount = await this.account.getAccountBalance();
    return Number(amount.total)/1e24;
  }

  async update()
  {
    if (!this.booted) {
      this.booted = true;
      await this.getParasNfts();
    }
  }

}

export default NearUser;
