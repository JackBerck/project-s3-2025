"use client";

import { useEffect, useState, useRef } from "react";

const AudioPlayer = ({ audioPath }: { audioPath: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [vinylVisible, setVinylVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const vinylRef = useRef<HTMLImageElement>(null);

  // Audio initialization effect
  useEffect(() => {
    audioRef.current = new Audio(audioPath);
    audioRef.current.loop = true;

    if (isPlaying) {
      audioRef.current
        .play()
        .catch((err) => console.error("Audio playback failed:", err));
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioPath, isPlaying]);

  // Expansion animation effect
  useEffect(() => {
    let expandTimeout: NodeJS.Timeout;

    if (isPlaying) {
      expandTimeout = setTimeout(() => {
        setExpanded(true);
      }, 50);
    } else {
      setExpanded(false);
    }

    return () => {
      clearTimeout(expandTimeout);
    };
  }, [isPlaying]);

  // Vinyl visibility effect with 100ms delay
  useEffect(() => {
    if (vinylRef.current) {
      vinylRef.current.style.transform = isPlaying
        ? "rotate(0deg)"
        : "rotate(360deg)";
      const timeout = setTimeout(() => {
        setVinylVisible(isPlaying);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setVinylVisible(isPlaying);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isPlaying]);

  const togglePlayback = () => {
    setIsPlaying((prev) => {
      if (prev) {
        audioRef.current?.pause();
      } else {
        audioRef.current
          ?.play()
          .catch((err) => console.error("Audio playback failed:", err));
      }
      return !prev;
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={togglePlayback}
      className={`audio-player-button flex text-soft-lavender items-center justify-center from-[#F36089] to-[#ECB1C5] bg-gradient-to-br p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer outline-none text-light-base small-font-size relative ${
        expanded ? "expanded" : "collapsed"
      }`}
      aria-label={isPlaying ? "Pause" : "Play"}
    >
      <div className="flex items-center gap-3 relative z-10">
        <div
          className={`vinyl-container relative ${expanded ? "mr-3" : "mr-0"}`}
        >
          <img
            ref={vinylRef}
            src="/img/backgrounds/s3.jpg"
            alt="Vinyl"
            className={`vinyl-disc rounded-full w-6 h-6 min-w-[24px] min-h-[24px]
              ${vinylVisible ? "block vinyl-visible vinyl-spinning" : "hidden"}
            `}
          />
        </div>
        <div className="controls-container flex items-center gap-2">
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
          <span className="font-semibold">{isPlaying ? "Pause" : "Play"}</span>
        </div>
      </div>
    </button>
  );
};
export default AudioPlayer;
