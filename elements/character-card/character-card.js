Polymer('character-card', {
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

	getCharacter: function(character) {
		var characters = [
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

		request = new XMLHttpRequest();
		request.open("GET", "characters.json");
		request.send();
		// alert(request.status);
		// alert(request.readyState);
		request.onload = function() {
			if(request.status >= 200 && request.status < 400) {
				data = JSON.parse(request.responseText);
			} else {
				console.log("Failed.");
			}
		};

		request.onerror = function() {
			console.log("Failed.");
		};

		selection = data.Characters[characters.indexOf(character)]
		document.querySelector("character-card::shadow #character-name").innerHTML = selection.Name;
		document.querySelector("character-card::shadow #might-score").innerHTML = selection.Might[BaseMightIndex];
		document.querySelector("character-card::shadow #speed-score").innerHTML = selection.Speed[BaseSpeedIndex];
		document.querySelector("character-card::shadow #knowledge-score").innerHTML = selection.Knowledge[BaseKnowledgeIndex];
		document.querySelector("character-card::shadow #sanity-score").innerHTML = selection.Sanity[BaseSanityIndex];
	},

	attached: function() {
		this.setHeader("vivian-lopez");
		this.getCharacter("professor-longfellow");
	},
});