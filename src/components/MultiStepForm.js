"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import FinishedForm from "./FinishedForm";
import { JetBrains_Mono } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function handleError(errors) {
    setFormError((prev) => ({ ...prev, ...errors }));
  }
  function clearError(name) {
    setFormError((prev) => ({ ...prev, [name]: "" }));
  }
  const Step = [StepOne, StepTwo, StepThree, FinishedForm][currentStep];
  function handleNextStep() {
    if (currentStep !== 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  }
  function handleBackStep() {
    if (currentStep !== 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  }

  useEffect(() => {
    let data = localStorage.getItem("formData");
    data = JSON.parse(data);
    console.log(data);
  }, []);
  const animationVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentStep}
        initial="center"
        animate="center"
        exit="exit"
        variants={animationVariants}
        transition={{ duration: 0.5 }}
      >
        <div>
          <Step
            errors={formError}
            formValue={formValue}
            handleError={handleError}
            setFormValue={setFormValue}
            clearError={clearError}
            handleNextStep={handleNextStep}
            handleBackStep={handleBackStep}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default MultiStepForm;
