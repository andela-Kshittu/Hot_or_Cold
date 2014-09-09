// GLOBAL VARIABLES
var userResponse;
var prevResponse = undefined;
var isValid;
// GENERATE RANDOM NUMBER
var randNumber = Math.floor(Math.random()*100);
console.log(randNumber);

var actions = {
	// PLAY EVENT HANDLER
init:function(){
	$('#guess').click(function(event){
	event.preventDefault();
	if (prevResponse === undefined)
	{ actions.play(); }
	else{ actions.playAgain();}
	actions.setBar();
});
},
// FETCH USER INPUT FROM TEXTBOX
getUserRespose: function(){
				userResponse = parseInt( $('#userNumber').val());
},
// VALIDATES USER INPUT
isResponseValid: function(){
	if(isNaN(userResponse) || (userResponse === null ) || (userResponse === undefined) || (userResponse > 100) || ( userResponse < 0)){
		$('#check').show();
		actions.getUserRespose();
	}
	else{
		$('#check').hide();
		return true;
	}
},
// COMPARES USER INPUT WITH COMPUTER GUESS
setPlay : function(){
		prevResponse = userResponse;
		actions.playAgain();
},
reply: function(value){
		$('#report').text("You are "+value);
},
replySetplay :function(value){
		actions.reply(value); 
		actions.setPlay();
},
testResponse:function()
{
	if (isValid === true)
	{
		if (randNumber === userResponse)
		{
			actions.reply("Right"); 
		}
		else if (Math.abs(randNumber - userResponse) > 49)
		{
			actions.replySetplay("Cold")
		}		
		else if (Math.abs(randNumber - userResponse) < 50)
		{
			actions.replySetplay("Hot"); 		
		}
	}
},
// A WELL STRUCTURED FUNCTION THAT EXECUTES EACH FUNCTION BASED ON THE USER INPUT
play: function(){
	actions.getUserRespose();
	isValid = actions.isResponseValid();
	actions.testResponse();
},
// THIS FUNCTION ALLOWS THE USER TO BE ABLE TO THROW A SECOND GUESS
playAgain: function(){
	actions.getUserRespose();
	isValid = actions.isResponseValid();
	var diff1 = Math.abs(userResponse - randNumber);
	var diff2 = Math.abs(prevResponse - randNumber);
	if (randNumber === userResponse)
		{
			actions.reply("Right");
			$('#guess_again').hide();
		}
		else if ( diff1 > diff2) 
		{
			actions.reply("Colder");
			prevResponse = userResponse;
		}
		else if (diff1 < diff2) 
		{
			actions.reply("Hotter");
			prevResponse = userResponse;
		}
},
setBar:function(){
var progress = (100 - (Math.abs(randNumber - userResponse)))*2.4;
$('#prog-bar').animate({ width: progress }, 1000);
	}
};
actions.init();



