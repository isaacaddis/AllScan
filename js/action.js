// Declaring Variables
var exampleWhitelist = ["www.google.com, www.youtube.com"]
var blocked;
var numOfUsers;
var colorStatus = "DEFAULT";
var URL;
// Popup Code
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
// Functions
function spellCheck(){
	
}
var currentURL = document.URL;
if(jQuery.inArray(currentURL,exampleWhitelist)== -1){
	blocked = false;	
}
else{
	// Main code
	URL = document.URL;

}
