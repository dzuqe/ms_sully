interface IWindow
{

  open();
  close();
  resize();
  minimize();
  maximize();
  move();
  update();
  render(): HTMLElement;
}

export default IWindow;
