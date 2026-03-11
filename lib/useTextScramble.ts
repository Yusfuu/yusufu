'use client';

import { useState, useEffect } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#';

export function useTextScramble(target: string, delay = 0) {
  const [text, setText] = useState(() => target.replace(/[^ ]/g, CHARS[0]));
  const [done, setDone] = useState(false);

  useEffect(() => {
    let frame = 0;
    let iteration = 0;
    let interval: ReturnType<typeof setInterval>;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setText(
          target
            .split('')
            .map((char, i) => {
              if (char === ' ') return ' ';
              if (i < iteration) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join(''),
        );

        if (iteration >= target.length) {
          clearInterval(interval);
          setText(target);
          setDone(true);
        }

        if (frame % 3 === 0) iteration++;
        frame++;
      }, 28);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [target, delay]);

  return { text, done };
}
