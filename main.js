canvas = document.getElementById('Canvas'); 
ctx = canvas.getContext("2d");
greencar_width= 75;
greencar_height= 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x =5;
greencar_y= 225;
function add() {
background_imgTag = new Image();
background_imgTag.onload= uploadBackground;
background_imgTag.src= background_image;

greencar_imgTag =  new Image();
greencar_imgTag.onload= uploadgreencar;
greencar_imgTag.src= greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas_width, canvas_height);

}

function uploadgreencar() {
	ctx.drawImage(background_image, greencar_x, greencar_y, greencar_width,greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{
	greencar_y= greencar_y - 10;
	conbsole.log("When up arrow is pressed X =" + greencar_x +"Y =" + greencar_y);
	uploadBackground();
	uploadgreencar();
	}
}

function down()
{
	{
		if(greencar_y >=0)
		{
		greencar_y= greencar_y - 10;
		conbsole.log("When down arrow is pressed X =" + greencar_x +"Y =" + greencar_y);
		uploadBackground();
		uploadgreencar();
		}
}

function left()
{
	{
		if(greencar_y >=0)
		{
		greencar_y= greencar_y - 10;
		conbsole.log("When up left is pressed X =" + greencar_x +"Y =" + greencar_y);
		uploadBackground();
		uploadgreencar();
		}
}

function right()
{
	{
		if(greencar_y >=0)
		{
		greencar_y= greencar_y - 10;
		conbsole.log("When up right is pressed X =" + greencar_x +"Y =" + greencar_y);
		uploadBackground();
		uploadgreencar();
		}
}
