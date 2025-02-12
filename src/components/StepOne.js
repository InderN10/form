import React, { useEffect } from "react";
import PineLogo from "@/icons/PineconeLogo";
import { isStepOneValid } from "@/utils/StepOneValidetion";
function StepOne(props) {
  const {
    handleNextStep,
    errors,
    formValue,
    setFormValue,
    handleError,
    clearError,
  } = props;
  useEffect(()=>{
    const storedData = JSON.parse(localStorage.getItem('formData'));
    if (storedData){
      setFormValue(storedData);

    }
  },[setFormValue]);
  function handleChange(event) {
    const { name, value } = event.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    clearError(name);
  }
  function handleFormNextStep() {
    const { isValid, errors } = isStepOneValid(formValue);
    if (isValid) {
      const localdata = {
        ...formValue,
        currentStep: 1,
      };
      localStorage.setItem("formData", JSON.stringify(localdata));
      handleNextStep();
    }
    handleError(errors);
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-100">
      <div className="w-[480px] h-[655px] bg-white p-8 rounded-[8px] flex flex-col justify-between">
        <div>
          <div className="flex flex-col gap-[8px] mb-[28px]">
            <div>
              <PineLogo />
            </div>
            <p className="text-[26px] font-semibold leading-[31,5px]">
              Join Us!
            </p>
            <p className="text-gray-400 text-[18px] font-normal">
              Please provide all current information accurately.
            </p>
          </div>

          <div className="flex flex-col gap-[8px] mb-[12px]">
            <div className="flex">
              <p className="text-[14px] font-semibold leading-[16px]">
                First name
              </p>
              <p className="text-red-600">*</p>
            </div>
            <input
              name={"firstName"}
              className={`${
                errors.firstName.length > 0 ? "" : ""
              }, w-[416px] h-[44px] border rounded-[10px] p-[5px]`}
              placeholder="Your first name"
              onChange={handleChange}
              value={formValue.firstName || ""}
            ></input>
            {errors.firstName.length > 0 && (
              <p className="text-red-600">{errors.firstName}</p>
            )}
          </div>
          <div className="flex flex-col gap-[8px] mb-[12px]">
            <div className="flex">
              <p className="text-[14px] font-semibold leading-[16px]">
                Last name
              </p>
              <p className="text-red-600">*</p>
            </div>
            <input
              name={"lastName"}
              className={`${
                errors.lastName.length > 0 ? "" : ""
              }, w-[416px] h-[44px] border rounded-[10px] p-[5px]`}
              placeholder="Your last name"
              value={formValue.lastName || ""}
              onChange={handleChange}
            ></input>
            {errors.lastName.length > 0 && (
              <p className="text-red-600">{errors.lastName}</p>
            )}
          </div>
          <div className="flex flex-col gap-[8px] mb-[12px]">
            <div className="flex">
              <p className="text-[14px] font-semibold leading-[16px]">
                Username
              </p>
              <p className="text-red-600">*</p>
            </div>
            <input
              name={"userName"}
              value={formValue.userName || ""}
              className="w-[416px] h-[44px] border rounded-[10px] p-[5px]"
              placeholder="Your usename"
              onChange={handleChange}
            ></input>
            {errors.userName.length > 0 && (
              <p className="text-red-600">{errors.userName}</p>
            )}
          </div>
        </div>

        <div>
          <button
            className="h-[44px] w-[416px] rounded-[6px] text-white bg-black flex justify-center items-center"
            onClick={handleFormNextStep}
          >
            Continue 1/3 {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepOne;
