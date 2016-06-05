// Zombie Movement	
	var arrayimg = ['0', '1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11'];
		var i = 0; //your starting image

		$(document).ready(function(){
			function cyclex(){
				console.log("trying", i);
				if (i>= arrayimg.length ){i=0;}
				$('#Walk').attr('src','Walk' + arrayimg[i] + '.png');//calls array
				i++; //cycle to next image;
			}
		setInterval(cyclex, 100);
})



//Background Movement
var moveBackground = function(){
		$('#container').animate({'background-position-x': '+=21px'}, 500, 'linear');
		$('#grass').animate({'background-position-x' : '+=50px'}, 400, 'linear');
		$('#mountaina').animate({'background-position-x' : '+=30'}, 500, 'linear');
		$('#mountainb').animate({'background-position-x' : '+=30'}, 500, 'linear');
		
	}

	var timeOut3 = setInterval(moveBackground, 100);



// rocket Movement
var rocketImg = ['0', '1', '2'];
		var i = 0; //your starting image

		$(document).ready(function(){
			function flameBack(){
				console.log("trying", i);
				if (i>= rocketImg.length ){i=0;}
				$('#blast').attr('src', 'rocket'+ rocketImg[i] + '.png');//calls array
				i++; //cycle to next image;
			}
		setInterval(flameBack, 150);
})	



$(document).ready(function(){
          $('#missle').animate({ marginLeft: '1148px'},3000);
          
        });

//explosion

var explodeImg = ['0', '1', '2','4','5','6'];
		var i = 0; //your starting image

		$(document).ready(function(){
			function boomBoom(){
				console.log("trying", i);
				if (i>= explodeImg.length ){i=0;}
				$('#boom').attr('src', 'x'+ explodeImg[i] + '.png');//calls array
				i++; //cycle to next image;
			}
		setInterval(boomBoom, 150);
})

// function killRocket

 $(document).ready(function(value){
 	explodeLocation = $('#elxplodeImg')[0].style.left;
 })
