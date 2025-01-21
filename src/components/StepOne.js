import React from 'react'
import PineLogo from '@/icons/PineconeLogo';
function StepOne(props) {
    const { handleNextStep, handleBackStep } = props;
    return (
        <div>
            <div className=''>
                <p className='text-red-600'>first step</p>
                <div>
                    <PineLogo/>
                </div>
                <p>Join us!</p>
                <p>Please provide all current information accurately.</p>
                <button onClick={handleNextStep}>next</button>
            </div>
        </div>
    )
}

export default StepOne
