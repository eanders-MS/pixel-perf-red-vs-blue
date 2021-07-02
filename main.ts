controller.A.onEvent(ControllerButtonEvent.Released, function () {
    test += 1
    test %= 2
})
let test = 0
let bknd = scene.backgroundImage()
game.stats = true
game.onUpdate(function () {
    if (test == 0) {
        for (let y2 = 0; y2 <= screen.height - 1; y2++) {
            for (let x2 = 0; x2 <= screen.width - 1; x2++) {
                scene.backgroundImage().setPixel(x2, y2, Math.randomRange(1, 6))
            }
        }
    } else if (test == 1) {
        for (let y3 = 0; y3 <= screen.height - 1; y3++) {
            for (let x3 = 0; x3 <= screen.width - 1; x3++) {
                bknd.setPixel(x3, y3, Math.randomRange(7, 15))
            }
        }
    }
})
