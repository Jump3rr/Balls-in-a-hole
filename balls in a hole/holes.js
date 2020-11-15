const ballOnPage = document.querySelector('.ball');
const board = document.querySelector('.board');
const maxWidth = board.clientWidth - ballOnPage.clientWidth;
const maxHeight = board.clientHeight - ballOnPage.clientHeight;

export class Hole {
    createHole() {
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
}