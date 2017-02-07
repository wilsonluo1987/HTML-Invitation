// JavaScript Document
var enroll= document.getElementById("enroll");
enroll.onclick=function(e){
	e.preventDefault();
	enroll.innerHTML="Congratulations, you are in";
	enroll.style.background="#27cb8b";
	enroll.style.borderColor="#27cb8b";
	}