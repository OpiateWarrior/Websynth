const keyDropdown 	 = 	document.getElementById	("js-key-select");
const scaleDropdown  = 	document.getElementById	("js-scale-select");
const octaveDropdown = 	document.getElementById	("js-octave-select");
const rangeDropdown	 = 	document.getElementById	("js-range-select");
const gainBar 		 =	document.getElementById ("js-gain-select");


keyDropdown.addEventListener('change',		() => {
	settings.selectedKey = keyDropdown.value;
	save();
	renderKeyboard();
});

scaleDropdown.addEventListener('change',	() => {
	settings.selectedScale = scaleList[scaleDropdown.value];
	save();
	renderKeyboard();
})

octaveDropdown.addEventListener('change',	() => {
	settings.selectedOctave 	 = 	Number(octaveDropdown.value);
	save();
	renderKeyboard();
});

rangeDropdown.addEventListener('change',	() => {
	settings.selectedRange 	 = 	Number(rangeDropdown.value);
	save();	
	renderKeyboard();
});

gainBar.addEventListener('change',			() => {
	guiGain()
});
