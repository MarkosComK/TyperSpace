import Player from "./player.js"

export const canvas = document.querySelector('canvas')

canvas.width = 600
canvas.height = 600


export const c = canvas.getContext('2d')

const background = new Image()
background.src = './folder/space1.png'

const player = new Player()

function game(){
    c.drawImage(background, 0, 0, canvas.width, canvas.height)
    player.draw()
}

// loops the game
setInterval(game, 1000/60)
