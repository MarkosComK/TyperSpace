let playerState = 'idle'
const dropdown = document.querySelector('#animations')
dropdown.addEventListener('change', (e) => {
    playerState = e.target.value
})

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600

const playerImage = new Image()
playerImage.src = 'https://www.frankslaboratory.co.uk/downloads/shadow_dog.png'

const spriteWidth = 575
const spriteHeight = 523

let gameFrame = 0
const staggerFrames = 4

const spriteAnimations = []
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7
    },
    {
        name: 'fall',
        frames: 7
    },
    {
        name: 'run',
        frames: 9
    },
    {
        name: 'dizzy',
        frames: 11
    },
    {
        name: 'sit',
        frames: 5
    },
    {
        name: 'roll',
        frames: 7
    },
    {
        name: 'bite',
        frames: 7
    },
    {
        name: 'ko',
        frames: 12
    },
    {
        name: 'getHit',
        frames: 4
    },
]

animationStates.forEach((state, index) => {
    let frames = {
        loc: []
    }
    for(let c = 0; c < state.frames; c++){
        let positionX = c * spriteWidth
        let positionY = index * spriteHeight
        frames.loc.push({x: positionX, y: positionY})
    }
    spriteAnimations[state.name] = frames
})

console.log(spriteAnimations)

function animate(){
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length
    let frameX = spriteWidth * position
    let frameY = spriteAnimations[playerState].loc[position].y
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)

    gameFrame++
}
animate()