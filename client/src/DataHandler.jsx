import React from "react";
import { useState } from 'react'

export default function DataHandler() {

    const [targetWeight, setTargetWeight] = useState(0)
    const [barWeight, setBarWeight] = useState(0)
    const [tensPlates, setTensPlates] = useState(0)

    const submitInfo = () => {
        console.log(targetWeight, barWeight, tensPlates)
    }
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
                    setTensPlates(event.target.value)
                }}/>
        </div>
        <div className='submit-button-div'>
            <button onClick={submitInfo}> Submit Data </button>
        </div>
    </div>
    )

}