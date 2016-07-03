// Final JS


// code to make the sprite jump

$(document).keypress(function(e){ x = String.fromCharCode(e.which);
			 // alert(x);
			 // console.log(x)
			if(x == "w"){
				$('div#box').animate({"top": -200},500).delay(35).animate({"top": 10},1000);
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
});


// Ninja star animation
 
 $(document).ready(function(){
 	function ninjaLoop(){
           $('#obstacle').css({marginLeft: '1620px'}).animate({ marginLeft: '-100px'},3000, ninjaLoop);		
       }
      ninjaLoop();
      // console.log("test")  
        });

//colision


//console.log($('#star').offset().left);

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

			//Hit detection

			// var playerRightside = document.querySelectorAll("img#ninja");
			var playerRightside = 200;
 			var playerBottom = $("#ninja").offset().top;
			var boxLocation = $("#star").offset().left;
			 var boxJump = $("#star").offset().top;
			

				if (boxLocation <= playerRightside && boxJump <= playerBottom){
				 alert("Game Over");
			    }

				else (boxJump <= playerBottom);{
			 	console.log("safe");
			}




 };



 var timeOut3 = setInterval(moveBackground, 100);