import IWindow from './IWindow'
import Window from './Window'
import IPanelItem from './IPanelItem'
import IPanel from './IPanel'
import Panel from './Panel'
import Program from './Program'
import App from './App'


/*
- has information about all the running windows
- renders the display including panels
*/


class WindowManager
{
  panels: IPanel[];
  elem: HTMLElement;
  windows: IWindow[];

  constructor()
  {
    this.elem = document.createElement('div');
    this.elem.id = "wm";
    this.elem.style = "background-image: url(https://i.imgur.com/cCvDvEu.jpeg); background-size: 100%; min-height:100vh ";
    this.panels = new Array(new Panel());
    this.windows = new Array();
  
    // add panels
    for (var i = 0; i < this.panels.length; i++) {
      this.elem.appendChild(this.panels[i].render());
    }
  
    this.update(null);
  }

  render(): HTMLElement
  {
    return this.elem;
  }

  update(event: MouseEvent)
  {
    for (var i = 0; i < this.panels.length; i++)
      this.panels[i].update(event);
  
    for (var i = 0; i < this.windows.length; i++)
      this.windows[i].update(event);
  }

  addwindow(app: App)
  {
    let window = new Window(
      app.id,
      app.title,
      200,  // width
      200//, // height
      //app.program // app should
    );
  
    this.windows.push(window);
    this.elem.appendChild(window.render());
  }

  removewindow(app: App)
  {
    for (var i=0; i<this.windows.length; i++) {
      if (this.windows[i].getid() === app.id) {
        this.elem.removeChild(this.windows[i].render());
        break;
      }
    }
    
    if (i < this.windows.length) this.windows.splice(i,i-1);
  }

  addpanel(panel: IPanel)
  {
  
  }

  removepanel(panel: IPanel)
  {
  
  }

  addtopanel(item: IPanelItem)
  {
    this.panels[0].addtotray(item);
  }

}

export default WindowManager;
