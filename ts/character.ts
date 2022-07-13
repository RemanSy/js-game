class Character extends Global {
    image : HTMLImageElement;
    numOfFrames : number;
    position : coords;
    width : number;
    height : number;

    constructor(
        {
            position = {x : 0, y : 0},
            image,
            numOfFrames
        } 
            : 
        {
            position ?: coords,
            image : HTMLImageElement,
            numOfFrames : number
        }
    ) {
        super();

        this.image = image;
        this.position = position;
        this.numOfFrames = numOfFrames;

        this.width = this.image.width / this.numOfFrames;
        this.height = this.image.height;

    }

    update() {

    }

    draw(ctx : CanvasRenderingContext2D) {
        ctx.drawImage(
            this.image,
            0,
            0,
            this.width,
            this.height,
            this.position.x,
            this.position.y,
            this.width * this.scale,
            this.height * this.scale
        );
    }

}