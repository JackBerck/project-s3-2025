"use client";

import React from "react";

const AudioPlayer = ({ audioPath }: { audioPath: string }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
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
  }, [audioPath]);

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
      onClick={togglePlayback}
      className="flex text-light-base items-center justify-center from-blue-s3-base to-blue-s3-secondary bg-gradient-to-br hover:from-blue-s3-secondary hover:to-blue-s3-base p-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer outline-none small-font-size"
      aria-label={isPlaying ? "Pause" : "Play"}
    >
      <div className="flex items-center gap-2">
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
    </button>
  );
};
export default AudioPlayer;
