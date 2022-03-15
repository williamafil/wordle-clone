import { useEffect, useRef } from "react";

function useKeyEvent(eventName: string, eventHandler: (key: string) => void) {
  const savedEventHandler = useRef((key: string) => {});

  useEffect(() => {
    savedEventHandler.current = eventHandler;
  }, [eventHandler]);

  useEffect(() => {
    const onEventHandler = (e: any) => {
      if (e.which === 8) {
        return savedEventHandler.current("backspace");
      } else if (e.which === 13) {
        return savedEventHandler.current("enter");
      } else if (e.which >= 65 && e.which <= 90) {
        if (e.key.length > 1) return;
        const letter = String.fromCharCode(e.which).toLowerCase();
        return savedEventHandler.current(letter);
      } else {
        return;
      }
    };
    window.addEventListener(eventName, onEventHandler);

    return () => window.removeEventListener(eventName, onEventHandler);
  }, [eventName]);
}

export default useKeyEvent;
