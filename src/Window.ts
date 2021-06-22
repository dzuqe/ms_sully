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
  ismousedown: boolean;

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

  resize(width: number, height: number)
  {
    this.width = width;
    this.height = height;
  }

  move(x: number, y: number)
  {
    this.y = y;
    this.x = x;
  }

  constructor()
  {
    this.elem = document.createElement('div');
  
    var title = document.createElement('div');
    title.style.width = "100%";
    title.style.height = "20px";
    title.style.backgroundColor = "white";
    title.innerText = "window title";
    title.onmousedown = this.onmousedown.bind(this);
    title.onmouseup = this.onmouseleave.bind(this);
    this.ismousedown = false;
  
    this.elem.appendChild(title);
  
    this.update(null);
  }

  render(): HTMLElement
  {
    // add title and controls 
    return this.elem;
  }

  update(event: MouseEvent)
  {
    if (this.ismousedown) {
       this.x = event.clientX;
       this.y = event.clientY;
    }
  
    this.elem.style.position = "absolute";
    this.elem.style.left = `${this.x}px`;
    this.elem.style.top = `${this.y}px`;
    this.elem.style.width = `${this.width}px`;
    this.elem.style.height = `${this.height}px`;
    this.elem.style.backgroundColor = `black`;
  }

  onmousedown()
  {
    this.ismousedown = true;
  
  }

  onmouseleave()
  {
    this.ismousedown = false;
  
  }

}

export default Window;
