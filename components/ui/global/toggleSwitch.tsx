import React from "react";

interface ToggleSwitchProps {
  isOn: boolean;
  toggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, toggle }) => {
  return (
    <div
      className={`w-12 h-6 flex items-center ${
        isOn ? "bg-green-500" : "bg-gray-400"
      } rounded-full p-1 cursor-pointer transition duration-300`}
      onClick={toggle}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-md transform ${
          isOn ? "translate-x-6" : "translate-x-0"
        } transition duration-300`}
      />
    </div>
  );
};

export default ToggleSwitch;
