export function Logo({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <rect width="64" height="64" rx="16" fill="var(--blue-600)" />
      <path d="M32 10c8 10 14 17.5 14 25a14 14 0 1 1-28 0c0-7.5 6-15 14-25z" fill="#fff" />
      <path
        d="M22 38c2.5 2 5 2 7.5 0s5-2 7.5 0 4 1.6 5 .8"
        stroke="var(--blue-600)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconMap({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 4 3 6.5v13L9 17l6 2.5 6-2.5v-13L15 6.5 9 4z" />
      <path d="M9 4v13M15 6.5v13" />
    </svg>
  )
}

export function IconSiren({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 18v-5a5 5 0 0 1 10 0v5" />
      <path d="M5 18h14v3H5z" />
      <path d="M12 3v2M4.5 6.5 6 8M19.5 6.5 18 8" />
    </svg>
  )
}

export function IconWarning({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3.5 22 20H2L12 3.5z" />
      <path d="M12 10v4.5M12 17.4v.1" />
    </svg>
  )
}

export function IconShelter({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 11 9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M12 12.2s2.8.6 2.8 2.3c0 2.3-2.8 3.5-2.8 3.5s-2.8-1.2-2.8-3.5c0-1.7 2.8-2.3 2.8-2.3z" />
    </svg>
  )
}

export function IconCamera({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 8h3l2-2.5h6L17 8h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
      <circle cx="12" cy="13.5" r="3.5" />
    </svg>
  )
}

export function IconBell({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9.5a6 6 0 0 1 12 0c0 5 2 6.5 2 6.5H4s2-1.5 2-6.5z" />
      <path d="M10 19.5a2.2 2.2 0 0 0 4 0" />
    </svg>
  )
}

export function IconThumb({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 10v11H3.5V10H7z" />
      <path d="M7 11.5 11 4a2.3 2.3 0 0 1 2.2 2.8l-.7 3.2h6a2 2 0 0 1 2 2.4l-1.2 6A2 2 0 0 1 17.3 20H9a2 2 0 0 1-2-2v-6.5z" />
    </svg>
  )
}

export function IconChat({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a8 8 0 0 1-8 8H4l2.3-2.9A8 8 0 1 1 21 12z" />
      <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
    </svg>
  )
}

export function IconPin({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

export function IconRoute({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="19" r="2.5" />
      <circle cx="18" cy="5" r="2.5" />
      <path d="M8.5 19H15a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h6.5" strokeDasharray="3 3" />
    </svg>
  )
}

export function IconRain({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 15a5 5 0 1 1 .8-9.9A6 6 0 0 1 19 7.5 4 4 0 0 1 18 15H7z" />
      <path d="M8 18l-1 2.5M12.5 18l-1 2.5M17 18l-1 2.5" />
    </svg>
  )
}

export function GooglePlayIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.3 2.4 13.9 12 4.3 21.6c-.4-.2-.7-.7-.7-1.3V3.7c0-.6.3-1.1.7-1.3zM15.3 13.4l2.6 2.6-11.4 6.4 8.8-9zM20.9 10.7c.9.5.9 1.8 0 2.4l-2.3 1.3-2.9-2.6 2.9-2.6 2.3 1.5zM6.5 1.6l11.4 6.4-2.6 2.6-8.8-9z" />
    </svg>
  )
}

export function AppleIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 12.54c-.03-2.62 2.14-3.87 2.23-3.93-1.21-1.78-3.1-2.02-3.78-2.05-1.6-.16-3.13.95-3.95.95-.82 0-2.07-.93-3.41-.9-1.75.03-3.37 1.02-4.27 2.59-1.82 3.16-.46 7.84 1.31 10.4.87 1.25 1.9 2.66 3.26 2.61 1.31-.05 1.8-.85 3.38-.85s2.02.85 3.4.82c1.41-.02 2.3-1.28 3.16-2.54 1-1.45 1.4-2.86 1.43-2.93-.03-.02-2.73-1.05-2.76-4.17zM14.44 4.7c.72-.88 1.21-2.1 1.08-3.32-1.04.04-2.31.7-3.06 1.57-.67.78-1.26 2.02-1.1 3.21 1.16.09 2.35-.59 3.08-1.46z" />
    </svg>
  )
}

export function CloudBg({ className }) {
  return (
    <svg className={className} viewBox="0 0 120 60" fill="currentColor">
      <ellipse cx="40" cy="42" rx="30" ry="16" />
      <ellipse cx="70" cy="34" rx="26" ry="18" />
      <ellipse cx="94" cy="44" rx="22" ry="13" />
    </svg>
  )
}
