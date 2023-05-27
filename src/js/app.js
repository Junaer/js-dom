// TODO: write code here

let counter = document.querySelector('.counter')
let miss = document.querySelector('.miss')

let holes = document.querySelectorAll('.hole')
let activeHole = document.querySelector('.active')

 holes.forEach(element => {
    element.addEventListener('click', () => {
        if (element.classList[2]) {
            counter.textContent++
        }else{
            miss.textContent++
        }
        
    })
 });

function getRandomArbitrary() {
    let int = Math.random() * (16 - 2) + 1;
    return Math.round(int)
  }

function play (start) {
    if (miss.textContent < 10 && counter.textContent < 10) {
        let activeHole = document.querySelector('.active')
        activeHole.classList.toggle('active') 
        activeHole.classList.add('hole')
        let numberElement = getRandomArbitrary()
        let nextActive = holes[numberElement]
        nextActive.classList.toggle('active')
    }else if (miss.textContent >= 10) {
        clearInterval(start)
        alert('lose')
        counter.textContent = 0
        miss.textContent = 0
        start
    }else if (counter.textContent >= 10) {
        clearInterval(start)
        alert('win')
        counter.textContent = 0
        miss.textContent = 0
        start
    } 
}

let start = setInterval(play, 1000)

play(start)
