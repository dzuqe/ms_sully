import WindowManager from './WindowManager'

class GameLegOS
{
  wm: WindowManager;
  elem: HTMLElement;

  render(): HTMLElement
  {
    return this.elem;
  }

  constructor()
  {
    this.elem = document.createElement('div');
    this.elem.id = "framebuffer";
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
