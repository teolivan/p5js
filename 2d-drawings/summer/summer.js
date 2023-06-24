function setup() {
	createCanvas(2000, 2000);

}

function draw() {
		background(186,228,255);
	noStroke();

	let v = 500;
	let x = 1000;
	let y = 1500;
	let z = 1700;
	let aa = 1900;
	let ae = 2100;
	let a = 2300;
	let b = 2500;
	let c = 2700;
	let d = 2900;

	
	function fillerOne() {
			fill('#FFA526');
	}
	
	function fillerTwo() {
	fill('#E37A42');
	}
	
	function fillerThree() {
	fill('#FA6855');
	}
	
	function fillerFour() {
	fill('#EB5B95');
	}
	
	function fillerFive() {
	fill('#FAC853');
	}
	
	function fillerSix() {
	fill('#FFF75C');
	}
	
	function fillerSeven() {
	fill('#E3BE46');
	}
	
	function fillerEight() {
	fill('#FAB45B');
	}
	
	function fillerNine() {
	fill('#EB8860');
	}
	
	function fillerTen() {
	fill('#FB4E4E');
	}
	
	var quarters = TWO_PI/10  ;
	
	//circle 9
	fill('#22a8ff');
	ellipse(x,x,d,d);
	
	//circle 8
	fill('#3bb2ff');
	ellipse(x,x,c,c);
	
	//circle 7
	fill('#55bcff');
	ellipse(x,x,b,b);
	
	//cirlce 6
	fill('#6ec6ff');
	ellipse(x,x,a,a);
	
	//circle 5 
	fill('#87d0ff');
	ellipse(x,x,ae,ae);

	
	//circle 4
	fill('#a1daff');
ellipse(x,x,aa,aa);

	//circle 3
	fill('#bae4ff');
ellipse(x,x,z,z);

	//circle 2
	
fillerOne();
	arc(x,x,y,y,radians(0),radians(36));
	
fillerTwo();
	arc(x,x,y,y,radians(36), radians(72));
	
fillerThree();
	arc(x,x,y,y,radians(72), radians(108));
	
	
fillerFour();
	arc(x,x,y,y,radians(108), radians(144));
	
fillerFive();
	arc(x,x,y,y,radians(144), radians(180));
	
	
fillerSix();
	arc(x,x,y,y,radians(180) , radians(216));
	
	
fillerSeven();
	arc(x,x,y,y,radians(216),radians(252));
	
	
fillerEight();
	arc(x,x,y,y,radians(252), radians(288));
	
	
fillerNine();
	arc(x,x,y,y,radians(288),radians(324));
	
fillerTen();
	arc(x,x,y,y,radians(324) , radians(360));

	

	
		//circle 1
fillerTen();
	arc(x,x,x,x,radians(0),radians(36));
	

fillerNine();
	arc(x,x,x,x,radians(36), radians(72));
	
fillerEight();
	arc(x,x,x,x,radians(72), radians(108));
	
	
fillerSeven();
	arc(x,x,x,x,radians(108), radians(144));
	
fillerSix();
	arc(x,x,x,x,radians(144), radians(180));
	
	
fillerFive();
	arc(x,x,x,x,radians(180) , radians(216));
	
	
fillerFour();
	arc(x,x,x,x,radians(216),radians(252));
	

fillerThree();
	arc(x,x,x,x,radians(252), radians(288));
	
fillerTwo();
	arc(x,x,x,x,radians(288),radians(324));
	
fillerOne();
	arc(x,x,x,x,radians(324) , radians(360));
	
	
	
	fillerOne();
	arc(x,x,v,v,radians(0),radians(36));
	
fillerTwo();
	arc(x,x,v,v,radians(36), radians(72));
	
fillerThree();
	arc(x,x,v,v,radians(72), radians(108));
	
	
fillerFour();
	arc(x,x,v,v,radians(108), radians(144));
	
fillerFive();
	arc(x,x,v,v,radians(144), radians(180));
	
	
fillerSix();
	arc(x,x,v,v,radians(180) , radians(216));
	
	
fillerSeven();
	arc(x,x,v,v,radians(216),radians(252));
	
	
fillerEight();
	arc(x,x,v,v,radians(252), radians(288));
	
	
fillerNine();
	arc(x,x,v,v,radians(288),radians(324));
	
fillerTen();
	arc(x,x,v,v,radians(324) , radians(360));

	
	
}