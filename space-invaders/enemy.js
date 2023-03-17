import { canvas, c, randomInt, words } from "./canvas.js"



let letter = 0
export default class Enemy {
    constructor(x, y, word){
        this.x = canvas.width/2
        this.y = y
        this.speedMultiplyer = 1
        this.arr = word.split('')

        this.draw = () => {
            c.font = "25px Arial"
            c.fillStyle = 'white'
            c.fillText(this.arr.join(''), this.x, this.y)
            this.update()
        }

        this.update = () => {
            this.y += 1.5 * this.speedMultiplyer
        }


        document.addEventListener('keydown', (e) => {
            if(e.key.toUpperCase() == this.arr[letter]){
                this.arr.shift()
            }
            this.getWord()
        })

        this.getWord = () => {
            if(this.arr.length == 0){
                this.arr = words[randomInt(0, words.length)].split('')
                this.y = -15
                this.speedMultiplyer *= 1.05
            }
        }
    }
}
