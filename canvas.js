import Player from "./player.js"
import {Enemy, letter} from "./enemy.js"
import { Projectile } from "./shot.js"

export const canvas = document.querySelector('canvas')

canvas.width = 480
canvas.height = 720


export const c = canvas.getContext('2d')

const background = new Image()
background.src = './folder/images/background.png'



export const words = [
    'MARKOS', 'JAVASCRIPT', 'FUNCTION', 'HTML',
    'CASCATING', 'MARKUP', 'LANGUAGE', 'CODE',
    'HYPER', 'REACT', 'VANILLA', 'TYPE', 'SCRIPT',
    'DIV', 'ROUTER', 'AXIOS', 'BROWSER'
]
// export const words = [
//     'MARKOS', 'DANIELA', 'SOPHIA'
// ]


export const player = new Player()
const lifeInput = document.querySelector('#playerLife')
export const projectils = []
export const shotAudios = []
const bgMusic = new Audio('./folder/sounds/bgmusic.mp3')


const enemy = new Enemy(randomInt(0, canvas.width-100), 0, words[randomInt(0, 7)])


const backgroundLayer0 = new Image()
backgroundLayer0.src = './folder/images/background0.png'
const backgroundLayer1 = new Image()
backgroundLayer1.src = './folder/images/background1.png'
const backgroundLayer2 = new Image()
backgroundLayer2.src = './folder/images/background2.png'
const backgroundLayer3 = new Image()
backgroundLayer3.src = './folder/images/background3.png'


class Layer {
    constructor(image, speedModifier){
        this.x = 0
        this.y = canvas.height
        this.width = 480
        this.height = -1440
        this.x2 = this.width
        this.image = image
        this.speedModifier = speedModifier
        this.speedModifier = 1 * speedModifier

    }
    update(){
        this.speed = 1 * this.speedModifier
        if(this.y >= canvas.height-(this.height)){
            this.y = canvas.height
            console.log('zerou')
        }
        // this.y = Math.floor(this.y - this.speed)
        this.y += 1 * this.speedModifier 
    }
    draw(){
        c.drawImage(this.image, this.x, this.y, this.width, this.height)
        c.drawImage(this.image, this.x, this.y-1440, this.width, this.height)
    }
}

const layer0 = new Layer(backgroundLayer0, 0.2)
const layer1 = new Layer(backgroundLayer1, 0.4)
const layer2 = new Layer(backgroundLayer2, 0.6)
const layer3 = new Layer(backgroundLayer3, 0.8)


const gameLayers = [layer0, layer1, layer2, layer3]



function game(){
    if(!(bgMusic.play())){
        bgMusic.play()
    }
    // c.drawImage(background, 0, 0, canvas.width, canvas.height)
    gameLayers.forEach((layer) => {
        layer.update()
        layer.draw()
    })
    enemy.draw()
    player.draw()
    player.life()
    projectils.forEach((projectil) => {
        projectil.drawProjectil()
    })
    shotAudios.forEach((shot) => {
        shot.play()
    })
}


// loops the game
setInterval(game, 1000/60)

export function randomInt(min, max){
    return Math.floor((Math.random() * max) + min)
}

function randomFloat(min, max){
    return (Math.random() * max) + min
}