response = "";

populateRadioButtons = function() {
	characterPicker = document.findElementById("picker");
	this.response.Characters.forEach(function(element, index, array) {
		option = document.createElement("paper-radio-button");
		option.setAttribute("label", element.Name);
		characterPicker.appendChild(option);
	});
}

getCharacters = function() {
	self = this;

	request = new XMLHttpRequest();
	request.open("GET", "/polymer-character-card/elements/character-card/characters.json", true);

	request.onreadystatechange = function() {
		if(request.readyState === request.DONE) {
			status = request.status;

			if((status >= 200 && status < 300) || status === 304 || status === 0) {
				self.response = JSON.parse(request.responseText);
			}
		}
	};
	request.send();
	
	populateRadioButtons();
}

document.querySelector("#picker").addEventListener("change", function(event) {
	setTimeout(function(){document.getElementById("character-picker").style.display = "none";}, 500);
	// characterCard = document.querySelector("#card");
	// characterCard.getCharacter(event.target.attributes['name'].value);
	// setTimeout(function(){document.getElementsByTagName("character-card")[0].style.visibility = "visible";}, 1000);
	this.response.Characters.forEach(function(element, index, array) {
		if(element.Name == event.target.attributes['label'].value) {
			characterCard = document.createElement("character-card");
			characterCard.setAttribute("character", character);
			document.body.appendChild(characterCard);
		}
	});
});
