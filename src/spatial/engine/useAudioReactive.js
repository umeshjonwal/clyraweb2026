import { useEffect, useRef, useState } from "react";

/**
 * Audio reactive hook
 * Returns normalized audio energy (0 → 1)
 */
export function useAudioReactive() {
  const [level, setLevel] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    let audioCtx;
    let analyser;

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;

        const source = audioCtx.createMediaStreamSource(stream);
        source.connect(analyser);

        const data = new Uint8Array(analyser.frequencyBinCount);

        const tick = () => {
          analyser.getByteFrequencyData(data);
          const avg =
            data.reduce((a, b) => a + b, 0) / data.length / 255;

          setLevel(avg);
          rafRef.current = requestAnimationFrame(tick);
        };

        tick();
      })
      .catch(() => {
        // Fallback: silence instead of crashing
        setLevel(0);
      });

    return () => {
      cancelAnimationFrame(rafRef.current);
      audioCtx?.close();
    };
  }, []);

  return level;
}