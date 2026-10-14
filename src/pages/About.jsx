import { GraduationCap, HeartHandshake, Languages, Users2, Sparkles, Target, Compass } from 'lucide-react'
import { LOCATIONS, asset } from '../data/content'
import { Container, SectionHeading, PageHero, Flag } from '../components/ui'
import { CtaBand, InstitutionsStrip } from '../components/Sections'

const CREDENTIALS = [
  { area: 'Conflict transformation & dialogue', by: 'United States Institute of Peace' },
  { area: 'Children & youth in DDR programming', by: 'Folke Bernadotte Academy' },
  { area: 'Design, monitoring & evaluation in fragile environments', by: 'USIP · Geneva Centre for Security Policy' },
  { area: 'Gender-based violence response', by: 'UN Women' },
  { area: 'Child protection & safeguarding', by: 'Harvard · Catholic University of America' },
  { area: 'National Referral Network for GBV survivors', by: 'Member, Cameroon' },
]

const VALUES = [
  { icon: Sparkles, title: 'Purpose before process', text: 'People rise when their purpose is ignited. We design learning that connects to why people do their work.' },
  { icon: Target, title: 'Practical by design', text: 'Every framework is paired with practice, real cases and follow-up — so it shows up at work the very next week.' },
  { icon: Compass, title: 'Dignity in every room', text: 'Strong organizations and peaceful communities go hand in hand. Respect and inclusion shape how we facilitate.' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A consultancy built on one conviction."
        intro="Dr. Mbeng & Partners is a Cameroon-based consultancy led by Dr. John A. Mbeng, working across leadership development for organizations and peacebuilding work for communities in conflict and transition."
      />

      <section className="py-24">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="relative">
                <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] bg-gold-200" aria-hidden />
                <img
                  src={asset("images/founder.jpg")}
                  alt="Portrait of Dr. John A. Mbeng"
                  className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-top shadow-soft"
                  loading="lazy"
                />
              </div>
              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-plum-100 bg-plum-50 p-5">
                  <Languages className="h-5 w-5 text-plum-600" aria-hidden />
                  <p className="mt-3 text-sm font-semibold text-plum-900">English &amp; French</p>
                  <p className="text-xs text-slate">Bilingual delivery</p>
                </div>
                <div className="rounded-2xl border border-plum-100 bg-plum-50 p-5">
                  <Users2 className="h-5 w-5 text-plum-600" aria-hidden />
                  <p className="mt-3 text-sm font-semibold text-plum-900">Many industries</p>
                  <p className="text-xs text-slate">Management programs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <SectionHeading eyebrow="The founder" title="Dr. John A. Mbeng" />
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-plum-600">
              Performance Consultant &amp; Facilitator · Corporate Trainer
            </p>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate">
              <p>
                Dr. John A. Mbeng is a Performance Consultant and Facilitator specialising in{' '}
                <strong className="font-semibold text-plum-900">Personal and Leadership Development, Performance Management, and Customer Satisfaction</strong>.
                He has facilitated management development programs across a wide variety of industries.
              </p>
              <p>
                Alongside his corporate work, he holds internationally recognised credentials in conflict transformation and
                dialogue, gender-based violence response, children and youth in DDR programming, and design, monitoring &amp;
                evaluation in fragile environments. He is also a member of Cameroon’s National Referral Network of Service
                Providers for survivors of gender-based violence.
              </p>
              <p>
                With a passion for lifelong learning, coaching and mentoring, Dr. Mbeng is an energetic and enthusiastic
                presenter with a keen interest in interpersonal communication and cross-cultural understanding. He has
                travelled extensively and is conversant in French.
              </p>
            </div>

            <h3 className="mt-14 flex items-center gap-3 font-display text-2xl font-semibold text-plum-900">
              <GraduationCap className="h-6 w-6 text-gold-500" aria-hidden /> Credentials &amp; affiliations
            </h3>
            <ul className="mt-6 divide-y divide-plum-100 rounded-3xl border border-plum-100 bg-white">
              {CREDENTIALS.map((c) => (
                <li key={c.area} className="flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                  <span className="font-medium text-ink">{c.area}</span>
                  <span className="shrink-0 text-sm text-plum-600">{c.by}</span>
                </li>
              ))}
            </ul>

            <figure className="mt-14 rounded-3xl bg-plum-900 p-8 text-white sm:p-10">
              <HeartHandshake className="h-8 w-8 text-gold-300" aria-hidden />
              <blockquote className="mt-5 font-display text-2xl italic leading-snug">
                “We don’t push people, we push passion.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-plum-200">
                The leadership mantra behind every program we deliver.
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <InstitutionsStrip />

      <section className="bg-sand py-24">
        <Container>
          <SectionHeading eyebrow="What guides us" title="Our values" center />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-3xl border border-plum-100 bg-white p-8 shadow-card">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-plum-600 text-white">
                  <v.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-plum-900">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-slate">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24" id="locations">
        <Container>
          <SectionHeading eyebrow="Where we work" title="Offices across three continents" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {LOCATIONS.map((l) => (
              <div key={l.country} className="rounded-3xl border border-plum-100 bg-white p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <Flag code={l.flag} />
                  {l.hq && (
                    <span className="rounded-full bg-gold-200 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-gold-600">
                      Head office
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-plum-900">{l.country}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate">{l.address}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
