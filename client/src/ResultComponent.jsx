import React from 'react';
import { useState } from 'react';

export default class ResultComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (this.props.answer.length !== 0) {
           return (
        <div className='result-component-div'>You need {this.props.answer}</div>
    ) 
        } else {
            return (
                <div>waiting</div>
            )
        }
        
    }
    
}