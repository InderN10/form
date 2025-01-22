"use client";

import React from 'react'
import { useState } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import FinishedForm from './FinishedForm'


function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formValue, setFormValue] = useState({
        firstName: "",
        lastName: "",
        useName: "",
        phoneNumber: "",
    });
    const [formError, setFormError] = useState({
        firstName: "",
        lastName: "",
        useName: "",
        phoneNumber: "",
    });
    function handleError(errors) {
        setFormError((prev) => ({ ...prev, ...errors }));
    }
    const Step = [StepOne, StepTwo, StepThree, FinishedForm][currentStep];
    function handleNextStep() {
        if (currentStep !== 3) {
            setCurrentStep((prevStep) => prevStep + 1);
        }
    };
    function handleBackStep() {
        if (currentStep !== 0) {
            setCurrentStep((prevStep) => prevStep - 1);
        }
    };

    return (
        <div>
            <Step
                errors={formError}
                formValue={formValue}
                handleError={handleError}
                setFormValue={setFormValue}
                handleNextStep={handleNextStep}
                handleBackStep={handleBackStep}

            />
        </div>
    );
};

export default MultiStepForm
