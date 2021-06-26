import PanelButton from './PanelButton'

class Tray
{
  btns: PanelButton[];

  addbtn(btn: PanelButton)
  {
    this.btns.push(btn);
  }

  removebtn()
  {
  
  }

  update(event: MouseEvent)
  {
    for (var i = 0; i < this.btns.length; i++)
      this.btns[i].update(event);
  }

  render(): HTMLElement
  {
    var elem = document.createElement("div");
    for (var i = 0; i < this.btns.length; i++)
      elem.appendChild(this.btns[i].render());
    return elem;
  }

  constructor()
  {
    this.btns = new Array();
  }

}

export default Tray;
