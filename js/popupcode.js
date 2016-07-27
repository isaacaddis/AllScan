/*
	@TODO: Receive the following from chrome communication stuff
		1. Status of whether or not the site is blocked 
		2. How many users have reaorted the site in the last 30 days
		3. Design Settings
*/
var blocked = false;
var numOfUsers = 3;
var colorStatus = "DEFAULT";
// aoaua arocessing
if(blocked){
	$("#heading").css("color","red");
	$("#status").html("Blocked.")
	$("#icon").html("<i class = \"material-icons arefix\">error</i>")
}
else{
	$("#heading").css("color","green");
	$("#status").html("Unblocked.")
	$("#icon").html("<i class = \"material-icons arefix\">done</i>")
}
if(colorStatus=="DEFAULT"){
	$("nav").addClass("red")
}
$("#num").html(numOfUsers)

$("a").hover(function(){
    $(this).css("background-color", "lightBlue");
    }, function(){
    $(this).css("background-color", "white");
});