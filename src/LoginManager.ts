import GameLegOS from './GameLegOS'
import axios from 'axios'

class LoginManager
{
  os: GameLegOS;
  elem: HTMLElement;

  constructor()
  {
    this.elem = document.createElement('div');
    this.elem.style = "background-image: url(https://i.imgur.com/cCvDvEu.jpeg); background-size: 100%; overflow: auto; min-height: 100vh"; 
  
    let title = document.createElement('div');
    title.innerHTML = `<p class="login-title" style="font-size: 70px;">Ms Sully</p><p class="login-title" style="margin-top: -20px">Enter</p>`;
    title.style = "width: 100%; text-align: center;  margin: 25vh auto 0 auto; color: white; text-shadow: 1px 1px 30px #000000";
  
    let el = document.createElement('div');
    el.style = "width: 280px; margin: 20px auto 0 auto";
  
    let icon1 = "https://maxcdn.icons8.com/Share/icon/color/Logos/ethereum1600.png";
  
    let btn1 = document.createElement('button')
    btn1.name = "ethereum";
    btn1.className = "login-btn";
    btn1.onclick = this.login.bind(this, "ethereum");
    btn1.innerHTML = `<div class="wrapper"><img src="${icon1}" style="width: 100%;" /><p>Ethereum</p></div>`;
  
    el.appendChild(btn1);
  
    this.elem.appendChild(title);
    this.elem.appendChild(el);
    this.update(null);
  }

  async login(event: MouseEvent)
  {
    let data = await axios("./data.json");
    let config = data.data.data;
  
    this.os = new GameLegOS(config);
  
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

}

export default LoginManager;
