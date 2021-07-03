import GameLegOS from '../src/GameLegOS';
import LoginManager from '../src/LoginManager';

//let os: GameLegOS = new GameLegOS();
//let config: string = `{
//apps: [{'id': 'game1', 'title': 'game1', 'program': 'https://game1'}]
//}`;

function getParam(name: string) {
  return window.decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(window.location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

let aid = getParam("account_id");
let pk = getParam("public_key");
let ak = getParam("all_keys");

let lm = new LoginManager();

window["lm"] = lm;

if (aid !== null) {
  await lm.loginNear(aid,pk,ak);
  document.getElementById("root").appendChild(lm.os.render());

  document.onmousemove = function(e) {
    lm.os.update(e);
  }

} else {
  console.log("Choose chain: ");
  console.log("near");
  console.log("ethereum");
  //lm.login("near");
  document.getElementById("root").appendChild(lm.render());
}

