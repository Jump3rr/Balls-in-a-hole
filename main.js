const ballOnPage = document.querySelector('.ball');
const board = document.querySelector('.board');
const maxWidth = board.clientWidth - ballOnPage.clientWidth;
const maxHeight = board.clientHeight - ballOnPage.clientHeight;
ballOnPage.id = 'ball';
let points = 0;

window.addEventListener('deviceorientation', onDeviceMove)

const ball = {
    x: 0,
    y: 0
}
window.addEventListener('load', createHole);
function createHole() {
for(let i=0; i<10; i++)
{
    const newHole = document.createElement('div');
    newHole.className ="hole";
    document.querySelector('.board').appendChild(newHole);
    newHole.id=i;
    newHole.setAttribute('name', i);
    newHole.id = i;
    newHole.style.top = Math.floor(Math.random()*maxHeight)-20 + "px";
    newHole.style.left = Math.floor(Math.random()*maxWidth)-20 + "px";


}
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

    ballOnPage.style.left = (maxWidth*ball.x/180-10) + "px";
    ballOnPage.style.top = (maxHeight*ball.y/180-10) + "px";
    check(parseInt(ballOnPage.style.left)+10, parseInt(ballOnPage.style.top)+10);
    
}
//gameinit();
let los = Math.floor(Math.random()*10);

function check(width, height) {

    const holeLeft = parseInt(document.getElementById(los).style.left)+20;
    const holeTop = parseInt(document.getElementById(los).style.top)+20;
    document.getElementById(los).style.backgroundColor = "yellow";

    if(width<holeLeft+10 && width>holeLeft-10 && height<holeTop+10 && height>holeTop-10)
    {
        points +=1;
        document.getElementById(los).style.backgroundColor="blue";
        console.log(points);
        los = Math.floor(Math.random()*10);
        if(points==10)
        {
            alert("YOU WON! Refresh page to restart game.");
        }
        return;
    }
}