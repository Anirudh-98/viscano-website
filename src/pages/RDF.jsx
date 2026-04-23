import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import {
  Video, Scissors, Layers, Package,
  Check, UserRound, Building2,
  ArrowRight, Play, Instagram, Phone, MessageCircle, Mail,
  ChevronDown, Pause,
  Volume2, VolumeX,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────── Constants ─────────────────────── */

const RED = '#E8000D';
const DARK_RED = '#B30000';

const REEL_GRADIENTS = [
  'linear-gradient(145deg, #1c0202 0%, #5a0000 60%, #2d0606 100%)',
  'linear-gradient(145deg, #0d0d0d 0%, #4a0000 55%, #1a0000 100%)',
  'linear-gradient(145deg, #200000 0%, #111111 45%, #380000 100%)',
  'linear-gradient(145deg, #0a0a0a 0%, #3d0000 55%, #200505 100%)',
  'linear-gradient(145deg, #1a0000 0%, #0d0d0d 40%, #4a0000 100%)',
  'linear-gradient(145deg, #2a0000 0%, #180000 45%, #111111 100%)',
];

const REELS = [
  { id: 1, category: 'Brand', title: 'Fashion Forward', video: '/REEL.mp4' },
  { id: 2, category: 'Personal', title: 'Creator Story', video: '/Reel6.mp4' },
  { id: 3, category: 'Ads', title: 'Product Launch', video: '/Reel2.mp4' },
  { id: 4, category: 'Trending', title: 'Viral Moment', video: '/Reel3.mp4' },
  { id: 5, category: 'Brand', title: 'Event Highlight', video: '/Reel4.mp4' },
  { id: 6, category: 'Ads', title: 'Campaign Cut', video: '/Reel5.mp4' },
];

const LEFT_CARDS = [
  { id: 'l1', category: 'Brand', caption: 'Fashion Forward', video: '/REEL.mp4', gradient: REEL_GRADIENTS[0] },
  { id: 'l2', category: 'Personal', caption: 'Creator Story', video: '/Reel3.mp4', gradient: REEL_GRADIENTS[1] },
  { id: 'l3', category: 'Ads', caption: 'Product Launch', video: '/Reel2.mp4', gradient: REEL_GRADIENTS[2] },
  { id: 'l4', category: 'Trending', caption: 'Viral Moment', video: '/Reel4.mp4', gradient: REEL_GRADIENTS[3] },
  { id: 'l5', category: 'Brand', caption: 'Event Highlight', video: '/Reel5.mp4', gradient: REEL_GRADIENTS[4] },
];

const RIGHT_CARDS = [
  { id: 'r1', category: 'Ads', caption: 'Campaign Cut', video: '/Reel1.mp4', gradient: REEL_GRADIENTS[5] },
  { id: 'r2', category: 'Brand', caption: 'Brand Identity', video: '/Reel2.mp4', gradient: REEL_GRADIENTS[0] },
  { id: 'r3', category: 'Personal', caption: 'Creator Vlog', video: '/Reel6.mp4', gradient: REEL_GRADIENTS[1] },
  { id: 'r4', category: 'Ads', caption: 'Launch Teaser', video: '/Reel3.mp4', gradient: REEL_GRADIENTS[2] },
  { id: 'r5', category: 'Trending', caption: 'Reel of the Week', video: '/Reel4.mp4', gradient: REEL_GRADIENTS[3] },
];

const SERVICES = [
  { icon: Video, title: 'Reel Creation', desc: 'End-to-end reel production for brands & individuals.' },
  { icon: Scissors, title: 'Professional Editing', desc: 'Crisp cuts, transitions, effects & storytelling.' },
  { icon: Layers, title: 'Logo & Motion Design', desc: 'Logos that move, not just sit.' },
  { icon: Package, title: 'Bulk Content Production', desc: 'Consistent reels for consistent growth.' },
];

const STEPS = [
  { num: '01', title: 'Share Your Requirement', desc: 'Tell us your idea, brand, or goal.' },
  { num: '02', title: 'We Create & Edit', desc: 'Using tools like Premiere Pro, After Effects & more.' },
  { num: '03', title: 'Get Ready-to-Post Reels', desc: 'Optimized for Instagram & performance.' },
];

const TOOLS = [
  { img: '/adobepremier.png', label: 'Adobe Premiere Pro' },
  { img: '/aftereffects.png', label: 'After Effects' },
  { img: '/blender.png', label: 'Blender' },
  { img: '/envato.png', label: 'Envato Assets' },
  { img: '/apple.png', label: 'Shot on Apple' },
];

const SHOWCASE_PROJECTS = [
  { id: 1, title: 'Brand Films', category: 'Cinematics', video: '/REEL.mp4', col: 'span 3', row: '1', grade: 'rgba(232,0,13,0.28)', objPos: '20% center' },
  { id: 2, title: 'Product Ads', category: 'Commercial', video: '/Reel1.mp4', col: 'span 2', row: '1', grade: 'rgba(10,20,100,0.42)', objPos: '60% 30%' },
  { id: 3, title: 'Motion Loops', category: 'Animation', video: '/Reel2.mp4', col: 'span 1', row: '1', grade: 'rgba(90,0,180,0.42)', objPos: '80% 50%' },
  { id: 4, title: 'Stories', category: 'Social', video: '/Reel3.mp4', col: 'span 1', row: '2', grade: 'rgba(0,100,70,0.42)', objPos: '30% 70%' },
  { id: 5, title: 'Creator Reels', category: 'Influencer', video: '/Reel4.mp4', col: 'span 3', row: '2', grade: 'rgba(160,60,0,0.32)', objPos: '70% center' },
  { id: 6, title: 'Event Coverage', category: 'Live', video: '/Reel5.mp4', col: 'span 2', row: '2', grade: 'rgba(0,60,130,0.42)', objPos: '45% 60%' },
];

const WHY_US = [
  'Content that grabs attention instantly',
  'Fast delivery for bulk reels',
  'Trend-aware editing style',
  'Clean, premium visuals',
  'Flexible for brands & individuals',
];

/* ─────────────────────── Shared Styles ─────────────────────── */

const H2 = {
  fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)',
  fontWeight: 900,
  letterSpacing: '-0.045em',
  lineHeight: 1.02,
  margin: 0,
};

const BODY = {
  color: '#e2d2d2ff',
  lineHeight: 1.75,
  fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
  margin: 0,
};

/* ─────────────────────── Sub-components ─────────────────────── */

function SectionLabel({ num, text, center = false }) {
  return (
    <span style={{
      display: 'block',
      fontSize: '0.68rem',
      letterSpacing: '0.22em',
      color: RED,
      textTransform: 'uppercase',
      marginBottom: '1rem',
      fontWeight: 700,
      textAlign: center ? 'center' : 'left',
    }}>
      {num} / {text}
    </span>
  );
}

