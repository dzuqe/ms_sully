import App from './App'
import IWindow from './IWindow'
import Program from './Program'
import IUser from './IUser'
import NearUser from './NearUser'

class Config
{
  apps: App[];
  user: IUser;

  login()
  {
    this.user.login();
  }

  logout()
  {
    this.user.logout();
  }

  runApp(id: string)
  {
    // find app with id
    var rapp = null;
    for (var i = 0; i < this.apps.length; i++) {
      var app = this.apps[i];
      if (app.getId() == id) rapp = app;
    }
  
    // run app
    rapp.run();
  }

  constructor()
  {
    this.apps = new Array();
    this.addApp("myapp",  "My App", new Program());
    this.addApp("zapp", "Ze app", new Program());
    this.addApp("dapp", "Dapp", new Program());
    this.user = new NearUser();
  }

  removeApp(id: string): boolean
  {
    return false;
  }

  getApp(id: string): App
  {
     for (var i = 0; i < this.apps.length; i++) {
      var app = this.apps[i];
       if (app.getId() == id) return app;
    }
    return null;
  }

  addApp(id: string, title: string, program: Program)
  {
    // check if id doesn;t exist
    if (this.appExists(id)) {
      console.log("This id already exists.");
      return;
    }
  
    var app = new App(id, title, program);
    this.apps.push(app);
  }

  appExists(id: string): boolean
  {
     for (var i = 0; i < this.apps.length; i++) {
      var app = this.apps[i];
       if (app.getId() == id) return true;
    }
    return false;
  }

  loadConfig(cfile: string)
  {
    console.log("Load config: ", cfile);
  }

  quitApp(id: string)
  {
    // add indexing support for apps
    // remove element from wm
    for (var i = 0; i < this.apps.length; i++) {
      var app = this.apps[i];
       if (app.getId() == id) app.quit();
    }
  }

}

export default Config;
