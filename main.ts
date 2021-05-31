namespace SpriteKind {
    export const npc = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.overlapsWith(mySprite2)) {
        game.splash("hi traveler.")
        game.splash("you need to find the relics.")
    }
    if (mySprite.tileKindAt(TileDirection.Center, sprites.castle.tileDarkGrass1)) {
        tiles.setTilemap(tilemap`level2`)
        mySprite.setPosition(119, 300)
        mySprite3.destroy()
        mySprite2.destroy()
    }
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
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
    . . 4 d f d d d d d d f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
mySprite2 = sprites.create(img`
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
mySprite2.setPosition(156, 121)
mySprite3 = sprites.create(img`
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
mySprite3.setPosition(128, 121)
game.splash("hello.....over...here.")
