var title = document.getElementById("title");
var description = document.getElementById("description");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var inventoryItem = document.getElementById("inventoryItem");
var gamecontainer = document.getElementById("game-container");
var sleutel = false;
var crowbar = false;
var coin = false;

function play(){
	title.innerHTML = "Fantasy Escape";
	title.style.color = "white"
	description.innerHTML = "In dit spel moet je keuzes gaan maken. Als je de verkeerde keuze aanklikt begin je opnieuw. <br> Klik op de items voor meer info! <br>Veel succes!";
	button1.innerHTML = "Start";
	button1.setAttribute("onclick", "verhaal()");
	button1.style.display = "inline-block"
	button2.innerHTML = "Credits";
	button2.setAttribute("onclick", "credits()");
	button2.style.display = "inline-block"
	button3.style.display = "none";
	inventoryItem.style.display = "none";
	gamecontainer.style.background = 'url("img/Sky2.png")'
}

function level1(){
	title.innerHTML = "Straat";
	title.style.color = "white"
	description.innerHTML = "Je bent uit het bos gelopen en het bos is er niet meer??? <br>Je wilt vragen waar je bent. <br>Wat ga je doen?";
	description.style.color = "LightSlayGrey";
	button1.innerHTML = "Naar het cafè"
	button1.setAttribute("onclick", "cafe()")
	button2.innerHTML = "Doorlopen";
	button2.setAttribute("onclick", "level2()")
	button3.style.display = "none"
	gamecontainer.style.background = 'url("img/City4.png")'
	gamecontainer.style.backgroundSize = "cover"
}

function level2(){
	title.innerHTML = "Trash";
	title.style.color = "grey"
	description.innerHTML = "Je bent doorgelopen. Je hebt nogsteeds niemand gezien. <br>Je ziet nu alleen maar vuilnis en boxen";
	description.style.color = "white"
	button1.innerHTML = "< Terug"
	button1.setAttribute("onclick", "level1()")
	button2.innerHTML = "Vuilnis bekijken"
	button2.setAttribute("onclick", "trash()")
	button3.innerHTML = "Boxen bekijken"
	button3.setAttribute("onclick", "getSleutel()")
	button3.style.display = "inline-block"
	gamecontainer.style.background = 'url("img/City1.png")'
	gamecontainer.style.backgroundSize = "cover"
}

function verhaal(){
	description.innerHTML = "Je liep door het bos heen omdat je dat leuk vind. <br>Je mocht nooit te ver het bos in van je ouders, ze willen niet dat je begint te verdwalen. <br>Toch was je nieuwsgierig en liep toch door..."
	button1.innerHTML = "Level 1"
	button1.setAttribute("onclick", "level1()")
	gamecontainer.style.background = 'url("img/Sky.png")'
}

function credits(){
	title.innerHTML = "CREDITS";
	description.innerHTML = "Dit spel is gemaakt door: Kenny Nathalia. <br>Het verhaal ook. <br>Alles eigenlijk";
	button1.innerHTML = "< Terug";
	button1.setAttribute("onclick", "play()");
	button2.style.display = "none";
	gamecontainer.style.background = 'url("img/credits.png")'
	gamecontainer.style.backgroundSize = "cover"
}

function cafe(){
	if (sleutel == false){
		description.innerHTML = "Je hebt een sleutel hiervoor nodig!"
	} else {
		inCafe();
	}
}

function inCafe(){
	title.innerHTML = "Cafè"
	title.style.color = "lightblue"
	description.innerHTML = "Hier zie je ook al niemand, maar toch heb je het gevoel dat er mensen zijn geweest. <br>(Je hebt ook een checkpoint!)"
	button1.innerHTML = "Maak koffie voor jezelf"
	button1.setAttribute("onclick", "koffie()")
	button2.innerHTML = "Ga naar achter"
	button2.setAttribute("onclick", "behind()")
	button3.innerHTML = "Bekijk de bar"
	button3.setAttribute("onclick", "bar()")
	button3.style.display = "inline-block"
	gamecontainer.style.background = 'url("img/inCafe.png")'
	gamecontainer.style.backgroundSize = "cover"
	inventoryItem.style.display = "none"
}

