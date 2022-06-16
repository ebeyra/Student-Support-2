//golbal


var stage=0;
//control de juego FIN


var playerX = 400;
var playerY = 355;
var playerAncho =123;
var playerAlto = 200;
//end player


var cajaX = 200;
var cajaY = 390;
var cajaAncho = 200;
var cajaAlto = 20;

var caja2X = 550;
var caja2Y = 320;
var caja2Ancho = 200;
var caja2Alto = 20;
//Cajas end

//Cajas end

// ponke 1
var ponkeX= 350;
var ponkeY = 150;
var ponkeAncho = 50;
var ponkeAlto = 50;

// ponke 2
var ponke2X= 550;
var ponke2Y = 100;
var ponke2Ancho = 50;
var ponke2Alto = 50;

// ponke 3
var ponke3X= 50;
var ponke3Y = 300;
var ponke3Ancho = 50;
var ponke3Alto = 50;

//fin ponke2

//fin ponke

var maloX = 130;
var maloY = 340;
var maloAncho = 60;
var maloAlto = 60;



var score =0;
var lives = 3;
var totalTime;

var introTime;
var juegoTime;

var timeLimit = 25;



var jump = false;
var direction = 1;
var velocity = 2;
var jumpPower = 13;
var fallingSpeed = 5;
var minHeight = 375; //altura del piso
var maxHeight = 50;
var jumpCounter = 0;


////Imagenes -Multimedia/// 
var chica;
var ponke;
var ponke2;
var ponke3;
var malo;


var letra;
// fin imagenes Multimedia //


function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);
	textAlign(CENTER);
	imageMode(CENTER);
	
	}//fin setup

/////////draw
function draw() {
	keyPressed();
	keyTyped();
	gravity();
	totalTime= millis();
	
	if(stage == 0){
	intro();// pantalla de incio
	}
	
	if(stage == 1){
	game();// pantalla juego
	}
	
		if(stage == 2){
	win();// pantalla juego
	}
		if(stage == 3){
	loseVida();// pantalla juego
	}

	if(stage == 4){
		lose();// pantalla juego
		}
	

	if (mouseIsPressed == true){
		stage = 1 ;
	}
	
}//fin Draw

////////////-----intro pantalla-------------
function intro(){
	background(0);
	image(startScreen,width/2, height/2, width, height); 
introTime = totalTime;

textFont(letra); 
fill(255);
stroke(0);
strokeWeight(10);
textSize(100);
text( 'F*ck', width/2, height/2, 150);

}////////////-----intro pantalla-End



function game(){
	background(0);
//grass, also.. not weed
	noStroke();
	 fill(0,35,118);
	rect(width/2,450, width, 100);
//windowFrame
	noFill();
	stroke(0);
	strokeWeight(0);
	rect( width/2, height/2, width, height);
	
//caja 1
	stroke(0);
	strokeWeight(5);
	fill(255,120,0);
	rect(cajaX,cajaY,cajaAncho, cajaAlto);
// caja 1 fin	
	
//caja 2
stroke(0);
strokeWeight(5);
fill(255,120,0);
rect(caja2X,caja2Y,caja2Ancho, caja2Alto);
// fin caja 2


//draw jugador
  stroke(0);
	strokeWeight(2);
	fill(150,0,170);
	image(chica,playerX, playerY, playerAncho, playerAlto);
	
	 
	
//collisions

//caja 1
		if(playerX>= cajaX-cajaAncho/2 && playerX <= cajaX+cajaAncho/2 && playerY+playerAlto/2>= cajaY-cajaAlto/2 && playerY+playerAlto/2<= cajaY+cajaAlto/2 && jump==false){
			playerY = cajaY-110;
			velocity = 0;//no speed cause no fall
			jumpCounter =0;
			
		}//close if on caja1
// caja 2

if(playerX>= caja2X-caja2Ancho/2 && playerX <= caja2X+caja2Ancho/2 && playerY+playerAlto/2>= caja2Y-caja2Alto/2 && playerY+playerAlto/2<= caja2Y+caja2Alto/2 && jump==false){
	playerY = caja2Y-110;
	velocity = 0;//no speed cause no fall
	jumpCounter =0;
	
}//close if on box1/// ---------------

	
///ponke ///
	image(ponke, ponkeX, ponkeY, ponkeAncho, ponkeAlto);
 if(playerX >= ponkeX-ponkeAncho/2 && playerX <= ponkeX+ponkeAncho/2 && 
		playerY >= ponkeY-ponkeAlto/2 && playerY <= ponkeY+ponkeAlto/2){
	// 
score = score+1;
timeLimit = timeLimit +5;
	 ponkeX = -10000;
}//colision ponke
	//fin ponke//

///ponke2 ///
image(ponke2, ponke2X, ponke2Y, ponke2Ancho, ponke2Alto);
if(playerX >= ponke2X-ponke2Ancho/2 && playerX <= ponke2X+ponke2Ancho/2 && 
	   playerY >= ponke2Y-ponke2Alto/2 && playerY <= ponke2Y+ponke2Alto/2){
   // 
score = score+1;
timeLimit = timeLimit +5;
	ponke2X = -10000;
}//colision ponke
   //fin ponke2//


 ///ponke3 ///
image(ponke3, ponke3X, ponke3Y, ponke3Ancho, ponke3Alto);
if(playerX >= ponke3X-ponke3Ancho/2 && playerX <= ponke3X+ponke3Ancho/2 && 
	   playerY >= ponke3Y-ponke3Alto/2 && playerY <= ponke3Y+ponke3Alto/2){
   // 
score = score+1;
timeLimit = timeLimit +5;
	ponke3X = -10000;
}//colision ponke
   //fin ponke2//  

	
	//////////////
///////malo//////	
	image(malo, maloX, maloY, maloAncho, maloAlto);
	
	 if(playerX >= maloX-maloAncho && playerX <= maloX+maloAncho && 
		playerY >= maloY-maloAlto && playerY <= maloY+maloAlto){
		 
		lives = lives -1;
		playerX = 400; playerY = 500; // reset postion player when lose
		stage = 3;
		 
}////FIN malo//////
	
	
	//////////////
///////score//////
textFont(letra); 
fill(255);
stroke(0);
strokeWeight(10);
textSize(20);
text( 'Score:', 90, 40);
	text(score, 190,40);
	//////////////
	///////end score text stilo
	
		//////////////
///////VIDAS//////
textFont(letra); 
fill(255);
stroke(0);
strokeWeight(10);
textSize(20);
text( 'Lives:', 390, 40);
	text(lives, 490,40);
	//////////////
	///////end VIdas text stilo
	
	
			//////////////
///////TIME//////
	introTime = introTime;
	juegoTime =  int((totalTime - introTime)/1000);
textFont(letra); 
fill(255);
stroke(0);
strokeWeight(10);
textSize(20);
text( 'Time:', 590, 40);
	text(timeLimit - juegoTime, 680,40);
	//////////////
	///////end TIME text stilo
	
	
/////// accion win 
	//con moneda
	if(score >= 3) {
	stage = 2;//muestra pantalla win 
	}
	//pierde
	if(lives<=0){
	stage=4;//muetra pantalla lose
	}
	//---
		if(juegoTime>= timeLimit){
	stage=4;//muetra pantalla lose
	}
	
	}////// fin Game funct



