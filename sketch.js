/*
	JSON!

	Data source: https://github.com/dariusk/corpora
*/ 

var adjectivesJson;
var randomAdjective;

function preload(){
	adjectivesJson = loadJSON("json/adj.json");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER,CENTER);
	textSize(80);

	setInterval(function (){
randomAdjective = random(adjectivesJson.adjs);

	}, 1000);

}

function draw() {
	background(255);

	var message = "You are "  + randomAdjective;
	text(message, width/2, height/2);
	
}