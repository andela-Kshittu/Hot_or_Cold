

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

	if(isNaN(userResponse) || (userResponse === null ) || (userResponse === undefined) || (userResponse > 100) || ( userResponse < 0)){
		$('#check').show();
		getUserRespose();
	}
	else{
		$('#check').hide();
		return true;
	}
};


function testResponse()
{
	if (isValid === true)
	{
		if (randNumber === userResponse)
		{
			$('#right').show();
			$('#hot').hide();
			$('#colder').hide();
			$('#hotter').hide();
			$('#cold').hide();
			$('#guess').show();
			$('#guess_again').hide();
		}
		else if (randNumber > userResponse) 
		{
			$('#cold').show();
			$('#right').hide();
			$('#hot').hide();
			$('#colder').hide();
			$('#hotter').hide();
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
			$('#cold').hide();
			$('#right').hide();
			$('#colder').hide();
			$('#hotter').hide();
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
			$('#hot').hide();
			$('#cold').hide();
			$('#colder').hide();
			$('#hotter').hide();
			$('#guess').show();
			$('#guess_again').hide();
		}
		else if ( diff1 > diff2) 
		{
			$('#colder').show();
			$('#right').hide();
			$('#hot').hide();
			$('#cold').hide();
			$('#hotter').hide();
			prevResponse = userResponse;
		}
		else if (diff1 < diff2) 
		{
			$('#hotter').show();
			$('#right').hide();
			$('#hot').hide();
			$('#colder').hide();
			$('#cold').hide();
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

