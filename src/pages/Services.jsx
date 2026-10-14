import { Briefcase, BadgeCheck, Search, PenTool, Presentation, MessageCircle, Check, Truck } from 'lucide-react'
import { PRACTICES } from '../data/content'
import { Container, SectionHeading, PageHero, Button } from '../components/ui'
import { BranchesGrid, CtaBand, Testimonials } from '../components/Sections'

const OFFERS = [
  {
    icon: Briefcase,
    title: 'Corporate Mobile Training Team',
    text: 'Our facilitators travel to you, delivering structured leadership and management programs on-site, around your team’s schedule.',
    points: ['On-site delivery', 'Programs tailored to your sector', 'Bilingual facilitation (EN / FR)'],
  },
  {
    icon: BadgeCheck,
    title: 'Sales & Customer Experience',
    text: 'Consultative selling, CRM routines and retention practices that move teams from pitching to genuinely solving customer problems.',
    points: ['Consultative selling', 'CRM & customer retention', 'Objection handling'],
  },
]

const PROCESS = [
  { icon: Search, title: 'Discover', text: 'We listen first — your goals, your people and the results you need to see.' },
  { icon: PenTool, title: 'Design', text: 'A tailored program built from our tool kit, matched to your context and level.' },
  { icon: Presentation, title: 'Deliver', text: 'Energetic, practical sessions delivered on-site by our mobile training team.' },
  { icon: MessageCircle, title: 'Coach', text: 'Follow-up support over WhatsApp in the first 30 days, when new habits are formed.' },
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title="Corporate mobile training, built around your team."
        intro="Structured programs in the areas organizations ask for most — and internationally credentialed expertise for communities in conflict and transition."
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/contact" variant="gold" arrow>
            Request a proposal
          </Button>
        </div>
      </PageHero>

      <section className="py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {OFFERS.map((o) => (
              <article key={o.title} className="relative overflow-hidden rounded-[2rem] border border-plum-100 bg-gradient-to-br from-plum-50 to-white p-8 shadow-card sm:p-10">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-plum-600 text-white shadow-soft">
                  <o.icon className="h-7 w-7" aria-hidden />
                </span>
                <h2 className="mt-6 font-display text-2xl font-semibold text-plum-900 sm:text-3xl">{o.title}</h2>
                <p className="mt-4 leading-relaxed text-slate">{o.text}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {o.points.map((p) => (
                    <li key={p} className="rounded-full border border-plum-200 bg-white px-3.5 py-1.5 text-sm text-plum-800">
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sand py-24" id="toolkit">
        <Container>
          <SectionHeading
            eyebrow="Consulting tool kit"
            title="The core capabilities behind every program"
            intro="Two connected practices — each delivering tailored training and advisory services."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {PRACTICES.map((p, i) => (
              <div key={p.id} id={p.id} className="scroll-mt-28 rounded-[2rem] border border-plum-100 bg-white p-8 shadow-card sm:p-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-4xl font-semibold text-gold-400">{p.number}</span>
                  <h3 className="font-display text-2xl font-semibold text-plum-900">{p.title}</h3>
                </div>
                <p className="mt-4 leading-relaxed text-slate">{p.summary}</p>
                <ul className="mt-8 divide-y divide-plum-100 border-y border-plum-100">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-3 py-4 text-[0.95rem] text-ink">
                      <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${i === 0 ? 'bg-gold-200 text-gold-600' : 'bg-plum-100 text-plum-600'}`}>
                        <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24" id="branches">
        <Container>
          <SectionHeading
            eyebrow="How we organise our work"
            title="Our branches"
            intro="Eight specialised branches, each connected through management, spanning corporate leadership training and peacebuilding, governance and protection work."
            center
          />
          <div className="mt-14">
            <BranchesGrid />
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-plum-950 py-24 text-white">
        <div className="hero-glow pointer-events-none absolute inset-0 opacity-70" aria-hidden />
        <Container className="relative">
          <SectionHeading eyebrow="How an engagement works" title="From first conversation to lasting change" light center />
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((s, i) => (
              <li key={s.title} className="relative rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                <span className="text-xs font-semibold tracking-[0.16em] text-gold-300">STEP {i + 1}</span>
                <s.icon className="mt-5 h-7 w-7 text-white" aria-hidden />
                <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-plum-100/75">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 flex items-center justify-center gap-2 text-sm text-plum-200">
            <Truck className="h-4 w-4 text-gold-300" aria-hidden /> Our facilitators travel to you.
          </p>
        </Container>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  )
}
