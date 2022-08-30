let canvas_width = 640
let canvas_height = 480
let score = 0
let retro_font

function setup() {
  createCanvas(canvas_width,canvas_height)
  retro_font = loadFont('library/assets/bit5x3.ttf')

  //Randonly assign a predetermined speed to the cars and sets the spawnpoint
  for(let i = 0; i < car_image.length; i++){
    car_speed[i] = random([5.5,5,7,10])
    car_x[i] = spawn_right
    car_y[i] = lanes_y[i]
    //Sets the car width and height
    car_width[i] = car_image[i].width/1.5
    car_height[i] = car_image[i].height/1.5
  }

  //Sets the player spawnpoint
  player_spawn[0] = canvas_width/2 - (player_image.width*.25)/2
  player_x = player_spawn[0]
  player_y = player_spawn[1]
  
  //Sets the player width and height
  player_width = player_image.width*.25
  player_height = player_image.height*.25
}

function draw() {
  //Draw the background and the player
  image(bg_image, 0, 0, width, height)
  image(player_image, player_x, player_y, player_width, player_height)

  drawCars()
  movePlayer()
  playerColisions()

  //Draw the ScoreBoard
  if(score < 0) score = 0
  fill('white')
  textFont(retro_font)
  textSize(50)
  text(score, 30, 60)
}