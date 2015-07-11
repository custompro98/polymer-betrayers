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

	getStats: function() {
		stats = {
			"array":"",
			"index":"",
			"element":""
		}

		switch(attribute) {
			case "might":
				stats.array = this.character.Might;
				stats.index = this.character.MightIndex;
				stats.element = document.querySelector("character-card::shadow #might-score").innerHTML;
				break;
			case "speed":
				stats.array = this.character.Speed;
				stats.index = this.character.SpeedIndex;
				stats.element = document.querySelector("character-card::shadow #speed-score").innerHTML;
				break;
			case "knowledge":
				stats.array = this.character.Knowledge;
				stats.element = document.querySelector("character-card::shadow #knowledge-score").innerHTML;
				stats.index = this.character.KnowledgeIndex;
				break;
			case "sanity":
				stats.array = this.character.Sanity;
				stats.index = this.character.SanityIndex;
				stats.element = document.querySelector("character-card::shadow #sanity-score").innerHTML;
				break;
		}

		// alert(this.stats.index);
		return stats;
	},

	increaseScore: function(attribute) {
		console.log("increase");
		stats = this.getStats(attribute);
		console.log(stats.index);
		if(stats.index < 8) {
			stats.element = stats.array[++stats.index];
			console.log(stats.array[stats.index]);
		}
	},

	decreaseScore: function(attribute) {
		console.log("decrease");
		stats = this.getStats(attribute);

		if(--stats.index) {
			stats.element = stats.array[stats.index];
		}
		else {
			alert("You've died.");
		}
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

	attached: function() {
		self = this;

		document.querySelector("character-card::shadow .up").addEventListener("click", function(event) {
			attribute = event.target.attributes['name'].value;
			self.increaseScore(attribute);			
		});

		document.querySelector("character-card::shadow .down").addEventListener("click", function(event) {
			attribute = event.target.attributes['name'].value;
			self.decreaseScore(attribute);			
		});

		this.getCharacter("darrin-flash-williams");
	},
});
