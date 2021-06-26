import IWindow from './IWindow'
import Program from './Program'

class Window implements IWindow
{
  id: string;
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
  title: string;

  open()
  {
    console.log('ope');
  }

  close()
  {
    console.log('close');
  }

  resize(width: number, height: number)
  {
    this.width = width;
    this.height = height;
  }

  minimize()
  {
    this.elem.style.display = 'none';
  }

  maximize()
  {
    this.elem.style.display = 'block';
  }

  move(x: number, y: number)
  {
    this.y = y;
    this.x = x;
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
    let el = document.getElementById("win-"+this.id);
    if (el !== null) el.innerText = this.title;
  }

  render(): HTMLElement
  {
    // add title and controls 
    return this.elem;
  
  }

  onmousedown()
  {
    this.ismousedown = true;
  
  }

  onmouseleave()
  {
    this.ismousedown = false;
  
  }

  constructor(id?: string, title?: string, width?: number, height?: number)
  {
    this.id = (id !== undefined) ? id : "4234";
    this.title = (title !== undefined) ? title : "x";
    this.elem = document.createElement('div');
    this.width = (width !== undefined) ? width : 200;
    this.height = (height !== undefined) ? height : 200;
  
    var titl = document.createElement('div');
    titl.id = "win-" + this.id;
    titl.style.width = "100%";
    titl.style.height = "20px";
    titl.style.backgroundColor = "white";
  
    titl.innerText = this.title;
    titl.onmousedown = this.onmousedown.bind(this);
    titl.onmouseup = this.onmouseleave.bind(this);
    this.ismousedown = false;
  
    var content = document.createElement('div');
    content.style.width = "100%";
    content.style.height = "80px";
    content.style.backgroundColor = "blue";
    content.innerText = "app";
  
    this.elem.appendChild(titl);
    this.elem.appendChild(content);
  
    this.update(null);
  }

  getid(): string
  {
    return this.id;
  }

  setTitle(title: string)
  {
    this.title = title;
    this.update(null);
  }

}

export default Window;
