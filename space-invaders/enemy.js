import { canvas, c, randomInt } from "./canvas.js"


export default class Enemy {
    constructor(x, y, word, speedMultiplyer){
        this.x = x
        this.y = y
        this.word = word
        this.speedMultiplyer = speedMultiplyer

        this.draw = () => {
            c.font = "25px Arial"
            c.fillStyle = 'white'
            c.fillText(this.word, this.x, this.y)
            this.update()
        }

        this.update = () => {
            this.y += 1 * this.speedMultiplyer
        }
    }
}