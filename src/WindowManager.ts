import IWindow from './IWindow'
import Window from './Window'
import IPanel from './IPanel'
import Panel from './Panel'
import Program from './Program'


class WindowManager
{
  /**
   * import IPanel from './IPanel'
   */
  panels: IPanel[];
  elem: HTMLElement;
  windows: IWindow[];

  constructor()
  {
    this.elem = document.createElement('div');
    this.panels = new Array(new Panel());
    this.windows = new Array(new Window());
  
    // add panels
    for (var i = 0; i < this.panels.length; i++) {
      this.elem.appendChild(this.panels[i].render());
    }
  
    // add windows
  
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

}

export default WindowManager;
