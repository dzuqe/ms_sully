import IPanelItem from './IPanelItem'
//import IPanelItem from './IPanelItem'

class PanelText implements IPanelItem
{
  elem: HTMLElement;
  fontsize: number = 24;
  text: string;

  render(): HTMLElement
  {
    return this.elem;
  }

  update(event: MouseEvent)
  {
    this.elem.innerText = this.text;
  }

  onclick(event: MouseEvent)
  {
  
  }

  constructor(text: string)
  {
    this.elem = document.createElement('div');
    this.text = text;
    this.update(null);
  }

}

export default PanelText;
