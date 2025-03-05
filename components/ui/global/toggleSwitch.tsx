import React from "react";

interface ToggleSwitchProps {
  isOn: boolean;
  toggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, toggle }) => {
  return (
    <div
      className={` min-w-11 w-11 h-6 shadow-[0px_2px_4px_0px_#0000000A,0px_0px_8px_0px_#00000005_inset,0px_0px_0px_0.75px_#0000000F_inset,0px_2px_4px_0px_#0000000A_inset,0px_1px_1px_0px_#0000000A_inset]
  flex items-center  inset-1 ${
    isOn ? " bg-[#875BF7]" : "bg-[#E5E5E5]"
  } rounded-[99px] p-[2px_4px] cursor-pointer transition duration-300`}
      onClick={toggle}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-[0px_0px_1px_0px_#00000014,0px_1px_2px_0px_#0000001F,0px_3px_3px_0px_#0000000A,0px_5px_4px_0px_#00000005,0px_0px_0px_0.5px_#00000005,0px_1px_0px_0px_#FFFFFF_inset,0px_0px_2px_1px_#FFFFFF_inset] transform ${
          isOn ? "translate-x-4" : "translate-x-0"
        } transition duration-300`}
      />
    </div>
  );
};

export default ToggleSwitch;
