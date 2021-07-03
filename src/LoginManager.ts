import GameLegOS from './GameLegOS'
import IUser from './IUser'
import EthereumUser from './EthereumUser'
import NearUser from './NearUser'

class LoginManager
{
  os: GameLegOS;
  elem: HTMLElement;

  constructor()
  {
    this.elem = document.createElement('div');
    this.elem.style = "background-image: url(https://i.imgur.com/cCvDvEu.jpeg); background-size: 100%; overflow: auto; min-height: 100vh"; 
  
    let title = document.createElement('div');
    title.innerHTML = `<p class="login-title" style="font-size: 70px;">GameLegOS</p><p class="login-title" style="margin-top: -20px">Login</p>`;
    title.style = "width: 100%; text-align: center;  margin: 25vh auto 0 auto; color: white; text-shadow: 1px 1px 30px #000000";
  
    let el = document.createElement('div');
    el.style = "width: 280px; margin: 20px auto 0 auto";
  
    let icon1 = "https://maxcdn.icons8.com/Share/icon/color/Logos/ethereum1600.png";
    let icon2 = "https://icodrops.com/wp-content/uploads/2020/04/Near_logo.png";
  
    let btn1 = document.createElement('button')
    btn1.name = "ethereum";
    btn1.className = "login-btn";
    btn1.onclick = this.login.bind(this, "ethereum");
    btn1.innerHTML = `<div class="wrapper"><img src="${icon1}" style="width: 100%;" /><p>Ethereum</p></div>`;
  
    let btn2 = document.createElement('button');
    btn2.name = "near";
    btn2.className = "login-btn";
    btn2.onclick = this.login.bind(this, "near");
    btn2.innerHTML = `<div class="wrapper"><img src="${icon2}" style="width: 100%;" /><p>Near</p></div>`;
  
    el.appendChild(btn1);
    el.appendChild(btn2);
  
    this.elem.appendChild(title);
    this.elem.appendChild(el);
    this.update(null);
  }

  login(chain: string, event: MouseEvent)
  {
    var user: IUser = null;
    if (chain === "near") {
      user = new NearUser();
    } else if (chain === "ethereum") {
      user = new EthereumUser();
    } else {
      console.log("Failed to select network: ", chain);
      return;
    }
  
    user.login();
    this.os = new GameLegOS(user);
    // update screen
    document.getElementById('root').removeChild(this.render());
    document.getElementById('root').appendChild(this.os.render());
  }

  render(): HTMLElement
  {
    return this.elem;
  }

  update(event: MouseEvent)
  {
  
  }

  async loginNear(id: string, pk: string, ak: string)
  {
    let user = new NearUser();
    await user.loginWithId(id,pk,ak);
    this.os = new GameLegOS(user);
  }

}

export default LoginManager;
