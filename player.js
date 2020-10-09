class Player {
    constructor(width, height, cvs) {
        this.width = width;
        this.height = height;
        this.cvs = cvs;
        this.ctx = this.cvs.getContext("2d");
        this.x = this.cvs.width / 2;
        this.y = this.cvs.height - this.height;

        document.addEventListener("keydown", this.onKeyPressed);
    }

    draw() {
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move(x, y) {
        this.x += x;
        this.y += y;
    }

    onKeyPressed() {
        switch (window.event.keyCode) {
            case 37:
                this.move(-5, 0);
                break;
            case 38:
                this.move(0, 5);
                break;
            case 39:
                this.move(5, 0);
                break;
            case 40:
                this.move(0, -5);
                break;
        }
    }
}

export { Player };
