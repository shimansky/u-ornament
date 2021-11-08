var clear = document.getElementById("clear");
var generate = document.getElementById("generate");
var results = document.getElementsByClassName("results")[0];

var part_one = [];
var part_two = [];
var part_three = [];
var part_four = [];

var top_left_pixel_arr = [];
var top_right_pixel_arr = [];
var bottom_left_pixel_arr = [];
var bottom_right_pixel_arr = [];

var top_left;
var top_right;
var bottom_left;
var bottom_right;




function generate_random_ornament(){

	part_one = [];
	part_two = [];
	part_three = [];
	part_four = [];

	top_left_pixel_arr = [];
	top_right_pixel_arr = [];
	bottom_left_pixel_arr = [];
	bottom_right_pixel_arr = [];

	for(i=0; i<=9; i++){
		let rand = Math.floor(1 + Math.random() * (3 + 1 - 1));
		if(rand==1){
			part_one.push("var(--red-color)");
		}
		if(rand==2){
			part_one.push("white");
		}
		if(rand==3){
			part_one.push("var(--black-color)");
		}
	}
	for(i=0; i<=9; i++){
		let rand = Math.floor(1 + Math.random() * (3 + 1 - 1));
		if(rand==1){
			part_two.push("var(--red-color)");
		}
		if(rand==2){
			part_two.push("white");
		}
		if(rand==3){
			part_two.push("var(--black-color)");
		}
	}
	for(i=0; i<=9; i++){
		let rand = Math.floor(1 + Math.random() * (3 + 1 - 1));
		if(rand==1){
			part_three.push("var(--red-color)");
		}
		if(rand==2){
			part_three.push("white");
		}
		if(rand==3){
			part_three.push("var(--black-color)");
		}
	}
	for(i=0; i<=9; i++){
		let rand = Math.floor(1 + Math.random() * (3 + 1 - 1));
		if(rand==1){
			part_four.push("var(--red-color)");
		}
		if(rand==2){
			part_four.push("white");
		}
		if(rand==3){
			part_four.push("var(--black-color)");
		}
	}

	top_left = document.createElement("div");
	top_right = document.createElement("div");
	bottom_left = document.createElement("div");
	bottom_right = document.createElement("div");

	top_left.className="part-of-ornament";
	top_right.className="part-of-ornament";
	bottom_left.className="part-of-ornament";
	bottom_right.className="part-of-ornament";

	top_left.innerHTML = "<div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div>";

	top_right.innerHTML = "<div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div>";

	bottom_left.innerHTML = "<div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div>";

	bottom_right.innerHTML = "<div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div>";

	results.append(top_left);
	results.append(top_right);
	results.append(bottom_left);
	results.append(bottom_right);


	top_left_pixel_arr=top_left.getElementsByClassName("pixel");
	top_right_pixel_arr=top_right.getElementsByClassName("pixel");
	bottom_left_pixel_arr=bottom_left.getElementsByClassName("pixel");
	bottom_right_pixel_arr=bottom_right.getElementsByClassName("pixel");

	// for(i=0; i<9; i++){
 //      top_left_pixel_arr.item(i).style.backgroundColor = part_one[i];
	// }

	// for(i=0; i<9; i++){
 //      top_right_pixel_arr.item(i).style.backgroundColor = part_two[i];
	// }

	// for(i=0; i<9; i++){
 //      bottom_left_pixel_arr.item(i).style.backgroundColor = part_three[i];
	// }

	// for(i=0; i<9; i++){
 //      bottom_right_pixel_arr.item(i).style.backgroundColor = part_four[i];
	// }

	paint();

	// part_one = [];
	// part_two = [];
	// part_three = [];
	// part_four = [];

	// top_left_pixel_arr = [];
	// top_right_pixel_arr = [];
	// bottom_left_pixel_arr = [];
	// bottom_right_pixel_arr = [];
}