function behind(){
	description.innerHTML = "Je ziet een deur... <br>Wil je naar binnen gaan?"
	button1.innerHTML = "< Terug"
	button1.setAttribute("onclick", "inCafe()")
	button2.innerHTML = "Naar binnen gaan"
	button2.setAttribute("onclick", "door()")
	button3.style.display = "none"
}

function door(){
	if (crowbar == false){
		description.innerHTML = "De deur gaat niet open. <br>Moet je weer een sleutel zoeken?"
		button1.setAttribute("onclick", "inCafe()")
	} else {
		city();
	}
}


function bar(){
	crowbar = true;
	description.innerHTML = "Er is niet veel, maar je hebt wel een crowbar gevonden!"
	inventoryItem.style.display = "inline-block"
	inventoryItem.setAttribute("src", "img/crowbar.png")
	inventoryItem.setAttribute("onclick", "crowbarInfo()")
}

function koffie(){
	description.innerHTML = "Je hebt heel de dag niet gedronken dus je maaktte koffie voor jezelf. <br>Je dronk het gelijk op en nu voel je je niet lekker..."
	button1.innerHTML = "..."
	button1.setAttribute("onclick", "death()")
	button2.style.display = "none"
	button3.style.display = "none"
}

function trash(){
	description.innerHTML = "2 zwervers vallen je aan!!!"
	description.style.color = "black"
	button1.innerHTML = "Wat nu???"
	button1.setAttribute("onclick", "death3()")
	button2.style.display = "none"
	button3.style.display = "none"
	gamecontainer.style.background = 'url("img/hobo.png")'
}


function getSleutel(){
	sleutel = true;
	description.innerHTML = "Je hebt een sleutel gevonden!!!"
	inventoryItem.style.display = "inline-block"
	inventoryItem.setAttribute("src", "img/key.png")
	inventoryItem.setAttribute("onclick", "sleutelInfo()")
	button1.setAttribute("onclick", "level1()")
}

function sleutelInfo(){
	description.innerHTML = "Een sleutel... <br>Maar voor wat?"
}

function crowbarInfo(){
	description.innerHTML = "Een crowbar... <br>Je kan het gebruiken als wapen of om dingen te openen."
}

function city(){
	title.innerHTML = "Nachtleven"
	title.style.color = "lightblue"
	description.innerHTML = "Je bent opeens in de stad. <br>Alsnog is er niemand. <br>Het is ook opeens donker?"
	description.style.color = "black"
	button1.setAttribute("onclick", "back()")
	button2.innerHTML = "Schreeuwen"
	button2.setAttribute("onclick", "scream()")
	button3.innerHTML = "Naar het ballet gebouw"
	button3.setAttribute("onclick", "ballet()")
	button3.style.display = "inline-block"
	gamecontainer.style.background = 'url("img/City3.png")'
	gamecontainer.style.backgroundSize = "cover"
	inventoryItem.style.display = "none"
}

function back(){
	description.innerHTML = "De deur zit opslot en je crowbar heb je binnen gelaten..."
}

function scream(){
	description.innerHTML = "Je schreeuwde om te kijken of iemand zou reageren."
	button1.innerHTML = "Verder >"
	button1.setAttribute("onclick", "scream2()")
	button2.style.display = "none"
	button3.style.display = "none"
}

function scream2(){
	description.innerHTML = "Je voelt je duizelig en moe... <br>Je valt langzaam flauw"
	button1.innerHTML = "Verder >"
	button1.setAttribute("onclick", "scream3()")
	gamecontainer.style.background = 'url("img/City3_pale.png")'
	gamecontainer.style.backgroundSize = "cover"
}

