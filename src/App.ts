import Program from './Program'
import IWindow from './IWindow'
import Window from './Window'

/*
- has information about an app
- running an app returns a new window with the app's program attached to it
*/

class App
{
  title: string;
  program: Program;
  id: string;
  running: boolean;

  run()
  {
    this.running = true;
    
  }

  quit()
  {
    this.running = false;
  }

  constructor(id: string, title: string, program: Program)
  {
    this.id = id;
    this.title = title;
    this.program = program;
  }

  getTitle()
  {
    return this.title;
  }

  setTitle(title: string)
  {
    this.title = title;
  }

  getId(): string
  {
    return this.id;
  }

  isRunning(): boolean
  {
    return this.running;
  }

}

export default App;
