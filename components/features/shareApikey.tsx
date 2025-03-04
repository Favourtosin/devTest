import React, { useState } from "react";
import { ClipboardCopy, Check } from "lucide-react";

import Title from "../ui/global/title";
import Paragraph from "../ui/global/paragraph";
import ToggleSwitch from "../ui/global/toggleSwitch";
import useClipboard from "@/hooks/useClipboard";

const ShareApiKey: React.FC = () => {
  const [apiKey, setApiKey] = useState("sk-1234-5678-ABCD"); // Replace with actual key logic
  const [isToggled, setIsToggled] = useState(false);
  const { isCopied, handleCopy } = useClipboard();

  return (
    <section className="flex flex-col gap-y-3 w-full">
      <div className="max-w-lg w-full p-6 flex flex-col gap-y-5 bg-[#FCFCFC] shadow-[0px_0px_0px_1px #09090B0D] rounded-[10px]">
        {/* Header Section */}
        <section className="flex flex-col gap-y-2">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <Title text={isToggled ? "Sharing is on" : "Sharing is off"} />
              <Paragraph text="To share your workspace with other people you need to publish it first." />
            </div>
            <ToggleSwitch
              isOn={isToggled}
              toggle={() => setIsToggled(!isToggled)}
            />
          </div>

          {/* Input Field */}
          <div className="relative">
            <input
              id="endpoint"
              type="text"
              placeholder="API key name"
              className="py-2 px-3 pr-10 rounded-[10px] w-full shadow-[0px_1px_2px_0px_#1212170D] placeholder:text-[#A3A3A3]"
            />
          </div>

          {/* Copy Button */}
          <span className="flex gap-x-1 items-center rounded-lg p-[6px_10px] w-max shadow-[0px_1px_2px_0px_#0000001F] text-grayMain">
            <button
              className={`w-max p-2 rounded-md ${
                isCopied ? "bg-green-500" : "bg-gray-300 hover:bg-purpleDeep/20"
              }`}
              onClick={() => handleCopy(apiKey)}
            >
              {isCopied ? (
                <Check size={16} color="white" />
              ) : (
                <ClipboardCopy size={14} />
              )}
            </button>
            <p className="font-medium text-sm">Copy</p>
          </span>
        </section>

        {/* Action Buttons */}
        <section className="flex justify-end gap-4 tracking-normal font-medium">
          <button className="px-4 py-2 text-grayMain text-sm">Cancel</button>
          <button className="px-4 py-2 bg-purpleDeep shadow-[0px_1px_2px_0px_#2E125E66] text-white rounded-lg hover:bg-purpleDeep/90">
            Create secret key
          </button>
        </section>
      </div>
    </section>
  );
};

export default ShareApiKey;
