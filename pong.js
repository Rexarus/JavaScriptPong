//"use strict"; // for future-proof error-fixing

// define global variable here
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

// paddle constructor function
function Paddle(x_position, y_position){
	this.width = 5; // width in pixels
	this.height = 50; // height in pixels
	this.x_position = x_position; // position in pixels
	this.y_position = y_position; // position in pixels
}

// method to draw paddle
Paddle.prototype.render = function(){
	context.fillRect(this.x_position, this.y_position, this.width, this.height); // draw paddle
};

// ball constructor function
function Ball(){
	this.x_speed = 10; //pixels per second (change to desired speed)
	this.y_speed = 10; //pixels per second (change to desired speed)
	this.ball_radius = 5; // pixels
	this.x_position = width * 0.5; // position in pixels
	this.y_position = height * 0.5; // position in pixels
}

// method to draw ball
Ball.prototype.render = function(){
	context.beginPath();
	context.arc(this.x_position, this.y_position, this.ball_radius, 0, Math.PI * 2); // draw ball
	context.fill();
}

// TODO: Add data for top and bottom rectangles (i.e boundaries)

function render(){
	context.fillStyle = 'tomato'; // set colour of components within the canvas
	context.clearRect(0, 0, width, height); // clear the canvas
	//context.fillRect(width/2, 0, 2, height);
	
	// draw the ball 
	var ball = new Ball();
	ball.render();
	// draw player_1 paddle
	var player_1 = new Paddle(10, 0);
	player_1.y_position = (height * 0.5) - (player_1.height/2);
	player_1.render();
	
	// TODO: draw the paddle (player_2 / cpu)
	// TODO: Make sure to render the top and bottom rectangle (i.e boundaries)
}

function update(t_elapsed){
	// TODO: Update ball position based on time elapsed
	// TODO: Bounce the ball of top and bottom rectangles
  	// TODO: Record score and reset if ball goes passed the left or right paddle
  	// TODO: Bounce the ball off the paddle
}

// have keyboard inputs (controls for the paddle)
function keyboard_input(event){
	// TODO: Modify code so the paddle goes up and down but not outside the area of play.
	console.log(event.keyCode); // use this to view key codes
}

window.addEventListener("keydown", keyboard_input); // listen to keyboard button press

// main game loop
var previous; 
function main(timestamp){
	if (!previous) previous = timestamp; //start with no elapsed time
  	var t_elapsed = (timestamp - previous) / 1000;  //work out the elapsed time
  	update(t_elapsed); //update the game based on elapsed time
  	
	player_1.draw;
	// TODO: render scene here (e.g draw ball, draw paddle, top and bottom rectangle detection), this function already exist;  	
  	
  	previous = timestamp;  //set the previous timestamp ready for next time
  	window.requestAnimationFrame(main); //ask browser to call this function again, when it's ready
}
main();



