import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
}

export function Eyebrow({ children, light = false, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${
        light ? 'text-gold-300' : 'text-plum-600'
      } ${className}`}
    >
      <span className={`h-px w-6 ${light ? 'bg-gold-300' : 'bg-plum-500'}`} />
      {children}
    </span>
  )
}

export function SectionHeading({ eyebrow, title, intro, light = false, center = false, className = '' }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-plum-900'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-plum-100/80' : 'text-slate'}`}>
          {intro}
        </p>
      )}
    </div>
  )
}

const variants = {
  primary:
    'bg-plum-600 text-white hover:bg-plum-800 shadow-[0_10px_24px_-12px_rgba(108,46,181,.7)]',
  gold: 'bg-gold-400 text-plum-950 hover:bg-gold-300 shadow-[0_10px_24px_-12px_rgba(212,164,58,.8)]',
  outline: 'border border-plum-300 text-plum-800 hover:bg-plum-50 hover:border-plum-500',
  ghostLight: 'border border-white/25 text-white hover:bg-white/10',
  whatsapp: 'bg-[#25D366] text-[#0B2E1A] hover:bg-[#3ee07a]',
}

export function Button({ to, href, variant = 'primary', arrow = false, className = '', children, ...rest }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-500 ${variants[variant]} ${className}`
  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />}
    </>
  )
  if (to)
    return (
      <Link to={to} className={`group ${cls}`} {...rest}>
        {content}
      </Link>
    )
  if (href)
    return (
      <a href={href} className={`group ${cls}`} {...rest}>
        {content}
      </a>
    )
  return (
    <button className={`group ${cls}`} {...rest}>
      {content}
    </button>
  )
}

export function PageHero({ eyebrow, title, intro, children }) {
  return (
    <section className="relative overflow-hidden bg-plum-950 text-white">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden />
      <Container className="relative pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div className="max-w-3xl animate-fade-up">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-plum-100/80">{intro}</p>}
          {children}
        </div>
      </Container>
    </section>
  )
}

export function WhatsAppIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.21-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.04c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.91.99 6.7 2.78a9.4 9.4 0 0 1 2.77 6.7c0 5.22-4.25 9.47-9.47 9.47zm8.06-17.53A11.33 11.33 0 0 0 12.04.63C5.76.63.65 5.74.65 12.02c0 2 .52 3.97 1.52 5.7L.55 23.63l6.04-1.58a11.36 11.36 0 0 0 5.44 1.39h.01c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.19-5.9-3.33-8.05z" />
    </svg>
  )
}

export function Flag({ code, className = 'h-7 w-10' }) {
  const common = { className: `${className} overflow-hidden rounded-[4px] ring-1 ring-ink/10`, preserveAspectRatio: 'none' }
  switch (code) {
    case 'cm':
      return (
        <svg viewBox="0 0 3 2" {...common} aria-hidden>
          <rect width="1" height="2" fill="#007A5E" />
          <rect width="1" height="2" x="1" fill="#CE1126" />
          <rect width="1" height="2" x="2" fill="#FCD116" />
          <path fill="#FCD116" d="M1.5.72l.07.21h.22l-.18.13.07.21-.18-.13-.18.13.07-.21-.18-.13h.22z" />
        </svg>
      )
    case 'us':
      return (
        <svg viewBox="0 0 19 10" {...common} aria-hidden>
          <rect width="19" height="10" fill="#fff" />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <rect key={i} y={i * 2 * (10 / 13)} width="19" height={10 / 13} fill="#B22234" />
          ))}
          <rect width="7.6" height={(10 / 13) * 7} fill="#3C3B6E" />
        </svg>
      )
    case 'sk':
      return (
        <svg viewBox="0 0 3 2" {...common} aria-hidden>
          <rect width="3" height=".67" fill="#fff" />
          <rect width="3" height=".67" y=".67" fill="#0B4EA2" />
          <rect width="3" height=".67" y="1.33" fill="#EE1C25" />
        </svg>
      )
    case 'cz':
      return (
        <svg viewBox="0 0 3 2" {...common} aria-hidden>
          <rect width="3" height="1" fill="#fff" />
          <rect width="3" height="1" y="1" fill="#D7141A" />
          <polygon points="0,0 0,2 1.5,1" fill="#11457E" />
        </svg>
      )
    default:
      return null
  }
}
