input.onButtonPressed(Button.A, function () {
    n.change(LedSpriteProperty.X, -1)
    music.playTone(988, music.beat(BeatFraction.Eighth))
})
input.onButtonPressed(Button.B, function () {
    n.change(LedSpriteProperty.X, 1)
    music.playTone(988, music.beat(BeatFraction.Eighth))
})
let n: game.LedSprite = null
n = game.createSprite(2, 4)
let n0 = game.createSprite(randint(0, 4), 0)
let n1 = game.createSprite(2, 0)
let n2 = game.createSprite(2, 0)
let n3 = game.createSprite(2, 0)
n1.delete()
let n0b = 0
let n1a = 0
let n1b = 0
let n2b = 0
let n3b = 0
basic.pause(1000)
basic.forever(function () {
    if (n0.isDeleted()) {
        n0 = game.createSprite(randint(0, 4), 0)
    }
    if (n1.isDeleted() && n1a > 3) {
        n1 = game.createSprite(randint(0, 4), 0)
    }
    if (n2.isDeleted() && n1a > 5) {
        n2 = game.createSprite(randint(0, 4), 0)
    }
    if (n3.isDeleted() && n1a > 7) {
        n3 = game.createSprite(randint(0, 4), 0)
    }
    if (n1a < 15) {
        basic.pause(500)
    } else {
        basic.pause(200)
    }
    n0.change(LedSpriteProperty.Y, 1)
    n1.change(LedSpriteProperty.Y, 1)
    n2.change(LedSpriteProperty.Y, 1)
    n3.change(LedSpriteProperty.Y, 1)
    if (n0.get(LedSpriteProperty.Y) == 4) {
        if (n0b > 1) {
            n0.delete()
            n0b = 0
            if (n1a == 0) {
                n1a = 1
            }
        }
        n0b += 1
    }
    if (n1.get(LedSpriteProperty.Y) == 4) {
        if (n1b > 1) {
            n1.delete()
            n1b = 0
        }
        n1b += 1
    }
    if (n2.get(LedSpriteProperty.Y) == 4) {
        if (n2b > 1) {
            n2.delete()
            n2b = 0
        }
        n2b += 1
    }
    if (n3.get(LedSpriteProperty.Y) == 4) {
        if (n3b > 1) {
            n3.delete()
            n3b = 0
        }
        n3b += 1
    }
    if (n1a > 0) {
        n1a += 1
    }
})
basic.forever(function () {
    if (n.isTouching(n0) || n.isTouching(n1) || (n.isTouching(n2) || n.isTouching(n3))) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        game.gameOver()
    }
})
