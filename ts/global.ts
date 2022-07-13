interface coords {
    x : number,
    y : number
}

interface resolution {
    width : number,
    height : number
}

class Global {
    gameTimer : number = 0;
    readonly tileWidth : number = 16;
    readonly tileHeight : number = 16;
    readonly scale : number = 3.5;
    readonly resolution : resolution = {
        width : 960,
        height : 640
    };
}