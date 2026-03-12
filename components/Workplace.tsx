'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WorkplaceCardProps {
  company: string;
  role: string;
  location: string;
  period: string;
  url?: string;
}

export function WorkplaceCard({
  company,
  role,
  location,
  period,
  url,
}: WorkplaceCardProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);

  return (
    <span
      ref={wrapperRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{ position: 'relative', display: 'inline-block' }}>
      {/* Trigger */}
      <motion.span
        whileHover={{ scale: 1.04 }}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          color: 'var(--color-cyan)',
          cursor: 'default',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          position: 'relative',
        }}>
        {/* animated underline */}
        <span style={{ position: 'relative' }}>
          {company}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: open ? 1 : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              bottom: '-2px',
              left: 0,
              right: 0,
              height: '1px',
              background: 'var(--color-cyan)',
              transformOrigin: '0%',
              display: 'block',
            }}
          />
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ fontSize: '10px', lineHeight: 1, display: 'inline-block' }}>
          ↗
        </motion.span>
      </motion.span>

      {/* Floating card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              bottom: 'calc(100% + 12px)',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 50,
              minWidth: '240px',
            }}>
            {/* Card */}
            <div
              style={{
                background: 'var(--color-surface)',
                border: '1px solid rgba(0,212,255,0.2)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow:
                  '0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,212,255,0.05)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}>
              {/* Header — animated gradient banner */}
              <div
                style={{
                  position: 'relative',
                  height: '72px',
                  overflow: 'hidden',
                }}>
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(168,85,247,0.2), rgba(0,212,255,0.1))',
                    backgroundSize: '200% 200%',
                  }}
                />
                {/* Grid lines on banner */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                      'linear-gradient(rgba(0,212,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.06) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
                {/* Company initial */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 0.1,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(0,0,0,0.4)',
                      border: '1px solid rgba(0,212,255,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-display)',
                      fontSize: '22px',
                      color: 'var(--color-cyan)',
                      backdropFilter: 'blur(8px)',
                    }}>
                    DF
                  </motion.div>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '14px 16px 16px' }}>
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}>
                  {url ? (
                    <a
                      href={url}
                      target='_blank'
                      rel='noreferrer'
                      onClick={(e) => e.stopPropagation()}
                      style={{ textDecoration: 'none' }}>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '13px',
                          fontWeight: 600,
                          color: 'var(--color-text)',
                          marginBottom: '2px',
                        }}>
                        {company}
                      </p>
                    </a>
                  ) : (
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        marginBottom: '2px',
                      }}>
                      {company}
                    </p>
                  )}
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--color-muted)',
                      marginBottom: '12px',
                    }}>
                    {role}
                  </p>

                  {/* Divider */}
                  <div
                    style={{
                      height: '1px',
                      background: 'var(--color-border)',
                      marginBottom: '12px',
                    }}
                  />

                  {/* Meta row */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}>
                      <span style={{ fontSize: '11px' }}>📍</span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '9px',
                          color: 'var(--color-faint)',
                          letterSpacing: '0.06em',
                        }}>
                        {location}
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}>
                      {/* Live indicator */}
                      <motion.span
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: '#22c55e',
                          display: 'inline-block',
                        }}
                      />
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '9px',
                          color: 'var(--color-faint)',
                          letterSpacing: '0.06em',
                        }}>
                        {period}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Arrow pointing down */}
            <div
              style={{
                position: 'absolute',
                bottom: '-6px',
                left: '50%',
                transform: 'translateX(-50%) rotate(45deg)',
                width: '10px',
                height: '10px',
                background: 'var(--color-surface)',
                border: '1px solid rgba(0,212,255,0.2)',
                borderTop: 'none',
                borderLeft: 'none',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
