import React from 'react'

function StepTwo(props) {
    const { handleNextStep, handleBackStep } = props;
    return (
        <div>
            <p>steptwo</p>
            <button onClick={handleBackStep}>back</button>
            <button onClick={handleNextStep}>next</button>
        </div>
    )
}

export default StepTwo
