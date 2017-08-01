$(document).ready(function(){
	//global variable need to play the game
	var wins = 0;
	var losses = 0;
	var playerScore = 0;
	var reset = 0;
	var checkScore = 0;
	

	// function to keep count of wins & losses
	$("#wins").text("Wins:");
	$("#losses").text("Losses:");


	// assign number to crystals from 1 -12
	  var diamond = Math.floor(Math.random()*11+1);
	  var sapphire = Math.floor(Math.random()*11+1);
	  var emerald = Math.floor(Math.random()*11+1);
	  var ruby = Math.floor(Math.random()*11+1);

	//random number for the computer game from 19 - 120
	  var random = Math.floor(Math.random()*101+19);

	$("#random-number").text(random);
	console.log(random)



	var updateScore = function (){
	$("#player-score").empty();
	$("#player-score").append(playerScore);
	$("#wins").empty();
	$("#wins").append(wins);
	$("#losses").empty();
	$("#losses").append(losses);
}

	// / reset gain rather win or loss

	var reset = function(){
		playerScore = 0;
	    random = Math.floor((Math.random()* 101) + 19);
	    // console.log('reset')
		$("#random-number").empty();
		$("#random-number").text(random);
		$("#player-score").append(playerScore);
		// $("#win-loss").empty();

		diamond = Math.floor((Math.random()* 12) + 1);
	    sapphire = Math.floor((Math.random()* 12) + 1);
	    emerald= Math.floor((Math.random()* 12) + 1);
	    ruby = Math.floor((Math.random()* 12) + 1);
	   
	    updateScore();
	}
	
	// compare player's number against computer


	var checkScore = function(){
		$('#player-score').html(playerScore);
		if (playerScore == random) {
			$("#win-loss").text("You won!");
			"Wins:" + wins++;
			reset();
			
		} else if (playerScore > random){
			$("#win-loss").text("Better luck next time!");
			"Losses:" + losses++;
			reset();
			
		}
	}




// Add crystals

	$("#diamond").on("click", function(){
		playerScore = playerScore + diamond;
		checkScore();
	});

	$("#sapphire").on("click", function(){
		playerScore = playerScore + sapphire;
		checkScore();
	});

	$("#emerald").on("click", function(){
		playerScore = playerScore + emerald;
		checkScore();
	});


	$("#ruby").on("click", function(){
		playerScore = playerScore + ruby;
	checkScore();
	});

});






			
