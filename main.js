canvas = new fabric.Canvas('myCanvas');

playerx = 10;
playery = 10;

block_image_width = 30;
block_image_height = 30;

player_object = "";
block_image_object = "";

function playerUpdate()
{
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playery,
            left:playerx
        });
        canvas.add(player_object);
    });
}

function newImage(getImage)
{
    fabric.Image.fromURL(getImage, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:playery,
            left:playerx
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
var keypressed = e.keyCode;
console.log(keypressed);

if(keypressed == '80'&& e.shiftKey == true)
{
    console.log("Shift & P Together");
    block_image_height = block_image_height + 10;
    block_image_width = block_image_width + 10;

    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}

if(keypressed == '77'&& e.shiftKey == true)
{
    console.log("Shift & M Together");
    block_image_height = block_image_height - 10;
    block_image_width = block_image_width - 10;

    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}

if(keypressed == '37')
{
    left();
    console.log("Left Arrow Key");
}

if(keypressed == '38')
{
    up();
    console.log("up Arrow Key");
}

if(keypressed == '39')
{
    right();
    console.log("Right Arrow Key");
}

if(keypressed == '40')
{
    down();
    console.log("Down Arrow Key");
}

if(keypressed == '67')
{
    newImage('cloud.jpg');
    console.log("c");
}

if(keypressed == '68')
{
    newImage('dark_green.jpg');
    console.log("d");
}

if(keypressed == '71')
{
    newImage('ground.png');
    console.log("g");
}

if(keypressed == '76')
{
    newImage('light_green.png');
    console.log("l");
}

if(keypressed == '82')
{
    newImage('roof.jpg');
    console.log("r");
}

if(keypressed == '84')
{
    newImage('trunk.jpg');
    console.log("t");
}

if(keypressed == '85')
{
    newImage('unique.png');
    console.log("u");
}

if(keypressed == '87')
{
    newImage('wall.jpg');
    console.log("w");
}

if(keypressed == '89')
{
    newImage('yellow_wall.png');
    console.log("y");
}
}

function up()
{
    if(playery >= 0)
    {
        playery = playery - block_image_height;
        console.log("block_image_height ="+ block_image_height);
        console.log("When Up Arrow key Is Pressed X = "+ playerx + "y = "+ playery);
        canvas.remove(player_object);
        playerUpdate();
    }
}

function down()
{
    if(playery <= 500)
    {
        playery = playery + block_image_height;
        console.log("block_image_height ="+ block_image_height);
        console.log("When Down Arrow key Is Pressed X = "+ playerx + "y = "+ playery);
        canvas.remove(player_object);
        playerUpdate();
    }
}

function left()
{
    if(playerx >= 0)
    {
        playerx = playerx - block_image_width;
        console.log("block_image_width ="+ block_image_width);
        console.log("When Left Arrow key Is Pressed Y = "+ playerx + "y = "+ playerx);
        canvas.remove(player_object);
        playerUpdate();
    }
}

function right()
{
    if(playerx <= 850)
    {
        playerx = playerx + block_image_width;
        console.log("block_image_width ="+ block_image_width);
        console.log("When Up Arrow key Is Pressed X = "+ playerx + "x = "+ playerx);
        canvas.remove(player_object);
        playerUpdate();
    }
}