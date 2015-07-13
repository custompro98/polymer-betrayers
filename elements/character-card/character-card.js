fullscreen = function() {
	screenfull.toggle();
}

Polymer('character-card', {
	response: "",
	character: {
		"Might":"",
		"Speed":"",
		"Knowledge":"",
		"Sanity":"",
		"MightIndex":"",
		"SpeedIndex":"",
		"KnowledgeIndex":"",
		"SanityIndex":""
	},

	updateStat: function(attribute, direction) {
		switch(attribute) {
			case "might":
				switch(direction) {
					case "up":
						console.log("up");
						if(this.character.MightIndex < 8) {
							document.querySelector("character-card::shadow #might-score").innerHTML = this.character.Might[++this.character.MightIndex];
						}
						break;
					case "down":
						console.log("down");
						if(this.character.MightIndex > 0) {
							document.querySelector("character-card::shadow #might-score").innerHTML = this.character.Might[--this.character.MightIndex];
						}
						break;
				}
				document.querySelector("character-card::shadow #might-index").innerHTML = this.character.MightIndex;
				if(!this.character.MightIndex) {
					alert("You've died.");
				}
				break;
			case "speed":
				switch(direction) {
					case "up":
						console.log("up");
						if(this.character.SpeedIndex < 8) {
							document.querySelector("character-card::shadow #speed-score").innerHTML = this.character.Speed[++this.character.SpeedIndex];
						}
						break;
					case "down":
						console.log("down");
						if(this.character.SpeedIndex > 0) {
							document.querySelector("character-card::shadow #speed-score").innerHTML = this.character.Speed[--this.character.SpeedIndex];
						}
						break;
				}
				document.querySelector("character-card::shadow #speed-index").innerHTML = this.character.SpeedIndex;
				if(!this.character.SpeedIndex) {
					alert("You've died.");
				}
				break;
			case "knowledge":
				switch(direction) {
					case "up":
						console.log("up");
						if(this.character.KnowledgeIndex < 8) {
							document.querySelector("character-card::shadow #knowledge-score").innerHTML = this.character.Knowledge[++this.character.KnowledgeIndex];
						}
						break;
					case "down":
						console.log("down");
						if(this.character.KnowledgeIndex > 0) {
							document.querySelector("character-card::shadow #knowledge-score").innerHTML = this.character.Knowledge[--this.character.KnowledgeIndex];
						}
						break;
				}
				document.querySelector("character-card::shadow #knowledge-index").innerHTML = this.character.KnowledgeIndex;
				if(!this.character.KnowledgeIndex) {
					alert("You've died.");
				}
				break;
			case "sanity":
				switch(direction) {
					case "up":
						console.log("up");
						if(this.character.SanityIndex < 8) {
							document.querySelector("character-card::shadow #sanity-score").innerHTML = this.character.Sanity[++this.character.SanityIndex];
						}
						break;
					case "down":
						console.log("down");
						if(this.character.SanityIndex > 0) {
							document.querySelector("character-card::shadow #sanity-score").innerHTML = this.character.Sanity[--this.character.SanityIndex];
						}
						break;
				}
				document.querySelector("character-card::shadow #sanity-index").innerHTML = this.character.SanityIndex;
				if(!this.character.SanityIndex) {
					alert("You've died.");
				}
				break;
		}		
	},

	clickHandler: function(event) {
		event.stopPropogation();
		attribute = event.target.attributes['name'].value;
		direction = event.target.attributes['class'].value;
		self.updateStat(attribute, direction);
	},

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
			case "missy-dobourde":
			case "zoe-ingstrom":
				color = "#FFC107";
				break;
			case "jenny-leclerc":
			case "heather-granville":
				color = "#9C27B0";
				break;
			default:
				color = "#000000";
		}

		document.querySelector("character-card::shadow #character-name").style.backgroundColor = color;
	},

	setCardValues: function(character) {
		characters = [
				"ox-bellows",
				"father-rhinehardt",
				"vivian-lopez",
				"peter-akimoto",
				"missy-dobourde",
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
		document.querySelector("character-card::shadow #might-index").innerHTML = selection.BaseMightIndex;
		document.querySelector("character-card::shadow #speed-index").innerHTML = selection.BaseSpeedIndex;
		document.querySelector("character-card::shadow #knowledge-index").innerHTML = selection.BaseKnowledgeIndex;
		document.querySelector("character-card::shadow #sanity-index").innerHTML = selection.BaseSanityIndex;		

		this.character.Might = selection.Might;
		this.character.Speed = selection.Speed;
		this.character.Knowledge = selection.Knowledge;
		this.character.Sanity = selection.Sanity;
		this.character.MightIndex = selection.BaseMightIndex
		this.character.SpeedIndex = selection.BaseSpeedIndex
		this.character.KnowledgeIndex = selection.BaseKnowledgeIndex
		this.character.SanityIndex = selection.BaseSanityIndex
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

	domReady: function() {
		self = this;

		ups = document.querySelectorAll("character-card::shadow .up");

		for (var i = ups.length - 1; i >= 0; i--) {
			ups[i].addEventListener("click", this.clickHandler);
		};

		downs = document.querySelectorAll("character-card::shadow .down");

		for (var j = downs.length - 1; j >= 0; j--) {
			downs[j].addEventListener("click", this.clickHandler);
		};

		//this.getCharacter("darrin-flash-williams");
	},
});
