const ballOnPage = document.querySelector('.ball');
const board = document.querySelector('.board');
const maxWidth = board.clientWidth - ballOnPage.clientWidth;
const maxHeight = board.clientHeight - ballOnPage.clientHeight;

window.addEventListener('deviceorientation', onDeviceMove)

const ball = {
    x: 0,
    y: 0
}
console.log(maxHeight);
console.log(maxWidth);
/*function gameinit() {
    const ballStartXPos = Math.random()*99;
    ballOnPage.style.left = ballStartXPos + "%";
    const ballStartYPos = Math.random()*99;
    ballOnPage.style.top = ballStartYPos + "%";
}*/
function onDeviceMove(ev) {
    ball.x =ev.alpha;
    ball.y =ev.beta;

    if(ball.x>90) {ball.x = 90};
    if(ball.x<-90) {ball.x=-90};
    if(ball.y>179 || ball.y<-90) {ball.y = 179};
    if(ball.y<0) {ball.y = 0};

    ball.x+=90;

    //ballOnPage.style.top = (maxWidth*x/180-10) + "px";
    //ballOnPage.style.left = (maxHeight*y/180-10) + "px";
    ballOnPage.style.left = (maxWidth*ball.x/180-10) + "px";
    ballOnPage.style.top = (maxHeight*ball.y/180-10) + "px";
}
//gameinit();