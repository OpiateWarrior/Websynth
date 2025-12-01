import { listOfScales } from "./scales";

export function newKeyboard(userSettings) {

  const tonesSequence = listOfScales.sequence.map(tone => tone.semitone);
  //console.log(tonesSequence);

  const keyIndex = tonesSequence.indexOf(userSettings.key);
  //console.log(keyIndex);

  function copyArray(array) {
    return JSON.parse(JSON.stringify(array));
  }

  //Shift the scale according to the selected key
  let scale = copyArray(listOfScales[userSettings.scale]); //Copy of selected scale.
      
    scale.forEach((tone) => {
      tone.semitone = tonesSequence.indexOf(tone.semitone); //Change tones to numerical values
      tone.semitone += keyIndex;
      tone.octave =	userSettings.startingOctave;

      if (tone.semitone > 11)
      {
         tone.octave++;
        tone.semitone -= 12;
      }
        
      tone.semitone = tonesSequence[tone.semitone]; //Change tones to string values
    })
    //console.log(scale);
    /*
    for ( let i = 1 ; i < userSettings.rangeOfOctaves ; i++ )
      {
        let scaleToRaise= copyArray(scale);
        
        scaleToRaise.forEach((tone)=>{
          tone.octave+=i
        })
        
        scale = scale.concat(scaleToRaise);
      } */
}