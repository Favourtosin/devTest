import { useMemo } from "react";

const formatTime = (isoString: string) => {
  return useMemo(() => {
    const date = new Date(isoString);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${ampm}`;
  }, [isoString]);
};

export default formatTime;
