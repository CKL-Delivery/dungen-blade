namespace SpriteKind {
    export const npc = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Logan.overlapsWith(orby)) {
        if (speak_to_orbey == "no") {
            game.splash("hi traveler.")
            game.splash("you need to find the relics.")
            speak_to_orbey = "1"
        } else if (speak_to_orbey == "1") {
            game.splash("grab the boomerang")
            speak_to_orbey = "2"
        } else if (speak_to_orbey == "2") {
            game.splash("are you going to grab ", "the boomerang?")
            speak_to_orbey = "3"
        } else if (speak_to_orbey == "3") {
            game.splash("JUST GRAB THE ", "BOOMERANG!!!!")
            speak_to_orbey = "4"
        } else {
            game.splash("fine I will do it for you (-_-)", "but it will be harder")
            tiles.setTilemap(tilemap`level6`)
            Logan.setPosition(119, 245)
            scul.destroy()
            orby.destroy()
        }
    }
    if (Logan.tileKindAt(TileDirection.Center, sprites.castle.tileDarkGrass1)) {
        tiles.setTilemap(tilemap`level2`)
        Logan.setPosition(119, 245)
        scul.destroy()
        orby.destroy()
    }
    if (Logan.tileKindAt(TileDirection.Center, assets.tile`myTile3`)) {
        item += 1
        game.splash(convertToText(item))
        tiles.setTileAt(tiles.getTileLocation(1, 14), assets.tile`myTile4`)
    }
})
let item = 0
let speak_to_orbey = ""
let scul: Sprite = null
let orby: Sprite = null
let Logan: Sprite = null
Logan = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f d d f f f . . . . 
    . . . f f f d d d d f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e d d d d d d e e f . . 
    . . f e d f f f f f f d e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f 4 4 f 1 4 e e f . 
    . . f e e 4 4 4 4 4 4 e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f d d d d d d f 4 e . . 
    . . 4 d f e e e e e e f d 4 . . 
    . . 4 4 f d d d d d d f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Logan)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(Logan)
orby = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . 4 4 4 5 5 4 4 4 . . . . 
    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
    . . 3 3 3 f f 2 2 f f 1 5 4 . . 
    . 4 3 3 3 f f 2 2 f f 5 5 4 4 . 
    . 4 3 3 3 f f 2 4 f f 4 5 4 4 . 
    . 4 4 3 3 f f 4 4 f f 4 4 4 4 . 
    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
    . . . . 4 4 2 2 2 2 4 4 . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.npc)
orby.setPosition(156, 121)
scul = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1511ff........
    .......fb111511bf.......
    .......f11151111f.......
    ......fd11115111df......
    ......fd11151111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.npc)
scul.setPosition(128, 121)
game.splash("hello.....over...here.")
speak_to_orbey = "no"
