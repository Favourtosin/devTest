import React from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const RoundedCustomCheckbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
}) => {
  return (
    <div
      className={`relative w-[20px] h-[20px] flex items-center justify-center rounded-full cursor-pointer 
        ${checked ? "bg-[#875BF7]" : "bg-[#FAFAFA]"} 
        shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F] transition-all`}
      onClick={() => onChange(!checked)}
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
    >
      {checked && (
        <div className="w-[10px] h-[10px] bg-white rounded-full transition-all"></div>
      )}
    </div>
  );
};

export default RoundedCustomCheckbox;
