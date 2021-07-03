interface IPanelItem
{

  onclick(event: MouseEvent);
  render(): HTMLElement;
  update(event: MouseEvent);
}

export default IPanelItem;
