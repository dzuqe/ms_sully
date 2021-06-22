interface IPanel
{

  onclick();
  leftclick();
  rightclick();
  render(): HTMLElement;
  update();
}

export default IPanel;
