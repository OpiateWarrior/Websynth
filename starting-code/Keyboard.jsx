/*
export function App() {
	[scale, setScale] = React.useState...	// state moved up to allow acces from both gui and keyboard
	
	return (
		<>
			<GuiMenu />
			<Keyboard />
		</>
	);
}

export function GuiMenu() {
	setScale(turboskala<3)					// sets a new scale when settings change
	
	return (
		<>
			<Gui1 />
			<Gui2 />
			<Gui3 />
			<Gui4 />
		</>
	);
}

export function Key({semitone, octave}) {
	
	return (									

	);
}

export function Keyboard({scale}) {
	
	return (
		<div className="keyboard-element">
		scale.map((tone, index) => {
			return (
				<button
					key={index}
					className="key-element" 					// className instead of class
					id={scale.semitone+scale.octave}			// id = C4
				>
				{semitone}										// C
				</button>
			)
		})
	)
}

*/