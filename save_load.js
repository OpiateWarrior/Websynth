let settings;
load()

function load(){
	settings = JSON.parse(localStorage.getItem('settings'));
	if (!settings) {
		settings = {
		selectedKey		:'C',
		selectedScale	:chromatic,
		selectedOctave	:4,
		selectedRange	:2
		}
	}
		selectedKey		= settings.selectedKey;
	selectedScale	= settings.selectedScale;	
	selectedOctave	= settings.selectedOctave;	
	selectedRange	= settings.selectedRange;
	console.log(settings)
}
function save(){
	localStorage.setItem('settings', JSON.stringify(settings));
		selectedKey		= settings.selectedKey;
	selectedScale	= settings.selectedScale;	
	selectedOctave	= settings.selectedOctave;	
	selectedRange	= settings.selectedRange;
}
	selectedKey		= settings.selectedKey;
	selectedScale	= settings.selectedScale;	
	selectedOctave	= settings.selectedOctave;	
	selectedRange	= settings.selectedRange;