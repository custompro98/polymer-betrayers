document.querySelector("#picker").addEventListener("change", function(event) {
	setTimeout(function(){document.getElementById("character-picker").style.display = "none";}, 500);
	characterCard = document.querySelector("#card");
	characterCard.getCharacter(event.target.attributes['name'].value);
	setTimeout(function(){document.getElementsByTagName("character-card")[0].style.visibility = "visible";}, 1000);
});