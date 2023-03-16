const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 800
const CANVAS_HEIGHT = canvas.height = 700

let gameSpeed = 1
const span = document.querySelector('#showGameSpeed')
const input = document.querySelector('input')
input.addEventListener('change', (e) => {
    gameSpeed = e.target.value
    span.innerHTML = gameSpeed
})


const backgroundLayer1 = new Image()
backgroundLayer1.src = './backgrounds/layer-1.png'
const backgroundLayer2 = new Image()
backgroundLayer2.src = './backgrounds/layer-2.png'
const backgroundLayer3 = new Image()
backgroundLayer3.src = './backgrounds/layer-3.png'
const backgroundLayer4 = new Image()
backgroundLayer4.src = './backgrounds/layer-4.png'
const backgroundLayer5 = new Image()
backgroundLayer5.src = './backgrounds/layer-5.png'

class Layer {
    constructor(image, speedModifier){
        this.x = 0
        this.y = 0
        this.width = 2400
        this.height = 700
        this.x2 = this.width
        this.image = image
        this.speedModifier = speedModifier
        this.speedModifier = gameSpeed * speedModifier

    }
    update(){
        this.speed = gameSpeed * this.speedModifier
        if(this.x <= -this.width){
            this.x = 0
        }
        this.x = Math.floor(this.x - this.speed)
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, this.x+this.width, this.y, this.width, this.height)
    }
}

const layer1 = new Layer(backgroundLayer1, 0.2)
const layer2 = new Layer(backgroundLayer2, 0.4)
const layer3 = new Layer(backgroundLayer3, 0.6)
const layer4 = new Layer(backgroundLayer4, 0.8)
const layer5 = new Layer(backgroundLayer5, 1)

const gameLayers = [layer1, layer2, layer3, layer4, layer4, layer5]

function start(){
    requestAnimationFrame(start)
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    gameLayers.forEach((layer) => {
        layer.update()
        layer.draw()
    })
}

start()