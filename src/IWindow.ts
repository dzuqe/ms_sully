interface IWindow
{

  open();
  close();
  resize(width: number, height: number);
  minimize();
  maximize();
  move(x: number, y: number);
  update(event: MouseEvent);
  render(): HTMLElement;
  getid(): string;
}

export default IWindow;
