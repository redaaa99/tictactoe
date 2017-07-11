var scorex=0;
var scoreo=0;
var turn="x";
choice="";
computer_choice="";


var gameArray=["_","_","_","_","_","_","_","_","_"];


function checkwin(array_tic)
{
	winner = "none";
	displayTable(gameArray);
	/* TODO : OPTIMIZE THESE 16 IF's*/
	sign="x";
	if(array_tic[0]==sign && array_tic[1]==sign && array_tic[2]==sign)
	{
		winner = sign;
	}
	if(array_tic[3]==sign && array_tic[4]==sign && array_tic[5]==sign)
	{
		winner = sign;
	}
	if(array_tic[6]==sign && array_tic[7]==sign && array_tic[8]==sign)
	{
		winner = sign;
	}
	if(array_tic[0]==sign && array_tic[3]==sign && array_tic[6]==sign)
	{
		winner = sign;
	}
	if(array_tic[1]==sign && array_tic[4]==sign && array_tic[7]==sign)
	{
		winner = sign;
	}
	if(array_tic[2]==sign && array_tic[5]==sign && array_tic[8]==sign)
	{
		winner = sign;
	}
	if(array_tic[0]==sign && array_tic[4]==sign && array_tic[8]==sign)
	{
		winner = sign;
	}
	if(array_tic[2]==sign && array_tic[4]==sign && array_tic[6]==sign)
	{
		winner = sign;
	}
	sign="o";
	if(array_tic[0]==sign && array_tic[1]==sign && array_tic[2]==sign)
	{
		winner = sign;
	}
	if(array_tic[3]==sign && array_tic[4]==sign && array_tic[5]==sign)
	{
		winner = sign;
	}
	if(array_tic[6]==sign && array_tic[7]==sign && array_tic[8]==sign)
	{
		winner = sign;
	}
	if(array_tic[0]==sign && array_tic[3]==sign && array_tic[6]==sign)
	{
		winner = sign;
	}
	if(array_tic[1]==sign && array_tic[4]==sign && array_tic[7]==sign)
	{
		winner = sign;
	}
	if(array_tic[2]==sign && array_tic[5]==sign && array_tic[8]==sign)
	{
		winner = sign;
	}
	if(array_tic[0]==sign && array_tic[4]==sign && array_tic[8]==sign)
	{
		winner = sign;
	}
	if(array_tic[2]==sign && array_tic[4]==sign && array_tic[6]==sign)
	{
		winner = sign;
	}
	
	
	
	if(winner=="x")
	{
		scorex++;
		gameArray=["_","_","_","_","_","_","_","_","_"];
		declareWinner("x");
		displayScore();
		return true;
	}
	else if(winner=="o")
	{
		scoreo++;
		gameArray=["_","_","_","_","_","_","_","_","_"];
		declareWinner("o");
		displayScore();
		return true;
	}
	c=0;
	for(i=0;i<9;i++)
	{
		if(array_tic[i]!="_")
		{
			c++;
		}
	}
	if(c==9)
	{
		winner="draw";
		gameArray=["_","_","_","_","_","_","_","_","_"];
		declareWinner("draw");
		displayScore();
		return true;
	}	
}

function declareWinner(name)
{
	if(name=="x")
	{
		statement = "X Wins !";
	}
	else if(name=="o")
	{
		statement = "O Wins !";
	}
	else
	{
		statement = "A Draw !";
	}
	$("#Winner").text(statement);
	$("#disp").css("visibility","visible");
	$("#WinDisplay").css("visibility","visible");
	$("#WinDisplay").animate({
		width:'450px',
		// height:'450px',
	},1000,function(){
		$("#disp").animate({
		    opacity:1,
		  },400);
		$( "#WinDisplay" ).animate({
		    width:'450px',
		    // height:'450px',
		  },1500,function(){
		  	displayTable(gameArray);
		  	play();
		  	$("#disp").animate({
		    opacity:0,
			},400);
		  	$( "#WinDisplay" ).animate({

		    width:'0px',
		    // height:'0px',
		  },1000,function(){
		  	$("#disp").css("visibility","hidden");


		  })
		  })
	});
}


