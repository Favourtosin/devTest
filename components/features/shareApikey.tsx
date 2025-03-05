import React, { useState } from "react";
import { Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../ui/global/title";
import Paragraph from "../ui/global/paragraph";
import ToggleSwitch from "../ui/global/toggleSwitch";
import useClipboard from "@/hooks/useClipboard";
import Toast from "../ui/global/toast";
import Button from "../ui/global/button";
import Input from "../ui/global/input";

const ShareApiKey: React.FC = () => {
  const [apiKey, setApiKey] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const [isKeyCopied, setIsKeyCopied] = useState(false);
  const { handleCopy } = useClipboard();

  return (
    <section className=" flex flex-col justify-center items-center   w-full">
      <section className="  w-[95%]  flex flex-col  justify-center  items-center   gap-y-3   ">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="max-w-lg w-full p-4 flex flex-col gap-y-5 bg-[#FCFCFC] shadow-[0px_1px_2px_0px_#09090B0D,0px_0px_0px_1px_#09090B0D] rounded-[10px]"
        >
          <section className="flex flex-col gap-y-3">
            <div className="flex justify-between gap-x-6 items-center w-full">
              <div className="flex  flex-col">
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
                  className=" flex flex-col gap-y-3"
                >
                  <Input
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="/mylink.com"
                    value={apiKey}
                  />

                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    onClick={() => setIsKeyCopied(true)}
                    className="flex items-center justify-center bg-white/5  gap-x-2 rounded-lg p-[6px_10px] w-max shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F] text-grayMain cursor-pointer"
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
            <Button
              onclick={() => setApiKey("")}
              cta="Cancel"
              className=" bg-none text-grayMain "
            />
            <Button
              onclick={() => setApiKey("fakiyaoluwatosin@gmail.com")}
              cta=" Create secret key"
              className="bg-purpleDeep  shadow-[0px_0px_0px_1px_#7839EE,0px_1px_2px_0px_#2E125E66,0px_0px_0px_1px_#FFFFFF33_inset] !px-3 text-white "
            />
          </section>
        </motion.div>

        <Toast
          show={isKeyCopied}
          setShow={setIsKeyCopied}
          message="Link to secret key copied!"
        />
      </section>
    </section>
  );
};

export default ShareApiKey;
