interface IPanel
{

  onclick();
  leftclick();
  rightclick();
  render(): HTMLElement;
  update(event: MouseEvent);
}

export default IPanel;