function displayTable(array_tic)
{
	for (j=0; j<9; j++) 
    {
    	if(array_tic[j]=="_")
    	{
    		$(".tile")[j].innerHTML="";
    	}
    	else if(array_tic[j]=="x")
    	{
    		$(".tile")[j].innerHTML='<i class="fa fa-times" aria-hidden="true"></i>';
    	}
    	else
    	{
    		$(".tile")[j].innerHTML='<i class="fa fa-circle-o" aria-hidden="true">';
    	}
    	
    }
}

function displayScore()
{
	$("#SCOREX").html(scorex.toString());
	$("#SCOREO").html(scoreo.toString());
}

function put(num)
{
	if(choice!="one")
	{
		if(gameArray[num]!="x" && gameArray[num]!="o")
		{
			if(turn=="x")
			{
				gameArray[num]="x";
				turn ="o";
			}
			else
			{
				gameArray[num]="o";
				turn ="x";
			}
		}
		displayTable(gameArray);
		checkwin(gameArray);
	}
	else
	{
		
		if(gameArray[num]!="x" && gameArray[num]!="o")
		{
			if(turn=="x")
			{
				gameArray[num]="x";
				turn ="o";
			}
			else
			{
				gameArray[num]="o";
				turn ="x";
			}
		}
		win = checkwin(gameArray);
		if(win)
		{
			if(turn=="x")
			{	
				turn ="o";
			}
			else
			{
				turn ="x";
			}
			return;
		}
		c=0;
		for(i=0;i<9;i++)
		{
			if(gameArray[i]!="_")
			{
				c++;
			}
		}
		if(turn==computer && c<=8)
		{
			//make a function that return a TILE based on COMPUTER symbol
			tile_choice = do_best_move();
			// tile_choice=Math.floor((Math.random() * 9) + 1)-1;
			// while(!isSpotAvailable(tile_choice))
			// {
			// 	tile_choice=Math.floor((Math.random() * 9) + 1)-1;
			// }
			// // So we should replace this block
			if(turn=="x")
			{
				gameArray[tile_choice]="x";
				turn ="o";
			}
			else
			{
				gameArray[tile_choice]="o";
				turn ="x";
			}

		}	
		displayTable(gameArray);
		checkwin(gameArray);
	}
	

	
	
	
}

function clearall() 
{
    for (var i =0; i<9; i++) 
    {
    	$(".tile")[i].innerHTML="";
    }
    scorex=0;
    scoreo=0;
    gameArray=["_","_","_","_","_","_","_","_","_"];
    if(choice=="one")
      {
        play();
      }
    displayScore();
}

function back(){
	$("#choice").css("visibility","visible");
	document.getElementById("choice").style.opacity="1";
	$("#choosexo").css("visibility","hidden");
	document.getElementById("choosexo").style.opacity="0";
	$("#realContainer").css("visibility","hidden");
	document.getElementById("realContainer").style.opacity="0";

	clearall();
}

function onePlayer(){
	choice="one";
	$("#choice").css("visibility","hidden");
	document.getElementById("choice").style.opacity="0";
	$("#choosexo").css("visibility","visible");
	document.getElementById("choosexo").style.opacity="1";
	
}

function twoPlayer(){
	choice="two";
	$("#choice").css("visibility","hidden");
	document.getElementById("choice").style.opacity="0";
	$("#choosexo").css("visibility","visible");
	document.getElementById("choosexo").style.opacity="1";

}

