import React from 'react'

function StepThree(props) {
    const { handleNextStep, handleBackStep } = props;
    return (
        <div>
            step3
            <button onClick={handleBackStep}>back</button>
            <button onClick={handleNextStep}>next</button>
        </div>
    )
}

export default StepThree
