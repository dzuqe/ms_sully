import Program from './Program'
import IWindow from './IWindow'
import Window from './Window'

class App
{
  title: string;
  program: Program;
  id: string;
  window: IWindow;

  run(): HTMLElement
  {
  
    this.window = new Window("test", 200,200, new Program());
  
    return document.createElement('div');
    
  }

  quit()
  {
    this.window.close();
    // remove from tree
  }

  constructor(title: string, program: Program)
  {
    this.title = title;
    this.program = program;
  
    //this.window = new Window();
    this.window = new Window(
      this.title,
      200,  // width
      200, // height
      this.program // app should
    );
  
    this.update(null);
  }

  update(event: MouseEvent)
  {
    this.window.update(event);
  }

  render(): HTMLElement
  {
    return this.window.render();
  }

  getTitle()
  {
  
  }

  setTitle()
  {
  
  }

  getId(): string
  {
    return "42";
  }

}

export default App;
