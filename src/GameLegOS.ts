import WindowManager from './WindowManager'
import Config from './Config'
import App from './App'

class GameLegOS
{
  wm: WindowManager;
  elem: HTMLElement;
  config: Config;

  render(): HTMLElement
  {
    return this.elem;
  }

  constructor()
  {
    this.elem = document.createElement('div');
    this.elem.id = "framebuffer";
    this.config = new Config();
    this.wm = new WindowManager();
    this.elem.appendChild(this.wm.render());
    this.update(null);
  }

  update(event: MouseEvent)
  {
    // update wm
    this.wm.update(event);
    
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

}

export default GameLegOS;
