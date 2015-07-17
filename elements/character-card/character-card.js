Polymer({
	is: "character-card",

	properties: {
		character: Object,
		// stats: {
		// 	type: Object,
		// 	notify: true;
		// }
	},

	// stats: {
	// 	"Might":"",
	// 	"Speed":"",
	// 	"Knowledge":"",
	// 	"Sanity":"",
	// 	"MightIndex":"",
	// 	"SpeedIndex":"",
	// 	"KnowledgeIndex":"",
	// 	"SanityIndex":""
	// },

	fullscreen: function() {
		screenfull.toggle();
	},

	updateStat: function(attribute, direction) {
		switch(attribute) {
			case "might":
				switch(direction) {
					case "up":
						console.log("up");
						if(stats.MightIndex < 8) {
							this.$.mightScore.innerHTML = stats.Might[++stats.MightIndex];
						}
						break;
					case "down":
						console.log("down");
						if(stats.MightIndex > 0) {
							this.$.mightScore.innerHTML = stats.Might[--stats.MightIndex];
						}
						break;
				}
				this.$.mightIndex.innerHTML = stats.MightIndex;
				if(!stats.MightIndex) {
					alert("You've died.");
				}
				break;
			case "speed":
				switch(direction) {
					case "up":
						console.log("up");
						if(stats.SpeedIndex < 8) {
							this.$.speedScore.innerHTML = stats.Speed[++stats.SpeedIndex];
						}
						break;
					case "down":
						console.log("down");
						if(stats.SpeedIndex > 0) {
							this.$.speedScore.innerHTML = stats.Speed[--stats.SpeedIndex];
						}
						break;
				}
				this.$.speedIndex.innerHTML = stats.SpeedIndex;
				if(!stats.SpeedIndex) {
					alert("You've died.");
				}
				break;
			case "knowledge":
				switch(direction) {
					case "up":
						console.log("up");
						if(stats.KnowledgeIndex < 8) {
							this.$.knowledgeScore.innerHTML = stats.Knowledge[++stats.KnowledgeIndex];
						}
						break;
					case "down":
						console.log("down");
						if(stats.KnowledgeIndex > 0) {
							this.$.knowledgeScore.innerHTML = stats.Knowledge[--stats.KnowledgeIndex];
						}
						break;
				}
				this.$.knowledgeIndex.innerHTML = stats.KnowledgeIndex;
				if(!stats.KnowledgeIndex) {
					alert("You've died.");
				}
				break;
			case "sanity":
				switch(direction) {
					case "up":
						console.log("up");
						if(stats.SanityIndex < 8) {
							this.$.sanityScore.innerHTML = stats.Sanity[++stats.SanityIndex];
						}
						break;
					case "down":
						console.log("down");
						if(stats.SanityIndex > 0) {
							this.$.sanityScore.innerHTML = stats.Sanity[--stats.SanityIndex];
						}
						break;
				}
				this.$.sanityIndex.innerHTML = stats.SanityIndex;
				if(!stats.SanityIndex) {
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

		stats.Might = selection.Might;
		stats.Speed = selection.Speed;
		stats.Knowledge = selection.Knowledge;
		stats.Sanity = selection.Sanity;
		stats.MightIndex = selection.BaseMightIndex
		stats.SpeedIndex = selection.BaseSpeedIndex
		stats.KnowledgeIndex = selection.BaseKnowledgeIndex
		stats.SanityIndex = selection.BaseSanityIndex
	},

	attached: function() {
		self = this;

		stats = {
			"Might":"",
			"Speed":"",
			"Knowledge":"",
			"Sanity":"",
			"MightIndex":"",
			"SpeedIndex":"",
			"KnowledgeIndex":"",
			"SanityIndex":""
		};

		this.setCardValues();
	},
});