/////win/////////---------
function win(){
// agrega el background aqui
	image(winScreen, width/2, height/2, width, height);
	textFont(letra); 
fill(255);
stroke(0);
strokeWeight(10);
textSize(50);
text( 'You WIN', width/2, height/2);

}/////wind end////////---------



////lose/////////---------
function loseVida(){
	// agrega el background aqui
	background(204,0,0);
	textFont(letra); 
fill(255);
stroke(0);
strokeWeight(10);
textSize(50);
text( 'Lose 1Up', width/2, height/2);
	
}/////lose end/////////---------





/////lose/////////---------
function lose(){
	// agrega el background aqui
	background(204,0,0);
	textFont(letra); 
fill(255);
stroke(0);
strokeWeight(10);
textSize(50);
text( 'Game Over', width/2, height/2);
	
}/////lose end/////////---------







/////gravedad/////////---------

function gravity(){
	if(playerY >= minHeight && jump == false){
		//deja de caer
		playerY = playerY; //tope de piso
		jumpCounter = 0;
	}
	else{ playerY = playerY + (direction*velocity);
	}
	
	if (jump == true) {
		if(playerY<=maxHeight || jumpCounter >= jumpPower){
			if(playerY >= minHeight){
			playerY = minHeight;}// block de saltar mas de limite x altura max
			else{// sino, cae desde donde este 
			velocity = fallingSpeed;
		}
		} //maxima Altura -------
		else{
		velocity = -jumpPower; // salto
			jumpCounter = jumpCounter +1; //cada vey q salta reset el salto y no vuela
		}//salto normal
	}// fin jump
	else{
		velocity = fallingSpeed; 
	}
}//fin gravedad//////////------------------


function keyPressed(){
	if(keyDown ('LEFT_ARROW')){
		playerX =playerX-5; // se mueve a la izq
	}
	if(keyDown ('RIGHT_ARROW')){
		playerX =playerX+5; // se mueve a la izq
	}
}//fin keyPressed
	
	
	function keyTyped(){
	if (keyDown('space')){
	jump=true;
	}//fin salto 
	else {
		jump = false;
	}//fin else
		
		
	}// fin keyTyped



///////PreLoad ///// ---- 
function preload(){
	
chica = loadImage('chicaPNG.png');	
ponke = loadImage('tile000.png');
ponke2 = loadImage('tile000.png');
ponke3 = loadImage('tile000.png');
letra = loadFont('PressStart2P-Regular.ttf');
malo = loadImage ('pollo.png'); 
winScreen = loadImage ('win.gif');
startScreen = loadImage ('start.gif');

	
}///////PreLoad ///// ---- FIN
















