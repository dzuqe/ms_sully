import IPanelItem from './IPanelItem'
import PanelButton from './PanelButton'

class Tray
{
  items: IPanelItem[];
  elem: HTMLElement;

  additem(item: IPanelItem)
  {
    this.items.push(item);
    this.elem.appendChild(item.render());
  }

  removeitem()
  {
  
  }

  update(event: MouseEvent)
  {
    for (var i = 0; i < this.items.length; i++)
      this.items[i].update(event);
  }

  render(): HTMLElement
  {
    return this.elem;
  }

  constructor()
  {
    this.elem = document.createElement("div");
    this.items = new Array();
  
    for (var i = 0; i < this.items.length; i++)
      this.elem.appendChild(this.items[i].render());
  }

}

export default Tray;
