import Player from "./player.js"
import { Enemy } from "./enemy.js"
import { gameLayers } from "./background.js"

export const canvas = document.querySelector('canvas')

canvas.width = 480
canvas.height = 720

export const c = canvas.getContext('2d')

// Game words
export const words = [
    'MARKOS', 'JAVASCRIPT', 'FUNCTION', 'HTML',
    'CASCATING', 'MARKUP', 'LANGUAGE', 'CODE',
    'HYPER', 'REACT', 'VANILLA', 'TYPE', 'SCRIPT',
    'DIV', 'ROUTER', 'AXIOS', 'BROWSER'
]



export const player = new Player()
// create a Enemy with a random Word from words
export const enemy = new Enemy(randomInt(0, canvas.width-100), 0, words[randomInt(0, words.length)])


export const projectils = []
export const shotAudios = []
// background music
const bgMusic = new Audio('./folder/sounds/bgmusic.mp3')



function game(){
    // restart music if isn`t playing
    if(!(bgMusic.play())){
        bgMusic.play()
    }
    // acess and draw each BG layer
    gameLayers.forEach((layer) => {
        layer.update()
        layer.draw()
    })

    // draw enemy and player
    enemy.draw()
    player.draw()
    player.fire()

    //draw each projectil on screen
    projectils.forEach((projectil) => {
        projectil.drawProjectil()
    })
    // play each audio
    shotAudios.forEach((shot) => {
        shot.play()
    })
}


// loops the game
setInterval(game, 1000/60)

export function randomInt(min, max){
    return Math.floor((Math.random() * max) + min)
}

// function randomFloat(min, max){
//     return (Math.random() * max) + min
// }