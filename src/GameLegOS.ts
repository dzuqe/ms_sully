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
  
    this.update();
  }

  onclick(x: number, y: number)
  {
    console.log("yay, handled clcik!", x, y);
    return "onclick";
  }

  onkeyup()
  {
    return "onkeyup";
  }

  onkeydown()
  {
    return "onkeydown";
  }

  update()
  {
    // render wm
    this.elem.appendChild(this.wm.render());
  }

}

export default GameLegOS;
