import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays, MapPin, Award, Globe2, Check } from 'lucide-react'
import { PRACTICES, INSIGHTS, asset } from '../data/content'
import { Container, SectionHeading, Button, Eyebrow } from '../components/ui'
import { InstitutionsStrip, BranchesGrid, Testimonials, InsightCard, CtaBand } from '../components/Sections'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-plum-950 text-white">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden />
      <Container className="relative grid items-center gap-14 pb-20 pt-32 sm:pt-40 lg:grid-cols-12 lg:pb-28">
        <div className="animate-fade-up lg:col-span-7">
          <Eyebrow light>Providing Sustainable Solutions</Eyebrow>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            Building capable organizations and{' '}
            <span className="italic text-gold-300">more peaceful communities.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-plum-100/80">
            Executive training and advisory services in corporate leadership, conflict transformation, GBV response, DDR,
            governance, and protection.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button to="/contact" variant="gold" arrow>
              Book a program
            </Button>
            <Button to="/services" variant="ghostLight">
              Explore services
            </Button>
          </div>
          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              ['8', 'Specialised branches'],
              ['4', 'Countries of operation'],
              ['2', 'Connected practices'],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-3xl font-semibold text-white">{n}</dd>
                <dd className="mt-1 text-xs leading-snug text-plum-200/80">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms] lg:col-span-5">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 rotate-3 rounded-[2.25rem] bg-gradient-to-br from-gold-400/40 to-plum-500/30 blur-sm" aria-hidden />
            <div className="relative overflow-hidden rounded-[2rem] bg-plum-800 shadow-2xl ring-1 ring-white/10">
              <img
                src={asset("images/founder.jpg")}
                alt="Dr. John A. Mbeng, founder of Dr. Mbeng & Partners"
                className="aspect-[4/5] w-full object-cover object-top"
                width="600"
                height="750"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-plum-950 via-plum-950/80 to-transparent p-6 pt-20">
                <p className="font-display text-xl font-semibold">Dr. John A. Mbeng</p>
                <p className="text-sm text-plum-200">Founder · Performance Consultant &amp; Facilitator</p>
              </div>
            </div>
            <div className="absolute -left-4 top-10 hidden items-center gap-3 rounded-2xl bg-white p-4 text-ink shadow-soft sm:flex">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-200 text-gold-600">
                <Award className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-xs leading-tight">
                <span className="block font-semibold text-plum-900">USIP · UN Women · FBA</span>
                <span className="text-slate">International credentials</span>
              </span>
            </div>
            <div className="absolute -right-3 bottom-28 hidden items-center gap-3 rounded-2xl bg-white p-4 text-ink shadow-soft sm:flex">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-plum-100 text-plum-600">
                <Globe2 className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-xs leading-tight">
                <span className="block font-semibold text-plum-900">EN · FR</span>
                <span className="text-slate">Cross-cultural delivery</span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Practices() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading eyebrow="What we do" title="Two fields, one conviction" className="lg:col-span-6" />
          <p className="text-lg leading-relaxed text-slate lg:col-span-6">
            Dr. Mbeng &amp; Partners is a values-driven, Cameroon-based consultancy guided by the belief that strong
            organizations and peaceful, dignified communities go hand in hand.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {PRACTICES.map((p, i) => (
            <article
              key={p.id}
              className={`group relative overflow-hidden rounded-[2rem] p-8 sm:p-10 ${
                i === 0 ? 'bg-plum-900 text-white' : 'border border-plum-100 bg-plum-50'
              }`}
            >
              <span className={`font-display text-6xl font-semibold ${i === 0 ? 'text-white/10' : 'text-plum-200'}`}>{p.number}</span>
              <h3 className={`mt-2 font-display text-2xl font-semibold sm:text-3xl ${i === 0 ? 'text-white' : 'text-plum-900'}`}>{p.title}</h3>
              <p className={`mt-4 leading-relaxed ${i === 0 ? 'text-plum-100/80' : 'text-slate'}`}>{p.summary}</p>
              <ul className="mt-8 space-y-3">
                {p.items.slice(0, 4).map((it) => (
                  <li key={it} className={`flex gap-3 text-sm ${i === 0 ? 'text-plum-50' : 'text-ink'}`}>
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${i === 0 ? 'text-gold-300' : 'text-plum-600'}`} aria-hidden />
                    {it}
                  </li>
                ))}
              </ul>
              <Link
                to={`/services#${p.id}`}
                className={`mt-10 inline-flex items-center gap-2 text-sm font-semibold ${i === 0 ? 'text-gold-300' : 'text-plum-600'}`}
              >
                See the full practice <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Mantra() {
  return (
    <section className="relative overflow-hidden bg-sand py-24">
      <Container className="relative text-center">
        <span className="font-display text-8xl leading-none text-gold-400" aria-hidden>
          “
        </span>
        <blockquote className="mx-auto -mt-6 max-w-3xl font-display text-3xl font-medium italic leading-snug text-plum-900 sm:text-4xl">
          We don’t push people, we push passion.
        </blockquote>
        <p className="mx-auto mt-6 max-w-2xl text-slate">
          People rise when their purpose is ignited, not when they are managed. That conviction guides every room Dr. Mbeng
          enters — from corporate boardrooms to community dialogue circles.
        </p>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-plum-600">— Dr. John A. Mbeng</p>
      </Container>
    </section>
  )
}

function PaxlsTeaser() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid overflow-hidden rounded-[2rem] border border-plum-100 bg-white shadow-soft lg:grid-cols-2">
          <div className="relative min-h-[280px] bg-plum-50">
            <img
              src={asset("images/paxls-pyramid.jpg")}
              alt="Pan-African Xenial Leadership Model framework"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-8 sm:p-12">
            <Eyebrow>New initiative</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-plum-900 sm:text-4xl">
              Pan-African Xenial Leadership Symposium 2026
            </h2>
            <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-plum-600" aria-hidden /> October 27, 2026
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-plum-600" aria-hidden /> SOA, Yaoundé, Cameroon
              </span>
            </div>
            <p className="mt-6 leading-relaxed text-slate">
              Bringing together young African leaders to advance Xenial Leadership — turning strangers into allies and
              enemies into guests, rooted in the Ubuntu spirit: “I am because we are.”
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/paxls-2026" arrow>
                Discover PAXLS 2026
              </Button>
              <Button to="/contact?topic=paxls" variant="outline">
                Register interest
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function LatestInsights() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Insights" title="Notes on leadership & performance" />
          <Button to="/insights" variant="outline" arrow>
            All insights
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {INSIGHTS.map((p) => (
            <InsightCard key={p.slug} post={p} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <InstitutionsStrip />
      <Practices />
      <Mantra />
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="How we organise our work"
            title="Eight branches, one holistic approach"
            intro="Specialised branches spanning corporate leadership training and internationally credentialed peacebuilding, governance and protection work."
            center
          />
          <div className="mt-14">
            <BranchesGrid />
          </div>
        </Container>
      </section>
      <PaxlsTeaser />
      <Testimonials />
      <LatestInsights />
      <CtaBand />
    </>
  )
}
