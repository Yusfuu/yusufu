'use client';

import { useState, useEffect } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#'.split('');
const CHARS_LEN = CHARS.length;

export function useTextScramble(target: string, delay = 0) {
  const [text, setText] = useState(target);

  useEffect(() => {
    let frame = 0;
    let iteration = 0;
    const chars = target.split('');
    let interval: ReturnType<typeof setInterval>;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setText(
          chars
            .map((char, i) => {
              if (char === ' ') return ' ';
              if (i < iteration) return char;
              return CHARS[Math.floor(Math.random() * CHARS_LEN)];
            })
            .join(''),
        );

        if (iteration >= target.length) {
          clearInterval(interval);
          setText(target);
          return;
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

  return { text };
}
