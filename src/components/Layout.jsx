import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { NAV, CONTACT, LOCATIONS, waLink, asset } from '../data/content'
import { Container, Button, WhatsAppIcon } from './ui'

function Logo({ light }) {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="Dr. Mbeng & Partners — home">
      <img
        src={asset(light ? 'images/logo-mark-white.png' : 'images/logo-mark.png')}
        alt=""
        width="44"
        height="41"
        className="h-10 w-auto"
      />
      <span className="leading-tight">
        <span className={`block text-[0.95rem] font-bold tracking-tight ${light ? 'text-white' : 'text-brand'}`}>
          Dr. MBENG &amp; PARTNERS
        </span>
        <span className={`block text-[0.72rem] font-medium ${light ? 'text-plum-200' : 'text-brand/80'}`}>
          Providing Sustainable Solutions
        </span>
      </span>
    </Link>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // All pages open on a dark hero, so the bar is transparent/light until scrolled.
  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'border-b border-plum-200/70 bg-white/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <Container className="flex h-[76px] items-center justify-between gap-6">
        <Logo light={!solid} />

        <nav className="hidden lg:block" aria-label="Main">
          <ul className="flex items-center gap-1">
            {NAV.filter((n) => n.to !== '/contact').map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      solid
                        ? isActive
                          ? 'bg-plum-50 text-plum-700'
                          : 'text-ink hover:text-plum-600'
                        : isActive
                          ? 'bg-white/10 text-white'
                          : 'text-plum-100 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact" variant={solid ? 'primary' : 'gold'} className="!px-5 !py-2.5">
            Get in touch
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className={`grid h-11 w-11 place-items-center rounded-full lg:hidden ${solid ? 'text-plum-900 hover:bg-plum-50' : 'text-white hover:bg-white/10'}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <nav id="mobile-nav" className="max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-plum-100 bg-white lg:hidden" aria-label="Mobile">
          <Container className="py-4">
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `flex items-center justify-between border-b border-plum-100 py-4 text-base font-medium ${
                        isActive ? 'text-plum-600' : 'text-ink'
                      }`
                    }
                  >
                    {item.label}
                    <ArrowUpRight className="h-4 w-4 text-plum-300" />
                  </NavLink>
                </li>
              ))}
            </ul>
            <Button href={waLink()} variant="whatsapp" className="mt-6 w-full" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Chat on WhatsApp
            </Button>
          </Container>
        </nav>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-plum-950 text-plum-100" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      <Container className="grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-plum-200/80">
            Executive training and advisory services building capable organizations and more peaceful communities.
          </p>
          <p className="mt-6 font-display text-lg italic text-gold-300">“We don’t push people, we push passion.”</p>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-plum-300">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-plum-100/90 transition hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-plum-300">Offices</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {LOCATIONS.map((l) => (
              <li key={l.country} className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                <span>
                  <span className="font-medium text-white">{l.country}</span>
                  <span className="block text-plum-200/70">{l.address}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-plum-300">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 break-all text-plum-100/90 hover:text-white">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" aria-hidden /> {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-plum-100/90 hover:text-white">
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#25D366]" /> {CONTACT.whatsappDisplay}
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-plum-300 sm:flex-row">
          <span>© {new Date().getFullYear()} Dr. Mbeng &amp; Partners. All rights reserved.</span>
          <span>Yaoundé · Orofino · Kremnica · Neratovice</span>
        </Container>
      </div>
    </footer>
  )
}

function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,.7)] transition hover:scale-105"
      style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}

export default function Layout() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) return el.scrollIntoView({ behavior: 'smooth' })
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2">
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
