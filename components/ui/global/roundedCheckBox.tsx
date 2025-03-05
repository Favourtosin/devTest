import React from "react";
import Acme from "./acme";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  text: string;
  showAcme?: boolean;
}

const RoundedCustomCheckbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  text,
  showAcme = false,
}) => {
  return (
    <label
      className="flex items-center gap-2 cursor-pointer select-none"
      onClick={() => onChange(!checked)}
    >
      <div
        className={`relative w-[20px] h-[20px] flex items-center justify-center rounded-full 
          ${checked ? "bg-[#875BF7]" : "bg-[#FAFAFA]"} 
          shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F] transition-all`}
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
      >
        {checked && (
          <div className="w-[10px] h-[10px] bg-white rounded-full transition-all"></div>
        )}
      </div>
      <p className="text-xx text-graySupport tracking-normal">{text}</p>
      {showAcme && <Acme />}
    </label>
  );
};

export default RoundedCustomCheckbox;
