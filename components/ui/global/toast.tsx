"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

interface NotificationProps {
  show: boolean;
  setShow: (value: boolean) => void;
  message: string;
}

const Toast: React.FC<NotificationProps> = ({ show, setShow, message }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setShow(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [show, setShow]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 min-w-[320px] md:min-w-[380px] lg:min-w-[420px] flex items-center justify-between gap-4 
            rounded-xl bg-[#FCFCFC] px-6 py-4 shadow-[0px_8px_16px_0px_#29292914] border border-[#E5E5E5B2] 
            text-grayMain font-medium text-sm"
        >
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#17B26A]">
              <Check size={14} className="text-white" />
            </div>
            <span>{message}</span>
          </div>

          <button
            onClick={() => setShow(false)}
            className="text-gray-500 hover:text-gray-800 transition"
          >
            <X size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
