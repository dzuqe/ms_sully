class Window {
    constructor() {
        /**
         * x position of the window
         */
        this.x = 0;
        /**
         * y position of the window
         */
        this.y = 0;
        this.width = 200;
        this.height = 200;
        this.borderwidth = 1;
        this.elem = document.createElement('div');
        var title = document.createElement('div');
        title.style.width = "100%";
        title.style.height = "20px";
        title.style.backgroundColor = "white";
        title.innerText = "window title";
        title.onmousedown = this.onmousedown.bind(this);
        title.onmouseup = this.onmouseleave.bind(this);
        this.ismousedown = false;
        this.elem.appendChild(title);
        this.update(null);
    }
    open() {
    }
    close() {
    }
    minimize() {
        this.elem.style.display = 'none';
    }
    maximize() {
        this.elem.style.display = 'block';
    }
    resize(width, height) {
        this.width = width;
        this.height = height;
    }
    move(x, y) {
        this.y = y;
        this.x = x;
    }
    render() {
        // add title and controls 
        return this.elem;
    }
    update(event) {
        if (this.ismousedown) {
            this.x = event.clientX;
            this.y = event.clientY;
        }
        this.elem.style.position = "absolute";
        this.elem.style.left = `${this.x}px`;
        this.elem.style.top = `${this.y}px`;
        this.elem.style.width = `${this.width}px`;
        this.elem.style.height = `${this.height}px`;
        this.elem.style.backgroundColor = `black`;
    }
    onmousedown() {
        this.ismousedown = true;
    }
    onmouseleave() {
        this.ismousedown = false;
    }
}

class Panel {
    constructor() {
        this.orientation = "top";
        /**
         * percentage of the panel's width in accordance with the screen's width
         */
        this.width = 100;
        this.height = 35;
        this.color = "red";
        this.elem = document.createElement('div');
        var menubtn1 = document.createElement('div');
        menubtn1.style.width = "33px";
        menubtn1.style.height = "33px";
        menubtn1.style.backgroundColor = "yellow";
        var menubtn2 = document.createElement('div');
        menubtn2.style.width = "33px";
        menubtn2.style.height = "33px";
        menubtn2.style.backgroundColor = "yellow";
        this.left_tray = new Array(menubtn1);
        this.right_tray = new Array(menubtn2);
        var lt = document.createElement('div');
        lt.style.float = "left";
        for (var i = 0; i < this.left_tray.length; i++)
            lt.appendChild(this.left_tray[i]);
        var rt = document.createElement('div');
        rt.style.float = "right";
        for (var i = 0; i < this.right_tray.length; i++)
            rt.appendChild(this.right_tray[i]);
        this.elem.appendChild(lt);
        this.elem.appendChild(rt);
        this.update(null);
    }
    onclick() {
        console.log("You clicked the panel");
    }
    leftclick() {
    }
    rightclick() {
    }
    render() {
        // render left menu
        //this.elem.appendChild(this.left_tray):
        // render right app tray
        //this.elem.appendChild(this.right_tray):
        return this.elem;
    }
    update(event) {
        this.elem.style.width = `${this.width}%`;
        this.elem.style.height = `${this.height}px`;
        this.elem.style.top = `0`;
        this.elem.style.left = `0`;
        this.elem.style.backgroundColor = `${this.color}`;
    }
}

class WindowManager {
    constructor() {
        this.elem = document.createElement('div');
        this.panels = new Array(new Panel());
        this.windows = new Array(new Window());
        // add panels
        for (var i = 0; i < this.panels.length; i++) {
            this.elem.appendChild(this.panels[i].render());
        }
        // add windows
        this.update(null);
    }
    render() {
        return this.elem;
    }
    update(event) {
        for (var i = 0; i < this.panels.length; i++)
            this.panels[i].update(event);
        for (var i = 0; i < this.windows.length; i++)
            this.windows[i].update(event);
    }
}

class GameLegOS {
    constructor() {
        this.elem = document.createElement('div');
        this.elem.id = "framebuffer";
        this.wm = new WindowManager();
        this.elem.appendChild(this.wm.render());
        this.update(null);
    }
    render() {
        return this.elem;
    }
    onclick(x, y) {
        console.log("yay, handled clcik!", x, y);
        return "onclick";
    }
    onkeyup() {
        return "onkeyup";
    }
    onkeydown() {
        return "onkeydown";
    }
    update(event) {
        // update wm
        this.wm.update(event);
    }
}

let os = new GameLegOS();
document.getElementById("root").appendChild(os.render());
console.log(os.render());
window["os"] = os;
document.onmousemove = function (e) {
    os.update(e);
};
// event hooks
// window click(os.handleClick)
// window kbd(os.handleKbd)
// window joystick(os.handleJoystick)
//
// loop hook
// window animframe({
//  os.update(time));
//  os.render()
