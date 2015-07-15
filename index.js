response = "";

populateRadioButtons = function() {
	characterPicker = document.getElementById("picker");
	this.response.Characters.forEach(function(element, index, array) {
		option = document.createElement("paper-radio-button");
		option.setAttribute("label", element.Name);
		characterPicker.appendChild(option);
	});
}

getCharacters = function() {
	self = this;

	request = new XMLHttpRequest();
	request.open("GET", "/polymer-character-card/elements/character-card/characters.json", false);

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
	characterCardContainer = document.getElementById("characterCard");
	document.getElementById("characterPicker").style.display = "none";
	window.response.Characters.forEach(function(element, index, array) {
		if(element.Name == event.target.attributes['label'].value) {
			characterCard = document.createElement("character-card");
			characterCard.setAttribute("id", "card");
			characterCard.character = element;
			characterCardContainer.appendChild(characterCard);
		}
	});
});
