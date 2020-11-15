let next = 0;
let points = 0;

export class InHole {
check(width, height) {
    const holeLeft = parseInt(document.getElementById(next).style.left)+20;
    const holeTop = parseInt(document.getElementById(next).style.top)+20;
    document.getElementById(next).style.backgroundColor = "yellow";

    if(width<holeLeft+10 && width>holeLeft-10 && height<holeTop+10 && height>holeTop-10)
    {
        points +=1;
        document.getElementById(next).style.backgroundColor="blue";
        console.log(points);
        next += 1;
        if(points==10)
        {
            alert("YOU WON!");
            next = 0;
            points = 0;
        }
        return;
    }
}
}