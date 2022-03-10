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
      }
      if (e.which === 13) {
        return savedEventHandler.current("enter");
      }
      if (e.which >= 65 && e.which <= 90) {
        return savedEventHandler.current(e.key);
      }
    };
    window.addEventListener(eventName, onEventHandler);

    return () => window.removeEventListener(eventName, onEventHandler);
  }, [eventName]);
}

export default useKeyEvent;
