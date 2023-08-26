var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;

block_imagen_width = 30;
block_imagen_height = 30;

var player_object = "";
var block_imagen_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img) {
player_object = Img;
    
player_object.scaleToWidth(150);
player_object.scaleToWidth(150);
player_object.set({
    top:player_y,
    left:player_x

});
canvas.add(player_object);
});
}

function new_image(get_image)
{
    fabric.image.fromURL(get_image, function(Img) {
        block_imagen_object = Img;
        block_imagen_object.scaleToWidth(block_imagen_width);
        block_imagen_object.scaleToHeight(block_imagen_height);
        block_imagen_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_imagen_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80'){
    console.log("Se presiona p y shift al mismo tiempo");
    block_imagen_width = block_imagen_width + 10;
    block_imagen_height = block_imagen_height + 10;
    document.getElementById("current_width").innerHTML = block_image_whidth;
    document.getElementById("current_height").innerHTML = block_imagen_height;
}
if(e.shiftKey && keyPressed == '77'){
    console.log("Se presiona m y shift al mismo tiempo");
    block_imagen_width = block_imagen_width - 10;
    block_imagen_height = block_imagen_height - 10;
    document.getElementById("current_width").innerHTML = block_image_whidth;
    document.getElementById("current_height").innerHTML = block_imagen_height;
}
if(keyPressed == '38'){ 
up();
console.log("up");
}
if(keyPressed == '40'){
    down();
    console.log("down");
}
if(keyPressed == '37'){ 
    left();
    console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    if(keyPressed == '67')
    {
        new_image('cloud.jpg');
        console.log("c");
    }
    if(keyPressed == '68'){
        new_image('dark_green.png');
        console.log("b");
    }
    if(keyPressed == '71'){
        new_image('ground.png');
        console.log("g")
    }
    if(keyPressed == '108'){
      new_image('light_green.png');
      console.log("i")  
    }
    if(keyPressed == '114'){
        new_image('roof.png');
        console.log("r")
    }
    if(keyPressed == '84'){
        new_image('trunk.jpg');
        console.log("t")
    }
    if(keyPressed == '85'){
        new_image('unique.png');
        console.log("u")
    }
    if(keyPressed == '87'){
        new_image('wall.png');
        console.log("w")
    }
    if(keyPressed == '89'){
        new_image('yellow_wall.png');
        console.log("y")
    }
}
function up()
{
    if(player_y >=0){
        player_y = player_y - block_imagen_height;
        console.log("altura del bloque =" +block_imagen_height);
        console.log("Cuando se presiona la flecha hacia arriba, x = " +player_x+ ",y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y <=500){
        player_y = player_y - block_imagen_height;
        console.log("altura del bloque =" +block_imagen_height);
        console.log("Cuando se presiona la flecha hacia abajo, x = " +player_x+ ",y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x >0)
        player_x = player_x - block_image_width;
console.log("ancho del bloque = " + block_image_width);
console.log("cuando se presiona la flecha izqierda, x = " + player_x+" , y = "+player_y );
canvas.remove(player_object);
player_update();
}
function right()
{
    if(player_x <=850)
    player_x = player_x - block_image_width;
console.log("ancho del bloque = " + block_image_width);
console.log("cuando se presiona la flecha derecha, x = " + player_x+" , y = "+player_y );
canvas.remove(player_object);
player_update();  
}




