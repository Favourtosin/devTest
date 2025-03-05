import React, { useState } from "react";
import { ClipboardCopy, Check, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Title from "../ui/global/title";
import Paragraph from "../ui/global/paragraph";
import ToggleSwitch from "../ui/global/toggleSwitch";
import useClipboard from "@/hooks/useClipboard";
import Toast from "../ui/global/toast";
import Button from "../ui/global/button";

const ShareApiKey: React.FC = () => {
  const [apiKey] = useState("sk-1234-5678-ABCD");
  const [isToggled, setIsToggled] = useState(false);
  const [isKeyCopied, setIsKeyCopied] = useState(false);
  const { isCopied, handleCopy } = useClipboard();
  return (
    <section className="flex flex-col gap-y-3 w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="max-w-lg w-full p-6 flex flex-col gap-y-5 bg-[#FCFCFC] shadow-[0px_0px_0px_1px_#09090B0D] rounded-[10px]"
      >
        <section className="flex flex-col gap-y-3">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <Title text={isToggled ? "Sharing is on" : "Sharing is off"} />
              <AnimatePresence>
                {!isToggled && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Paragraph text="To share your workspace with other people you need to publish it first." />
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <ToggleSwitch
              isOn={isToggled}
              toggle={() => setIsToggled(!isToggled)}
            />
          </div>

          <AnimatePresence>
            {isToggled && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className=" flex flex-col gap-y-2"
              >
                <input
                  id="endpoint"
                  type="text"
                  placeholder="/mylink.com"
                  className="py-2 px-3 pr-10 rounded-[10px] outline-none border-none w-full shadow-[0px_1px_2px_0px_#1212170D] placeholder:text-[#A3A3A3]"
                />

                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  onClick={() => setIsKeyCopied(true)}
                  className="flex items-center justify-center bg-white/5  gap-x-2 rounded-lg p-[6px_10px] w-max shadow-[0px_1px_2px_0px_#0000001F] text-grayMain cursor-pointer"
                >
                  <button
                    className="flex items-center justify-center  rounded-md text-graySupport"
                    onClick={() => handleCopy(apiKey)}
                  >
                    <Copy size={14} />
                  </button>
                  <p className="font-medium text-sm">Copy</p>
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <section className="flex justify-end gap-4 tracking-normal font-medium">
          <Button cta="Cancel" className=" bg-none text-grayMain " />
          <Button
            cta=" Create secret key"
            className="bg-purpleDeep  shadow-[0px_0px_0px_1px_#7839EE] !px-3 text-white "
          />
        </section>
      </motion.div>

      <Toast
        show={isKeyCopied}
        setShow={setIsKeyCopied}
        message="Link to secret key copied!"
      />
    </section>
  );
};

export default ShareApiKey;
