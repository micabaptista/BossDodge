import {useEffect, useRef, useState} from "react";

export const useTypingEffect = (textToType: string, interKeyStrokeDurationInMs: number) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const currentPositionRef = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPosition((value) => value + 1);
      currentPositionRef.current += 1;
      if (currentPositionRef.current > textToType.length) {
        clearInterval(intervalId);
      }
    }, interKeyStrokeDurationInMs);
    return () => {
      clearInterval(intervalId);
      currentPositionRef.current = 0;
      setCurrentPosition(0);
    };
  }, [interKeyStrokeDurationInMs, textToType]);

  return textToType.substring(0, currentPosition);
}
