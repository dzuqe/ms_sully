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
  }

  login(chain: string)
  {
    var user: IUser = null;
    if (chain === "near") {
      user = new NearUser();
    } else if (chain === "ethereum") {
      user = new EthereumUser();
    }
  
    user.login();
    this.os = new GameLegOS(user);
  }

  loginNear(id: string, pk: string, ak: string)
  {
    let user = new NearUser();
    user.loginWithId(id,pk,ak);
    this.os = new GameLegOS(user);
  }

  render(): HTMLElement
  {
    return this.elem;
  }

  update(event: MouseEvent)
  {
  
  }

}

export default LoginManager;
