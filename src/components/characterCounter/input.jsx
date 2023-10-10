import React, { useState } from 'react';

function CharacterCounter() {


  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');

  const findMaxConsecutiveChars = () => {
  
  
    if (inputText === '') {
      setResult("Please enter some text.");
      return;
    }

    let maxCount = 0;
    let maxChars = [];

    let currentChar = inputText[0];
    let currentCount = 1;

    for (let i = 1; i < inputText.length; i++) {

      if (inputText[i] === currentChar) {
        currentCount++;
      }

      else {

        if (currentCount > maxCount) {
          maxCount = currentCount;
          maxChars = [currentChar];
        }

        else if (currentCount === maxCount) {
          maxChars.push(currentChar);
        }

        currentChar = inputText[i];
        currentCount = 1;

      }
    }

    if (currentCount > maxCount) {
      maxCount = currentCount
      maxChars = [currentChar]
    } else if (currentCount === maxCount) {
      maxChars.push(currentChar);
    }

    setResult(`${maxChars.join(', ')}: ${maxCount}`);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        placeholder="Enter text here"
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={findMaxConsecutiveChars}>Find Max Counts</button>
      <p>{result}</p>
    </div>
  );
}

export default CharacterCounter;
