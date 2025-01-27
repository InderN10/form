
import React, { useState } from "react";
import PineLogo from "@/icons/PineconeLogo";

function StepThree(props) {
  const { handleNextStep, handleBackStep, formValue, handleChange } = props;
  const [imagePreview, setImagePreview] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      handleChange(e);
    }
  };

  // Handle image removal
  const handleRemoveImage = () => {
    setImagePreview(null); // Clear the image preview state
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-100">
      <div className="w-[480px] h-[655px] bg-white p-8 rounded-[8px]">
        <div className="flex flex-col gap-[8px] mb-[28px]">
          <div>
            <PineLogo />
          </div>
          <p className="text-[26px] font-semibold leading-[31.5px]">Join Us!</p>
          <p className="text-gray-400 text-[18px] font-normal">
            Please provide all current information accurately.
          </p>
        </div>

        <div className="flex">
          <p className="text-[14px] font-semibold leading-[16px]">Date of birth</p>
          <p className="text-red-600">*</p>
        </div>
        <input
          name={"dateBirth"}
          className="w-[416px] h-[44px] border rounded-[10px] p-[5px]"
          placeholder="Your date of birth"
          value={formValue.dateBirth}
          type="date"
          onChange={handleChange}
        />

        {/* File input - custom styled */}
        <div className="mt-4 flex flex-col items-center">
          {!imagePreview ? (
            <>
              {/* If no image is uploaded, show the "Add Image" button */}
              <label
                htmlFor="file-upload"
                className="cursor-pointer text-black bg-slate-100 border-[1px] p-3 rounded-lg flex justify-center items-center w-[416px] text-center h-[200px]"
              >
                Choose a Profile Image
              </label>
              <input
                id="file-upload"
                className="hidden"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </>
          ) : (
            <>
              {/* If an image is uploaded, show the image preview and the "Remove" button */}
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Selected Preview"
                  className="w-[416px] h-[200px] object-cover rounded-[8px]"
                />
                <button
                  className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-2 h-[24px] w-[24px] text-[10px] flex justify-center items-center"
                  onClick={handleRemoveImage}
                >
                  X
                </button>
              </div>
            </>
          )}
        </div>

        <div className="flex mt-[50px] gap-[8px]">
          <button
            className="h-[44px] w-[128px] rounded-[6px] border text-black flex justify-center items-center"
            onClick={handleBackStep}
          >
            Back
          </button>
          <button
            className="h-[44px] w-[280px] rounded-[6px] border text-white bg-black flex justify-center items-center"
            onClick={handleNextStep}
          >
            Continue 3/3 {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepThree;
