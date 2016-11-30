
// Enemies our player must avoid
var Enemy = function(x, y) {
//load enemies image and initial location
	this.x = x;
	this.y = y;
	this.speed = (Math.random() * 400);
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
Enemy.prototype.update = function(dt) {
	//set enemies speed
	if(this.x < 500){
		this.x += this.speed * dt;
	}else{
		this.x = 0;
	}
	//if player meet the enemy, reset the game
	if(player.y <= this.y + 40 && player.y >= this.y - 40){
		if(player.x <= this.x + 40 && player.x >= this.x - 40){
			player.x = 200;
		    player.y = 400;
		}
	}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//player's image and initial location
var Player = function(x, y){
	this.sprite = 'images/char-boy.png';
	this.x = 200;
	this.y = 400;
};

Player.prototype.update = function(dt){
	//player will movo based on key's operation
	if(this.inputKey === 'right' && this.x < 400){
		this.x = this.x + 100;
	}else if(this.inputKey === 'left' && this.x > 0){
		this.x = this.x - 100;
	}else if(this.inputKey === 'up' && this.y > 0){
		this.y = this.y - 80;
	}else if(this.inputKey === 'down' && this.y < 400){
		this.y = this.y + 80;
	}
	this.inputKey = null;


	//when the player reach the river, the game reset
	if(this.y === 0){
		this.x = 200;
		this.y = 400;
	}
};

//draw the image on the screen
Player.prototype.render = function(){
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	
};

Player.prototype.handleInput = function(key){
	this.inputKey = key;
};

//set the player object
var player = new Player();

//set the enmey objects
var allEnemies = [
	new Enemy(0, 50),
	new Enemy(0, 120),
	new Enemy(0, 220)
];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
