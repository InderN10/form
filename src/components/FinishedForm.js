import React from "react";
import PineLogo from "@/icons/PineconeLogo";
function FinishedForm() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-100">
      <div className="w-[480px] h-[193] bg-white p-8 rounded-[8px]">
        <div className="flex flex-col gap-[8px] mb-[28px]">
          <div>
            <PineLogo />
          </div>
          <p className="text-[26px] font-semibold leading-[31.5px]">You are All Set! </p>
          <p className="text-gray-400 text-[18px] font-normal">
          We have received your submission. Thank you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default FinishedForm;
