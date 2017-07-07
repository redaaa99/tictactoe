scorex=0;
scoreo=0;
turn="x";
choice="";

var gameArray=["_","_","_","_","_","_","_","_","_"];


function checkwin(array_tic)
{
	winner = "none";
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
		return;
	}
	else if(winner=="o")
	{
		scoreo++;
		gameArray=["_","_","_","_","_","_","_","_","_"];
		declareWinner("o");
		displayScore();
		return;
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
		return;
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

function clearall() 
{
    for (var i =0; i<9; i++) 
    {
    	$(".tile")[i].innerHTML="";
    }
    scorex=0;
    scoreo=0;
    gameArray=["_","_","_","_","_","_","_","_","_"];
    turn="x";
    displayScore();
}

function back(){
	clearall();
	$("#choice").css("visibility","visible");
	$("#realContainer").css("visibility","hidden");
}

function onePlayer(){
	choice="one";
	$("#choice").css("visibility","hidden");
	$("#realContainer").css("visibility","visible");
	// TODO : random turn
	// TODO : check for best move or random move
	// TODO : put(move)
	// TODO : wait for player to click
	// TODO : again check ... 
	// TODO : if there is winner stop.
}

function twoPlayer(){
	choice="two";
	$("#choice").css("visibility","hidden");
	$("#realContainer").css("visibility","visible");
}