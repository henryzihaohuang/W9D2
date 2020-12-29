const MovingObject = require('./moving_object');


document.addEventListener('DOMContentLoaded', function(){

    const canvasEl = document.getElementById('game-canvas');


const ctx = canvasEl.getContext('2d');
MovingObject.prototype.draw(ctx);



});