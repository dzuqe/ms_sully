import Toggle from './Toggle'

class PanelButton
{
  elem: HTMLElement;
  width: number;
  height: number;
  icon: string = null;
  color: string = "yellow";
  fns: Toggle;
  active: boolean = false;

  onclick(event: MouseEvent)
  {
    console.log("PanelButton clicked: ", event);
  
    // run user defined function
    if (!this.active) this.fns.open();
    else this.fns.close();
  
    this.active = !this.active;
  }

  leftclick()
  {
    console.log("PanelButton left clicked");
  }

  rightclick()
  {
    console.log("PanelButton right clicked");
  }

  constructor(width: number, height: number, color: string, fns: Toggle)
  {
    this.elem = document.createElement('div');
    this.width = width;
    this.height = height;
    this.color = color;
    this.fns = fns;
    this.elem.onclick = this.onclick.bind(this);
    this.update(null);
   
  }

  render()
  {
    return this.elem;
  }

  update(event: MouseEvent)
  {
    this.elem.style.width = `${this.width}px`;
    this.elem.style.height = `${this.height}px`;
    this.elem.style.backgroundColor = `${this.color}`;
    // icon
  }

}

export default PanelButton;
