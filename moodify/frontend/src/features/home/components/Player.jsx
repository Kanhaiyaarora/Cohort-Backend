import React, { useRef, useState, useEffect } from 'react';
import { useSong } from '../hooks/useSong';
import "../styles/Player.scss"

const Player = () => {
  const { song, loading } = useSong();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.playbackRate = speed;
    }
  }, [speed]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    }
  };

  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    if (audio) {
      const newTime = (e.target.value / 100) * duration;
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const skipTime = (seconds) => {
    const audio = audioRef.current;
    if (audio) {
      const newTime = Math.max(0, Math.min(duration, currentTime + seconds));
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (loading) {
    return <div className="player-loading">Loading...</div>;
  }

  return (
    <div className="player">
      <div className="player-container">
        <div className="player-left">
          <div className="player-poster">
            <img src={song.posterUrl} alt={song.title} />
          </div>
          <div className="player-info">
            <h4 className="player-title">{song.title}</h4>
            <p className="player-mood">Mood: {song.mood}</p>
          </div>
        </div>

        <div className="player-center">
          <div className="player-buttons">
            <button onClick={() => skipTime(-5)} className="skip-btn" title="Backward 5s">
              ⏪
            </button>
            <button onClick={togglePlayPause} className="play-pause-btn">
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            <button onClick={() => skipTime(5)} className="skip-btn" title="Forward 5s">
              ⏩
            </button>
          </div>
          <div className="player-progress">
            <span className="time">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max="100"
              value={(currentTime / duration) * 100 || 0}
              onChange={handleProgressChange}
              className="progress-bar"
            />
            <span className="time">{formatTime(duration)}</span>
          </div>
        </div>

        <div className="player-right">
          <div className="player-speed">
            <select
              id="speed-select"
              value={speed}
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
              title="Playback Speed"
            >
              <option value={0.5}>0.5x</option>
              <option value={1}>1x</option>
              <option value={1.5}>1.5x</option>
              <option value={2}>2x</option>
            </select>
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={song.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default Player;
