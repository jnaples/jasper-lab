import { useState, useEffect } from "react";

const TypewriterAchievements = () => {
  const achievements = [
    "Helped scale to acquisition.",
    "Helped increase leads by 3000%",
    "Helped increase ARR by $250,000+",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const currentText = achievements[currentIndex];

    if (isTyping) {
      // Typing animation
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 50); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait then start fade out
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Display duration
        return () => clearTimeout(timeout);
      }
    } else {
      // Fade out animation
      setOpacity(0);
      const timeout = setTimeout(() => {
        setDisplayText("");
        setOpacity(1);
        setIsTyping(true);
        setCurrentIndex((prev) => (prev + 1) % achievements.length);
      }, 500); // Fade duration
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, displayText, isTyping, achievements]);

  return (
    <div className="flex items-center justify-center">
      <style jsx>{`
        @keyframes dot-blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .dot-blink {
          animation: dot-blink 2s ease-in-out infinite;
        }
      `}</style>
      <div className="max-w-2xl text-center">
        <div
          className="flex min-h-[3rem] items-center justify-center gap-2 text-2xl transition-opacity duration-500 md:text-xl/3"
          style={{ opacity }}
        >
          <div
            className={`h-2 w-2 rounded-full bg-orange-400 ${
              isTyping ? "dot-blink" : ""
            }`}
          ></div>
          <p className="font-bold">
            {displayText}
            {isTyping &&
              displayText.length < achievements[currentIndex].length && (
                <span className="ml-1 animate-pulse text-blue-400">|</span>
              )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TypewriterAchievements;