function scream3(){
	title.innerHTML = ""
	description.innerHTML = "..."
	description.style.color = "white"
	button1.setAttribute("onclick", "woke()")
	gamecontainer.style.background = "url('img/blackscreen.jpeg')"
}

function woke(){
	title.innerHTML = "Vreemd opstaan"
	title.style.color = "lightblue"
	description.innerHTML = "Je word langzaam wakker..."
	button1.innerHTML = "Wakker worden"
	button1.setAttribute("onclick", "awake()")
	button2.innerHTML = "Blijf door slapen"
	button2.style.display = "inline-block"
	button2.setAttribute("onclick", "sleep()")
	gamecontainer.style.background = 'url("img/City2_pale.png")'
	gamecontainer.style.backgroundSize = "cover"
}

function awake(){
	description.innerHTML = "Je bent weer buiten... <br>Maar op een andere plek... <br>Wat nu?"
	title.style.color = "lightblue"
	button1.innerHTML = "De bar in"
	button1.setAttribute("onclick", "bar2()")
	button1.style.display = "inline-block"
	button2.innerHTML = "De telefoon booth in"
	button2.setAttribute("onclick", "booth()")
	button2.style.display = "inline-block"
	button3.innerHTML = "Doorlopen >"
	button3.setAttribute("onclick", "urban()")
	button3.style.display = "inline-block"
	gamecontainer.style.background = 'url("img/City2.png")'
	gamecontainer.style.backgroundSize = "cover"
}

function awake2(){
	description.innerHTML = "Je bent weer buiten... <br>Maar op een andere plek... <br>Wat nu?"
	title.style.color = "lightblue"
	button1.innerHTML = "De bar in"
	button1.setAttribute("onclick", "bar3()")
	button2.innerHTML = "De telefoon booth in"
	button2.setAttribute("onclick", "booth()")
	button3.innerHTML = "Doorlopen >"
	button3.setAttribute("onclick", "urban()")
	button3.style.display = "inline-block"
	gamecontainer.style.background = 'url("img/City2.png")'
	gamecontainer.style.backgroundSize = "cover"
}

function urban(){
	title.innerHTML = "Urban straat"
	title.setAttribute("onclick", "play()")
	title.style.color = "white"
	description.innerHTML = "Alle winkels zijn hier dicht. <br>Het heeft ook geen zin om door te lopen. <br>Misschien zijn er easter eggs? (De titel)"
	button1.innerHTML = "< Terug"
	button1.setAttribute("onclick", "awake()")
	button2.style.display = "none"
	button3.style.display = "none"
	gamecontainer.style.background = 'url("img/urban.gif")'
	gamecontainer.style.backgroundSize = "cover"
}

function bar2(){
	title.innerHTML = "Bar"
	title.style.color = "lightblue"
	description.innerHTML = "Dit is veel groter dan dat ene cafè dacht je bij jezelf."
	button1.innerHTML = "Zoek naar geld"
	button1.setAttribute("onclick", "getCoin()")
	button2.innerHTML = "↓Terug↓"
	button2.setAttribute("onclick", "awake()")
	button3.innerHTML = "Drink wat!"
	button3.setAttribute("onclick", "sike()")
	button3.style.display = 'inline-block'
	gamecontainer.style.background = 'url("img/bar.jpg")'
	gamecontainer.style.backgroundSize = "cover"
}

function bar3(){
	description.innerHTML = "De poorten kunnen opeens niet meer open... <br>Het is ook super donker als je naar binnen kijkt."
}


function getCoin(){
	coin = true;
	description.innerHTML = "Voor zo'n grote bar zit er weinig geld in de kassa... <br>Er zat namelijk 1 munt in... <br>Je deed hem maar in je zak."
	inventoryItem.style.display = "inline-block"
	inventoryItem.setAttribute("src", "img/coin.png")
	inventoryItem.setAttribute("onclick", "coinInfo()")
	button1.setAttribute("onclick", "noCoin()")
	button2.setAttribute("onclick", "awake2()")
}

