"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideoShowcase() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTimeStr, setCurrentTimeStr] = useState("0:00");
  const [durationStr, setDurationStr] = useState("0:10");
  const [isHovered, setIsHovered] = useState(false);
  const [centerFeedback, setCenterFeedback] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Autoplay on mount (muted by default per browser autoplay policies)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, []);

  // Fullscreen state listener
  useEffect(() => {
    const handleFsChange = () => {
      const activeFs = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      );
      setIsFullscreen(activeFs);
    };

    document.addEventListener("fullscreenchange", handleFsChange);
    document.addEventListener("webkitfullscreenchange", handleFsChange);
    document.addEventListener("mozfullscreenchange", handleFsChange);
    document.addEventListener("MSFullscreenChange", handleFsChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFsChange);
      document.removeEventListener("webkitfullscreenchange", handleFsChange);
      document.removeEventListener("mozfullscreenchange", handleFsChange);
      document.removeEventListener("MSFullscreenChange", handleFsChange);
    };
  }, []);

  // Update time and progress bar
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const current = video.currentTime;
    const total = video.duration;
    setProgress((current / total) * 100);

    const curMins = Math.floor(current / 60);
    const curSecs = Math.floor(current % 60).toString().padStart(2, "0");
    setCurrentTimeStr(`${curMins}:${curSecs}`);

    const durMins = Math.floor(total / 60);
    const durSecs = Math.floor(total % 60).toString().padStart(2, "0");
    setDurationStr(`${durMins}:${durSecs}`);
  };

  // Toggle Play / Pause
  const togglePlay = (e) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
      triggerFeedback("play");
    } else {
      video.pause();
      setIsPlaying(false);
      triggerFeedback("pause");
    }
  };

  // Toggle Mute / Unmute
  const toggleMute = (e) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    if (!nextMuted) {
      triggerFeedback("unmute");
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      }
    }
  };

  // Scrub progress
  const handleSeek = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    const bar = e.currentTarget;
    if (!video || !bar) return;

    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(1, clickX / rect.width));
    video.currentTime = newProgress * video.duration;
    setProgress(newProgress * 100);
  };

  // Restart
  const handleRestart = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play();
    setIsPlaying(true);
    triggerFeedback("play");
  };

  // Fullscreen
  const handleFullscreen = (e) => {
    if (e) e.stopPropagation();
    const container = containerRef.current;
    if (!container) return;

    const isFs = !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    );

    if (!isFs) {
      if (container.requestFullscreen) {
        container.requestFullscreen().catch(() => {});
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      } else if (container.mozRequestFullScreen) {
        container.mozRequestFullScreen();
      } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  const triggerFeedback = (type) => {
    setCenterFeedback(type);
    setTimeout(() => setCenterFeedback(null), 600);
  };

  // 3D Parallax tilt on mouse movement (only in normal mode)
  const handleMouseMove = (e) => {
    if (isFullscreen) return;
    const card = containerRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-2px)`;
  };

  const handleMouseLeave = () => {
    const card = containerRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px)";
    setIsHovered(false);
  };

  return (
    <div
      className={`hero-video-wrapper reveal-right ${isFullscreen ? "is-fullscreen" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      ref={containerRef}
      aria-label="Adocial 3D Cinematic Agency Services Showcase"
    >
      {/* ─── Ambient Glow Aura ─── */}
      <div className="video-ambient-glow" aria-hidden="true"></div>

      {/* ─── Architectural Studio Showcase Stage ─── */}
      <div className="studio-showcase-stage">
        {/* Animated Light Border Sheen */}
        <div className="card-border-sheen" aria-hidden="true"></div>

        {/* 1. Stage Top Bar: Mac Studio Dots + Reel Meta + Sound Switch */}
        <div className="studio-stage-header">
          <div className="studio-dots-group">
            <span className="s-dot dot-red"></span>
            <span className="s-dot dot-yellow"></span>
            <span className="s-dot dot-green"></span>
            <span className="studio-title">ADOCIAL OS / 4K SERVICE REEL</span>
          </div>

          <button
            type="button"
            className={`sound-switch-pill ${isMuted ? "muted" : "active"}`}
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
            title={isMuted ? "Click to hear voiceover & audio" : "Mute audio"}
          >
            {isMuted ? (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
                <span>Tap for Sound</span>
              </>
            ) : (
              <>
                <div className="audio-bars" aria-hidden="true">
                  <span className="bar b1"></span>
                  <span className="bar b2"></span>
                  <span className="bar b3"></span>
                  <span className="bar b4"></span>
                </div>
                <span>Sound ON</span>
              </>
            )}
          </button>
        </div>

        {/* 2. Video Player Frame: 100% Uncropped Native 16:9 */}
        <div className="studio-video-frame" onClick={togglePlay}>
          <video
            ref={videoRef}
            src="/images/video/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onTimeUpdate={handleTimeUpdate}
            className="cinema-video"
          />

          {/* Center Feedback Ripple on click */}
          {centerFeedback && (
            <div className="center-feedback-ripple" aria-hidden="true">
              {centerFeedback === "play" && (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              )}
              {centerFeedback === "pause" && (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16"></rect>
                  <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
              )}
              {centerFeedback === "unmute" && (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
              )}
            </div>
          )}

          {/* Luxury Scrub & Controls Bar */}
          <div
            className={`cinema-controls-bar ${isHovered || !isPlaying ? "visible" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glowing Progress Scrub Line */}
            <div className="scrub-track-container" onClick={handleSeek} title="Click to seek">
              <div className="scrub-track-bg"></div>
              <div className="scrub-track-fill" style={{ width: `${progress}%` }}>
                <span className="scrub-head"></span>
              </div>
            </div>

            <div className="controls-row">
              {/* Left Controls: Play/Pause, Restart, Time */}
              <div className="controls-left">
                <button
                  type="button"
                  className="ctrl-btn"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16"></rect>
                      <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                  ) : (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  )}
                </button>

                <button
                  type="button"
                  className="ctrl-btn"
                  onClick={handleRestart}
                  aria-label="Replay from start"
                  title="Restart video"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1 4 1 10 7 10"></polyline>
                    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
                  </svg>
                </button>

                <div className="time-display">
                  <span>{currentTimeStr}</span>
                  <span className="time-sep">/</span>
                  <span>{durationStr}</span>
                </div>
              </div>

              {/* Right Controls: Sound Toggle, Fullscreen */}
              <div className="controls-right">
                <button
                  type="button"
                  className={`ctrl-btn ${!isMuted ? "active" : ""}`}
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute" : "Mute"}
                  title={isMuted ? "Unmute sound" : "Mute sound"}
                >
                  {isMuted ? (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <line x1="23" y1="9" x2="17" y2="15"></line>
                      <line x1="17" y1="9" x2="23" y2="15"></line>
                    </svg>
                  ) : (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    </svg>
                  )}
                </button>

                <button
                  type="button"
                  className="ctrl-btn"
                  onClick={handleFullscreen}
                  aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                  title={isFullscreen ? "Exit Fullscreen" : "Watch Fullscreen"}
                >
                  {isFullscreen ? (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
                    </svg>
                  ) : (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Stage Bottom Feature Rail: Core Services Breakdown */}
        <div className="studio-stage-footer">
          <div className="stage-footer-item">
            <span className="footer-dot meta-dot"></span>
            <div className="footer-meta">
              <b>Meta Ads</b>
              <small>Advantage+ Testing</small>
            </div>
          </div>

          <div className="stage-footer-divider" aria-hidden="true"></div>

          <div className="stage-footer-item">
            <span className="footer-dot google-dot"></span>
            <div className="footer-meta">
              <b>Google Ads</b>
              <small>Search & PMax Intent</small>
            </div>
          </div>

          <div className="stage-footer-divider" aria-hidden="true"></div>

          <div className="stage-footer-item">
            <span className="footer-dot capi-dot"></span>
            <div className="footer-meta">
              <b>Server CAPI</b>
              <small>ROAS 4.8X Verified</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
