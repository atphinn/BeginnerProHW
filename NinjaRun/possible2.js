// Final JS


// code to make the sprite jump

$(document).keypress(function(e){ x = String.fromCharCode(e.which);
			 // alert(x);
			 // console.log(x)
			if(x == "w"){
				$('div#box').animate({"top": -200},500).delay(30).animate({"top": 10},500);
}
			
				
		});

//Running Animation

var arrayimg = [ '0', '1', '2', '3'];
		var i = 0; //your starting image

		$(document).ready(function(){
			function cyclex(){
				// console.log("trying", i);
				if (i>= arrayimg.length ){i=0;}
				$('#ninja').attr('src','run' + arrayimg[i] + '.png');//calls array
				i++; //cycle to next image;
			}
		setInterval(cyclex, 100);
})


// Ninja star animation
 var playerRightside = 200;
 // var playerBottom = -200;
 $(document).ready(function(){
 	function ninjaLoop(){
           $('#obstacle').css({marginLeft: '1520px'}).animate({ marginLeft: '-100px'},3000, ninjaLoop);
      		
       }

      ninjaLoop();
      // console.log("test")  
      
        });

//colision


	console.log($('#star').offset().left);


var starArray = [ '0', '1'];
var shuriken = 0; //your starting image
	$(document).ready(function(){
			function spinx(){
				// console.log("trying", i);
				if (shuriken>= starArray.length ){shuriken=0;}
				$('#star').attr('src','star' + starArray[shuriken] + '.png');//calls array
				shuriken++; //cycle to next image;
			}
		setInterval(spinx, 100);
});



		
	
 //Background Movement
var moveBackground = function(){
	$('body').animate({'background-position-x': '-=21px'}, 500, 'linear');
 	$('#grass').animate({'background-position-x' : '-=50px'}, 400, 'linear');


 // 	var boxLocation = $("#obstacle").offset().left;
 // 	//var boxLocationbottom = $("#obstacle").offset().top;
 // if (boxLocation <= playerRightside){
 // // alert("You lose");
 // 	 //deathAnimation();
 // 	 console.log(".hit")
	// 	}
var boxLocation = $("#obstacle").offset().left
// var boxJump = $("#obstacle").offset().top
var playerRightside = 200
// var playerBottom = 100
var boxWidth = 100

	if (boxLocation <= playerRightside ){
	 console.log(".hit");
}

else if (boxLocation == boxWidth );{
	// if (playerBottom )
 	console.log("safe");
}

 };




	// var deathArray= ['0','1','2','3'];
	// var fall = 0;


	// function deathAnimation(){

	// $(document).ready(function(){
	// 	function dead(){
	// 		if (fall>= deathArray.length){fall=0;}
	// 		$('#ninja').attr('scr', 'death' + deathArray[fall] + 'png');
	// 		fall++;
	// 	};
	// 	setInterval(dead, 200);
	// });
	
	// };

 var timeOut3 = setInterval(moveBackground, 100);