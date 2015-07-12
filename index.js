/*getCharacterCard = function() {
	setTimeout(function(){document.getElementById("character-picker").style.display = "none";}, 500);
	characterCard = document.querySelector("#card");
	characterCard.getCharacter(document.querySelector("#picker").selected);
	setTimeout(function(){document.getElementsByTagName("character-card")[0].style.visibility = "visible";}, 1000);
}

changeHandler = function(Event e) {
	getCharacterCard = function() {
		setTimeout(function(){document.getElementById("character-picker").style.display = "none";}, 500);
		characterCard = document.querySelector("#card");
		characterCard.getCharacter(e.target.attributes['name']);
		setTimeout(function(){document.getElementsByTagName("character-card")[0].style.visibility = "visible";}, 1000);
	}	
}*/

document.querySelector("#picker").addEventListener("change", function(event) {
	setTimeout(function(){document.getElementById("character-picker").style.display = "none";}, 500);
	characterCard = document.querySelector("#card");
	characterCard.getCharacter(event.target.attributes['name'].value);
	setTimeout(function(){document.getElementsByTagName("character-card")[0].style.visibility = "visible";}, 1000);
});