import GameLegOS from '../src/GameLegOS';
import LoginManager from '../src/LoginManager';
import axios from 'axios';

function getParam(name: string) {
  return window.decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(window.location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

let lm = new LoginManager();

window["lm"] = lm;

//if (aid !== null) {
//  await lm.loginNear(aid,pk,ak);
//  document.getElementById("root").appendChild(lm.os.render());
//
//
//} else {
//  console.log("Choose chain: ");
//  console.log("near");
//  console.log("ethereum");
//  //lm.login("near");
//}

document.getElementById("root").appendChild(lm.render());

document.onmousemove = function(e) {
  //lm.os.update(e);
}
