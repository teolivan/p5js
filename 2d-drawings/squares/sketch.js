function setup() {
	createCanvas(500, 500);
	background(100);
}

function draw() {
	var x = 0;
	var y = 0;
	var a = 255;
	var b = 150;
	var c = 150;
	
	for(var i = 0; i < 500; i++) {
		noStroke();
		fill(255,b-100,c-100);
		rect(x,y,50,50);
		
		fill(51,b-100,255);
		rect(x,y+50,50,50);
		
		fill(255,b-70,c+30);
		rect(x,y+100,50,50);
		
		fill(154,b+50,c-100);
		rect(x,y+150,50,50);
		
		fill(a-200,b,c);
		rect(x,y+200,50,50);
		
		fill(188,b-80,c+60);
		rect(x,y+250,50,50);
		
		fill(255,b+15,c-150);
		rect(x,y+300,50,50);
		
		fill(255,b-50,255);
		rect(x,y+350,50,50);
		
		fill(0,b,c-100);
		rect(x,y+400,50,50);
		

		
		fill(255,b-20,c-150);
		rect(x,y+450,50,50);
		x+=50;
		//y+=50;
		b+=10;
		c+=10;
		
	}
	
	
}