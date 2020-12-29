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

    };
};

Game.prototype.randomPosition = function () { 

};

Game.prototype.draw(ctx) { 
// call clearRect on the ctx to wipe down the entire space. Call the draw method on each of the asteroids
};

Game.prototype.moveObjects = function () { 
// should call move on each of the asteroids
};