import GameLegOS from '../src/GameLegOS';

let os: GameLegOS = new GameLegOS();
let config: string = `{
apps: [{'id': 'game1', 'title': 'game1', 'program': 'https://game1'}]
}`;

os.config.loadConfig(config);


document.getElementById("root").appendChild(os.render());
console.log(os.render());
window["os"] = os;

document.onmousemove = function(e) {
  os.update(e);
}
