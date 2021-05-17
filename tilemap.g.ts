// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000002010102000000000000000000000000020101020000000000000000000000000201010200000000000000000000000002010102000000000000000000000000020101020000000000000000000000000201010200000000000000000000000002010103040404040404050000000000020101010101010101010200000000000201010101010101010102000000000002010101010101010101020000000000020101010101010101010200000000000201010101010101010602000000000003040404040404040404050000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . 2 . . 2 . . . . . . . . . 
. . . 2 . . 2 . . . . . . . . . 
. . . 2 . . 2 . . . . . . . . . 
. . . 2 . . 2 . . . . . . . . . 
. . . 2 . . 2 . . . . . . . . . 
. . . 2 . . 2 . . . . . . . . . 
. . . 2 . . 2 2 2 2 2 2 2 2 . . 
. . . 2 . . . . . . . . . 2 . . 
. . . 2 . . . . . . . . . 2 . . 
. . . 2 . . . . . . . . . 2 . . 
. . . 2 . . . . . . . . . 2 . . 
. . . 2 . . . . . . . . . 2 . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass1,sprites.builtin.forestTiles4,sprites.builtin.forestTiles1,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.castle.tileDarkGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
