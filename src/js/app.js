import { Game } from "./game/game"


let holes = document.querySelectorAll('.hole')
let counter = document.querySelector('.counter')
let miss = document.querySelector('.miss')

let body = document.querySelector('body')


let game = new Game(getRandomArbitrary)
let start = setInterval(game.play, 1000)



 holes.forEach(element => {
    element.addEventListener('click', () => {
        if (element.classList[2]) {
            console.log(body.style.cursor)
            body.classList.toggle('hammer')
            counter.textContent++
            miss.textContent--
            clearInterval(game.play)
            setTimeout(() => body.classList.toggle('hammer'), 250)
        }else{
            miss.textContent++
        }
    })
 });

function getRandomArbitrary() {
    let int = Math.random() * (16 - 2) + 1;
    return Math.round(int)
  }