function noCoin(){
	description.innerHTML = "Je keek nog even goed maar er zit echt niks meer in"
}

function coinInfo(){
	description.innerHTML = "Een munt... <br>Je kan er niet veel mee aangezien er niemand is... <br>Toch heb je het gevoel dat je hem wilt houden."
}

function sike(){
	description.innerHTML = "Je hebt een drankje voor jezelf gemaakt en gelijk gedronken... <br>Er was niks mis mee!"
	button1.innerHTML = "Zoek naar geld"
	button1.setAttribute("onclick", "sike2()")
	button2.innerHTML = "↓Terug↓"
	button2.setAttribute("onclick", "sike2()")
	button3.style.display = "none"
}
function sike2(){
	description.innerHTML = "Oh nee... <br>Het drankje wat je net dronk begint effect te hebben... <br>Je voelt je echt niet goed..."
	button1.innerHTML = "Wat nu?"
	button1.setAttribute("onclick", "death4()")
	button2.style.display = "none"
}

function sleep(){
	description.innerHTML = "Slapen doe je maar een andere keer. <br>Je speelt nu een game!"
	button1.innerHTML = "Wat nu?"
	button1.setAttribute("onclick", "death()")
	button2.style.display = "none"
}


function ballet(){
	title.innerHTML = "GAME OVER"
	title.style.color = "white"
	description.innerHTML = "Je hebt eindelijk iemand gevonden... <br>Maar hij zegt dat je niet weg mag. <br>"
	description.style.color = "white"
	button1.innerHTML = "Blijf"
	button1.setAttribute("onclick", "death2()")
	button2.innerHTML = "Ga weg"
	button2.setAttribute("onclick", "play()")
	button3.style.display = "none"
	gamecontainer.style.background = 'url("img/disco.gif")'
	gamecontainer.style.backgroundSize = "1100px"

}

function booth(){
	description.innerHTML = "Je kan gratis bellen hier. <br>Je kan er ook geld in stoppen maar dat heeft weinig nut. <br>Maak je keuze!"
	button1.innerHTML = "Bel met geld erin"
	button1.setAttribute("onclick", "paidCallIf()")
	button2.innerHTML = "Maak een gratis call"
	button2.setAttribute("onclick", "freeCall()")
	button3.innerHTML = "↓Terug↓"
	button3.setAttribute("onclick", "awake()")

}

function paidCallIf(){
	if (coin == false){
		description.innerHTML = "Natuurlijk heb je hiervoor wel geld nodig!"
	} else {
		forest();
	}
}

function forest(){
	title.innerHTML = "Het bos"
	description.innerHTML = "De telefoon booth telepoorteerde je terug het bos in! <br>Je hoort het bos tegen je praten... <br>Vond je het een leuk avontuur???"
	button1.innerHTML = "Ja!"
	button1.setAttribute("onclick", "end()")
	button2.innerHTML = "Nee!"
	button2.setAttribute("onclick", "end2()")
	button3.style.display = "none"
	gamecontainer.style.background = 'url("img/forest.png")'
	gamecontainer.style.backgroundSize = "cover"
	inventoryItem.style.display = "none"
}

function end(){
	description.innerHTML = "Je bent veilig terug gekomen! <br>Je hebt de andere wereld geheim gehouden omdat je bang was dat niemand je geloofde!"
	title.style.color = "white"
	button1.innerHTML = "Restart?"
	button1.setAttribute("onclick", "play()")
	button2.innerHTML = "Credits?"
	button2.setAttribute("onclick", "credits2()")
	button2.style.display = "inline-block"
	button3.style.display = "none"
	gamecontainer.style.background = 'url("img/farm.png")'
	gamecontainer.style.backgroundSize = "cover"
}

