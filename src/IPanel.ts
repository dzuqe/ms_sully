import IPanelItem from './IPanelItem'

interface IPanel
{

  onclick();
  leftclick();
  rightclick();
  render(): HTMLElement;
  update(event: MouseEvent);
  addtotray(item: IPanelItem);
}

export default IPanel;
