function Game() {
    CONSTANTS = {
        DIM_X = 1000, 
        DIM_Y = 750,
        NUM_ASTEROIDS = 7
    };
    
};

Game.prototype.addAsteroids = function () { 
// Randomly place the asteroids within the dimensions of the game grid
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) { 
        this.add(new Asteroid({game:this}));
    };
};

Game.prototype.randomPosition = function randomPosition() {
    return [
        Game.DIM_X * Math.random(),
        Game.DIM_Y * Math.random()
    ]; 
};

Game.prototype.draw(ctx) { 
// call clearRect on the ctx to wipe down the entire space. Call the draw method on each of the asteroids
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle(0,0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach(function(object){
        object.draw(ctx);
    });
};

Game.prototype.moveObjects = function moveObjects(delta) { 
// should call move on each of the asteroids
    this.allObjects().forEach(function(object){
        object.move(delta);
    });
};