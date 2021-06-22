import IWindow from './IWindow'
import Window from './Window'
import IPanel from './IPanel'
import Panel from './Panel'


class WindowManager
{
  /**
   * import IPanel from './IPanel'
   */
  panels: IPanel[];
  windows: IWindow[];
  elem: HTMLElement;

  constructor()
  {
    this.elem = document.createElement('div');
    let panel: IPanel = new Panel();
    this.panels = new Array(panel);
  
    let window: IWindow = new Window();
    this.windows = new Array(window);
  
    this.update();
  }

  render(): HTMLElement
  {
    return this.elem;
  }

  update()
  {
    // render panels
    for (var i = 0; i < this.panels.length; i++) {
      this.elem.appendChild(this.panels[i].render());
    }
  
    // render windows
  
  }

}

export default WindowManager;
