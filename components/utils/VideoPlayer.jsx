"use client";

import { useEffect, useRef, useState } from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/outline";

export default function VideoPlayer({ src, size = 48, width = 3, className }) {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [videoDuration, setVideoDuration] = useState();
  const [videoProgress, setVideoProgress] = useState(0);

  const center = size / 2;
  const radius = center - width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - videoProgress);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      setVideoDuration(video.duration);
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const currentTime = videoRef.current?.currentTime;
    if (videoDuration != null && currentTime != null) {
      let loadingTimeout = setTimeout(() => {
        if (videoProgress == currentTime / videoDuration) {
          setVideoProgress((prev) => prev + 0.000001);
        } else {
          setVideoProgress(currentTime / videoDuration);
        }
      }, 10);
      return () => {
        clearTimeout(loadingTimeout);
      };
    }
  }, [videoProgress, videoDuration, isPaused]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      setIsPaused(!video.paused);
      video.paused ? video.play() : video.pause();
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="absolute top-10 right-4 z-10">
        <div className="relative flex justify-center items-center ">
          <svg
            width={size}
            height={size}
            style={{ transform: "rotate(-90deg)" }}
          >
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="transparent"
              stroke="#c6c6c6"
              strokeWidth={width}
            />
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="transparent"
              stroke="#f5f5f5"
              strokeWidth={width}
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute z-10">
            <button
              className="group cursor-pointer flex justify-center items-center"
              onClick={togglePlayPause}
            >
              <div className="text-accent group-hover:text-text transition-colors duration-200 ease-in-out">
                {isPaused ? (
                  <PlayIcon className="h-8 w-8" />
                ) : (
                  <PauseIcon className="h-8 w-8" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      <video className="w-full" ref={videoRef} loop muted autoPlay>
        <source src={src} />
      </video>
    </div>
  );
}
