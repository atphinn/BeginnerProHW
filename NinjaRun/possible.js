// JavaScript


$(document).keypress(function(e){ x = String.fromCharCode(e.which);
			 // alert(x);
			 console.log(x)
			if(x == "w"){
				$('div#box').animate({"top": -200},500).delay(30).animate({"top": 10},500);
}
			
				
		});

//obstecal
  // $(document).ready(function(){

  //      $('#obstacal').animate({ marginRight: '5000px'},8000);
          
  //   });

  // $('#first')
  //       .animate({left: '-=100%'}, 3000)
// var playerRightside = 200;

var rocketImg = starting
		var i =  0; //your starting image

$(document).ready(function(){
			function ninjaStar(){
				console.log("trying", i);
				if (i>= rocketImg.length ){i=0;}
				$('#blast').attr('src', 'rocket'+ rocketImg[i] + '.png');//calls array
				i++; //cycle to next image;
			}
		setInterval(flameBack, 150);

//Background Movement
 var moveBackground = function(){
  	$('body').animate({'background-position-x': '-=21px'}, 500, 'linear');
	$('#grass').animate({'background-position-x' : '-=50px'}, 400, 'linear');


//var boxLocation = $("#first").offset().left;
//if (boxLocation <= playerRightside){
	//alert("You lose");
		}

// 	console.log($('#first').offset().left);
		
// 	}	
	var timeOut3 = setInterval(moveBackground, 100);

//music
 	// var audio = new Audio('song.mp3');
		// // song.loop = true;
		// audio.play();
		// audio.loop = true;
