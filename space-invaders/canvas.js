import Player from "./player.js"
import Enemy from "./enemy.js"

export const canvas = document.querySelector('canvas')

canvas.width = 600
canvas.height = 800


export const c = canvas.getContext('2d')

const background = new Image()
background.src = './folder/space1.png'

const player = new Player()

export const words = [
    'MARKOS', 'JAVASCRIPT', 'PROGRAMMING', 'HTML',
    'CASCATING', 'MARKUP', 'LANGUAGE', 'CODE'
]


const enemy = new Enemy(randomInt(0, canvas.width-100), 0, words[randomInt(0, 7)])


function game(){
    c.drawImage(background, 0, 0, canvas.width, canvas.height)
    player.draw()
    enemy.draw()
}

// loops the game
setInterval(game, 1000/60)

export function randomInt(min, max){
    return Math.floor((Math.random() * max) + min)
}

function randomFloat(min, max){
    return (Math.random() * max) + min
}