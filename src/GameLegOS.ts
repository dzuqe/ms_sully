import WindowManager from './WindowManager'
import Config from './Config'

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

}

export default GameLegOS;
