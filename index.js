response = "";

populateRadioButtons = function() {
	characterPicker = document.getElementById("picker");
	this.response.Characters.forEach(function(element, index, array) {
		option = document.createElement("paper-radio-button");
		option.innerHTML += element.Name;
		option.setAttribute("name", element.Name);
		Polymer.dom(characterPicker).appendChild(option);

	});
}

getCharacters = function() {
	self = this;

	request = new XMLHttpRequest();
	request.open("GET", "/polymer-betrayers/elements/character-card/characters.json");

	request.onreadystatechange = function() {
		if(request.readyState === request.DONE) {
			status = request.status;

			if((status >= 200 && status < 300) || status === 304 || status === 0) {
				self.response = JSON.parse(request.responseText);
				populateRadioButtons();
			}
		}
	};
	request.send();
}

document.querySelector("#picker").addEventListener("change", function(event) {
	characterCardContainer = document.getElementById("characterCard");
	document.body.removeChild(document.getElementById("characterPicker"));
	window.response.Characters.forEach(function(element, index, array) {
		if(element.Name == event.target.attributes["name"].value) {
			document.title = element.Name + " Character Card";
			characterCard = document.createElement("character-card");
			characterCard.setAttribute("id", "card");
			characterCard.character = element;
			characterCardContainer.appendChild(characterCard);
		}
	});
});
