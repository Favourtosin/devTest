import React from "react";

interface ToggleSwitchProps {
  isOn: boolean;
  toggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, toggle }) => {
  return (
    <div
      className={`w-11 h-6 shadow-[0px_2px_4px_0px_#0000000A]  flex items-center  inset-1 ${
        isOn ? " bg-[#875BF7]" : "bg-[#E5E5E5]"
      } rounded-[99px] p-[2px_4px] cursor-pointer transition duration-300`}
      onClick={toggle}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-[0px_0px_1px_0px_#00000014] transform ${
          isOn ? "translate-x-4" : "translate-x-0"
        } transition duration-300`}
      />
    </div>
  );
};

export default ToggleSwitch;
