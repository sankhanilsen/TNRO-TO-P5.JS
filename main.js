function preload() { }


function setup() { canvas = createCanvas(545, 440); canvas.position(110, 250); video = createCapture(VIDEO); video.hide(); tint_color = ""; 
     tint_color="";
}
function draw(){
    image(video,40,70,480,350);
    tint(tint_color);
    fill(225,0,0);
    stroke(225,0,0);
    circle(60, 100, 64 )
    circle(60, 400, 64 )
    circle(500, 400, 64 )
    circle(500, 100, 64 )
    circle(500, 170, 12 )
    circle(500, 230, 12 )
    circle(500, 280, 12 )
    circle(500, 340, 12 )
    circle( 60, 170, 12 )
    circle(60, 230 , 12 )
    circle(60, 280 , 12 )
    circle(60, 340 , 12 )
    rect(35, 80, 480, 35);
    rect(35, 380, 480, 35);

    

}
function take_snapshot(){
    save('photo.png');

}
function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}
