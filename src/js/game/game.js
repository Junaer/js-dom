export class Game {
    constructor(getRandomArbitrary) {
        this.play = this.play.bind(this);
        this.getRandomArbitrary = getRandomArbitrary
        this.counter = document.querySelector('.counter')
        this.miss = document.querySelector('.miss')
        this.holes = document.querySelectorAll('.hole')
    }
    play(start) {
        if (this.miss.textContent < 5 && this.counter.textContent < 5) {
            let activeHole = document.querySelector('.active')
            activeHole.classList.toggle('active') 
            activeHole.classList.add('hole')
            let numberElement = this.getRandomArbitrary()
            let nextActive = this.holes[numberElement]
            nextActive.classList.toggle('active')
            this.miss.textContent++
            start
        }else if (this.miss.textContent >= 5) {
            clearInterval(this.start)
            alert('lose')
            this.counter.textContent = 0
            this.miss.textContent = 0
        }else if (this.counter.textContent >= 5) {
            clearInterval(this.start)
            alert('win')
            this.counter.textContent = 0
            this.miss.textContent = 0
        } 
    }
    }
