import { listOfScales } from "./scales";

const sequence = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

function deepCloneArray(array) {
  return array.map(item => ({ ...item }));
}

function shiftTone(tone, keyIndex, sequence, octave) {
  let semitoneIndex = sequence.indexOf(tone.semitone); // Convert to numerical value
  semitoneIndex += keyIndex;
  
  if (semitoneIndex > 11) {
    octave++;
    semitoneIndex -= 12;
  }

  const semitone = sequence[semitoneIndex];  // Convert back to note name

  return {
    ...tone,
    semitone: semitone,
    octave
  };
}

export function newKeyboard(userSettings) {
  const { key, scale, octave, range } = userSettings;
  const keyIndex = sequence.indexOf(key);

  let pianoKeys = deepCloneArray(listOfScales[scale] || []);
  pianoKeys = pianoKeys.map(tone => shiftTone(tone, keyIndex, sequence, octave));

  for (let i = 1; i < range; i++) {
    const higherOctaveTones = pianoKeys.map(tone => ({ ...tone, octave: tone.octave + i }));
    pianoKeys = [...pianoKeys, ...higherOctaveTones];
  }

  return pianoKeys;
}
