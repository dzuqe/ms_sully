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
    this.config = new Config();
    this.elem = document.createElement('div');
    this.elem.id = "framebuffer";
    this.wm = new WindowManager();
    this.lm = new LocationManager(narrative);
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
      app.quit();
    } else {
      console.log("App isn't running.");
    }
  }

  displayLocation()
  {
    let loc = this.lm.getCurrentLocation();
  
    if (loc === null) {
      console.log("Root");
      this.elem.style = "background-image: url(https://salud-america.org/wp-content/uploads/2020/01/Suburban-street.jpg); background-size: 100%; overflow: auto; min-height: 100vh"; 
      // get all locations
     // for (var i in locations) {
        //let tloc = locations[i];
        //let id = tloc.name.replace(' ', '');
       // let app = new App(id, tloc.name, new Program());
       // this.wm.addWindow(app);
      //}
    } else {
      console.log("Loc: ", loc);
      this.elem.style = `background-image: url(${loc.image}); background-size: 100%; overflow: auto; min-height: 100vh`; 
  
      // add all people
     // for (var i in loc.npcs) {
        //let npc = loc.npcs[i];
        //let id = npc.name.replace(' ', '');
       // let app = new App(id, npc.name, new Program());
       // this.wm.addWindow(app);
      //}
  
      // add all stuff
      // for (var i in loc.items) {
        //let item = loc.items[i];
        //let id = item.name.replace(' ', '');
       // let app = new App(id, item.name, new Program());
       // this.wm.addWindow(app);
      //}
      
    }
    this.update(null);
  }

}

export default GameLegOS;
