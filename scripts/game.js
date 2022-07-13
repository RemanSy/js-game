"use strict";
class Game extends Global {
    constructor(canvas, context) {
        super();
        this.levels = [];
        this.curLevel = 0;
        // Move player or background
        this.movementType = 'player';
        this.keys = {
            w: false,
            a: false,
            s: false,
            d: false
        };
        this.canv = canvas;
        this.ctx = context;
        // Set canvas size
        this.canv.width = this.resolution.width;
        this.canv.height = this.resolution.height;
        this.ctx.imageSmoothingEnabled = false;
        const playerImage = new Image();
        playerImage.src = './images/player.png';
        this.player = new Character({
            position: {
                x: 280,
                y: 280
            },
            image: playerImage,
            numOfFrames: 1,
        });
        this.enablePlayerControls();
    }
    start() {
        this.draw();
    }
    draw() {
        this.gameTimer++;
        this.ctx.clearRect(0, 0, this.canv.width, this.canv.height);
        this.levels[this.curLevel].drawMap(this.ctx);
        this.player.draw(this.ctx);
        this.update();
        requestAnimationFrame(this.draw.bind(this));
    }
    update() {
        // Camera movement
        if (this.keys.w) {
            if (this.player.position.y <= this.resolution.height / 2 - (this.player.height * this.scale / 2) + 5 && this.levels[this.curLevel].offset.y + 5 < 0)
                this.levels[this.curLevel].offset.y += 5;
            else {
                this.player.position.y -= 5;
            }
        }
        if (this.keys.s) {
            // 155 - Magic number
            if (this.player.position.y >= this.resolution.height / 2 - (this.player.height * this.scale / 2) && -this.levels[this.curLevel].offset.y + 5 + 155 < this.resolution.height)
                this.levels[this.curLevel].offset.y -= 5;
            else
                this.player.position.y += 5;
        }
        if (this.keys.a) {
            if (this.player.position.x <= this.resolution.width / 2 - (this.player.width * this.scale / 2) && this.levels[this.curLevel].offset.x + 5 < 0)
                this.levels[this.curLevel].offset.x += 5;
            else {
                this.player.position.x -= 5;
            }
        }
        if (this.keys.d) {
            // 240 - Magic number
            if (this.player.position.x + 5 >= this.resolution.width / 2 - (this.player.width * this.scale / 2) && -this.levels[this.curLevel].offset.x + 5 + 240 < this.resolution.width)
                this.levels[this.curLevel].offset.x -= 5;
            else {
                this.player.position.x += 5;
            }
        }
        // ===============================================
    }
    moveToTile() {
        if (this.keys.d) {
        }
    }
    createLevel(level) {
        this.levels.push(level);
    }
    enablePlayerControls() {
        this.addControls = {
            keydown: ({ key }) => {
                switch (key) {
                    case 'w':
                        this.keys.w = true;
                        break;
                    case 'a':
                        this.keys.a = true;
                        break;
                    case 's':
                        this.keys.s = true;
                        break;
                    case 'd':
                        this.keys.d = true;
                        break;
                }
            },
            keyup: ({ key }) => {
                switch (key) {
                    case 'w':
                        this.keys.w = false;
                        break;
                    case 'a':
                        this.keys.a = false;
                        break;
                    case 's':
                        this.keys.s = false;
                        break;
                    case 'd':
                        this.keys.d = false;
                        break;
                }
            }
        };
        window.addEventListener('keydown', this.addControls.keydown);
        window.addEventListener('keyup', this.addControls.keyup);
    }
    disablePlayerControls() {
        window.removeEventListener('keydown', this.addControls.keydown);
        window.removeEventListener('keyup', this.addControls.keyup);
    }
}
