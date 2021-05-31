// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100007070702060602070707070107070701070107020606020107070807070107070701070206060207070107090107070101070702060602070707070707070707010707020601020701070707010701070107070206010207070101070707010707070702060103040404040404040405070107020606060606060606060606010707070206060606060606060606060107070702060606060606060606060601010707020606060606060606060606010107070206060606060606060606060101070703040404040404040404040405010707070707010101070707070107010707010107070707070107010701070107070707070707070707010707070707`, img`
. . . 2 . . 2 . . . . . . . . . 
. . . 2 . . 2 . . . . . . . . . 
. . . 2 . . 2 . . . . . . . . . 
. . . 2 . . 2 . . . . . . . . . 
. . . 2 . . 2 . . . . . . . . . 
. . . 2 . . 2 . . . . . . . . . 
. . . 2 . . 2 2 2 2 2 2 2 2 2 2 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass1,sprites.builtin.forestTiles4,sprites.builtin.forestTiles1,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,myTiles.tile2,myTiles.tile1], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202010101010202020202020202020202020101010102020202020202020202020201010101020202020202020202020202010101010202020202020202020202020203030202020202020202020202020202030302020202020202020202020202020303020202020202020202020202020203030202020202020202020202020202030302020202020202020202020202020303020202020202020202020202020203030202020202020202020202020202030302020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass2,sprites.swamp.swampTile1,sprites.castle.tileDarkGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
