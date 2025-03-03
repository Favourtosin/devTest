import React, { useState } from "react";
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
    <div
      className={`bg-white rounded-lg shadow-md p-4 transition-all duration-500 ease-out ${
        isExpanded ? "scale-105" : "scale-100"
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Main Time & Title */}
      <div className="flex items-center justify-between">
        <div className="bg-purple-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
          {formattedTimeIn}
        </div>
        {isExpanded && (
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-500 text-white">
            <Play size={18} />
          </div>
        )}
      </div>

      {/* Title */}
      <div className="text-lg font-semibold mt-2">{title}</div>

      {/* Start - End Time */}
      <div className="text-gray-500 text-sm mt-1">
        {formattedStart} → {formattedEnd}
      </div>

      {/* Expandable Section */}
      {isExpanded && (
        <>
          <div className="border-b mt-3 mb-3"></div>

          {/* Guests & Participants */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Globe size={18} className="text-gray-500" />
              <span className="text-gray-600 text-sm">
                Guests ({participants.length})
              </span>
            </div>

            {/* Participants' Images */}
            <div className="flex -space-x-2">
              {participants.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="participant"
                  className="w-8 h-8 rounded-full border-2 border-white shadow"
                />
              ))}
            </div>
          </div>

          {/* Conversation Bars */}
          <div className="flex space-x-2 mt-3">
            <div className="w-2 h-7 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-7 bg-gray-200 rounded-full"></div>
            <div className="w-2 h-7 bg-gray-300 rounded-full"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default CalendarCard;
