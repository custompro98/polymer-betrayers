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

	fullscreen: function() {
		screenfull.toggle();
	},

	updateStat: function(attribute, direction) {
		switch(attribute) {
			case "might":
				switch(direction) {
					case "up":
						console.log("up");
						if(this.character.MightIndex < 8) {
							this.$.mightScore.innerHTML = this.character.Might[++this.character.MightIndex];
						}
						break;
					case "down":
						console.log("down");
						if(this.character.MightIndex > 0) {
							this.$.mightScore.innerHTML = this.character.Might[--this.character.MightIndex];
						}
						break;
				}
				this.$.mightIndex.innerHTML = this.character.MightIndex;
				if(!this.character.MightIndex) {
					alert("You've died.");
				}
				break;
			case "speed":
				switch(direction) {
					case "up":
						console.log("up");
						if(this.character.SpeedIndex < 8) {
							this.$.speedScore.innerHTML = this.character.Speed[++this.character.SpeedIndex];
						}
						break;
					case "down":
						console.log("down");
						if(this.character.SpeedIndex > 0) {
							this.$.speedScore.innerHTML = this.character.Speed[--this.character.SpeedIndex];
						}
						break;
				}
				this.$.speedIndex.innerHTML = this.character.SpeedIndex;
				if(!this.character.SpeedIndex) {
					alert("You've died.");
				}
				break;
			case "knowledge":
				switch(direction) {
					case "up":
						console.log("up");
						if(this.character.KnowledgeIndex < 8) {
							this.$.knowledgeScore.innerHTML = this.character.Knowledge[++this.character.KnowledgeIndex];
						}
						break;
					case "down":
						console.log("down");
						if(this.character.KnowledgeIndex > 0) {
							this.$.knowledgeScore.innerHTML = this.character.Knowledge[--this.character.KnowledgeIndex];
						}
						break;
				}
				this.$.knowledgeIndex.innerHTML = this.character.KnowledgeIndex;
				if(!this.character.KnowledgeIndex) {
					alert("You've died.");
				}
				break;
			case "sanity":
				switch(direction) {
					case "up":
						console.log("up");
						if(this.character.SanityIndex < 8) {
							this.$.sanityScore.innerHTML = this.character.Sanity[++this.character.SanityIndex];
						}
						break;
					case "down":
						console.log("down");
						if(this.character.SanityIndex > 0) {
							this.$.sanityScore.innerHTML = this.character.Sanity[--this.character.SanityIndex];
						}
						break;
				}
				this.$.sanityIndex.innerHTML = this.character.SanityIndex;
				if(!this.character.SanityIndex) {
					alert("You've died.");
				}
				break;
		}		
	},

	clickHandler: function(event, detail, sender) {
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

		this.$.characterName.style.backgroundColor = color;
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

		this.$.characterName.innerHTML = selection.Name;
		this.$.age.innerHTML = selection.Age;
		this.$.height.innerHTML = selection.Height;
		this.$.weight.innerHTML = selection.Weight;
		this.$.birthday.innerHTML = selection.Birthday;
		this.$.hobbies.innerHTML = selection.Hobbies;
		this.$.mightScore.innerHTML = selection.Might[selection.BaseMightIndex];
		this.$.speedScore.innerHTML = selection.Speed[selection.BaseSpeedIndex];
		this.$.knowledgeScore.innerHTML = selection.Knowledge[selection.BaseKnowledgeIndex];
		this.$.sanityScore.innerHTML = selection.Sanity[selection.BaseSanityIndex];
		this.$.mightIndex.innerHTML = selection.BaseMightIndex;
		this.$.speedIndex.innerHTML = selection.BaseSpeedIndex;
		this.$.knowledgeIndex.innerHTML = selection.BaseKnowledgeIndex;
		this.$.sanityIndex.innerHTML = selection.BaseSanityIndex;		

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

		// arrows = document.querySelectorAll("character-card::shadow .up, .down");

		// for (var i = arrows.length - 1; i >= 0; i--) {
		// 	arrows[i].addEventListener("click", this.clickHandler);
		// };
	},
});
