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

	setHeader: function(color) {
		pattern = /^\#([a-f]|[0-9]){6}$$/i;
		if(!pattern.test(color)) {
			color = "#000000";
		}

		this.$.characterName.style.backgroundColor = color;
	},

	setCardValues: function() {
		selection = this.character;
		this.setHeader(selection.Color);

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

	attached: function() {
		self = this;

		this.setCardValues();
	},
});
