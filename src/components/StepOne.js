import React from 'react'
import PineLogo from '@/icons/PineconeLogo';
import { isStepOneValid } from '@/utils/StepOneValidetion';
function StepOne(props) {
    const { handleNextStep, errors, formValue, setFormValue, handleError } = props;
    const error = false
    console.log(formValue)
    function handleChange(event) {
        const { name, value } = event.target
        setFormValue((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    function handleFormNextStep() {
        const { isValid, errors } = isStepOneValid(formValue)
        if (isValid) {
            handleNextStep()
        }
        handleError(errors)
    }

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center bg-slate-100'>
            <div className='w-[480px] h-[655px] bg-white p-8 rounded-[8px]'>
                <div className='flex flex-col gap-[8px] mb-[28px]'>
                    <div>
                        <PineLogo />
                    </div>
                    <p className='text-[26px] font-semibold leading-[31,5px]'>Join Us!</p>
                    <p className='text-gray-400 text-[18px] font-normal'>Please provide all current information accurately.</p>
                </div>

                <div className='flex flex-col gap-[8px] mb-[12px]'>
                    <div className='flex'>
                        <p>First name</p>
                        <p className='text-red-600'>*</p>
                    </div>
                    <input
                        name={"firstName"}
                        className='w-[416px] h-[44px] border rounded-[10px] p-[5px]'
                        placeholder='Your first name'
                        onChange={handleChange}
                    ></input>
                    {errors.firstName.length > 0 &&
                        (<p className='text-red-600'>{errors.firstName}</p>)}
                </div>
                <div className='flex flex-col gap-[8px] mb-[12px]'>
                    <div className='flex'>
                        <p>Last name</p>
                        <p className='text-red-600'>*</p>
                    </div>
                    <input className='w-[416px] h-[44px] border rounded-[10px] p-[5px] ' placeholder='Your last name'></input>
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <div className='flex'>
                        <p>Username</p>
                        <p className='text-red-600'>*</p>
                    </div>
                    <input className='w-[416px] h-[44px] border rounded-[10px] p-[5px]' placeholder='Your usename'></input>
                </div>
                <div >
                    <button
                        className='h-[44px] w-[416px] rounded-[6px] text-white bg-black mt-[135px] flex justify-center items-center'
                        onClick={handleFormNextStep}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default StepOne

