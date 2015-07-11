Polymer('character-card', {
	response: "",

	setHeader: function(character) {
		switch(character) {
			case "ox-bellows":
			case "darrin-flash-williams":
				color = "#F44336";
				break;
			case "father-rhinehardt":
			case "professor-longfellow":
				color = "#9E9E9E";
				break;
			case "vivian-lopez":
			case "madame-zostra":
				color = "#3F51B5";
				break;
			case "peter-akimoto":
			case "brandon-jaspers":
				color = "#8BC34A";
				break;
			case "missy-ddobourde":
			case "zoe-ingstrom":
				color = "#FFC107";
				break;
			case "jenny-leclerc":
			case "heather-granville":
				color = "#9C27B0";
				break;
		}

		document.querySelector("character-card::shadow #character-name").style.backgroundColor = color;
	},

	setCardValues: function(character) {
		characters = [
				"ox-bellows",
				"father-rhinehardt",
				"vivian-lopez",
				"peter-akimoto",
				"missy-ddobourde",
				"jenny-leclerc",
				"darrin-flash-williams",
				"professor-longfellow",
				"madame-zostra",
				"brandon-jaspers",
				"zoe-ingstrom",
				"heather-granville"
		]

		selection = this.response.Characters[characters.indexOf(character)];
		document.querySelector("character-card::shadow #character-name").innerHTML = selection.Name;
		document.querySelector("character-card::shadow #age").innerHTML = selection.Age;
		document.querySelector("character-card::shadow #height").innerHTML = selection.Height;
		document.querySelector("character-card::shadow #weight").innerHTML = selection.Weight;
		document.querySelector("character-card::shadow #birthday").innerHTML = selection.Birthday;
		document.querySelector("character-card::shadow #hobbies").innerHTML = selection.Hobbies;
		document.querySelector("character-card::shadow #might-score").innerHTML = selection.Might[selection.BaseMightIndex];
		document.querySelector("character-card::shadow #speed-score").innerHTML = selection.Speed[selection.BaseSpeedIndex];
		document.querySelector("character-card::shadow #knowledge-score").innerHTML = selection.Knowledge[selection.BaseKnowledgeIndex];
		document.querySelector("character-card::shadow #sanity-score").innerHTML = selection.Sanity[selection.BaseSanityIndex];
	},

	getCharacter: function(character) {
		self = this;

		this.setHeader(character);

		request = new XMLHttpRequest();
		request.open("GET", "/polymer-character-card/elements/character-card/characters.json", true);

		response = "";
		request.onreadystatechange = function() {
			if(request.readyState === request.DONE) {
				status = request.status;

				if((status >= 200 && status < 300) || status === 304 || status === 0) {
					self.response = JSON.parse(request.responseText);
					self.setCardValues(character);
				}
			}
		};
		request.send();
	},

	attached: function() {
		this.getCharacter("darrin-flash-williams");
	},
});