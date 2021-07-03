import WindowManager from './WindowManager'
import Config from './Config'
import App from './App'
import IUser from './IUser'
import PanelText from './PanelText'

class GameLegOS
{
  wm: WindowManager;
  elem: HTMLElement;
  config: Config;
  booted: boolean = false;

  render(): HTMLElement
  {
    return this.elem;
  }

  constructor(user: IUser)
  {
    this.config = new Config(user);
    this.elem = document.createElement('div');
    this.elem.id = "framebuffer";
    this.wm = new WindowManager();
    this.elem.appendChild(this.wm.render());
  
    // just print something
    //let fns2: Toggle = {
    //  open: function() {console.log("right open")},
    //  close: function() {console.log("right close")}
    //};
  
    //this.right_tray = new Tray();
  //  let amount = await user.getBalance();
  //  this.wm.addtopanel(new PanelText(String(amount)));
  
    //await this.boot();
    this.update(null);
  }

  async update(event: MouseEvent)
  {
    // update wm
    this.wm.update(event);
    if (!this.booted) {
      this.booted = true;
      await this.boot();
    }
    
  }

  runApp(id: string)
  {
    let app: App = this.config.appExists(id) ? this.config.getApp(id) : null;
  
    if (app === null) {
      console.log("The app doesn't exist");
    } else if (!app.isRunning()) {
      app.run();
      this.wm.addwindow(app);
    } else {
      console.log("App is already running.");
    }
  }

  quitApp(id: string)
  {
    let app: App = this.config.appExists(id) ? this.config.getApp(id) : null;
  
    if (app === null) {
      console.log("The app doesn't exist");
    } else if (app.isRunning()) {
      this.wm.removewindow(app);
      app.quit();
    } else {
      console.log("App isn't running.");
    }
  }

  async boot()
  {
    let amount = await this.config.user.getBalance();
    this.wm.addtopanel(new PanelText(String(amount)));
  }

}

export default GameLegOS;
