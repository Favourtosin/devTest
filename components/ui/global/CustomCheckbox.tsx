import React, { useState } from "react";
import { Check } from "lucide-react";

const CustomCheckbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className={`relative w-3.5 h-3.5 rounded-[3px] flex items-center justify-center cursor-pointer
        ${
          checked
            ? "  bg-purpleDeep shadow-none"
            : " shadow-[0px_1px_2px_0px_#0000001F] bg-white"
        }`}
      onClick={() => setChecked(!checked)}
    >
      {checked && <Check size={10} className="text-white" />}
    </div>
  );
};

export default CustomCheckbox;
