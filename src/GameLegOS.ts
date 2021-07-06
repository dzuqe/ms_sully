import WindowManager from './WindowManager'
import LocationManager from './LocationManager'
import Config from './Config'
import App from './App'
import Program from './Program'

class GameLegOS
{
  wm: WindowManager;
  elem: HTMLElement;
  config: Config;
  booted: boolean = false;
  lm: LocationManager;

  render(): HTMLElement
  {
    return this.elem;
  }

  constructor(narrative: object)
  {
    console.log(narrative);
  
    this.config = new Config();
    this.elem = document.createElement('div');
    this.elem.id = "framebuffer";
    this.wm = new WindowManager();
    this.elem.appendChild(this.wm.render());
  
    // just print something
    //let fns2: Toggle = {
    //  open: function() {console.log("right open")},
    //  close: function() {console.log("right close")}
    //};
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
      this.wm.addWindow(app);
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
      this.wm.removeWindow(app);
      app.quit();
    } else {
      console.log("App isn't running.");
    }
  }

  async boot()
  {
  
  }

}

export default GameLegOS;
