var canvas = new fabric.Canvas ('myCanvas');

window.addEventListener("keydown", my_keydown);

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
    player_objects= Img;

    player_objects.scaleToWidth(150);
    player_objects.scaleToHeight(140);
    player_objects.set({
        top:player_y,
        left:player_x
    })
    canvas.add(player_objects);
    
    })
}
window.addEventListener("keydown", my_keydown);
KeyPressed = e.keyCode;
console.log(KeyPressed);

function my_keydown(e)
{
        
        if(KeyPressed == '38')
        {

            up();
            console.log("up");
        }
        if(KeyPressed == '40')
        {

            down();
            console.log("down");
        }
        if(KeyPressed == '37')
        {

              left();
            console.log("left");
        }
        if(KeyPressed == '39')
        {

             right();
            console.log("right");
        }
        
        if(KeyPressed == '65')
        {

            new_image("captain_america_left_hand.png");
            console.log("a");
        }
        if(KeyPressed == '66')
        {

            new_image("hulk_face.png");
            console.log("b");
        }
        if(KeyPressed == '67')
        {

            new_image("hulk_left_hand.png");
            console.log("c");
        }
        if(KeyPressed == '68')
        {

            new_image("hulk_legs.png");
            console.log("d");
        }
        if(KeyPressed == '69')
        {

            new_image("hulk_right_hand.png");
            console.log("e");
        }
        if(KeyPressed == '70')
        {

            new_image("hulkd_body.png");
            console.log("f");
        }
        if(KeyPressed == '71')
        {

            new_image("ironman_body.png");
            console.log("g");
        }
        if(KeyPressed == '72')
        {

            new_image("ironman_face.png");
            console.log("h");
        }
        if(KeyPressed == '73')
        {

            new_image("ironman_left_hand.png");
            console.log("i");
        }
        if(KeyPressed == '73')
        {

            new_image("ironman_legs.png");
            console.log("j");
        }
        if(KeyPressed == '74')
        {

            new_image("ironman_right_hand.png");
            console.log("k");
        }
        if(KeyPressed == '75')
        {

            new_image("spiderman_body.png");
            console.log("l");
        }
        if(KeyPressed == '76')
        {

            new_image("spiderman_face.png");
            console.log("m");
        }
        if(KeyPressed == '77')
        {

            new_image("spiderman_left_hand.png");
            console.log("n");
        }
        if(KeyPressed == '78')
        {

            new_image("spiderman_legs.png");
            console.log("o");
        }
        if(KeyPressed == '79')
        {

            new_image("spiderman_right_hand.png");
            console.log("p");
        }
        if(KeyPressed == '80')
        {

            new_image("thor_face.png");
            console.log("q");
        }
        if(KeyPressed == '81')
        {

            new_image("thor_left_hand.png");
            console.log("r");
        }
        if(KeyPressed == '82')
        {

            new_image("thor_right_hand.png");
            console.log("s");
        }
 }
 function up()
 {
     if(player_y>=0)
     {
        player_y=player_y-block_image_height;
        console.log("When up arrow key is pressed, x="+player_x+", y="+player_y);
        canvas.remove(player_objects);
        player_update();
     }
 }

 function down()
 {
     if(player_y<=500)
     {
        player_y=player_y+block_image_height;
        console.log("When down arrow key is pressed, x="+player_x+", y="+player_y);
        canvas.remove(player_objects);
        player_update();
     }
 }

 function left()
 {
     if(player_x>=0)
     {
        player_x=player_x-block_image_width;
        console.log("When left arrow key is pressed, x="+player_x+", y="+player_y);
        canvas.remove(player_objects);
        player_update();
     }
 }

 function right()
 {
     if(player_x<=850)
     {
        player_x=player_x+block_image_width;
        console.log("When right arrow key is pressed, x="+player_x+", y="+player_y);
        canvas.remove(player_objects);
        player_update();
     }
 }