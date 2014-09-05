

var userResponse;
var prevResponse = 0;
var isValid;
var diff1 = 0;
var diff2 = 0;


//function doRandomNum(){
	var randNumber = Math.floor(Math.random()*100);
	console.log(randNumber);
//};

function getUserRespose(){
userResponse = parseInt( $('#userNumber').val());
};

function isResponseValid()
{

	while (isNaN(userResponse) || (userResponse === null ) || (userResponse === undefined) || (userResponse > 100) || ( userResponse < 0)){
		alert("please enter a valid number between 0 and 100");
		getUserRespose();
	}
	return true;
};


function testResponse()
{
	if (isValid === true)
	{
		if (randNumber === userResponse)
		{
			$('#right').show();
		}
		else if (randNumber > userResponse) 
		{
			$('#cold').show();
			if(randNumber !== userResponse)
			{
				prevResponse = userResponse;
				playAgain();
				$('#guess').hide();
				$('#guess_again').show();
				
			}

			
		}
		else if (randNumber < userResponse) 
		{
			$('#hot').show();
			if(randNumber !== userResponse)
			{
				prevResponse = userResponse;
				playAgain();
				$('#guess').hide();
				$('#guess_again').show();
			}
			

		}
	}
};

function play(){
console.log(randNumber);
getUserRespose ();
isValid = isResponseValid();
testResponse();
};


function playAgain(){
	getUserRespose ();
	isValid = isResponseValid();
	diff1 = Math.abs(userResponse - randNumber);
	diff2 = Math.abs(prevResponse - randNumber);
	if (randNumber === userResponse)
		{
			$('#right').show();
		}
		else if ( diff1 > diff2) 
		{
			$('#colder').show();
			prevResponse = userResponse;
		}
		else if (diff1 < diff2) 
		{
			$('#hotter').show();
			prevResponse = userResponse;
		}


};


$('#guess').click(function(event){
	event.preventDefault();
	play();
});
$('#guess_again').click(function(event){
	event.preventDefault();
	playAgain();
});

