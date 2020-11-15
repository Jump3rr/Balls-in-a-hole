const ballOnPage = document.querySelector('.ball');
const board = document.querySelector('.board');
const maxWidth = board.clientWidth - ballOnPage.clientWidth;
const maxHeight = board.clientHeight - ballOnPage.clientHeight;

import {InHole} from "./inHole.js";

export class Balls {

    constructor() {}
    
onDeviceMove(ev) {
    ball.x =ev.alpha;
    ball.y =ev.beta;

    if(ball.x>90) {ball.x = 90};
    if(ball.x<-90) {ball.x=-90};
    if(ball.y>179 || ball.y<-90) {ball.y = 179};
    if(ball.y<0) {ball.y = 0};

    ball.x+=90;
    
    const hole = new InHole();
    ballOnPage.style.left = (maxWidth*ball.x/180-10) + "px";
    ballOnPage.style.top = (maxHeight*ball.y/180-10) + "px";
    hole.check(parseInt(ballOnPage.style.left)+10, parseInt(ballOnPage.style.top)+10);

    
}
}