const canvas = document.querySelector("canvas")
const board = canvas.getContext("2d")

canvas.width = DISPLAY_PIXEL.WIDTH * ASPECT_RATIO.WIDTH
canvas.height = DISPLAY_PIXEL.HEIGHT * ASPECT_RATIO.HEIGHT

const playerProperty = {
    width: 50,
    height: 50,
    speed: 8,
    color: "tomato",
    position: {
        x: 100,
        y: canvas.height - 50
    }
}


const enemyProperty = {
    width: 50,
    height: 50,
    speed: 1,
    color: "black",
    position: {
        x: canvas.width - 50,
        y: canvas.height - 50
    }
}



const ground = new Ground('/src/assets/bg.jpg', canvas.width, canvas.height)
const player = new Player(playerProperty)
const enemy = new Player(enemyProperty)


function animate() {
    ground.create()
    player.create()
    enemy.create()
    player.update()
    enemy.update()

    window.requestAnimationFrame(animate)
}

window.addEventListener("keydown", function(callback) {
    switch (callback.key) {
        case "ArrowUp":
            console.log("loncat")
            player.jump()
            break
        case "ArrowLeft":
            console.log('ke kiri')
            player.moveLeft()
            break
        case "ArrowRight":
            console.log('ke kanan')
            player.moveRight()
            break
            
        default:
            break
    }
})

animate()