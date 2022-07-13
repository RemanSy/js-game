"use strict";
class Level extends Global {
    constructor({ map, tilemap = 'images/Toen\'s Medieval.png' }) {
        super();
        this.characters = [];
        this.map = [];
        this.offset = {
            x: 0,
            y: 0
        };
        this.tilemap = new Image();
        this.map = map;
        this.tilemap.src = tilemap;
    }
    drawMap(ctx) {
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                switch (this.map[y][x]) {
                    // Land tile
                    case 0:
                        this.drawTile(ctx, 16, 0, x, y);
                        break;
                    // Grass tile
                    case 1:
                        this.drawTile(ctx, 48, 0, x, y);
                        break;
                    // Tree tile
                    case 2:
                        // Drawing land tile
                        this.drawTile(ctx, 16, 0, x, y);
                        // Drawing tree
                        this.drawTile(ctx, 64, 0, x, y);
                        break;
                    default:
                        break;
                }
            }
        }
    }
    drawTile(ctx, sx, sy, dx, dy) {
        ctx.drawImage(this.tilemap, sx, sy, this.tileWidth, this.tileHeight, dx * (this.tileWidth * this.scale) + this.offset.x, dy * (this.tileHeight * this.scale) + this.offset.y, this.tileWidth * this.scale, this.tileHeight * this.scale);
    }
}
