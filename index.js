// CharacterCard = Polymer({
// 	is: 'character-card',

// 	created: function() {
// 		this.setHeader("ox-bellows");
// 		this.getCharacter("professor-longfellow");
// 	}
// });
test = function() {
	setTimeout(function(){document.getElementById("character-picker").style.display = "none";}, 500);
	setTimeout(function(){document.getElementsByTagName("character-card")[0].style.visibility = "visible";}, 1000);
	// var el = document.getElementById("character-card");
	// el.appendChild("character-card");
}