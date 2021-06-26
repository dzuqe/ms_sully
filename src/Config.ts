import App from './App'
import IWindow from './IWindow'
import User from './User'
import Program from './Program'

class Config
{
  apps: App[];
  user: User;

  login()
  {
    this.user.login();
  }

  logout()
  {
    this.user.logout();
  }

  runApp(id: string): IWindow
  {
    // find app with id
    var rapp = null;
    for (var i = 0; i < this.apps.length; i++) {
      var app = this.apps[i];
      if (app.getId() == id) rapp = app;
    }
  
    // run app
    return rapp.run();
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
  }

  addApp(title: string, program: Program)
  {
    // generate id
    // check if id doesn;t exist
    var id: string = "";
    while (!this.appExists(id) && id != "") {
      id = "sdasdsd";
    }
  
    var app = new App(title, program);
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

}

export default Config;
