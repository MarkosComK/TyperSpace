import { canvas, c } from "./canvas.js"

const player = new Image()
player.src = './folder/player.png'

export default class Player {
    // moveR = false
    // moveL = false
    constructor(x = canvas.width/2, y = canvas.height-50){
        this.x = x,
        this.y = y,
        // this.moveR = this.moveR,
        // this.moveL = this.moveL
        
        
        this.draw = () => {
            c.drawImage(player, this.x, this.y, 32, 32)
            // this.move()
        }
        
        // document.addEventListener('keydown', (e) => {
        //     switch(e.code){
        //         case 'KeyA':
        //             this.moveL = true
        //             break
        //         case 'KeyD':
        //             this.moveR = true
        //             break
        //         case 'Space':
        //             console.log('shot')
        //             break
        //     }
        // })

        // document.addEventListener('keyup', (e) => {
        //     switch(e.code){
        //         case 'KeyA':
        //             this.moveL = false
        //             break
        //         case 'KeyD':
        //             this.moveR = false
        //             break
        //     }
        // })

        // this.move = () => {
        //     if(this.moveR && this.x+40 < canvas.width){
        //         this.x += 7
        //     }
        //     if(this.moveL && this.x > 0){
        //         this.x -= 7
        //     }
        // }
        
        this.update = () => {
            c.clearRect(0, 0, 600, 600)
            this.draw()
        }
    }
}