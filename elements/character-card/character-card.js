Polymer({
	is: "character-card",

	properties: {
		character: Object,
		stats: {
			type: Object,
			notify: true
		}
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
						if(stats.MightIndex < 8) {
							stats.MightScore = stats.Might[++stats.MightIndex];
							this.set("stats.MightScore", "stats.Might[MightIndex]");
						}
						break;
					case "down":
						console.log("down");
						if(stats.MightIndex > 0) {
							stats.MightScore = stats.Might[--stats.MightIndex];
						}
						break;
				}
				if(!stats.MightIndex) {
					alert("You've died.");
				}
				break;
			case "speed":
				switch(direction) {
					case "up":
						console.log("up");
						if(stats.SpeedIndex < 8) {
							stats.SpeedScore = stats.Speed[++stats.SpeedIndex];
						}
						break;
					case "down":
						console.log("down");
						if(stats.SpeedIndex > 0) {
							stats.SpeedScore = stats.Speed[--stats.SpeedIndex];
						}
						break;
				}
				if(!stats.SpeedIndex) {
					alert("You've died.");
				}
				break;
			case "knowledge":
				switch(direction) {
					case "up":
						console.log("up");
						if(stats.KnowledgeIndex < 8) {
							stats.KnowledgeScore = stats.Knowledge[++stats.KnowledgeIndex];
						}
						break;
					case "down":
						console.log("down");
						if(stats.KnowledgeIndex > 0) {
							stats.KnowledgeScore = stats.Knowledge[--stats.KnowledgeIndex];
						}
						break;
				}
				if(!stats.KnowledgeIndex) {
					alert("You've died.");
				}
				break;
			case "sanity":
				switch(direction) {
					case "up":
						console.log("up");
						if(stats.SanityIndex < 8) {
							stats.SanityScore = stats.Sanity[++stats.SanityIndex];
						}
						break;
					case "down":
						console.log("down");
						if(stats.SanityIndex > 0) {
							stats.SanityScore = stats.Sanity[--stats.SanityIndex];
						}
						break;
				}
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

		stats.MightScore = selection.Might[selection.BaseMightIndex];
		stats.SpeedScore = selection.Speed[selection.BaseSpeedIndex];
		stats.KnowledgeScore = selection.Knowledge[selection.BaseKnowledgeIndex];
		stats.SanityScore = selection.Sanity[selection.BaseSanityIndex];	

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
			"SanityIndex":"",
			"MightScore":"",
			"SpeedScore":"",
			"KnowledgeScore":"",
			"SanityScore":""
		};

		this.setCardValues();
		this.stats = stats;
	},
});
