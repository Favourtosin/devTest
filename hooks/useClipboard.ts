import { useState } from "react";

const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return { isCopied, handleCopy };
};

export default useClipboard;
