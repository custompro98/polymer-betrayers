Polymer({
	is: "character-card",

	properties: {
		character: Object,
		stats: Object
	},

/*	stats: {
		"Might":"",
		"Speed":"",
		"Knowledge":"",
		"Sanity":"",
		"MightIndex":"",
		"SpeedIndex":"",
		"KnowledgeIndex":"",
		"SanityIndex":""
	},*/

	fullscreen: function() {
		screenfull.toggle();
	},

	updateStat: function(attribute, direction) {
		switch(attribute) {
			case "might":
				switch(direction) {
					case "up":
						console.log("up");
						if(this.stats.MightIndex < 8) {
							this.$.mightScore.innerHTML = this.stats.Might[++this.stats.MightIndex];
						}
						break;
					case "down":
						console.log("down");
						if(this.stats.MightIndex > 0) {
							this.$.mightScore.innerHTML = this.stats.Might[--this.stats.MightIndex];
						}
						break;
				}
				this.$.mightIndex.innerHTML = this.stats.MightIndex;
				if(!this.stats.MightIndex) {
					alert("You've died.");
				}
				break;
			case "speed":
				switch(direction) {
					case "up":
						console.log("up");
						if(this.stats.SpeedIndex < 8) {
							this.$.speedScore.innerHTML = this.stats.Speed[++this.stats.SpeedIndex];
						}
						break;
					case "down":
						console.log("down");
						if(this.stats.SpeedIndex > 0) {
							this.$.speedScore.innerHTML = this.stats.Speed[--this.stats.SpeedIndex];
						}
						break;
				}
				this.$.speedIndex.innerHTML = this.stats.SpeedIndex;
				if(!this.stats.SpeedIndex) {
					alert("You've died.");
				}
				break;
			case "knowledge":
				switch(direction) {
					case "up":
						console.log("up");
						if(this.stats.KnowledgeIndex < 8) {
							this.$.knowledgeScore.innerHTML = this.stats.Knowledge[++this.stats.KnowledgeIndex];
						}
						break;
					case "down":
						console.log("down");
						if(this.stats.KnowledgeIndex > 0) {
							this.$.knowledgeScore.innerHTML = this.stats.Knowledge[--this.stats.KnowledgeIndex];
						}
						break;
				}
				this.$.knowledgeIndex.innerHTML = this.stats.KnowledgeIndex;
				if(!this.stats.KnowledgeIndex) {
					alert("You've died.");
				}
				break;
			case "sanity":
				switch(direction) {
					case "up":
						console.log("up");
						if(this.stats.SanityIndex < 8) {
							this.$.sanityScore.innerHTML = this.stats.Sanity[++this.stats.SanityIndex];
						}
						break;
					case "down":
						console.log("down");
						if(this.stats.SanityIndex > 0) {
							this.$.sanityScore.innerHTML = this.stats.Sanity[--this.stats.SanityIndex];
						}
						break;
				}
				this.$.sanityIndex.innerHTML = this.stats.SanityIndex;
				if(!this.stats.SanityIndex) {
					alert("You've died.");
				}
				break;
		}		
	},

	clickHandler: function(event, detail) {
		attribute = event.target.attributes['name'].value;
		direction = event.target.attributes['direction'].value;
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

		this.$.mightScore.innerHTML = selection.Might[selection.BaseMightIndex];
		this.$.speedScore.innerHTML = selection.Speed[selection.BaseSpeedIndex];
		this.$.knowledgeScore.innerHTML = selection.Knowledge[selection.BaseKnowledgeIndex];
		this.$.sanityScore.innerHTML = selection.Sanity[selection.BaseSanityIndex];
		// this.$.mightIndex.innerHTML = selection.BaseMightIndex;
		// this.$.speedIndex.innerHTML = selection.BaseSpeedIndex;
		// this.$.knowledgeIndex.innerHTML = selection.BaseKnowledgeIndex;
		// this.$.sanityIndex.innerHTML = selection.BaseSanityIndex;		

		this.stats.Might = selection.Might;
		this.stats.Speed = selection.Speed;
		this.stats.Knowledge = selection.Knowledge;
		this.stats.Sanity = selection.Sanity;
		this.stats.MightIndex = selection.BaseMightIndex
		this.stats.SpeedIndex = selection.BaseSpeedIndex
		this.stats.KnowledgeIndex = selection.BaseKnowledgeIndex
		this.stats.SanityIndex = selection.BaseSanityIndex
	},

	attached: function() {
		self = this;
		this.setCardValues();
	},
});
