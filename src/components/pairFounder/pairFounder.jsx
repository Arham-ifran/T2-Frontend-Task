import React, { useState } from 'react';

function PairFinder() {
    const [numbers, setNumbers] = useState([]); 
    const [target, setTarget] = useState(0);     
    const [result, setResult] = useState([]);

    const handleNumberChange = (event) => {
        const inputArray = event.target.value.split(',').map((num) => parseInt(num, 10));
        setNumbers(inputArray);
    };

    const handleTargetChange = (event) => {
        setTarget(parseInt(event.target.value, 10));
    };

    const findPairs = () => {
        const pairSet = new Set();
        const seenPairs = new Set();
    
        for (let i = 0; i < numbers.length; i++) {
          for (let j = i + 1; j < numbers.length; j++) {

            if (numbers[i] + numbers[j] === target) {

                
              const pair = [numbers[i], numbers[j]].sort();
              const pairStr = pair.toString();
              
              if (!pairSet.has(pairStr)) {
                pairSet.add(pair);
                seenPairs.add(pairStr);
              }
            }
          }
        }
    
        setResult(Array.from(pairSet));
      };

    return (
        <div>
            <h1>Pair Finder</h1>
            <div>
                <label>Numbers(comma-separated):</label>
                <input type="text" onChange={handleNumberChange} />
            </div>
            <div>
                <label>Target value:</label>
                <input type="number" onChange={handleTargetChange} />
            </div>
            <button onClick={findPairs}>Find Pairs</button>
            <div>
                <h2>Pairs:</h2>
                {result.length > 0 ? (
                    <ul>
                        {result.map((pair, index) => (
                            <li key={index}>{`[${pair[0]}, ${pair[1]}]`}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No pairs.</p>
                )}
            </div>
        </div>
    );
}

export default PairFinder;
