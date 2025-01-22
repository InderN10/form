import React from 'react'
import PineLogo from '@/icons/PineconeLogo';

function StepOne(props) {
    const { handleNextStep, handleBackStep } = props;
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
                    <input className='w-[416px] h-[44px] border rounded-[10px] p-[5px]' placeholder='Your first name'></input>
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
                    onClick={handleNextStep}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default StepOne
