//Car variables
let car_x = []
let car_y = []
let car_speed = []
let spawn_right = canvas_width + 50
let car_width = []
let car_height = []

//Sets the y position for all the road lanes
let lanes_y = [50, 115, 180, 253, 315, 385]

function drawCars(){
    //Drawing all the cars every frame
    for(let i = 0; i < car_image.length; i++){
        image(car_image[i], car_x[i], car_y[i], car_width[i], car_height[i])
        car_x[i] -= car_speed[i]

        //The car left the screen
        if(car_x[i] < -car_image[i].width/1.5){
            car_x[i] = spawn_right
            car_speed[i] = random([5.5,5,7,10])
        }
    }
}