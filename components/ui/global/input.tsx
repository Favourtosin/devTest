import React, { useState } from "react";

interface InputProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder || "Enter text..."}
      className={`py-2 px-3 rounded-[10px] outline-none w-full  text-black/85
 placeholder:text-[#A3A3A3] transition-all  ease-in duration-500 
        ${
          isFocused
            ? "shadow-[0px_0px_0px_3px_#ECE9FE,0px_1px_2px_0px_#1212170D,inset_0px_0px_0px_1px_#A48AFB]"
            : "shadow-[0px_1px_2px_0px_#1212170D,inset_0px_0px_0px_1px_#D6D6D6B2]"
        }`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

export default Input;
