const MovingObject = require('./moving_object.js');
const { inherits } = require('./utils.js');
const util = require('./utils.js');




CONSTANTS = {
    COLOR: "pink",
    RADIUS: 10,
    SPEED: 1000
}

function Asteroid (options) {
    options = options || {};
    options.vel = options.vel || randomVec()
    options.color = CONSTANTS.COLOR;
    options.radius= CONSTANTS.RADIUS;
    options.pos = options.pos

    MovingObject.call(this, options)
}
window.Asteroid = Asteroid;

Util.inherits(Asteroid, MovingObject);