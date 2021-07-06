class Program
{
  elem: HTMLElement;

  constructor()
  {
    this.elem = document.createElement('div')
    this.elem.style.width = `100%`;
    this.elem.style.height = `100%`;
    this.update(null);
  }

  render(): HTMLElement
  {
    return this.elem;
  }

  update(event: MouseEvent)
  {
  }

  addImage(image: string)
  {
    var elem = document.createElement('img');
    elem.src = image;
    elem.style.width = "100%";
    this.elem.appendChild(elem);
    this.update(null);
  }

}

export default Program;
