function linkedin() {
  window.open("https://www.linkedin.com/in/tovape");
}

function reddit() {
  window.open("https://www.reddit.com/user/tovape75");
}

function youtube() {
  window.open("https://www.youtube.com/channel/UCZ0WVSWlskwvf6tXZCYjLpQ");
}

function steam() {
  window.open("https://steamcommunity.com/id/tovape75/");
}

function mail() {
  window.open("mailto: tovapebusiness@gmail.com");
}

function cv1() {
  window.open("./archive/cv1.pdf");
}

function cv2() {
  window.open("./archive/cv2.pdf");
}

function cv3() {
  window.open("./archive/cv3.pdf");
}

function carbot() {
  window.open("https://carbot.000webhostapp.com");
}

function blender() {
  window.open("./blender.html");
}

function home() {
  window.open("./index.html");
}

var timeoutID;
 
function setup() {
	this.addEventListener("mousemove", resetTimer, false);
	this.addEventListener("mousedown", resetTimer, false);
	this.addEventListener("keypress", resetTimer, false);
	this.addEventListener("DOMMouseScroll", resetTimer, false);
	this.addEventListener("mousewheel", resetTimer, false);
	this.addEventListener("touchmove", resetTimer, false);
	this.addEventListener("MSPointerMove", resetTimer, false);
	startTimer();
}
setup();
 
function startTimer() {
    timeoutID = window.setTimeout(goInactive, 20000);
}
 
function resetTimer(e) {
    window.clearTimeout(timeoutID);
    goActive();
}
 
function goInactive() {
	$("#foo").addClass("inactive");
}
 
function goActive() {
	$("#foo").removeClass("inactive");
    startTimer();
}

