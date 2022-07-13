class Level extends Global {
    characters : Array<Character> = [];
    map : Array<Array<number>> = [];
    offset : coords = {
        x : 0,
        y : 0
    };

    tilemap : HTMLImageElement = new Image();

    constructor({
            map,
            tilemap = 'images/Toen\'s Medieval.png'
        } : {
            map : Array<Array<number>>,
            tilemap ?: string
        }) {
        super();

        this.map = map;
        this.tilemap.src = tilemap;
    }

    drawMap(ctx : CanvasRenderingContext2D) {
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

    drawTile(ctx : CanvasRenderingContext2D, sx : number, sy : number, dx : number, dy : number) {
        ctx.drawImage(
            this.tilemap,
            sx,
            sy,
            this.tileWidth,
            this.tileHeight,
            dx * (this.tileWidth * this.scale) + this.offset.x,
            dy * (this.tileHeight * this.scale) + this.offset.y,
            this.tileWidth * this.scale,
            this.tileHeight * this.scale
        );
    }
}