function end2(){
	description.innerHTML = "Verkeerde keuze! <br>Het bos heeft je vervloekt en nu ben je voor altijd in het bos!"
	title.style.color = "white"
	button1.innerHTML = "Restart?"
	button1.setAttribute("onclick", "play()")
	button2.innerHTML = "Credits?"
	button2.setAttribute("onclick", "credits3()")
	button2.style.display = "inline-block"
	button3.style.display = "none"
	gamecontainer.style.background = 'url("img/battleground3.png")'
	gamecontainer.style.backgroundSize = "cover"
}

function credits2(){
	title.innerHTML = "CREDITS";
	title.style.color = "white"
	description.innerHTML = "Dit spel is gemaakt door: Kenny Nathalia. <br>Het verhaal ook. <br>Alles eigenlijk";
	button1.innerHTML = "< Terug";
	button1.setAttribute("onclick", "end()");
	button2.style.display = "none";
	gamecontainer.style.background = 'url("img/credits.png")'
	gamecontainer.style.backgroundSize = "cover"
}

function credits3(){
	title.innerHTML = "CREDITS";
	title.style.color = "white"
	description.innerHTML = "Dit spel is gemaakt door: Kenny Nathalia. <br>Het verhaal ook. <br>Alles eigenlijk";
	button1.innerHTML = "< Terug";
	button1.setAttribute("onclick", "end2()");
	button2.style.display = "none";
	gamecontainer.style.background = 'url("img/credits.png")'
	gamecontainer.style.backgroundSize = "cover"
}

function paidCall(){
 	description.innerHTML = "test"
}

function freeCall(){
	description.innerHTML = "Wat ik vergat te zeggen was dat als je een gratis call maaktte, de telefoon je in een random loop zet. <br>Nu ben je een vallende astronaut voor altijd..."
	button1.innerHTML = "Continue???"
	button1.setAttribute("onclick", "bar2()")
	button2.innerHTML = "Restart???"
	button2.style.display = "inline-block"
	button3.style.display = "none"
	gamecontainer.style.background = "url('img/death5.gif')"
	gamecontainer.style.backgroundSize = "cover"
	inventoryItem.style.display = "none"
}

function death4(){
	title.innerHTML = "GAME OVER"
	title.style.color = "white"
	description.innerHTML = "Klik op Continue om bij hetzelfde level te beginnen! <br>Klik op restart om opnieuw te beginnen!"
	description.style.color = "white"
	gamecontainer.style.background = 'url("img/gameover.jpg")'
	gamecontainer.style.backgroundSize = "contain" 
	button1.innerHTML = "Continue???"
	button1.setAttribute("onclick", "bar2()")
	button2.innerHTML = "Restart???"
	button2.style.display = "inline-block"
	button2.setAttribute("onclick", "play()")
	inventoryItem.style.display = "none"
}

function death3(){
	title.innerHTML = "Sorry!"
	description.innerHTML = "Het is vallen en opstaan!"
	description.style.color = "white"
	gamecontainer.style.background = 'url("img/gameover.jpg")'
	gamecontainer.style.backgroundSize = "contain" 
	button1.style.display = "none"
	button2.innerHTML = "Restart???"
	button2.style.display = "inline-block"
	button2.setAttribute("onclick", "play()")
	inventoryItem.style.display = "none"	
}

function death2(){
	title.style.display = "none"
	description.style.display = "none"
	button1.style.display = "none"
	button2.style.display = "none"
	button3.style.display = "none"
	gamecontainer.style.background = 'url("img/disco.gif")'
	gamecontainer.style.backgroundSize = "1100px"
}

function death(){
	title.innerHTML = ""
	description.innerHTML = "Klik op Continue om bij hetzelfde level te beginnen! <br>Klik op restart om opnieuw te beginnen!"
	description.style.color = "white"
	gamecontainer.style.background = 'url("img/gameover.jpg")'
	gamecontainer.style.backgroundSize = "contain" 
	button1.innerHTML = "Continue???"
	button1.setAttribute("onclick", "inCafe()")
	button2.innerHTML = "Restart???"
	button2.style.display = "inline-block"
	button2.setAttribute("onclick", "play()")
	inventoryItem.style.display = "none"	
}

play();