function playAsX(){
	$("#realContainer").css("visibility","visible");
	document.getElementById("realContainer").style.opacity="1";
	$("#choosexo").css("visibility","hidden");
	document.getElementById("choosexo").style.opacity="0";
	turn="x";
	playerchoice="x";
	computer_choice="o";
	if(choice=="one")
	{
		computer="o";
		random_start=Math.floor((Math.random() * 2) + 1);
		if(random_start==1)
		{	
			ran = Math.floor((Math.random() * 4) + 1);
			if(ran==1)
			{
				gameArray[2]="o";
			}
			else if(ran==2)
			{
				gameArray[0]="o";
			}
			else if(ran==2)
			{
				gameArray[8]="o";
			}
			else
			{
				gameArray[6]="o";
			}
			displayTable(gameArray);
		}
	}
}

function playAsO(){
	$("#choosexo").css("visibility","hidden");
	document.getElementById("choosexo").style.opacity="0";
	$("#realContainer").css("visibility","visible");
	document.getElementById("realContainer").style.opacity="1";
	turn="o";
	playerchoice="o";
	computer_choice="x";
	if(choice=="one")
	{
		computer="x";
		random_start=Math.floor((Math.random() * 2) + 1);
		if(random_start==1)
		{	
			ran = Math.floor((Math.random() * 4) + 1);
			if(ran==1)
			{
				gameArray[2]="x";
			}
			else if(ran==2)
			{
				gameArray[0]="x";
			}
			else if(ran==2)
			{
				gameArray[8]="x";
			}
			else
			{
				gameArray[6]="x";
			}
			displayTable(gameArray);
		}
	}
}
//TODO::!!!!
function do_best_move()
{	
	// if 2 rows or cols or diag WIN
	// for tile 1
	if((gameArray[1]==computer_choice && gameArray[2]==computer_choice) || (gameArray[3]==computer_choice && gameArray[6]==computer_choice) || (gameArray[8]==computer_choice && gameArray[4]==computer_choice)) 
	{
		if(isSpotAvailable(0))
		{
			return 0;
		}
	}
	// for tile 2
	if((gameArray[0]==computer_choice && gameArray[2]==computer_choice) || (gameArray[4]==computer_choice && gameArray[7]==computer_choice)) 
	{
		if(isSpotAvailable(1))
		{
			return 1;
		}
	}
	// for tile 3
	if((gameArray[0]==computer_choice && gameArray[1]==computer_choice) || (gameArray[5]==computer_choice && gameArray[8]==computer_choice) || (gameArray[6]==computer_choice && gameArray[4]==computer_choice)) 
	{
		if(isSpotAvailable(2))
		{
			return 2;
		}
	}
	// for tile 4
	if((gameArray[0]==computer_choice && gameArray[6]==computer_choice) || (gameArray[4]==computer_choice && gameArray[5]==computer_choice)) 
	{
		if(isSpotAvailable(3))
		{
			return 3;
		}
	}
	// for tile 5
	if((gameArray[0]==computer_choice && gameArray[8]==computer_choice) || (gameArray[6]==computer_choice && gameArray[2]==computer_choice) || (gameArray[1]==computer_choice && gameArray[7]==computer_choice) || (gameArray[3]==computer_choice && gameArray[5]==computer_choice)) 
	{
		if(isSpotAvailable(4))
		{
			return 4;
		}
	}
	// for tile 6
	if((gameArray[4]==computer_choice && gameArray[3]==computer_choice) || (gameArray[2]==computer_choice && gameArray[8]==computer_choice)) 
	{
		if(isSpotAvailable(5))
		{
			return 5;
		}
	}
	// for tile 7
	if((gameArray[7]==computer_choice && gameArray[8]==computer_choice) || (gameArray[0]==computer_choice && gameArray[3]==computer_choice) || (gameArray[4]==computer_choice && gameArray[2]==computer_choice)) 
	{
		if(isSpotAvailable(6))
		{
			return 6;
		}
	}
	// for tile 8
	if((gameArray[6]==computer_choice && gameArray[8]==computer_choice) || (gameArray[4]==computer_choice && gameArray[1]==computer_choice)) 
	{
		if(isSpotAvailable(7))
		{
			return 7;
		}
	}
	// for tile 9
	if((gameArray[6]==computer_choice && gameArray[7]==computer_choice) || (gameArray[2]==computer_choice && gameArray[5]==computer_choice) || (gameArray[4]==computer_choice && gameArray[0]==computer_choice)) 
	{
		if(isSpotAvailable(8))
		{
			return 8;
		}
	}

  
  // if 2 rows or cols or diag BLOCK
	// for tile 1
	if((gameArray[1]==playerchoice && gameArray[2]==playerchoice) || (gameArray[3]==playerchoice && gameArray[6]==playerchoice) || (gameArray[8]==playerchoice && gameArray[4]==playerchoice)) 
	{
		if(isSpotAvailable(0))
		{
			return 0;
		}
	}
	// for tile 2
	if((gameArray[0]==playerchoice && gameArray[2]==playerchoice) || (gameArray[4]==playerchoice && gameArray[7]==playerchoice)) 
	{
		if(isSpotAvailable(1))
		{
			return 1;
		}
	}
	// for tile 3
	if((gameArray[0]==playerchoice && gameArray[1]==playerchoice) || (gameArray[5]==playerchoice && gameArray[8]==playerchoice) || (gameArray[6]==playerchoice && gameArray[4]==playerchoice)) 
	{
		if(isSpotAvailable(2))
		{
			return 2;
		}
	}
	// for tile 4
	if((gameArray[0]==playerchoice && gameArray[6]==playerchoice) || (gameArray[4]==playerchoice && gameArray[5]==playerchoice)) 
	{
		if(isSpotAvailable(3))
		{
			return 3;
		}
	}
	// for tile 5
	if((gameArray[0]==playerchoice && gameArray[8]==playerchoice) || (gameArray[6]==playerchoice && gameArray[2]==playerchoice) || (gameArray[1]==playerchoice && gameArray[7]==playerchoice) || (gameArray[3]==playerchoice && gameArray[5]==playerchoice)) 
	{
		if(isSpotAvailable(4))
		{
			return 4;
		}
	}
	// for tile 6
	if((gameArray[4]==playerchoice && gameArray[3]==playerchoice) || (gameArray[2]==playerchoice && gameArray[8]==playerchoice)) 
	{
		if(isSpotAvailable(5))
		{
			return 5;
		}
	}
	// for tile 7
	if((gameArray[7]==playerchoice && gameArray[8]==playerchoice) || (gameArray[0]==playerchoice && gameArray[3]==playerchoice) || (gameArray[4]==playerchoice && gameArray[2]==playerchoice)) 
	{
		if(isSpotAvailable(6))
		{
			return 6;
		}
	}
	// for tile 8
	if((gameArray[6]==playerchoice && gameArray[8]==playerchoice) || (gameArray[4]==playerchoice && gameArray[1]==playerchoice)) 
	{
		if(isSpotAvailable(7))
		{
			return 7;
		}
	}
	// for tile 9
	if((gameArray[6]==playerchoice && gameArray[7]==playerchoice) || (gameArray[2]==playerchoice && gameArray[5]==playerchoice) || (gameArray[4]==playerchoice && gameArray[0]==playerchoice)) 
	{
		if(isSpotAvailable(8))
		{
			return 8;
		}
	}

  
  
  
	// BLOCK FORK !!!!
	if(gameArray[4]==computer_choice)
	{
		if((gameArray[0]==playerchoice && gameArray[8]==playerchoice) || (gameArray[2]==playerchoice && gameArray[6]==playerchoice)) 
		{
			ran = Math.floor((Math.random() * 4) + 1);
			if(ran==1)
			{
				if(isSpotAvailable(1))
				{
					return 1;
				}
			}
			else if(ran==2)
			{
				if(isSpotAvailable(7))
				{
					return 7;
				}
			}
			else if(ran==2)
			{
				if(isSpotAvailable(3))
				{
					return 3;
				}
			}
			else
			{
				if(isSpotAvailable(5))
				{
					return 5;
				}
			}
		}
	}
	
	

	
	//block fork in case player had center and corner
	if(gameArray[0]==computer_choice || gameArray[2]==computer_choice || gameArray[8]==computer_choice || gameArray[6]==computer_choice)
	{
		if(gameArray[0]==playerchoice && gameArray[4]==playerchoice) 
		{
			if(isSpotAvailable(2))
			{
				return 2;
			}
		}
		if(gameArray[2]==playerchoice && gameArray[4]==playerchoice) 
		{
			if(isSpotAvailable(0))
			{
				return 0;
			}
		}
		if(gameArray[6]==playerchoice && gameArray[4]==playerchoice) 
		{
			if(isSpotAvailable(8))
			{
				return 8;
			}
		}
		if(gameArray[8]==playerchoice && gameArray[4]==playerchoice) 
		{
			if(isSpotAvailable(6))
			{
				return 6;
			}
		}

	}



	// human choose center / computer plays corners
	if(gameArray.join("")=="____"+playerchoice+"____")
	{
		ran = Math.floor((Math.random() * 4) + 1);
		if(ran==1)
		{
			return 2;
		}
		else if(ran==2)
		{
			return 0;
		}
		else if(ran==2)
		{
			return 8;
		}
		else
		{
			return 6;
		}
	}
	// player choose sides so normaly we should fork?? but no just play center
	else if(gameArray.join("")==playerchoice+"________" || gameArray.join("")=="_"+playerchoice+"_______" || 
	gameArray.join("")=="__"+playerchoice+"______" || gameArray.join("")=="___"+playerchoice+"_____" ||
	gameArray.join("")=="_____"+playerchoice+"___" || gameArray.join("")=="______"+playerchoice+"__" ||
	gameArray.join("")=="_______"+playerchoice+"_" || gameArray.join("")=="________"+playerchoice)
	{
		return 4;
	}
	tile_choice=Math.floor((Math.random() * 9) + 1)-1;
	while(!isSpotAvailable(tile_choice))
	{
		tile_choice=Math.floor((Math.random() * 9) + 1)-1;
	}
	return tile_choice;
}


