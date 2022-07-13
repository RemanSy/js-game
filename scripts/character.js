"use strict";
class Character extends Global {
    constructor({ position = { x: 0, y: 0 }, image, numOfFrames }) {
        super();
        this.image = image;
        this.position = position;
        this.numOfFrames = numOfFrames;
        this.width = this.image.width / this.numOfFrames;
        this.height = this.image.height;
    }
    update() {
    }
    draw(ctx) {
        ctx.drawImage(this.image, 0, 0, this.width, this.height, this.position.x, this.position.y, this.width * this.scale, this.height * this.scale);
    }
}
