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
      className="bg-white rounded-lg shadow-[0px_0px_0px_1px_#09090B0D] p-4 overflow-hidden cursor-pointer"
      initial={{
        width: 200,
        scale: 1,
        opacity: 0.9,
        transformOrigin: "bottom right",
      }}
      animate={{
        width: isExpanded ? 482 : 200,
        scale: isExpanded ? 1.15 : 1,
        opacity: 1,
        borderRadius: isExpanded ? "20px" : "12px",
      }}
      transition={{
        type: "spring",
        mass: 2,
        stiffness: 180,
        damping: 23, // Lower damping for bounce effect
        duration: 0.6,
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center justify-between">
        <div className="  bg-purpleLight  p-[4px_6px]   py-1 rounded-md ">
          <span className=" text-xs font-medium text-purpleDeep rounded-md">
            {formattedTimeIn}
          </span>
        </div>
        {isExpanded && (
          <div className="w-10 h-10 flex items-center justify-center   bg-[#ECE9FECC]/80 rounded-md text-white">
            <Play size={15} className="  text-purpleDeep" />
          </div>
        )}
      </div>

      <div className=" flex flex-col gap-y-2 ">
        <h2 className="text-sm font-medium   text-grayMain   mt-2">{title}</h2>

        <p className="text-[13px] text-graySupport leading-[19.5px] mt-1">
          {formattedStart} → {formattedEnd}
        </p>
      </div>

      {isExpanded && (
        <>
          <div className="border-b mt-3 mb-3"></div>

          <div className="flex items-start justify-between">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center text-sm gap-x-2 ">
                <h2 className=" text-grayMain ">Guests</h2>

                <Globe size={16} className="text-[#A3A3A3]" />

                <p className=" text-[#525252]">{participants.length}</p>
              </div>

              <div className="flex -space-x-2">
                {participants.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt="participant"
                    className="w-8 h-8 rounded-full border-2 border-white "
                  />
                ))}
              </div>
            </div>

            <div className="flex space-x-2">
              <div className="w-2 h-7 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-7 bg-gray-200 rounded-full"></div>
              <div className="w-2 h-7 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default CalendarCard;
