import { canvas, c } from "./canvas.js"
import { projectils } from "./canvas.js"

export class Projectile {
    constructor(endPoint, multiplyer){
        this.x = canvas.width/2 
        this.y = canvas.height-30
        this.endPoint = endPoint+90
        this.endPointChange = 1 * 1

        this.drawProjectil = () => {
            c.beginPath()
            c.fillStyle = 'pink'
            c.fillRect(canvas.width/2+14, this.y-30, 4, 12)
            this.update()
        }

        this.update = () => {
            if(this.y > this.endPoint){
                this.y -= 20 
            } else {
                projectils.shift()
            }
        }
    }
}