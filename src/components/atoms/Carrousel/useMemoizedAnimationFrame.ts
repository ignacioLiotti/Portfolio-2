import { useRef, useEffect } from 'react';

export function useMemoizedAnimationFrame(callback: (t: number, delta: number) => void) {
  const savedCallback = useRef<(t: number, delta: number) => void>();
  const lastTimeRef = useRef<number>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current !== undefined) {
        const delta = time - lastTimeRef.current;
        savedCallback.current?.(time, delta);
      }
      lastTimeRef.current = time;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lastTimeRef.current = undefined;
    };
  }, []);
}
