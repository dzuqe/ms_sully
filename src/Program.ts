class Program
{
  elem: HTMLElement;

  constructor()
  {
    this.elem = document.createElement('div')
  
    this.update(null);
  }

  render(): HTMLElement
  {
    return this.elem;
  }

  update(event: MouseEvent)
  {
    this.elem.style = "width: 100%; height: 80px; overflow: auto;";
    this.elem.style.backgroundColor = "blue";
    this.elem.innerText = "app";
  }

}

export default Program;
