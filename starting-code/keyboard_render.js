const tonesSequence 	= sequence.map(object => object.semitone)
let keyboard 		= "";

function findKeyIndex() {
	return keyIndex 	= tonesSequence.indexOf(selectedKey);
	console.log(keyIndex);
}

function copyArray(array) {
	return JSON.parse(JSON.stringify(array));
}

renderKeyboard()

function renderKeyboard(){	
	
	const scale 		= multiplyScale();
	keyboard = "";

	scale.forEach((tone) => {
		const buttonToAdd = 
			`<button 
				class="keyboardButton" 
				id="${tone.semitone+tone.octave}
			">
				${tone.semitone}
			</button>`
	
		keyboard += buttonToAdd;
	})
	
	document.querySelector(".keyboard").innerHTML = keyboard;
	playOnClick();

}

function multiplyScale(){

	let scale			= copyArray(shiftScale());
	
	for ( let i = 1 ; i < selectedRange ; i++ ){
		
		let scaleToRaise= copyArray(shiftScale());
		
		scaleToRaise.forEach((tone)=>{
			tone.octave+=i
		})
		
		scale = scale.concat(scaleToRaise);
	}
	return scale;
}

function shiftScale(){

	let scale		  	= 		copyArray(selectedScale); 			 //Copy of selected scale.
	const keyIndex 		= 		findKeyIndex();
	
	scale.forEach((tone) => {
		
		tone.semitone 	= 		tonesSequence.indexOf(tone.semitone);//Change tones to numerical values
		tone.semitone  += 		keyIndex;
		tone.octave 	=		selectedOctave;
		
		if (tone.semitone > 11)
		{
			tone.octave++;
			tone.semitone -= 12;
		}
		
		tone.semitone 	= 		tonesSequence[tone.semitone];		//Change tones to string values
	});
	return scale;
}

