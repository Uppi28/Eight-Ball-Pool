function Stick() {
    this.position = {x: 0, y: 0};
}


Stick.prototype.update = function () {
    //Testing
}

Stick.prototype.draw = function () {
    Canvas.drawImage(sprites.stick, this.position);
}