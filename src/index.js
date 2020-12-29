const GameView = require('./game_view');
const MovingObject = require('./moving_object');
window.MovingObject = MovingObject; //just so we have access so we can test

document.addEventListener('DOMContentLoaded', function(){
    
    const canvasEl = document.getElementById('game-canvas');
    const ctx = canvasEl.getContext('2d');
    window.ctx = ctx; //just so we have access so we can test

    const game = new Game();
    new GameView(game,ctx).start();

});