function ReelCard({ reel, index }) {
  const [hovered, setHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const hasVideo = Boolean(reel.video);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.play().catch(() => { });
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const togglePlay = (e) => {
    e.stopPropagation();
    setIsPlaying((p) => !p);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted((m) => !m);
  };

  return (
    <div
      className="rdf-stagger-child"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        aspectRatio: '9/16',
        borderRadius: '0.75rem',
        overflow: 'hidden',
        cursor: 'default',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.07)'}`,
        transform: hovered ? 'scale(1.025)' : 'scale(1)',
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        boxShadow: hovered ? '0 8px 32px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      {/* Video — always visible */}
      {hasVideo && (
        <video
          ref={videoRef}
          src={reel.video}
          loop
          playsInline
          muted
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            zIndex: 2,
          }}
        />
      )}

      {/* Center play/pause button */}
      {hasVideo && (
        <div
          onClick={togglePlay}
          style={{
            position: 'absolute', inset: 0, zIndex: 3,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: !isPlaying ? 'rgba(0,0,0,0.4)' : 'transparent',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
          }}
        >
          <div style={{
            width: 56, height: 56, borderRadius: '50%',
            background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.18)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: !isPlaying ? 1 : hovered ? 1 : 0,
            transform: !isPlaying ? 'scale(1)' : hovered ? 'scale(1)' : 'scale(0.8)',
            transition: 'opacity 0.25s ease, transform 0.25s ease',
            pointerEvents: 'none',
          }}>
            {isPlaying
              ? <Pause size={20} fill="#fff" color="#fff" />
              : <Play size={20} fill="#fff" color="#fff" style={{ marginLeft: 3 }} />
            }
          </div>
        </div>
      )}

      {/* Category badge */}
      <div style={{
        position: 'absolute', top: '0.875rem', left: '0.875rem',
        padding: '0.25rem 0.625rem', borderRadius: '2rem',
        background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)',
        fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.12em',
        color: RED, textTransform: 'uppercase',
        zIndex: 5,
      }}>
        {reel.category}
      </div>

      {/* Mute button — top right */}
      {hasVideo && (
        <button
          onClick={toggleMute}
          style={{
            position: 'absolute', top: '0.875rem', right: '0.875rem',
            width: 32, height: 32, borderRadius: '50%',
            background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(10px)',
            border: `1px solid ${isMuted ? 'rgba(255,255,255,0.15)' : 'rgba(232,0,13,0.6)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', zIndex: 5,
            opacity: hovered ? 1 : 0.6,
            transition: 'all 0.25s ease',
          }}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted
            ? <VolumeX size={13} color="#aaa" />
            : <Volume2 size={13} color={RED} />
          }
        </button>
      )}

      {/* Bottom bar: title + no-video label */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '2.5rem 1rem 1rem',
        background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 100%)',
        zIndex: 5,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
      }}>
        <p style={{ fontWeight: 700, fontSize: '0.9rem', margin: 0, letterSpacing: '-0.01em' }}>
          {reel.title}
        </p>
        {!hasVideo && (
          <span style={{ fontSize: '0.6rem', color: '#444', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Preview soon
          </span>
        )}
      </div>
    </div>
  );
}

function HeroVideoCard({ card }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '9/16',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.07)',
        boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
        flexShrink: 0,
        transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.04)';
        e.currentTarget.style.boxShadow = `0 16px 56px rgba(232,0,13,0.25)`;
        e.currentTarget.style.border = '1px solid rgba(232,0,13,0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.5)';
        e.currentTarget.style.border = '1px solid rgba(255,255,255,0.07)';
      }}
    >
      {/* Gradient background */}
      <div style={{ position: 'absolute', inset: 0, background: card.gradient }} />

      {/* Noise grain texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
        zIndex: 1, pointerEvents: 'none',
      }} />

      {/* Video */}
      {card.video && (
        <video
          ref={videoRef}
          src={card.video}
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            zIndex: 2,
          }}
        />
      )}

      {/* Glassmorphism sheen */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 55%)',
        zIndex: 3,
      }} />

      {/* Category badge */}
      <div style={{
        position: 'absolute', top: '0.75rem', left: '0.75rem',
        padding: '0.22rem 0.6rem', borderRadius: '2rem',
        background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)',
        fontSize: '0.58rem', fontWeight: 800, letterSpacing: '0.12em',
        color: RED, textTransform: 'uppercase',
        zIndex: 4,
      }}>
        {card.category}
      </div>

      {/* Caption */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '2.5rem 0.875rem 0.875rem',
        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
        zIndex: 4,
      }}>
        <p style={{ fontSize: '0.82rem', fontWeight: 700, margin: 0, letterSpacing: '-0.01em', color: '#fff' }}>
          {card.caption}
        </p>
      </div>
    </div>
  );
}

function ScrollColumn({ cards, direction }) {
  const doubled = [...cards, ...cards];
  const animName = direction === 'up' ? 'rdfScrollUp' : 'rdfScrollDown';

  return (
    <div
      className="rdf-hero-column"
      style={{
        overflow: 'hidden',
        height: '100%',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
        padding: '0 0.625rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          animation: `${animName} 24s linear infinite`,
          willChange: 'transform',
        }}
      >
        {doubled.map((card, i) => (
          <HeroVideoCard key={`${card.id}-${i}`} card={card} />
        ))}
      </div>
    </div>
  );
}

function BentoVideoCard({ proj }) {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;
    // All bento cards play passively (no sound, no controls)
    videoRef.current.play().catch(() => { });
  }, []);

  return (
    <div
      style={{
        gridColumn: proj.col,
        gridRow: proj.row,
        position: 'relative',
        borderRadius: 0, // parent has overflow:hidden + borderRadius
        overflow: 'hidden',
        background: '#0d0d0d',
        cursor: 'default',
        border: `1px solid ${hovered ? 'rgba(232,0,13,0.35)' : 'rgba(255,255,255,0.045)'}`,
        transition: 'border-color 0.35s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={proj.video}
        autoPlay muted loop playsInline
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          objectPosition: proj.objPos,
          filter: `saturate(${hovered ? 0.85 : 0.55}) brightness(${hovered ? 0.9 : 0.75})`,
          transition: 'filter 0.5s ease',
          willChange: 'filter',
        }}
      />

      {/* Colour-grade overlay — unique per card */}
      <div style={{
        position: 'absolute', inset: 0,
        background: proj.grade,
        mixBlendMode: 'multiply',
        zIndex: 1,
        pointerEvents: 'none',
        opacity: hovered ? 0.6 : 1,
        transition: 'opacity 0.4s',
      }} />

      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
        zIndex: 2, pointerEvents: 'none',
      }} />

      {/* Bottom text gradient */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '2.5rem 1rem 1rem',
        background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)',
        zIndex: 3,
      }}>
        <span style={{
          display: 'inline-block',
          fontSize: '0.55rem', fontWeight: 800, letterSpacing: '0.16em',
          color: RED, textTransform: 'uppercase', marginBottom: '0.25rem',
        }}>
          {proj.category}
        </span>
        <p style={{ margin: 0, fontWeight: 700, fontSize: '0.88rem', letterSpacing: '-0.01em', color: '#fff' }}>
          {proj.title}
        </p>
      </div>

      {/* Top-right play dot indicator */}
      <div style={{
        position: 'absolute', top: '0.7rem', right: '0.7rem',
        width: 8, height: 8, borderRadius: '50%',
        background: RED, zIndex: 3,
        boxShadow: '0 0 8px rgba(232,0,13,0.7)',
        animation: 'rdfPulse 2.5s ease-in-out infinite',
      }} />

      {/* Hover edge glow */}
      {hovered && (
        <div style={{
          position: 'absolute', inset: 0,
          boxShadow: 'inset 0 0 0 1.5px rgba(232,0,13,0.4)',
          pointerEvents: 'none', zIndex: 4,
        }} />
      )}
    </div>
  );
}

function ServiceCard({ icon: Icon, title, desc }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="rdf-stagger-child"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '2.5rem',
        border: `1px solid ${hovered ? 'rgba(232,0,13,0.28)' : 'rgba(255,255,255,0.06)'}`,
        borderRadius: '0.875rem',
        background: hovered ? 'rgba(232,0,13,0.035)' : 'rgba(255,255,255,0.018)',
        transition: 'all 0.35s',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        cursor: 'default',
      }}
    >
      <div style={{
        width: 48, height: 48, borderRadius: '0.75rem',
        background: hovered ? 'rgba(232,0,13,0.2)' : 'rgba(232,0,13,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '1.75rem', transition: 'background 0.35s',
      }}>
        <Icon size={22} color={RED} />
      </div>
      <h3 style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.025em', marginBottom: '0.75rem' }}>
        {title}
      </h3>
      <p style={{ ...BODY }}>{desc}</p>
    </div>
  );
}

function ProcessStep({ step, isLast }) {
  return (
    <div
      className="rdf-stagger-child"
      style={{
        display: 'grid',
        gridTemplateColumns: '64px 1fr',
        gap: '2rem',
        paddingBottom: isLast ? 0 : '3rem',
        position: 'relative',
      }}
    >
      {/* Connecting line */}
      {!isLast && (
        <div style={{
          position: 'absolute', left: 31, top: 52,
          width: 1, bottom: 0,
          background: 'linear-gradient(to bottom, rgba(232,0,13,0.3), transparent)',
        }} />
      )}

      {/* Step circle */}
      <div style={{
        width: 48, height: 48, borderRadius: '50%', flexShrink: 0,
        border: '1px solid rgba(232,0,13,0.35)',
        background: 'rgba(232,0,13,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 900, fontSize: '0.8rem', color: RED, letterSpacing: '0.04em',
        zIndex: 1, position: 'relative',
      }}>
        {step.num}
      </div>

      {/* Content */}
      <div style={{ paddingTop: '0.6rem' }}>
        <h3 style={{ fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.03em', marginBottom: '0.625rem' }}>
          {step.title}
        </h3>
        <p style={{ ...BODY }}>{step.desc}</p>
      </div>
    </div>
  );
}

/* ─────────────────────── Main Component ─────────────────────── */

export default function RDF({ showViscanoNav = false }) {
  const containerRef = useRef(null);
  const spotlightRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 768);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (spotlightRef.current) {
      spotlightRef.current.style.background =
        `radial-gradient(circle 650px at ${e.clientX}px ${e.clientY}px, rgba(232,0,13,0.065), transparent 70%)`;
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* Hero entrance */
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.fromTo('.rdf-hero-line',
        { yPercent: 115 },
        { yPercent: 0, duration: 1.3, stagger: 0.18 }
      )
        .fromTo('.rdf-hero-badge',
          { opacity: 0, y: -16 },
          { opacity: 1, y: 0, duration: 0.8 }, 0.3
        )
        .fromTo('.rdf-hero-sub',
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 1 }, '-=0.75'
        )
        .fromTo('.rdf-hero-btn',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.75, stagger: 0.1 }, '-=0.8'
        )
        .fromTo('.rdf-hero-micro',
          { opacity: 0 },
          { opacity: 1, duration: 0.8 }, '-=0.5'
        )
        .fromTo('.rdf-scroll-ind',
          { opacity: 0 },
          { opacity: 1, duration: 0.7 }, '-=0.4'
        );

      /* Ticker marquee */
      gsap.to('.rdf-ticker-track', {
        x: '-50%', duration: 60, ease: 'none', repeat: -1, force3D: true,
      });

      /* Section headings – reveal up */
      gsap.utils.toArray('.rdf-sh').forEach((el) => {
        gsap.fromTo(el,
          { y: 55, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1.1, ease: 'power3.out',
            immediateRender: false,
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          }
        );
      });

      /* Generic reveal up */
      gsap.utils.toArray('.rdf-reveal').forEach((el) => {
        gsap.fromTo(el,
          { y: 35, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
            immediateRender: false,
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          }
        );
      });

      /* Stagger groups – animate children when parent enters view */
      gsap.utils.toArray('.rdf-stagger').forEach((parent) => {
        const children = parent.querySelectorAll('.rdf-stagger-child');
        if (children.length) {
          gsap.fromTo(children,
            { y: 48, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 0.85, ease: 'power3.out', stagger: 0.11,
              immediateRender: false,
              scrollTrigger: { trigger: parent, start: 'top 88%', once: true },
            }
          );
        }
      });

      /* Horizontal divider reveal */
      gsap.utils.toArray('.rdf-line-reveal').forEach((el) => {
        gsap.fromTo(el,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1, duration: 1.6, ease: 'power4.inOut',
            immediateRender: false,
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          }
        );
      });

      /* CTA section – big text scale in */
      gsap.fromTo('.rdf-cta-headline',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: '.rdf-cta-headline', start: 'top 88%', once: true },
        }
      );

      /* Projects showcase — phone rise + float */
      const phoneTl = gsap.timeline({
        scrollTrigger: { trigger: '.rdf-projects-section', start: 'top 55%', once: true },
      });
      phoneTl
        .to('.rdf-bento-overlay', { opacity: 1, duration: 0.9, ease: 'power2.out' })
        .fromTo('.rdf-mockup-phone',
          { y: 200, opacity: 0, scale: 0.88 },
          { y: 0, opacity: 1, scale: 1, duration: 1.6, ease: 'power3.out' },
          '-=0.5'
        )
        .to('.rdf-mockup-phone', {
          y: -14, duration: 2.8, ease: 'sine.inOut', repeat: -1, yoyo: true,
        });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const filters = ['All', 'Brand', 'Personal', 'Ads', 'Trending'];
  const filteredReels = activeFilter === 'All'
    ? REELS
    : REELS.filter((r) => r.category === activeFilter);

  /* Shared nav link hover style via inline handlers */
  const navLink = { color: '#666', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.02em' };

  return (
    <>
      {showViscanoNav && (
        <div className="hidden lg:block">
          <Navbar />
        </div>
      )}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        style={{
          background: '#080808',
          color: '#fff',
          fontFamily: "'General Sans', 'Inter', sans-serif",
          overflowX: 'hidden',
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        {/* Cursor spotlight */}
        <div
          ref={spotlightRef}
          style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1 }}
        />

        {/* ═══════════════════ NAVBAR ═══════════════════ */}
        <nav className="rdf-internal-nav" style={{
          position: 'fixed',
          top: showViscanoNav ? '5rem' : 0,
          left: 0, right: 0,
          zIndex: 40,
          padding: '1rem clamp(1.5rem, 5vw, 4rem)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'rgba(8,8,8,0.92)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          <span style={{ fontWeight: 900, fontSize: '1.6rem', letterSpacing: '-0.07em', color: RED }}>RDF</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div className="rdf-nav-links" style={{ display: 'flex', gap: '1.75rem' }}>
              {['Work', 'Services', 'Process'].map((label) => (
                <a
                  key={label}
                  href={`#rdf-${label.toLowerCase()}`}
                  style={navLink}
                  onMouseEnter={(e) => (e.target.style.color = '#fff')}
                  onMouseLeave={(e) => (e.target.style.color = '#666')}
                >
                  {label}
                </a>
              ))}
            </div>
            <a
              href="#rdf-contact"
              style={{
                background: RED, color: '#fff', padding: '0.6rem 1.5rem',
                borderRadius: '0.375rem', fontWeight: 700, fontSize: '0.875rem',
                textDecoration: 'none', transition: 'background 0.2s, transform 0.2s',
                letterSpacing: '0.025em',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = DARK_RED; e.currentTarget.style.transform = 'scale(1.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = RED; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Get Started
            </a>
          </div>
        </nav>

        {/* ═══════════════════ 1. HERO ═══════════════════ */}
        <section className={`rdf-hero-section${showViscanoNav ? ' rdf-hero-with-visnav' : ''}`} style={{
          height: '100vh',
          display: 'grid',
          gridTemplateColumns: '1fr 1.45fr 1fr',
          overflow: 'hidden',
          position: 'relative',
          paddingTop: '4.5rem',
        }}>
          {/* Ambient glow orbs */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
            <div style={{ position: 'absolute', top: '15%', left: '20%', width: '45vw', height: '45vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,0,13,0.12) 0%, transparent 65%)' }} />
            <div style={{ position: 'absolute', bottom: '10%', right: '15%', width: '30vw', height: '30vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,0,13,0.08) 0%, transparent 65%)' }} />
          </div>

          {/* Left column — scrolls upward (desktop only) */}
          {!isMobile && <ScrollColumn cards={LEFT_CARDS} direction="up" />}

          {/* Center hero content — static */}
          <div style={{
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center',
            textAlign: 'center', padding: '2rem 1.5rem',
            zIndex: 10, position: 'relative',
          }}>

            {/* ── Ambient red glow behind panel ── */}
            <div style={{
              position: 'absolute',
              bottom: '10%', left: '50%', transform: 'translateX(-50%)',
              width: '160%', height: '55%',
              background: 'radial-gradient(ellipse at center bottom, rgba(232,0,13,0.22) 0%, rgba(232,0,13,0.06) 45%, transparent 70%)',
              pointerEvents: 'none', zIndex: 0,
              filter: 'blur(8px)',
            }} />
            <div style={{
              position: 'absolute',
              top: '8%', left: '50%', transform: 'translateX(-50%)',
              width: '110%', height: '35%',
              background: 'radial-gradient(ellipse at center, rgba(232,0,13,0.08) 0%, transparent 65%)',
              pointerEvents: 'none', zIndex: 0,
            }} />

            {/* ── Glass panel ── */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, rgba(8,8,8,0.0) 0%, rgba(8,8,8,0.75) 30%, rgba(8,8,8,0.85) 65%, rgba(8,8,8,0.0) 100%)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              zIndex: 1,
            }} />

            {/* ── Dot grid texture ── */}
            <div style={{
              position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
              maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)',
            }} />

            {/* ── Red shimmer line at bottom of panel ── */}
            <div style={{
              position: 'absolute', bottom: '15%', left: '10%', right: '10%',
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(232,0,13,0.5) 30%, rgba(232,0,13,0.8) 50%, rgba(232,0,13,0.5) 70%, transparent)',
              zIndex: 2, pointerEvents: 'none',
            }} />

            {/* ── All inner content sits above overlays ── */}
            <div style={{ position: 'relative', zIndex: 3, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

              {/* Live badge */}
              {/* <div
                className="rdf-hero-badge"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.55rem',
                  marginBottom: '2rem', padding: '0.45rem 1rem 0.45rem 0.75rem',
                  border: '1px solid rgba(232,0,13,0.35)',
                  borderRadius: '2rem',
                  background: 'rgba(232,0,13,0.08)',
                  backdropFilter: 'blur(10px)',
                  fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.2em',
                  color: RED, textTransform: 'uppercase', opacity: 0,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: RED, display: 'inline-block', animation: 'rdfPulse 2s ease-in-out infinite', flexShrink: 0 }} />
                Now Taking Projects
              </div> */}

              {/* Headline */}
              <h1 style={{ margin: 0, lineHeight: 0.92 }}>

                {/* Eyebrow line */}
                {/* <div style={{ overflow: 'hidden', marginBottom: '0.3rem' }}>
                  <span
                    className="rdf-hero-line"
                    style={{
                      display: 'block',
                      fontSize: 'clamp(0.65rem, 1vw, 0.8rem)',
                      fontWeight: 700,
                      letterSpacing: '0.32em',
                      color: 'rgba(255,255,255,0.35)',
                      textTransform: 'uppercase',
                    }}
                  >
                    We Craft
                  </span>
                </div> */}

                {/* Big word */}
                <div style={{ overflow: 'hidden' }}>
                  <span
                    className="rdf-hero-line"
                    style={{
                      display: 'block',
                      fontSize: 'clamp(4rem, 8vw, 9rem)',
                      fontWeight: 900,
                      letterSpacing: '-0.065em',
                      lineHeight: 0.88,
                      color: '#fff',
                      textShadow: '0 0 80px rgba(255,255,255,0.08)',
                    }}
                  >
                    REELS
                  </span>
                </div>

                {/* Red line */}
                <div style={{ overflow: 'hidden' }}>
                  <span
                    className="rdf-hero-line"
                    style={{
                      display: 'block',
                      fontSize: 'clamp(1.6rem, 3.2vw, 3.8rem)',
                      fontWeight: 900,
                      letterSpacing: '-0.04em',
                      lineHeight: 1.05,
                      color: RED,
                      fontStyle: 'italic',
                      textShadow: `0 0 40px rgba(232,0,13,0.45)`,
                    }}
                  >
                    that stop the scroll.
                  </span>
                </div>
              </h1>

              {/* Divider with corner marks */}
              <div
                className="rdf-hero-sub"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  width: '80%', margin: '2rem auto 0', opacity: 0,
                }}
              >
                <span style={{ width: 5, height: 5, borderTop: `1px solid ${RED}`, borderLeft: `1px solid ${RED}`, flexShrink: 0 }} />
                <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(232,0,13,0.5), rgba(255,255,255,0.08))' }} />
                <div style={{ flex: 1, height: 1, background: 'linear-gradient(270deg, rgba(232,0,13,0.5), rgba(255,255,255,0.08))' }} />
                <span style={{ width: 5, height: 5, borderTop: `1px solid ${RED}`, borderRight: `1px solid ${RED}`, flexShrink: 0 }} />
              </div>

              {/* Subtext */}
              <p
                className="rdf-hero-sub"
                style={{
                  maxWidth: '300px', fontSize: 'clamp(0.78rem, 1.1vw, 0.92rem)',
                  color: 'rgba(255,255,255,0.38)', lineHeight: 1.8,
                  margin: '1.25rem auto 0', opacity: 0,
                  letterSpacing: '0.01em',
                }}
              >
                High-performing reels for brands and creators — built to grab
                attention, drive engagement, and convert.
              </p>

              {/* Stats row */}
              <div
                className="rdf-hero-sub"
                style={{
                  display: 'flex', gap: '0', marginTop: '2rem',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                  width: '100%',
                  opacity: 0,
                }}
              >
                {[
                  { num: '50+', label: 'Reels Delivered' },
                  { num: '48h', label: 'Turnaround' },
                  { num: '100%', label: 'Original Content' },
                ].map(({ num, label }, i) => (
                  <div key={label} style={{
                    flex: 1, padding: '1rem 0.5rem',
                    textAlign: 'center',
                    borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                    background: 'rgba(255,255,255,0.02)',
                  }}>
                    <p style={{ margin: 0, fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1 }}>{num}</p>
                    <p style={{ margin: '0.3rem 0 0', fontSize: '0.52rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', fontWeight: 600 }}>{label}</p>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div style={{
                display: 'flex', gap: '0.625rem',
                marginTop: '1.5rem', width: '100%',
              }}>
                <a
                  href="#rdf-contact"
                  className="rdf-hero-btn"
                  style={{
                    flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem',
                    padding: '0.85rem 1rem', borderRadius: '0.4rem',
                    fontWeight: 700, fontSize: '0.82rem', textDecoration: 'none',
                    background: RED, border: `1px solid ${RED}`,
                    color: '#fff', opacity: 0, transition: 'all 0.25s',
                    letterSpacing: '0.02em',
                    boxShadow: `0 4px 24px rgba(232,0,13,0.35)`,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = DARK_RED; e.currentTarget.style.boxShadow = '0 8px 32px rgba(232,0,13,0.5)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = RED; e.currentTarget.style.boxShadow = '0 4px 24px rgba(232,0,13,0.35)'; }}
                >
                  <ArrowRight size={13} /> Get Started
                </a>
                <a
                  href="#rdf-work"
                  className="rdf-hero-btn"
                  style={{
                    flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem',
                    padding: '0.85rem 1rem', borderRadius: '0.4rem',
                    fontWeight: 700, fontSize: '0.82rem', textDecoration: 'none',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.7)', opacity: 0, transition: 'all 0.25s',
                    letterSpacing: '0.02em',
                    backdropFilter: 'blur(8px)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                >
                  <Play size={13} /> Our Work
                </a>
              </div>

              {/* Micro-copy */}
              <p
                className="rdf-hero-micro"
                style={{
                  marginTop: '1.75rem', fontSize: '0.58rem', color: 'rgba(245, 245, 245, 1)',
                  letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0,
                }}
              >
                Shot on iPhone&nbsp;&nbsp;·&nbsp;&nbsp;Edited with Precision&nbsp;&nbsp;·&nbsp;&nbsp;Delivered Fast
              </p>

            </div>

            {/* Scroll indicator */}
            <div
              className="rdf-scroll-ind"
              style={{
                position: 'absolute', bottom: '1.5rem',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.375rem',
                opacity: 0, zIndex: 3,
              }}
            >
              <span style={{ fontSize: '0.55rem', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.18)', textTransform: 'uppercase' }}>Scroll</span>
              <ChevronDown size={13} color="rgba(255, 255, 255, 0.18)" style={{ animation: 'rdfBounce 2s ease-in-out infinite' }} />
            </div>
          </div>

          {/* Right column — scrolls downward (desktop only) */}
          {!isMobile && <ScrollColumn cards={RIGHT_CARDS} direction="down" />}
        </section>

        {/* ═══════════════════ TICKER STRIP ═══════════════════ */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          padding: '0.875rem 0', overflow: 'hidden',
          background: 'rgba(232,0,13,0.025)',
        }}>
          <div className="rdf-ticker-track" style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            width: 'max-content',
            willChange: 'transform',
            animation: 'rdfTicker 90s linear infinite',
          }}>
            {[...Array(24)].map((_, i) => (
              <span key={i} style={{
                display: 'inline-flex', alignItems: 'center', gap: '2rem',
                fontSize: '0.72rem', letterSpacing: '0.12em', color: '#887f7fff',
                textTransform: 'uppercase', fontWeight: 600, paddingRight: '2rem',
              }}>
                <span>Shot on Apple</span>
                <span style={{ color: RED }}>▸</span>
                <span>Edited with Precision</span>
                <span style={{ color: RED }}>▸</span>
                <span>Delivered Fast</span>
                <span style={{ color: RED }}>▸</span>
                <span>Instagram Optimized</span>
                <span style={{ color: RED }}>▸</span>
              </span>
            ))}
          </div>
        </div>

        {/* ═══════════════════ 2. REELS SHOWCASE ═══════════════════ */}
        <section id="rdf-work" style={{ padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto' }}>

            {/* <SectionLabel num="02" text="Our Work" /> */}
            <h2 className="rdf-sh" style={{ ...H2, marginBottom: '1.25rem' }}>
              Our Work Speaks<br />
              <em style={{ color: RED, fontStyle: 'italic' }}>in Seconds.</em>
            </h2>
            <p className="rdf-reveal" style={{ ...BODY, maxWidth: 460, marginBottom: '2.5rem' }}>
              Scroll through real content created for brands and creators.
            </p>

            {/* Filter tabs */}
            <div style={{ display: 'flex', gap: '0.625rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  style={{
                    padding: '0.45rem 1.1rem', borderRadius: '2rem',
                    fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.05em',
                    cursor: 'pointer', outline: 'none',
                    border: `1px solid ${activeFilter === f ? RED : 'rgba(255,255,255,0.1)'}`,
                    background: activeFilter === f ? 'rgba(232,0,13,0.14)' : 'transparent',
                    color: activeFilter === f ? RED : '#555',
                    transition: 'all 0.25s',
                  }}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Reels grid */}
            <div
              className="rdf-stagger"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {filteredReels.map((reel, i) => (
                <ReelCard key={reel.id} reel={reel} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div className="rdf-line-reveal" style={{ height: 1, background: 'rgba(255,255,255,0.06)' }} />
        </div>

        {/* ═══════════════════ 3. WHAT WE DO ═══════════════════ */}
        <section id="rdf-services" style={{ padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            {/* <SectionLabel num="03" text="Services" /> */}
            <h2 className="rdf-sh" style={{ ...H2, marginBottom: '4rem' }}>
              From Idea to<br />
              <em style={{ color: RED, fontStyle: 'italic' }}>Viral Reel.</em>
            </h2>
            <div
              className="rdf-stagger"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {SERVICES.map((svc, i) => <ServiceCard key={i} {...svc} />)}
            </div>
          </div>
        </section>

        {/* ═══════════════════ 4. HOW IT WORKS ═══════════════════ */}
        <section
          id="rdf-process"
          style={{
            padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 4rem)',
            background: 'rgba(255,255,255,0.013)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            {/* <SectionLabel num="04" text="Process" /> */}
            <h2 className="rdf-sh" style={{ ...H2, marginBottom: '4.5rem' }}>
              Simple Process.<br />
              <em style={{ color: RED, fontStyle: 'italic' }}>Powerful Output.</em>
            </h2>
            <div className="rdf-stagger">
              {STEPS.map((step, i) => (
                <ProcessStep key={i} step={step} isLast={i === STEPS.length - 1} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ 5. TOOLS ═══════════════════ */}
        <section style={{ padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            {/* <SectionLabel num="05" text="Tools" /> */}
            <h2 className="rdf-sh" style={{ ...H2, marginBottom: '1.5rem' }}>
              Powered by<br />
              <em style={{ color: RED, fontStyle: 'italic' }}>Industry Tools.</em>
            </h2>
            <p className="rdf-reveal" style={{ ...BODY, maxWidth: 460, marginBottom: '3rem' }}>
              We use professional tools to ensure top-tier quality in every frame.
            </p>

            {/* Tool chips */}
            <div
              className="rdf-stagger"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', marginBottom: '2.5rem' }}
            >
              {TOOLS.map((tool, i) => (
                <div
                  key={i}
                  className="rdf-stagger-child"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.875rem 1.5rem',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '0.5rem',
                    background: 'rgba(255,255,255,0.02)',
                    transition: 'all 0.25s', cursor: 'default',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(232,0,13,0.38)'; e.currentTarget.style.background = 'rgba(232,0,13,0.05)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                >
                  <img
                    src={tool.img}
                    alt={tool.label}
                    style={{
                      height: 20,
                      width: 'auto',
                      objectFit: 'contain',
                      filter: 'brightness(1.1)',
                    }}
                  />
                  <span style={{ fontWeight: 600, fontSize: '0.875rem', color: '#bbb' }}>{tool.label}</span>
                </div>
              ))}
            </div>

            <p className="rdf-reveal" style={{ fontSize: '0.875rem', color: '#c9c0c0ff', fontStyle: 'italic', letterSpacing: '0.04em' }}>
              Right tools. Right edits. Real impact.
            </p>
          </div>
        </section>

        {/* ═══════════════════ 5.5. PROJECTS SHOWCASE (DESKTOP ONLY) ═══════════════════ */}
        {!isMobile && <section
          className="rdf-projects-section"
          style={{
            padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 4rem)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Ambient background glow */}
          <div style={{
            position: 'absolute', top: '30%', left: '40%',
            width: '40vw', height: '40vw', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(232,0,13,0.06) 0%, transparent 65%)',
            pointerEvents: 'none', zIndex: 0,
          }} />

          <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative', zIndex: 1 }}>

            {/* Heading row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                {/* <SectionLabel num="05" text="Reel Styles" /> */}
                <h2 className="rdf-sh" style={{ ...H2, margin: 0 }}>
                  Every Frame<br />
                  <em style={{ color: RED, fontStyle: 'italic' }}>Tells a Story.</em>
                </h2>
              </div>
              <p className="rdf-reveal" style={{ ...BODY, maxWidth: 320, textAlign: 'right' }}>
                Six formats. One studio. Scroll to see our reel in motion.
              </p>
            </div>

            {/* ── Main stage: bento grid + phone overlay ── */}
            <div style={{ position: 'relative', height: 720 }}>

              {/* ── Bento grid (background layer) ── */}
              <div style={{
                position: 'absolute', inset: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                gridTemplateRows: '1fr 1fr',
                gap: 10,
                borderRadius: 24,
                overflow: 'hidden',
              }}>
                {SHOWCASE_PROJECTS.map((proj) => (
                  <BentoVideoCard key={proj.id} proj={proj} />
                ))}
              </div>

              {/* ── Dim + blur overlay (animates in with phone) ── */}
              <div
                className="rdf-bento-overlay"
                style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(8,8,8,0.72)',
                  backdropFilter: 'blur(4px)',
                  WebkitBackdropFilter: 'blur(4px)',
                  borderRadius: 24,
                  opacity: 0,
                  pointerEvents: 'none',
                  zIndex: 5,
                }}
              />

              {/* ── Phone centering wrapper ── */}
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 10, pointerEvents: 'none',
              }}>
                <div className="rdf-mockup-phone" style={{ width: 280, opacity: 0, pointerEvents: 'none' }}>

                  {/* Outer frame */}
                  <div style={{
                    width: '100%',
                    aspectRatio: '9/19.5',
                    borderRadius: 46,
                    background: 'linear-gradient(160deg, #2e2e2e 0%, #141414 55%, #1e1e1e 100%)',
                    border: '1.5px solid rgba(255,255,255,0.12)',
                    boxShadow: [
                      '0 60px 120px rgba(0,0,0,0.8)',
                      '0 24px 48px rgba(0,0,0,0.55)',
                      '0 0 0 1px rgba(255,255,255,0.05)',
                      'inset 0 1px 0 rgba(255,255,255,0.12)',
                      `0 0 60px rgba(232,0,13,0.08)`,
                    ].join(', '),
                    position: 'relative',
                    overflow: 'visible',
                  }}>

                    {/* Hardware buttons */}
                    <div style={{ position: 'absolute', right: -3.5, top: '26%', width: 3.5, height: 62, borderRadius: 4, background: 'linear-gradient(to bottom, #333, #1a1a1a)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }} />
                    <div style={{ position: 'absolute', left: -3.5, top: '20%', width: 3.5, height: 44, borderRadius: 4, background: 'linear-gradient(to bottom, #333, #1a1a1a)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }} />
                    <div style={{ position: 'absolute', left: -3.5, top: '31%', width: 3.5, height: 44, borderRadius: 4, background: 'linear-gradient(to bottom, #333, #1a1a1a)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }} />
                    {/* Silent switch */}
                    <div style={{ position: 'absolute', left: -3.5, top: '14%', width: 3.5, height: 22, borderRadius: 4, background: 'linear-gradient(to bottom, #333, #1a1a1a)' }} />

                    {/* Screen bezel */}
                    <div style={{
                      position: 'absolute', inset: 5,
                      borderRadius: 42,
                      overflow: 'hidden',
                      background: '#060606',
                    }}>
                      {/* Full-screen video */}
                      <video
                        src="/REEL.mp4"
                        autoPlay muted loop playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />

                      {/* Dynamic Island */}
                      <div style={{
                        position: 'absolute', top: 12, left: '50%',
                        transform: 'translateX(-50%)',
                        width: 114, height: 32, borderRadius: 22,
                        background: '#000', zIndex: 5,
                      }} />

                      {/* Status bar */}
                      <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, height: 52,
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, transparent 100%)',
                        display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                        padding: '12px 18px 0',
                        fontSize: '0.58rem', fontWeight: 700, color: '#fff',
                        zIndex: 4,
                      }}>
                        <span>9:41</span>
                        <span style={{ opacity: 0.65 }}>▲▲▲</span>
                      </div>

                      {/* Screen edge glow */}
                      <div style={{
                        position: 'absolute', inset: 0,
                        borderRadius: 42,
                        boxShadow: 'inset 0 0 60px rgba(232,0,13,0.06)',
                        pointerEvents: 'none', zIndex: 3,
                      }} />

                      {/* Gloss */}
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 45%)',
                        pointerEvents: 'none', zIndex: 4,
                      }} />

                      {/* Home bar */}
                      <div style={{
                        position: 'absolute', bottom: 10, left: '50%',
                        transform: 'translateX(-50%)',
                        width: 108, height: 5, borderRadius: 5,
                        background: 'rgba(255,255,255,0.3)', zIndex: 4,
                      }} />
                    </div>
                  </div>

                  {/* Red glow pool beneath phone */}
                  <div style={{
                    width: '55%', height: 20, margin: '6px auto 0',
                    background: 'radial-gradient(ellipse, rgba(232,0,13,0.35) 0%, transparent 70%)',
                    filter: 'blur(10px)',
                  }} />
                </div>
              </div>
            </div>
          </div>
        </section>}

        {/* ═══════════════════ 6. WHY CHOOSE US ═══════════════════ */}
        <section style={{
          padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 4rem)',
          background: 'rgba(255,255,255,0.013)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          <div style={{
            maxWidth: 1200, margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'center',
          }}>
            {/* Left – heading */}
            <div>
              {/* <SectionLabel num="06" text="Why Us" /> */}
              <h2 className="rdf-sh" style={H2}>
                Why Brands<br />
                <em style={{ color: RED, fontStyle: 'italic' }}>Trust Us.</em>
              </h2>
            </div>

            {/* Right – checklist */}
            <div className="rdf-stagger" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {WHY_US.map((item, i) => (
                <div key={i} className="rdf-stagger-child" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: '50%', flexShrink: 0, marginTop: 1,
                    background: 'rgba(232,0,13,0.12)',
                    border: '1px solid rgba(232,0,13,0.28)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Check size={12} color={RED} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: '1rem', color: '#cfbfbfff', lineHeight: 1.65 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ 7. FOR YOU ═══════════════════ */}
        <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          }}>

            {/* ── Left: Individuals (redesigned) ── */}
            <div style={{
              padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 5vw, 5rem)',
              borderRight: '1px solid rgba(255,255,255,0.05)',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Ghost watermark */}
              <span style={{
                position: 'absolute', bottom: '-0.15em', right: '-0.05em',
                fontSize: 'clamp(10rem, 20vw, 18rem)', fontWeight: 900, lineHeight: 1,
                color: 'rgba(255,255,255,0.016)', letterSpacing: '-0.06em',
                pointerEvents: 'none', userSelect: 'none',
              }}>01</span>

              <div style={{ position: 'relative', zIndex: 1 }}>

                {/* Eyebrow */}
                {/* <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '2.25rem' }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: RED, display: 'inline-block', animation: 'rdfPulse 2s ease-in-out infinite', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.63rem', fontWeight: 800, letterSpacing: '0.2em', color: '#ffffffff', textTransform: 'uppercase' }}>
                    For Creators & Individuals
                  </span>
                </div> */}

                {/* Heading */}
                <h2 className="rdf-sh" style={{ ...H2, fontSize: 'clamp(2.6rem, 5vw, 5rem)', lineHeight: 0.95, marginBottom: 0 }}>
                  Your Audience<br />Is Watching.
                </h2>
                <h2 style={{ ...H2, fontSize: 'clamp(2.6rem, 5vw, 5rem)', lineHeight: 0.95, margin: '0 0 1.75rem' }}>
                  <em style={{ color: RED, fontStyle: 'italic' }}>Are You Ready?</em>
                </h2>

                {/* Descriptor */}
                <p style={{ color: '#aa9c9cff', lineHeight: 1.78, fontSize: 'clamp(0.9rem, 1.3vw, 1rem)', maxWidth: 400, marginBottom: '2.75rem' }}>
                  We build reels that earn followers, save attention, and make algorithms work for you — crafted for your specific niche and voice.
                </p>

                {/* Stats row */}
                <div style={{
                  display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem', paddingTop: '2rem',
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                  marginBottom: '2.5rem',
                }}>
                  {[
                    { num: '3×', label: 'Higher Reach' },
                    { num: '48h', label: 'Delivery Time' },
                    { num: '100%', label: 'Yours to Post' },
                  ].map(({ num, label }) => (
                    <div key={label}>
                      <p style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 900, letterSpacing: '-0.045em', color: '#fff', margin: 0, lineHeight: 1 }}>{num}</p>
                      <p style={{ fontSize: '0.65rem', color: '#a39e9eff', margin: '0.45rem 0 0', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</p>
                    </div>
                  ))}
                </div>

                {/* Feature pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.75rem' }}>
                  {['Hook-first edits', 'Trending audio', 'Niche storytelling', 'Fast turnaround', 'Platform ready'].map((tag) => (
                    <span key={tag} style={{
                      padding: '0.38rem 0.9rem',
                      borderRadius: '2rem',
                      border: '1px solid rgba(255,255,255,0.08)',
                      background: 'rgba(255,255,255,0.025)',
                      fontSize: '0.78rem', color: '#c9bfbfff', fontWeight: 500,
                      letterSpacing: '0.01em',
                    }}>{tag}</span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#rdf-connect"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                    padding: '0.85rem 1.75rem', borderRadius: '0.4rem',
                    fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none',
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.16)',
                    color: '#888', transition: 'all 0.25s', letterSpacing: '0.02em',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.16)';
                    e.currentTarget.style.color = '#888';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Start Your Journey <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* ── Right: Brands ── */}
            <div style={{
              padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 5vw, 5rem)',
              position: 'relative', overflow: 'hidden',
              background: 'rgba(232,0,13,0.022)',
            }}>
              {/* Red top accent bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(to right, ${RED}, transparent 70%)` }} />

              {/* Ghost number */}
              <span style={{
                position: 'absolute', bottom: '-0.15em', right: '-0.05em',
                fontSize: 'clamp(10rem, 20vw, 18rem)', fontWeight: 900, lineHeight: 1,
                color: 'rgba(232,0,13,0.04)', letterSpacing: '-0.06em',
                pointerEvents: 'none', userSelect: 'none',
              }}>02</span>

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Label row */}
                {/* <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.75rem' }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: '50%',
                    background: 'rgba(232,0,13,0.12)',
                    border: '1px solid rgba(232,0,13,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Building2 size={21} color={RED} />
                  </div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', color: RED, textTransform: 'uppercase' }}>For Brands</span>
                </div> */}

                <h2 className="rdf-sh" style={{ ...H2, fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)', marginBottom: '1.5rem' }}>
                  Scale Content.<br />Stay Consistent.
                </h2>

                <p style={{ color: '#ada4a4ff', lineHeight: 1.78, fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)', maxWidth: 400, marginBottom: '2.5rem' }}>
                  Bulk reel production for brands that never stop posting. On-brand visuals, consistent style, fast turnaround — every month.
                </p>

                {/* Feature list */}
                <div className="rdf-stagger" style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '3rem' }}>
                  {['Monthly bulk delivery packages', 'Brand kit integration', 'Dedicated creative direction', 'Analytics-informed editing'].map((f) => (
                    <div key={f} className="rdf-stagger-child" style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                      <div style={{
                        width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                        background: 'rgba(232,0,13,0.1)',
                        border: '1px solid rgba(232,0,13,0.28)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Check size={10} color={RED} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: '0.9rem', color: '#fff8f8ff', lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#rdf-connect"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 700, color: RED, textDecoration: 'none', letterSpacing: '0.02em', transition: 'gap 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.gap = '0.9rem'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.gap = '0.5rem'; }}
                >
                  Explore Bulk Pricing <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ 8. CONNECT ═══════════════════ */}
        <section
          id="rdf-connect"
          style={{
            padding: 'clamp(5rem, 12vw, 11rem) clamp(1.5rem, 5vw, 4rem)',
            position: 'relative', overflow: 'hidden',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          {/* Ambient glow */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 55% at 50% 55%, rgba(232,0,13,0.09), transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent, ${RED}, transparent)`, opacity: 0.35 }} />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
            {/* <SectionLabel num="08" text="Connect" center /> */}

            <h2
              className="rdf-cta-headline"
              style={{
                fontSize: 'clamp(3.2rem, 9vw, 9rem)',
                fontWeight: 900, letterSpacing: '-0.055em', lineHeight: 0.93,
                margin: '0 auto 1.75rem',
              }}
            >
              Let's Make<br />
              <em style={{ color: RED, fontStyle: 'italic' }}>Something.</em>
            </h2>

            <p className="rdf-reveal" style={{
              color: '#4a4a4a', fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              lineHeight: 1.75, maxWidth: 380, margin: '0 auto 4.5rem',
            }}>
              Reach out on your preferred platform — we respond fast.
            </p>

            {/* Platform cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
              maxWidth: 740, margin: '0 auto 5rem',
            }}>

              {/* ── Instagram card ── */}
              <a
                href="https://www.instagram.com/rdf_ads?igsh=MTdrYzB5aGNmYjRpeQ=="
                target="_blank" rel="noopener noreferrer"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div
                  className="rdf-connect-card"
                  style={{
                    padding: '2.75rem',
                    borderRadius: '1.375rem',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    textAlign: 'left',
                    transition: 'all 0.38s cubic-bezier(0.34,1.56,0.64,1)',
                    position: 'relative', overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(200,60,160,0.07)';
                    e.currentTarget.style.borderColor = 'rgba(200,60,160,0.38)';
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 24px 56px rgba(180,40,140,0.18)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: 56, height: 56, borderRadius: '1.1rem',
                    background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '2rem',
                    boxShadow: '0 8px 24px rgba(200,40,140,0.35)',
                  }}>
                    <Instagram size={28} color="#fff" />
                  </div>

                  <span style={{ fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#3a3a3a', display: 'block', marginBottom: '0.5rem' }}>
                    Instagram
                  </span>
                  <p style={{ fontWeight: 900, fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)', letterSpacing: '-0.03em', color: '#fff', margin: '0 0 0.875rem', lineHeight: 1.1 }}>
                    @rdf_ads
                  </p>
                  <p style={{ color: '#3a3a3a', fontSize: '0.9rem', lineHeight: 1.7, margin: '0 0 2.25rem' }}>
                    Follow our work, DM for projects, and see what we're creating right now.
                  </p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', fontWeight: 700, color: '#444', letterSpacing: '0.02em' }}>
                    Open Instagram <ArrowRight size={13} />
                  </span>
                </div>
              </a>

              {/* ── Email card ── */}
              <a
                href="mailto:connect@viscano.com"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div
                  className="rdf-connect-card"
                  style={{
                    padding: '2.75rem',
                    borderRadius: '1.375rem',
                    background: 'rgba(232,0,13,0.03)',
                    border: '1px solid rgba(232,0,13,0.12)',
                    textAlign: 'left',
                    transition: 'all 0.38s cubic-bezier(0.34,1.56,0.64,1)',
                    position: 'relative', overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(232,0,13,0.07)';
                    e.currentTarget.style.borderColor = 'rgba(232,0,13,0.38)';
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 24px 56px rgba(232,0,13,0.14)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(232,0,13,0.03)';
                    e.currentTarget.style.borderColor = 'rgba(232,0,13,0.12)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: 56, height: 56, borderRadius: '1.1rem',
                    background: RED,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '2rem',
                    boxShadow: `0 8px 24px rgba(232,0,13,0.3)`,
                  }}>
                    <Mail size={28} color="#fff" />
                  </div>

                  <span style={{ fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#3a3a3a', display: 'block', marginBottom: '0.5rem' }}>
                    Email
                  </span>
                  <p style={{ fontWeight: 900, fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)', letterSpacing: '-0.03em', color: '#fff', margin: '0 0 0.875rem', lineHeight: 1.1 }}>
                    Write to Us
                  </p>
                  <p style={{ color: '#3a3a3a', fontSize: '0.9rem', lineHeight: 1.7, margin: '0 0 2.25rem' }}>
                    For detailed inquiries, partnership proposals, or project briefs. We usually respond within 24 hours.
                  </p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', fontWeight: 700, color: '#444', letterSpacing: '0.02em' }}>
                    Send Email <ArrowRight size={13} />
                  </span>
                </div>
              </a>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: 'rgba(228, 219, 219, 0.05)', maxWidth: 400, margin: '0 auto 2.5rem' }} />

            {/* Micro tagline */}
            <p style={{ fontSize: '0.7rem', color: '#ccbebeff', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              Shot on Apple&nbsp;&nbsp;·&nbsp;&nbsp;Edited with Precision&nbsp;&nbsp;·&nbsp;&nbsp;Delivered Fast
            </p>
          </div>
        </section>

        {/* ── Minimal footer strip ── */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '1.5rem clamp(1.5rem, 5vw, 4rem)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '0.5rem',
        }}>
          <span style={{ fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-0.07em', color: RED }}>RDF</span>
          <span style={{ fontSize: '0.72rem', color: '#242424', letterSpacing: '0.08em' }}>© 2025 RDF · All rights reserved.</span>
        </div>

        {/* ═══════════════════ Global Keyframes ═══════════════════ */}
        <style>{`
        @keyframes rdfPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(0.75); }
        }
        @keyframes rdfShimmer {
          0% { opacity: 0.4; transform: translateX(-50%) scaleX(0.7); }
          50% { opacity: 1; transform: translateX(-50%) scaleX(1); }
          100% { opacity: 0.4; transform: translateX(-50%) scaleX(0.7); }
        }
        @keyframes rdfBounce {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(6px); opacity: 1; }
        }
        @keyframes rdfTicker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes rdfScrollUp {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
        @keyframes rdfScrollDown {
          from { transform: translateY(-50%); }
          to   { transform: translateY(0); }
        }
        .rdf-nav-links { display: flex; }
        @media (max-width: 640px) {
          .rdf-nav-links { display: none !important; }
        }
        @media (max-width: 768px) {
          .rdf-hero-column { display: none !important; }
          .rdf-hero-section { grid-template-columns: 1fr !important; }
        }
        .rdf-projects-section { display: block; }
        @media (min-width: 1024px) {
          .rdf-hero-with-visnav { padding-top: 9.5rem !important; }
        }
        @media (max-width: 1023px) {
          .rdf-projects-section { display: none !important; }
          .rdf-internal-nav { top: 0 !important; }
        }
      `}</style>
      </div>
    </>
  );
}
