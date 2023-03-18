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
    'DIV', 'ROUTER', 'AXIOS', 'BROWSER', 'TYPESCRIPT',
    'STYLED', 'DEVELOPER', 'API', 'PROGRESSIVE'
]



export const player = new Player()
// create a Enemy with a random Word from words
export const enemy = new Enemy(randomInt(0, canvas.width-100), 0, words[randomInt(0, words.length)])


export const projectils = []
export const shotAudios = []
// background music
const bgMusic = new Audio('./folder/sounds/bgmusic.mp3')

// pauses the game
const playBtn = new Image()
playBtn.src = './folder/images/icon-play.png'
export let pause = true
canvas.addEventListener('click', (e) => {
    pause = !pause
})
document.addEventListener('keydown', (e) => {
    if(e.key == 'Enter'){
        pause = !pause
    }
})

function game(){
    if(pause){
        bgMusic.pause()
        gameLayers.forEach((layer) => {
            layer.draw()
        })
        c.font = '90px Trebuchet MS'
        c.fillStyle = 'white'
        c.textAlign = 'center'
        c.fillText('TYPERS', canvas.width/2, canvas.height/2)
        player.draw()
    } else {
        // restart music if isn`t playing

        bgMusic.play()

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
}


// loops the game
setInterval(game, 1000/60)

export function randomInt(min, max){
    return Math.floor((Math.random() * max) + min)
}

// function randomFloat(min, max){
//     return (Math.random() * max) + min
// }