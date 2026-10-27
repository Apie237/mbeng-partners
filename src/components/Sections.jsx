import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Quote, Lightbulb, Mail, CheckCircle2, Loader2 } from 'lucide-react'
import { BRANCHES, INSTITUTIONS, TESTIMONIALS, CONTACT, waLink } from '../data/content'
import { Container, SectionHeading, Button, WhatsAppIcon } from './ui'

/* ---------- Credentials strip ---------- */
export function InstitutionsStrip({ dark = false }) {
  return (
    <div className={dark ? 'border-y border-white/10 bg-plum-950' : 'border-y border-plum-100 bg-white'}>
      <Container className="py-8">
        <p className={`text-center text-xs font-semibold uppercase tracking-[0.18em] ${dark ? 'text-plum-300' : 'text-slate'}`}>
          Credentialed with &amp; trusted by
        </p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {INSTITUTIONS.map((name) => (
            <li key={name} className={`font-display text-base font-medium sm:text-lg ${dark ? 'text-plum-100/80' : 'text-plum-800/70'}`}>
              {name}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

/* ---------- Branches: hub & spoke grid ---------- */
export function BranchesGrid() {
  const ring = [...BRANCHES]
  // Order cells for a 3×3 grid with the hub in the middle.
  const cells = [ring[7], ring[0], ring[1], ring[6], 'hub', ring[2], ring[5], ring[4], ring[3]]

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-6 hidden rounded-[2rem] border border-dashed border-plum-200 lg:block" aria-hidden />
      <ul className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {cells.map((b, i) =>
          b === 'hub' ? (
            <li
              key="hub"
              className="order-first flex flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-plum-700 via-plum-800 to-plum-950 p-8 text-center text-white shadow-soft sm:col-span-2 lg:order-none lg:col-span-1"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white/10 ring-1 ring-white/20">
                <Lightbulb className="h-8 w-8 text-gold-300" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold">Management</h3>
              <p className="mt-2 text-sm text-plum-100/80">The hub that connects every branch into one holistic approach.</p>
            </li>
          ) : (
            <li
              key={b.title}
              className="group relative flex items-start gap-4 rounded-3xl border border-plum-100 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-plum-300"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-plum-50 text-plum-600 transition group-hover:bg-plum-600 group-hover:text-white">
                <b.icon className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <span className={`text-[0.68rem] font-semibold uppercase tracking-[0.14em] ${b.practice === 'peace' ? 'text-gold-600' : 'text-plum-500'}`}>
                  {b.practice === 'peace' ? 'Peacebuilding' : 'Corporate'}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-plum-900">{b.title}</h3>
              </div>
            </li>
          ),
        )}
      </ul>
    </div>
  )
}

/* ---------- Testimonials ---------- */
function Initials({ name, light = false }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
  return (
    <span
      className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-semibold ${
        light ? 'bg-gold-400 text-plum-950' : 'bg-plum-100 text-plum-700'
      }`}
      aria-hidden
    >
      {initials}
    </span>
  )
}

export function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS
  return (
    <section className="bg-sand py-24">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="In the words of those we’ve trained"
          intro="Feedback from students and participants in Dr. Mbeng’s programs."
          center
        />

        <figure className="relative mt-14 overflow-hidden rounded-[2rem] bg-plum-900 p-8 text-white shadow-soft sm:p-12">
          <div className="hero-glow pointer-events-none absolute inset-0 opacity-70" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-12">
            <Quote className="h-10 w-10 text-gold-300 lg:col-span-1" aria-hidden />
            <div className="lg:col-span-11">
              <blockquote className="space-y-5 font-display text-lg leading-relaxed text-plum-50 sm:text-xl">
                {featured.quote.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <Initials name={featured.name} light />
                <span className="text-sm">
                  <span className="block font-semibold text-white">{featured.name}</span>
                  <span className="block text-plum-200">{featured.org}</span>
                </span>
              </figcaption>
            </div>
          </div>
        </figure>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-3xl border border-plum-100 bg-white p-8 shadow-card sm:p-10">
              <Quote className="h-8 w-8 text-gold-400" aria-hidden />
              <blockquote className="mt-5 flex-1 space-y-4 text-[1.02rem] leading-relaxed text-ink">
                {t.quote.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-plum-100 pt-5">
                <Initials name={t.name} />
                <span className="text-sm">
                  <span className="block font-semibold text-plum-900">{t.name}</span>
                  <span className="block text-slate">{t.org}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ---------- Insight card ---------- */
export function InsightCard({ post }) {
  return (
    <Link
      to={`/insights/${post.slug}`}
      className="group flex h-full flex-col rounded-3xl border border-plum-100 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-plum-300"
    >
      <div className="flex items-center gap-3 text-xs font-medium text-slate">
        <span className="rounded-full bg-plum-50 px-3 py-1 font-semibold text-plum-700">{post.category}</span>
        <span>{post.date}</span>
        <span aria-hidden>·</span>
        <span>{post.readTime}</span>
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-plum-900 group-hover:text-plum-600">{post.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{post.excerpt}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-plum-600">
        Read the note <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  )
}

/* ---------- Closing CTA ---------- */
export function CtaBand() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-plum-900 px-8 py-14 text-white sm:px-14">
          <div className="hero-glow pointer-events-none absolute inset-0 opacity-80" aria-hidden />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">Ready to build a program around your team?</h2>
              <p className="mt-4 text-plum-100/80">
                Message us on WhatsApp for the fastest response, or send a detailed brief and we’ll come back with a tailored proposal.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={waLink()} variant="whatsapp" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> {CONTACT.whatsappDisplay}
              </Button>
              <Button to="/contact" variant="ghostLight" arrow>
                Send a brief
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ---------- Contact form (FormSubmit AJAX) ---------- */
export function ContactForm({ defaultTopic = '' }) {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  const field =
    'w-full rounded-xl border border-plum-200 bg-white px-4 py-3 text-base text-ink placeholder:text-plum-300 transition focus:border-plum-500 focus:outline-none focus:ring-4 focus:ring-plum-100'

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-start rounded-3xl border border-plum-100 bg-white p-10 shadow-card" role="status">
        <CheckCircle2 className="h-12 w-12 text-emerald-600" aria-hidden />
        <h3 className="mt-5 font-display text-2xl font-semibold text-plum-900">Thank you — message sent.</h3>
        <p className="mt-2 text-slate">We’ll get back to you soon. For anything urgent, reach us on WhatsApp.</p>
        <Button className="mt-6" variant="outline" onClick={() => setStatus('idle')}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-plum-100 bg-white p-6 shadow-card sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-ink">Full name *</span>
          <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-ink">Organisation</span>
          <input name="organisation" autoComplete="organization" className={field} placeholder="Company or institution" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-ink">Email *</span>
          <input type="email" name="email" required autoComplete="email" className={field} placeholder="you@example.com" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-ink">Area of interest</span>
          <select name="topic" defaultValue={defaultTopic} className={field}>
            <option value="">Select a topic</option>
            <option>Corporate leadership &amp; management</option>
            <option>Sales &amp; customer experience</option>
            <option>Peacebuilding, governance &amp; protection</option>
            <option>PAXLS 2026 registration</option>
            <option>Something else</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium text-ink">What are you looking to train on? *</span>
          <textarea name="message" required rows={5} className={`${field} resize-y`} placeholder="Tell us about your team, goals and timing." />
        </label>
      </div>

      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="_subject" value="New enquiry — Dr. Mbeng & Partners website" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status === 'sending'} className="disabled:opacity-70">
          {status === 'sending' ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Mail className="h-4 w-4" aria-hidden />}
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </Button>
        <p className="text-sm text-slate" role="status" aria-live="polite">
          {status === 'error' && <span className="text-red-600">Something went wrong. Please try again, or reach us on WhatsApp.</span>}
        </p>
      </div>
    </form>
  )
}
