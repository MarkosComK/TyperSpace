import Player from "./player.js"
import {Enemy, letter} from "./enemy.js"
import { Projectile } from "./shot.js"

export const canvas = document.querySelector('canvas')

canvas.width = 480
canvas.height = 720


export const c = canvas.getContext('2d')

const background = new Image()
background.src = './folder/images/background.png'



// export const words = [
//     'MARKOS', 'JAVASCRIPT', 'PROGRAMMING', 'HTML',
//     'CASCATING', 'MARKUP', 'LANGUAGE', 'CODE'
// ]
export const words = [
    'MARKOS', 'DANIELA', 'SOPHIA'
]


export const player = new Player()
const lifeInput = document.querySelector('#playerLife')
export const projectils = []

export const shotAudio = new Audio('./folder/sounds/laser1.wav')
shotAudio.volume = 0.1

const enemy = new Enemy(randomInt(0, canvas.width-100), 0, words[randomInt(0, 7)])


function game(){
    c.drawImage(background, 0, 0, canvas.width, canvas.height)
    enemy.draw()
    player.draw()
    player.life()
    projectils.forEach((projectil) => {
        projectil.drawProjectil()
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