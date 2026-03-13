'use client';

import { memo, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { EASE, OFFLINE_MSGS, POLL_INTERVAL } from '@/lib/constants';

interface NowPlaying {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumArt?: string;
  songUrl?: string;
  progress?: number;
  duration?: number;
}

const BarVisualizer = memo(function BarVisualizer() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '2px',
        height: '14px',
      }}>
      {[0.15, 0.3, 0.45, 0.6].map((delay, i) => (
        <motion.span
          key={i}
          animate={{ height: ['30%', '100%', '50%', '80%', '30%'] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            delay,
            ease: 'easeInOut',
          }}
          style={{
            display: 'block',
            width: '2px',
            background: 'var(--color-cyan)',
            borderRadius: '1px',
            minHeight: '3px',
          }}
        />
      ))}
    </div>
  );
});

function OfflineMessage() {
  const [idx, setIdx] = useState(() =>
    Math.floor(Math.random() * OFFLINE_MSGS.length),
  );

  useEffect(() => {
    const id = setInterval(
      () => setIdx((i) => (i + 1) % OFFLINE_MSGS.length),
      8000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        color: 'var(--color-faint)',
        whiteSpace: 'nowrap',
      }}>
      {OFFLINE_MSGS[idx]}
    </span>
  );
}

function AlbumSkeleton() {
  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '1/1',
        background: 'var(--color-surface2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          border: '2px solid var(--color-border2)',
          borderTopColor: '#1DB954',
        }}
      />
    </div>
  );
}

function fmtTime(ms: number) {
  return `${Math.floor(ms / 60000)}:${String(
    Math.floor((ms % 60000) / 1000),
  ).padStart(2, '0')}`;
}

export default function SpotifyWidget() {
  const [data, setData] = useState<NowPlaying | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const widgetRef = useRef<HTMLDivElement>(null);
  const pollRef = useRef<(() => Promise<void>) | undefined>(undefined);

  useEffect(() => {
    if (!expanded) return;
    const handler = (e: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node))
        setExpanded(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [expanded]);

  useEffect(() => {
    if (!expanded) return;
    const handler = () => setExpanded(false);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [expanded]);

  useEffect(() => {
    const poll = async () => {
      try {
        const res = await fetch('/api/spotify', { cache: 'no-store' });
        const json = await res.json();
        setData(json);
        if (json.progress !== undefined) setProgress(json.progress);
      } catch {}
    };
    pollRef.current = poll;
    poll();
    const id = setInterval(poll, POLL_INTERVAL);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!data?.isPlaying || !data?.duration) return;
    const id = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + 1000, data.duration!);
        if (next >= data.duration!) setTimeout(() => pollRef.current?.(), 500);
        return next;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [data?.isPlaying, data?.duration]);

  if (!data) return null;

  const progressPct =
    progress && data.duration ? (progress / data.duration) * 100 : 0;

  const albumArt = data?.albumArt;

  return (
    <motion.div
      ref={widgetRef}
      initial={{ x: 120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 3, duration: 0.6, ease: EASE }}
      onClick={() => !expanded && data.isPlaying && setExpanded(true)}
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 500,
        cursor: data.isPlaying ? 'pointer' : 'default',
        pointerEvents: data.isPlaying ? 'auto' : 'none',
      }}>
      <AnimatePresence mode='wait'>
        {!expanded ? (
          <motion.div
            layout
            key='pill'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2, ease: EASE }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 16px',
              background: 'var(--color-surface)',
              border: `1px solid ${data.isPlaying ? 'rgba(0,212,255,0.25)' : 'var(--color-border)'}`,
              borderRadius: '100px',
              backdropFilter: 'blur(20px)',
              boxShadow: data.isPlaying
                ? '0 8px 32px rgba(0,212,255,0.1)'
                : 'none',
            }}>
            <svg
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill={data.isPlaying ? '#1DB954' : 'var(--color-ghost)'}>
              <path d='M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z' />
            </svg>

            {data.isPlaying ? (
              <>
                <BarVisualizer />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--color-text2)',
                    maxWidth: '140px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}>
                  {data.title}
                </span>
              </>
            ) : (
              <OfflineMessage />
            )}
          </motion.div>
        ) : (
          <motion.div
            key='card'
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: EASE }}
            style={{
              width: '260px',
              background: 'var(--color-surface)',
              border: '1px solid rgba(0,212,255,0.2)',
              borderRadius: '16px',
              overflow: 'hidden',
              backdropFilter: 'blur(24px)',
              boxShadow: 'var(--shadow-card)',
            }}>
            {/* album art + skeleton */}
            {albumArt && (
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1/1',
                }}>
                {!imgLoaded && <AlbumSkeleton />}
                <Image
                  key={albumArt}
                  src={albumArt}
                  alt={data.album ?? 'album art'}
                  fill
                  priority={false}
                  sizes='260px'
                  style={{
                    objectFit: 'cover',
                    opacity: imgLoaded ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                  }}
                  onLoad={() => setImgLoaded(true)}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to bottom, transparent 50%, var(--color-surface) 100%)',
                    opacity: imgLoaded ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(0,0,0,0.6)',
                    borderRadius: '100px',
                    padding: '4px 10px',
                    backdropFilter: 'blur(8px)',
                  }}>
                  <BarVisualizer />
                </div>
              </div>
            )}

            {/* info */}
            <div style={{ padding: '16px' }}>
              <a
                href={data.songUrl}
                target='_blank'
                rel='noreferrer'
                onClick={(e) => e.stopPropagation()}
                style={{ textDecoration: 'none' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    marginBottom: '3px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}>
                  {data.title}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--color-faint)',
                    marginBottom: '14px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}>
                  {data.artist}
                </p>
              </a>

              {/* progress bar */}
              <div
                style={{
                  height: '2px',
                  background: 'var(--color-border)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPct}%` }}
                  transition={{ duration: 0.5 }}
                  style={{
                    height: '100%',
                    background:
                      'linear-gradient(90deg, #1DB954, var(--color-cyan))',
                    borderRadius: '2px',
                  }}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '6px',
                }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    color: 'var(--color-ghost)',
                  }}>
                  {fmtTime(progress)}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    color: 'var(--color-ghost)',
                  }}>
                  {data.duration ? fmtTime(data.duration) : '0:00'}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
