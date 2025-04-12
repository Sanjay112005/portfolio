import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import "./tesxt.css";

export const TextGenerateEffect = ({
  words,
  className = "",
  filter = true,
  duration = 0.7,
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    let isCancelled = false;

    const loopAnimation = async () => {
      while (!isCancelled) {
        // Step 1: Appear from first to last
        await animate(
          "span",
          {
            opacity: 1,
            filter: filter ? "blur(0px)" : "none",
          },
          {
            duration,
            delay: stagger(0.2, { startDelay: 0 }),
          }
        );

        // Wait after all words are visible
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Step 2: Disappear from last to first
        const total = wordsArray.length;
        for (let i = total - 1; i >= 0; i--) {
          if (isCancelled) break;

          const span = scope.current?.querySelectorAll("span")[i];
          if (span) {
            await animate(
              span,
              {
                opacity: 0,
                filter: filter ? "blur(10px)" : "none",
              },
              { duration: 0.3 }
            );
            await new Promise((resolve) => setTimeout(resolve, 200));
          }
        }

        // Pause before starting over
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    };

    loopAnimation();

    return () => {
      isCancelled = true;
    };
  }, [animate, duration, filter, scope, wordsArray.length]);

  return (
    <div className={`text-wrapperss ${className}`}>
      <div className="text-containerss" ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="words"
            style={{
              opacity: 0,
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </div>
    </div>
  );
};
