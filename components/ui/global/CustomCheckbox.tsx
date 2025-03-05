import React, { useState } from "react";
import { Check } from "lucide-react";

const CustomCheckbox = ({ text }: { text: string }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label
      className="flex items-center gap-2 cursor-pointer select-none"
      onClick={() => setChecked(!checked)}
    >
      <div
        className={`relative min-w-3.5 min-h-3.5 w-3.5 h-3.5 rounded-[3px] flex items-center justify-center
          ${
            checked
              ? "bg-purpleDeep  shadow-[0px_1px_2px_0px_#491C9699]"
              : " shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F] bg-white"
          }`}
      >
        {checked && <Check size={13} className="text-white" />}
      </div>

      <p className="text-xx text-graySupport tracking-normal">{text}</p>
    </label>
  );
};

export default CustomCheckbox;
