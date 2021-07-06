import IWindow from './IWindow'
import Window from './Window'
import Program from './Program'
import App from './App'

/*
- has information about all the running windows
- renders the display
*/

class WindowManager
{
  elem: HTMLElement;
  windows: IWindow[];

  constructor()
  {
    this.elem = document.createElement('div');
    this.elem.id = "wm";
    //this.elem.style = "background-image: url(https://i.imgur.com/cCvDvEu.jpeg); background-size: 100%; min-height:100vh ";
    this.windows = new Array();
    this.update(null);
  }

  render(): HTMLElement
  {
    return this.elem;
  }

  update(event: MouseEvent)
  {
    for (var i = 0; i < this.windows.length; i++)
      this.windows[i].update(event);
  }

  addWindow(app: App)
  {
    let window = new Window(
      app.id,
      app.title,
      200,  // width
      200, // height
      app.program // app should
    );
  
    this.windows.push(window);
    this.elem.appendChild(window.render());
  }

  removeAllWindows()
  {
    for (var i in this.windows) {
      this.elem.removeChild(this.windows[i].render());
    }
  
    this.windows = [];
  }

}

export default WindowManager;
