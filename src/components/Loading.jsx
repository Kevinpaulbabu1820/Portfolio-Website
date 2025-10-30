import { useState, useEffect } from "react";

export const Loading = ({ onFinish }) => {
  const message = "Welcome to My Portfolio";
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setCurrentText(message.slice(0, i));
      i++;
      if (i > message.length) {
        clearInterval(typing);
        setTimeout(onFinish, 800); // small pause before hiding
      }
    }, 120);

    return () => clearInterval(typing);
  }, [message, onFinish]);

  return (
    <div className="fixed inset-0 bg-black text-white flex items-center justify-center text-3xl font-mono">
      {currentText}
      <span className="ml-1 animate-pulse">|</span>
    </div>
  );
};
