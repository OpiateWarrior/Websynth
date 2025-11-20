const synth = new Tone.Synth({
	oscillator: {
		type: "sawtooth",
	},
}).toDestination();
	
function playOnClick() {

	const keyboardButtons = document.querySelectorAll('.keyboardButton');
	const keyboard = document.querySelector('.keyboard');
	
	let mousedown = false;
	
	keyboardButtons.forEach((button) => {
		button.addEventListener('mouseover', () => {
			button.classList.add('mouseover');
			activateButton(button, mousedown);
		});
		button.addEventListener('mouseout', () => {
			button.classList.remove('mouseover');
			activateButton(button, mousedown);
		});
		keyboard.addEventListener('mousedown', () => {
			mousedown = true
			activateButton(button, mousedown);
		});
			keyboard.addEventListener('mouseup', () => {
			mousedown = false
			activateButton(button, mousedown);
		});
		
	});
};
function activateButton(button, mousedown){

	if (mousedown && button.classList.contains('mouseover'))
	{
		button.classList.add('keyboardButtonActivated');
		
		synth.triggerAttackRelease(`${button.id}`, "4n");
		console.log(synth.oscillator.type);
	}
	else {
		button.classList.remove('keyboardButtonActivated')
	}
}
function guiGain(){
	const gain = document.getElementById('js-gain-select');
	console.log(gain.value);
}
