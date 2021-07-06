import WindowManager from './WindowManager'
import LocationManager from './LocationManager'
import Config from './Config'
import App from './App'
import Program from './Program'
import INpc from './INpc'

class GameLegOS
{
  wm: WindowManager;
  elem: HTMLElement;
  booted: boolean = false;
  lm: LocationManager;
  player: INpc;

  render(): HTMLElement
  {
    return this.elem;
  }

  constructor(narrative: object)
  {
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

  displayLocation()
  {
    let loc = this.lm.getCurrentLocation();
  
    if (loc === null) {
      console.log("Root");
      document.getElementById("root").style = "background-image: url(https://salud-america.org/wp-content/uploads/2020/01/Suburban-street.jpg); background-size: 100%; overflow: auto; min-height: 100vh"; 
      let locs = this.lm.getAllLocations();
      for (var i in locs) {
        let tloc = locs[i];
        let id = tloc.name.replace(' ', '');
        let prog = new Program();
        prog.addImage(tloc.image);
        let app = new App(id, tloc.name, prog);
        this.wm.addWindow(app);
      }
    } else {
      console.log("Loc: ", loc);
      document.getElementById("root").style = `background-image: url(${loc.image}); background-size: 100%; overflow: auto; min-height: 100vh`; 
  
      // add all people
      for (var i in loc.npcs) {
        let npc = loc.npcs[i];
        let id = npc.name.replace(' ', '');
        let prog = new Program();
        prog.addImage(npc.image);
        let app = new App(id, npc.name, prog);
        this.wm.addWindow(app);
      }
  
      // add all stuff
      for (var i in loc.items) {
        let item = loc.items[i];
        let id = item.name.replace(' ', '');
        let prog = new Program();
        prog.addImage(item.image);
        let app = new App(id, item.name, prog);
        this.wm.addWindow(app);
      } 
    }
  }
}

export default GameLegOS;
