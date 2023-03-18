import { canvas, c, randomInt, words, player, projectils, shotAudios} from "./canvas.js"
import { Projectile } from "./shot.js"

export let letter = 0


export  class Enemy {
    constructor(x, y, word){
        this.x = canvas.width/2
        this.y = y
        this.speedMultiplyer = 1
        this.arr = word.split('')

        this.draw = () => {
            c.font = "25px Arial"
            c.fillStyle = 'white'
            c.fillText(this.arr.join(''), this.x+10, this.y-15)
            this.update()
        }

        this.update = () => {
            this.y += 1.5 * this.speedMultiplyer
            this.getWord()
        }

        this.removeLetter = (e) => {
            if(e.key.toUpperCase() == this.arr[letter]){
                this.arr.shift()
                projectils.push(new Projectile(this.y, this.speedMultiplyer))
                shotAudios.push(new Audio('./folder/sounds/synth_laser_02.ogg'))
            }
            this.getWord()
        }

        this.getWord = () => {
            if(this.y > canvas.height){
                player.getHit()
                this.speedMultiplyer = 1
            }
            if(this.arr.length == 0 || this.y > canvas.height){
                this.arr = words[randomInt(0, words.length)].split('')
                this.y = -100
                this.speedMultiplyer += 0.1
            }
        }
    }
}
