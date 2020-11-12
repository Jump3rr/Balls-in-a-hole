window.addEventListener('deviceorientation', onDeviceMove)
const ball = {
    x: 0,
    y: 0
}
function gameinit() {
    const ballStartXPos = Math.random()*1000;
    ball.x = ballStartXPos;
}
function onDeviceMove(ev) {
    console.log(ev.alpha, ev.beta, ev.gamma);
}