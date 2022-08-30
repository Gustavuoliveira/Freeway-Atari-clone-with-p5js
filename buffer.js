//Stores and load the images in the memory
let bg_image
let player_image
let car_image = []

let collide_sound = new Audio('library/assets/sound/collide.mp3')
let step_sound = new Audio('library/assets/sound/step.mp3')
let score_sound = new Audio('library/assets/sound/score.wav')

function preload(){
    bg_image = loadImage('library/assets/road.png')
    player_image = loadImage('library/assets/cow.png')
    car_image[0] = loadImage('library/assets/car_black.png') 
    car_image[1] = loadImage('library/assets/car_yellow.png')
    car_image[2] = loadImage('library/assets/car_green.png')
    car_image[3] = loadImage('library/assets/car_black.png') 
    car_image[4] = loadImage('library/assets/car_yellow.png')
    car_image[5] = loadImage('library/assets/car_green.png')
}
  