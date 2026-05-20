// Inline SVG icons — small, single-stroke set.
const Icon = ({ d, size = 20, stroke = 1.7, fill = "none" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {d}
  </svg>
);

const I = {
  Play: (p) => (
    <Icon
      {...p}
      d={<polygon points="6 4 20 12 6 20 6 4" fill="currentColor" stroke="none" />}
    />
  ),
  ArrowRight: (p) => (
    <Icon
      {...p}
      d={
        <>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="13 6 19 12 13 18" />
        </>
      }
    />
  ),
  Plus: (p) => (
    <Icon
      {...p}
      d={
        <>
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </>
      }
    />
  ),
  CheckCircle: (p) => (
    <Icon
      {...p}
      d={
        <>
          <circle cx="12" cy="12" r="9" />
          <polyline points="8 12 11 15 16 9" />
        </>
      }
    />
  ),
  Bed: (p) => (
    <Icon
      {...p}
      d={
        <>
          <path d="M3 17V8m0 9h18V13a3 3 0 0 0-3-3H3" />
          <circle cx="7.5" cy="11.5" r="1.5" />
        </>
      }
    />
  ),
  Bath: (p) => (
    <Icon
      {...p}
      d={
        <>
          <path d="M3 11h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
          <path d="M7 11V6a2 2 0 0 1 4 0v1" />
          <line x1="5" y1="18" x2="5" y2="21" />
          <line x1="19" y1="18" x2="19" y2="21" />
        </>
      }
    />
  ),
  Ruler: (p) => (
    <Icon
      {...p}
      d={
        <>
          <rect x="2" y="9" width="20" height="6" rx="1" />
          <path d="M6 9v3M10 9v4M14 9v3M18 9v4" />
        </>
      }
    />
  ),
  Wifi: (p) => (
    <Icon
      {...p}
      d={
        <>
          <path d="M5 12.55a11 11 0 0 1 14 0" />
          <path d="M2 8.82a16 16 0 0 1 20 0" />
          <path d="M8.5 16.43a6 6 0 0 1 7 0" />
          <circle cx="12" cy="20" r="0.8" fill="currentColor" />
        </>
      }
    />
  ),
  Pool: (p) => (
    <Icon
      {...p}
      d={
        <>
          <path d="M2 17c2 0 2 2 5 2s3-2 5-2 3 2 5 2 3-2 5-2" />
          <path d="M2 21c2 0 2-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1" />
          <path d="M7 14V6a2 2 0 0 1 4 0" />
          <path d="M13 14V6a2 2 0 0 1 4 0" />
        </>
      }
    />
  ),
  Shield: (p) => (
    <Icon
      {...p}
      d={
        <>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
          <polyline points="9 12 11 14 15 10" />
        </>
      }
    />
  ),
  Leaf: (p) => (
    <Icon
      {...p}
      d={
        <>
          <path d="M4 20s1-9 8-13c5-3 9 0 9 4-1 8-9 10-13 9z" />
          <path d="M4 20c3-4 7-7 11-9" />
        </>
      }
    />
  ),
  Building: (p) => (
    <Icon
      {...p}
      d={
        <>
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <line x1="8" y1="7" x2="10" y2="7" />
          <line x1="14" y1="7" x2="16" y2="7" />
          <line x1="8" y1="11" x2="10" y2="11" />
          <line x1="14" y1="11" x2="16" y2="11" />
          <line x1="8" y1="15" x2="10" y2="15" />
          <line x1="14" y1="15" x2="16" y2="15" />
        </>
      }
    />
  ),
  Dumbbell: (p) => (
    <Icon
      {...p}
      d={
        <>
          <path d="M4 9v6M7 7v10M17 7v10M20 9v6" />
          <line x1="7" y1="12" x2="17" y2="12" />
        </>
      }
    />
  ),
  Tennis: (p) => (
    <Icon
      {...p}
      d={
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3.5 9a6 6 0 0 1 6 6" />
          <path d="M20.5 15a6 6 0 0 0-6-6" />
        </>
      }
    />
  ),
  Laundry: (p) => (
    <Icon
      {...p}
      d={
        <>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <circle cx="12" cy="13" r="4" />
          <circle cx="7" cy="6.5" r="0.5" fill="currentColor" />
          <circle cx="10" cy="6.5" r="0.5" fill="currentColor" />
        </>
      }
    />
  ),
  MapPin: (p) => (
    <Icon
      {...p}
      d={
        <>
          <path d="M12 22s8-7.5 8-13a8 8 0 1 0-16 0c0 5.5 8 13 8 13z" />
          <circle cx="12" cy="9" r="2.5" />
        </>
      }
    />
  ),
  Sparkle: (p) => (
    <Icon
      {...p}
      d={
        <>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
        </>
      }
    />
  ),
  Door: (p) => (
    <Icon
      {...p}
      d={
        <>
          <rect x="6" y="3" width="12" height="18" rx="1" />
          <circle cx="14.5" cy="12" r="0.6" fill="currentColor" />
        </>
      }
    />
  ),
  Wrench: (p) => (
    <Icon
      {...p}
      d={
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6.6 6.6a1.4 1.4 0 1 0 2 2l6.6-6.6a4 4 0 0 0 5.4-5.4l-2.4 2.4-2-.6-.6-2z" />
      }
    />
  ),
  Phone: (p) => (
    <Icon
      {...p}
      d={
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      }
    />
  ),
  HomeHeart: (p) => (
    <Icon
      {...p}
      d={
        <>
          <path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9 15c1.5-2 4-2 3-4.5 0 0-1-1.5-3 0-2-1.5-3 0-3 0-1 2.5 1.5 2.5 3 4.5z" />
        </>
      }
    />
  ),
  Money: (p) => (
    <Icon
      {...p}
      d={
        <>
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <circle cx="12" cy="12" r="2.5" />
          <line x1="5" y1="10" x2="5" y2="14" />
          <line x1="19" y1="10" x2="19" y2="14" />
        </>
      }
    />
  ),
  Plane: (p) => (
    <Icon
      {...p}
      d={
        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />
      }
    />
  ),
  Key: (p) => (
    <Icon
      {...p}
      d={
        <>
          <circle cx="8" cy="15" r="4" />
          <path d="M11 12l9-9 1 4-2 1 1 3-2 1-2 2" />
        </>
      }
    />
  ),
  Lock: (p) => (
    <Icon
      {...p}
      d={
        <>
          <rect x="4" y="10" width="16" height="11" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </>
      }
    />
  ),
  IG: (p) => (
    <Icon
      {...p}
      d={
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
        </>
      }
    />
  ),
  FB: (p) => (
    <Icon
      {...p}
      d={<path d="M16 8h-3a1 1 0 0 0-1 1v3H9v3h3v6h3v-6h2.5l.5-3H15v-2a1 1 0 0 1 1-1h2V5h-3a4 4 0 0 0-4 4v3" />}
    />
  ),
  TT: (p) => (
    <Icon
      {...p}
      d={
        <path d="M16 4v3.5a4.5 4.5 0 0 0 4 4.4V15a7.5 7.5 0 0 1-4-1.2v4.7a5 5 0 1 1-5-5v3a2 2 0 1 0 2 2V4z" />
      }
    />
  ),
  YT: (p) => (
    <Icon
      {...p}
      d={
        <>
          <rect x="2" y="6" width="20" height="12" rx="3" />
          <polygon points="10 9.5 15 12 10 14.5" fill="currentColor" stroke="none" />
        </>
      }
    />
  ),
};

window.I = I;
