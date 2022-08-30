let player_x
let player_y
let step_x = 5
let step_y = 65
let player_width 
let player_height
let player_spawn = [0,443]

//Moves the player horizontally
function movePlayer(){
    if (keyIsDown(RIGHT_ARROW)) player_x += step_x
    if (keyIsDown(LEFT_ARROW)) player_x -= step_x
}
//Moves the player vertically
function keyPressed(){
    if (keyCode === UP_ARROW){
        player_y -= step_y
        step_sound.play()
    }
    if (keyCode === DOWN_ARROW){
        player_y += step_y
        step_sound.play()
    }
}
function playerColisions(){
    //Check collisions with top and bottom
    if (player_y < 0){
        player_y = player_spawn[1]
        score += 10
        score_sound.play()
    } 
    if (player_y > canvas_height-player_height) player_y = player_spawn[1]

    //Check collisions with the sides
    if (player_x < 0) player_x = 0
    if (player_x+player_width > canvas_width) player_x = canvas_width-player_width

    //Check collisions with the "enemys"
    for(let i = 0; i < car_image.length; i++){
        if (collideRectCircle(car_x[i], car_y[i], car_width[i], car_height[i], player_x+player_width/2, player_y+player_height/2, player_height)){
            player_y = player_spawn[1]
            collide_sound.play()
            score  = score-5
        }
    }
}
