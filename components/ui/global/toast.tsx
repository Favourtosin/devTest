"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NotificationProps {
  show: boolean;
  setShow: (value: boolean) => void;
  message: string;
}

const Notification: React.FC<NotificationProps> = ({
  show,
  setShow,
  message,
}) => {
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
          className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg text-white shadow-lg `}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
