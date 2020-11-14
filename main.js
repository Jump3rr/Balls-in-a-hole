const ballOnPage = document.querySelector('.ball');
const board = document.querySelector('.board');
const maxWidth = board.clientWidth - ballOnPage.clientWidth;
const maxHeight = board.clientHeight - ballOnPage.clientHeight;
ballOnPage.id = 'ball';

window.addEventListener('deviceorientation', onDeviceMove)

const ball = {
    x: 0,
    y: 0
}
for(let i=0; i<2; i++)
{
    const newHole = document.createElement('div');
    newHole.className ="hole";
    //newHole.classList.add('holes');
    newHole.id=i;
    newHole.setAttribute('name', i);
    newHole.id = i;
    newHole.style.top = Math.random()*maxHeight-20 + "px";
    newHole.style.left = Math.random()*maxWidth-20 + "px";
    //console.log(a);
    //let a = newHole.style.top = Math.floor((maxHeight-0)*Math.random())-20 + "px";
    //newHole.style.left = Math.floor((maxWidth-0)*Math.random())-20 + "px";
var ref = document.querySelector('script');

ref.parentNode.insertBefore(newHole, ref);
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
    console.log(ballOnPage.style.left);
    check(parseInt(ballOnPage.style.left));
    
}
//gameinit();
function check(width) {
    const holeLeft = parseInt(document.getElementById('1').style.left);

    if(width<holeLeft+20 && width>holeLeft-20)
    {
        alert("wygrales");
    }
}