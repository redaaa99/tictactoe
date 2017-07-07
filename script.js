scorex=0;
scoreo=0;
turn="x";

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
	}
	//declareWinner(winner); TODO
	
	if(winner=="x")
	{
		scorex++;
		gameArray=["_","_","_","_","_","_","_","_","_"];
	}
	else if(winner=="o")
	{
		scoreo++;
		gameArray=["_","_","_","_","_","_","_","_","_"];
	}
	displayTable(gameArray);
	displayScore();
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

function clearall() {
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

