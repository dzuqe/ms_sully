import IWindow from './IWindow'
class Window implements IWindow
{
  /**
   * x position of the window
   */
  x: number = 0;
  /**
   * y position of the window
   */
  y: number = 0;
  elem: HTMLElement;
  width: number = 200;
  height: number = 200;
  borderwidth: number = 1;

  open()
  {
  
  }

  close()
  {
  
  }

  minimize()
  {
    this.elem.style.display = 'none';
  }

  maximize()
  {
    this.elem.style.display = 'block';
  }

  resize()
  {
  
  }

  move()
  {
  
  }

  constructor()
  {
    this.elem = document.createElement('div');
    this.update();
  }

  render(): HTMLElement
  {
    // add title and controls 
    return this.elem;
  }

  update()
  {
    this.elem.style.position = "absolute";
    this.elem.style.left = `${this.x}`;
    this.elem.style.top = `${this.y}`;
    this.elem.style.width = `${this.width}px`;
    this.elem.style.height = `${this.height}px`;
    this.elem.style.backgroundColor = `black`;
  }

}

export default Window;
