import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Globe } from "lucide-react";
import formatTime from "@/hooks/formatTime";

interface CalendarCardProps {
  title: string;
  timeIn: string;
  startTime: string;
  endTime: string;
  participants: string[];
}

const CalendarCard: React.FC<CalendarCardProps> = ({
  title,
  timeIn,
  startTime,
  endTime,
  participants,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const formattedTimeIn = formatTime(timeIn);
  const formattedStart = formatTime(startTime);
  const formattedEnd = formatTime(endTime);

  return (
    <motion.div
      className="bg-white rounded-[18px] shadow-[0px_8px_16px_0px_#0000000A,0px_4px_8px_0px_#0000000A,0px_0px_0px_1px_#09090B0D] overflow-hidden cursor-pointer"
      initial={{
        width: 200,
        scale: 1,
        opacity: 0.9,
        transformOrigin: "top right",
      }}
      animate={{
        width: isExpanded ? "80%" : 200,
        scale: isExpanded ? 1.15 : 1,
        opacity: 1,
        borderRadius: isExpanded ? "20px" : "12px",
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.2,
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-4 pt-4">
        <div className="flex items-center justify-between">
          <div className="bg-purpleLight p-[4px_6px] py-1 rounded-md">
            <span className="text-xs font-medium text-purpleDeep rounded-md">
              {formattedTimeIn}
            </span>
          </div>
          {isExpanded && (
            <div className="w-7 h-7 rounded-md flex items-center justify-center bg-[#ECE9FECC]/80 text-white">
              <Play size={14} className="text-purpleDeep" />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-y-2">
          <h2 className="text-sm font-medium text-grayMain mt-2">{title}</h2>
          <p className="text-[13px] text-graySupport leading-[19.5px] mt-1">
            {formattedStart} → {formattedEnd}
          </p>
        </div>
      </div>

      {isExpanded && (
        <>
          <div className="w-full border-t border-[#E5E5E5B2]/70 my-3"></div>

          <div className="px-4 pb-4">
            <div className="flex items-start justify-between">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center text-sm gap-x-2">
                  <h2 className="text-grayMain font-medium">Guests</h2>
                  <Globe size={16} className="text-[#A3A3A3]" />
                  <p className="text-[#525252]">{participants.length}</p>
                </div>

                <div className="flex -space-x-2">
                  {participants.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt="participant"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
              </div>

              <div className="absolute bottom-4 right-4 flex space-x-1">
                {[...Array(7)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`w-2 h-7 ${
                      i === 2
                        ? "bg-gray-100"
                        : i % 2 === 0
                        ? "bg-gray-300"
                        : "bg-gray-200"
                    } rounded-full`}
                    animate={{ scaleY: [1, 1.2, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                      delay: i * 0.12,
                    }}
                  ></motion.div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default CalendarCard;
