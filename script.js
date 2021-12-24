let order = [];
let clickedOrder = [];
let score = 0;

/*ordem array
0-purple;
1-green;
2-pink;
3-orange;
*/

const purple = document.querySelector('.purple');
const green = document.querySelector('.green');
const pink = document.querySelector('.pink');
const orange = document.querySelector('.orange');

let shuffleOrder = () => {
    let randomColorOrder = Math.floor(Math.random() * 4);
    order[order.length] = randomColorOrder;
    clickedOrder = [];

    for(let x in order){
        let elementColor = colorElement(order[x]);
        lightedColor(elementColor, Number(x) + 1);

    }
}

let lightedColor = (element, number) => {
    number = number * 250;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 500);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

let checkingOrder = () => {
    for (let x in clickedOrder){
        if(clickedOrder[x] != order[x]){
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Score: ${score}\nYou got it! Here comes the next level!`);
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color; 
    colorElement(color).classList.add('selected');

    setTimeout(() => {
        colorElement(color).classList.remove('selected');
        checkingOrder();
    }, 500);
}

let colorElement = (color) => {
    if(color == 0) {
        return purple;
    } else if(color == 1) {
        return green;
    } else if (color == 2) {
        return pink;
    } else if (color == 3) {
        return orange;
    }
}

let nextLevel = () => {
    score++;
    shuffleOrder();
}


let lose = () => {
    alert(`Score: ${score}!\nYou lose. Better luck next time!\n Click OK to play again!`);
    order = [];
    clickedOrder = [];

    playAgain();
}


let playAgain = () => {
    alert('Lets play Genius!');
    score = 0; 

    nextLevel();
}

playAgain();
purple.onclick = () => click(0);
green.onclick = () => click(1);
pink.onclick = () => click(2);
orange.onclick = () => click(3);
