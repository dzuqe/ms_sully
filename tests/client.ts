import GameLegOS from '../src/GameLegOS';

let os: GameLegOS = new GameLegOS();

document.getElementById("root").appendChild(os.render());
console.log(os.render());
window["os"] = os;

document.onmousemove = function(e) {
  os.update(e);
}

// event hooks
// window click(os.handleClick)
// window kbd(os.handleKbd)
// window joystick(os.handleJoystick)
//
// loop hook
// window animframe({
//  os.update(time));
//  os.render()
