import { Game } from "./game/game"


let holes = document.querySelectorAll('.hole')
let counter = document.querySelector('.counter')
let miss = document.querySelector('.miss')

let body = document.querySelector('body')


let game = new Game(getRandomArbitrary)
let start = setInterval(game.play, 3000)



 holes.forEach(element => {
    element.addEventListener('click', () => {
        if (element.classList[2]) {
            body.classList.toggle('hammer')
            counter.textContent++
            if (miss.textContent == 0) {

            }else{
                miss.textContent--
            }
            clearInterval(start)
            game.travel()
            start = setInterval(game.play, 3000)
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