function play(){
	if(choice=="one")
		{
			random_start=Math.floor((Math.random() * 2) + 1);
			if(playerchoice=="o")
			{
				computer="x";
				
				if(random_start==1)
				{	
					tile_choice=Math.floor((Math.random() * 5) + 1);
          if(tile_choice==1)
            {
              gameArray[4]="x";
            }
          if(tile_choice==2)
            {
              gameArray[0]="x";
            }
          if(tile_choice==3)
            {
              gameArray[2]="x";
            }
          if(tile_choice==4)
            {
              gameArray[8]="x";
            }
          if(tile_choice==5)
            {
              gameArray[6]="x";
            }
					
					displayTable(gameArray);
				}
			}
			else
			{
				computer="o";
				if(random_start==1)
				{	
					tile_choice=Math.floor((Math.random() * 9) + 1)-1;
					tile_choice=Math.floor((Math.random() * 5) + 1);
          if(tile_choice==1)
            {
              gameArray[4]="o";
            }
          if(tile_choice==2)
            {
              gameArray[0]="o";
            }
          if(tile_choice==3)
            {
              gameArray[2]="o";
            }
          if(tile_choice==4)
            {
              gameArray[8]="o";
            }
          if(tile_choice==5)
            {
              gameArray[6]="x";
            }
					
					displayTable(gameArray);
				}
			}
		}
}

function isSpotAvailable(num)
{
	if(gameArray[num]=="_")
	{
		return true;
	}
	else
	{
		return false;
	}
}