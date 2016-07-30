// Declaring Variables
var exampleWhitelist = ["www.google.com, www.youtube.com"]
var blocked;
var numOfUsers;
var colorStatus = "DEFAULT";
var currentURL = document.URL;
// Storage Stuff

// Popup Code

if(blocked){
	$("#heading").css("color","red");
	$("#status").html("Blocked.")
	$("#icon").html("<i class = \"material-icons prefix\">error</i>")
}
else{
	$("#heading").css("color","green");
	$("#status").html("Unblocked.")
	$("#icon").html("<i class = \"material-icons prefix\">done</i>")
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
if(document.getElementById('natureAwaits').checked){
	$('#optionsPage').css('background-color',"#dddfd4");
	$("#optionsPageHeading").css("color","#fae596");
}
else if(document.getElementById('oceanSide').checked){
	$('#optionsPage').css('background-color',"#f0eceb");
}
else if(document.getElementById('sleek').checked){
	$('#optionsPage').css('background-color',"#252839");
}
else{
	$('#optionsPage').css('background-color',"white");
}
// Functions
function spellCheck(){

}
if(jQuery.inArray(currentURL,exampleWhitelist)== -1){
	blocked = false;
}
else{
	// Main code
	URL = document.URL;

}
