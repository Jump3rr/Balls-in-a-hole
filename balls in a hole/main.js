import {Balls} from "./ball.js";
import {InHole} from "./inHole.js";
import {Hole} from "./holes.js";

const ballOnPage = document.querySelector('.ball');

ballOnPage.id = 'ball';

const ball = new Balls();
//const hole = new InHole();
const hole = new Hole();


window.addEventListener('deviceorientation', ball.onDeviceMove);


window.addEventListener('load', hole.createHole);
