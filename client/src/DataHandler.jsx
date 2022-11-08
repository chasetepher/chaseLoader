import React from "react";
import ResultComponent from './ResultComponent.jsx'
import { useState } from 'react'

export default function DataHandler() {

    let result;

    const [targetWeight, setTargetWeight] = useState(0)
    const [barWeight, setBarWeight] = useState(0)
    const [tensPlates, setTensPlates] = useState([])

    let answer = [];

    const submitInfo = () => {
        let array = [10, 10, 20, 20, 5, 5];
        let bar = barWeight;
        let combinedTotal = targetWeight;
        let target = targetWeight - barWeight;
        // console.log(combinedTotal, barWeight, tensPlates, 'array!', array)
        function unique_combination(l, sum, target, local, array) {
            // If a unique combination is found
            let result = '';
            if (sum === target) {
                result +=("{");
                for (let i = 0; i < local.length; i++) {
                    if (i !== 0)
                        result +=(" ");
                    result +=(local[i]);
                    if (i !== local.length - 1)
                        result +=(", ");
                }
                result +=("}" + "<br>");
                console.log('this is the result:', result);
                answer.push(result)
                console.log('heres the answer', answer)
                // return result;
            }
            // For all other combinations
            for (let i = l; i < array.length; i++) {
                // Check if the sum exceeds K
                if (sum + array[i] > target)
                    continue;
                // Check if it is repeated or not
                if (i > l && array[i] === array[i - 1])
                    continue;
                // Take the element into the combination
                local.push(array[i]);
                // Recursive call
                unique_combination(i + 1, sum + array[i], target, local, array);
                // Remove element from the combination
                local.pop();
            }
        }
        // Function to find all combination
        // of the given elements which will give singles
        function Combination(array, K) {
            // Sort the given elements
            array.sort((a, b) => b - a);
            // To store combination
            let local = [];
            return unique_combination(0, 0, target, local, array);
        }
        console.log("array", array, "target", target)
        console.log('this is still result', result)
        Combination(array, target);
    }
    //end of algo

        return (
            <div className='data-handler'>
            INPUT DATA HERE
            <div className='target-weight-input'>
                <label>Target Weight</label>
                <input 
                    type='number'
                    onChange={(event) => {
                        setTargetWeight(event.target.value)
                    }}/>
            </div>
            <div className='bar-weight-input'>
                <label>Bar Weight</label>
                <input 
                    type='number'
                    onChange={(event) => {
                        setBarWeight(event.target.value)
                    }}/>
            </div>
            <div className='tens-plates-input'>
                <label>How many tens plates do you have?</label>
                <input 
                    type='number'
                    onChange={(event) => {
                        setTensPlates([event.target.value])
                    }}/>
            </div>
            <div className='submit-button-div'>
                <button onClick={submitInfo}> Submit Data </button>
            </div>
            <ResultComponent answer={answer}/>
        </div>
        )
}