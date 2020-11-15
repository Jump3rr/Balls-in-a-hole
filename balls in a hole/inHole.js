let next = 0;
let points = 0;
let seconds = 0;
Timer(seconds);
import {Timer} from "./timer.js";

export class InHole {
check(width, height) {
    const holeLeft = parseInt(document.getElementById(next).style.left)+20;
    const holeTop = parseInt(document.getElementById(next).style.top)+20;
    document.getElementById(next).style.backgroundColor = "yellow";
    document.getElementById(next).style.zIndex="2";
    document.querySelector('.points').innerText = points;
    if(width<holeLeft+10 && width>holeLeft-10 && height<holeTop+10 && height>holeTop-10)
    {
        points +=1;
        document.getElementById(next).style.backgroundColor="blue";
        document.getElementById(next).style.zIndex="-1";
        console.log(points);
        next += 1;
        if(points==10)
        {
            alert("YOU WON!");
            next = 0;
            points = 0;
            seconds = 0;
            document.querySelector('.board').removeChild(document.querySelector("p"));
            Timer(seconds);
        }
        return;
    }
}
}