function generate_ornament(){
	for(i=0; i<=9; i++){
		let rand = Math.floor(1 + Math.random() * (3 + 1 - 1));
		if(rand==1){
			part_one.push("red");
		}
		if(rand==2){
			part_one.push("white");
		}
		if(rand==3){
			part_one.push("black");
		}
	}
	for(i=0; i<=9; i++){
		let rand = Math.floor(1 + Math.random() * (3 + 1 - 1));
		if(rand==1){
			part_two.push("red");
		}
		if(rand==2){
			part_two.push("white");
		}
		if(rand==3){
			part_two.push("black");
		}
	}
	for(i=0; i<=9; i++){
		let rand = Math.floor(1 + Math.random() * (3 + 1 - 1));
		if(rand==1){
			part_three.push("red");
		}
		if(rand==2){
			part_three.push("white");
		}
		if(rand==3){
			part_three.push("black");
		}
	}
	for(i=0; i<=9; i++){
		let rand = Math.floor(1 + Math.random() * (3 + 1 - 1));
		if(rand==1){
			part_four.push("red");
		}
		if(rand==2){
			part_four.push("white");
		}
		if(rand==3){
			part_four.push("black");
		}
	}

	top_left = document.createElement("div");
	top_right = document.createElement("div");
	bottom_left = document.createElement("div");
	bottom_right = document.createElement("div");

	top_left.className="part-of-ornament";
	top_right.className="part-of-ornament";
	bottom_left.className="part-of-ornament";
	bottom_right.className="part-of-ornament";

	top_left.innerHTML = "<div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div>";

	top_right.innerHTML = "<div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div>";

	bottom_left.innerHTML = "<div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div>";

	bottom_right.innerHTML = "<div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div><div class='pixel'></div>";

	results.append(top_left);
	results.append(top_right);
	results.append(bottom_left);
	results.append(bottom_right);


	top_left_pixel_arr=top_left.getElementsByClassName("pixel");
	top_right_pixel_arr=top_right.getElementsByClassName("pixel");
	bottom_left_pixel_arr=bottom_left.getElementsByClassName("pixel");
	bottom_right_pixel_arr=bottom_right.getElementsByClassName("pixel");

	// for(i=0; i<9; i++){
 //      top_left_pixel_arr.item(i).style.backgroundColor = part_one[i];
	// }

	// for(i=0; i<9; i++){
 //      top_right_pixel_arr.item(i).style.backgroundColor = part_two[i];
	// }

	// for(i=0; i<9; i++){
 //      bottom_left_pixel_arr.item(i).style.backgroundColor = part_three[i];
	// }

	// for(i=0; i<9; i++){
 //      bottom_right_pixel_arr.item(i).style.backgroundColor = part_four[i];
	// }

	paint();

}

function clear_ornament(){
	part_one = [];
	part_two = [];
	part_three = [];
	part_four = [];

	top_left_pixel_arr = [];
	top_right_pixel_arr = [];
	bottom_left_pixel_arr = [];
	bottom_right_pixel_arr = [];
	results.innerHTML = "";
	console.log("all clear!");
}

function paint(){
var b = 0;
var start_part_two = 0;
var start_part_three = 0;
var start_part_four = 0;
var end_part = 0;

	
var part_one_interval = setInterval(function(){
	top_left_pixel_arr.item(b).style.backgroundColor = part_one[b];
    b++;
    console.log(part_one[b]);
    if(b>=9){
    	clearInterval(part_one_interval);
    	b = 0;
    	start_part_two=1;
    }
 },50);
      

      
      	var part_two_interval = setInterval(function(){
      		if(start_part_two==1){
				top_right_pixel_arr.item(b).style.backgroundColor = part_two[b];
			    b++;
			    console.log(part_two[b]);
			    if(b>=9){
			    	clearInterval(part_two_interval);
			    	b = 0;
			    	start_part_three=1;
			    	}
   				}
 			},50);
      
      var part_three_interval = setInterval(function(){
      		if(start_part_three==1){
				bottom_left_pixel_arr.item(b).style.backgroundColor = part_three[b];
			    b++;
			    console.log(part_three[b]);
			    if(b>=9){
			    	clearInterval(part_three_interval);
			    	b = 0;
			    	start_part_four=1;
			    	}
   				}
 			},50);
	

       var part_four_interval = setInterval(function(){
      		if(start_part_four==1){
				bottom_right_pixel_arr.item(b).style.backgroundColor = part_four[b];
			    b++;
			    console.log(part_four[b]);
			    if(b>=9){
			    	clearInterval(part_four_interval);
			    	}
   				}
 			},50);

}

