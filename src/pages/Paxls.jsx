import { asset } from '../data/content'
import { CalendarDays, MapPin, Mic2, ScrollText, Bird, HandHeart, Sprout, Globe2 } from 'lucide-react'
import { Container, SectionHeading, PageHero, Button, Eyebrow } from '../components/ui'

const COMMITMENTS = [
  { icon: Bird, title: 'Peace & reconciliation', text: 'Choosing dialogue over division and working to heal what conflict has broken.' },
  { icon: HandHeart, title: 'Hospitality & inclusion', text: 'Turning strangers into allies and enemies into guests — across tribe, language and border.' },
  { icon: Sprout, title: 'Sustainable collaboration', text: 'Building shared, lasting solutions that serve communities across the continent.' },
]

export default function Paxls() {
  return (
    <>
      <PageHero
        eyebrow="A new initiative from Dr. Mbeng & Partners"
        title="Pan-African Xenial Leadership Symposium 2026"
        intro="A pre-symposium bringing together young African leaders to advance Xenial Leadership — a charter for peace, reconciliation and sustainable collaboration across African communities."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            [CalendarDays, 'October 27, 2026'],
            [MapPin, 'SOA, Yaoundé, Cameroon'],
            [Mic2, 'Hosted by Dr. John A. Mbeng'],
          ].map(([Icon, label]) => (
            <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-plum-50">
              <Icon className="h-4 w-4 text-gold-300" aria-hidden /> {label}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/contact?topic=paxls" variant="gold" arrow>
            Register interest
          </Button>
          <Button href="#model" variant="ghostLight">
            Explore the model
          </Button>
        </div>
      </PageHero>

      <section className="py-24">
        <Container className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="What is Xenial Leadership?" title="Turning strangers into allies, and enemies into guests." />
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Rooted in the Ubuntu spirit — <em className="font-display text-plum-800">“I am because we are”</em> — Xenial
              Leadership responds directly to conflicts facing the continent today: from the Anglophone Crisis in Cameroon to
              xenophobic violence and tribalism elsewhere.
            </p>
            <p className="mt-4 leading-relaxed text-slate">
              The model was founded by Dr. John A. Mbeng, who hosts PAXLS 2026 as the first gathering around its charter.
            </p>
          </div>
          <figure id="model" className="scroll-mt-28 lg:col-span-7">
            <div className="overflow-hidden rounded-[2rem] border border-plum-100 bg-white p-3 shadow-soft">
              <img
                src={asset("images/paxls-pyramid.jpg")}
                alt="Pan-African Xenial Leadership Model — four-layer pyramid framework"
                className="w-full rounded-[1.5rem]"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-slate">The Pan-African Xenial Leadership Model</figcaption>
          </figure>
        </Container>
      </section>

      <section className="bg-sand py-24">
        <Container>
          <SectionHeading eyebrow="The charter" title="Three commitments every participant makes" center />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {COMMITMENTS.map((c, i) => (
              <div key={c.title} className="relative rounded-3xl border border-plum-100 bg-white p-8 shadow-card">
                <span className="absolute right-6 top-5 font-display text-5xl font-semibold text-plum-100">{i + 1}</span>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-plum-600 text-white">
                  <c.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-plum-900">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-slate">{c.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="flex flex-col gap-6 rounded-[2rem] bg-plum-900 p-8 text-white sm:flex-row sm:p-10">
              <img src={asset("images/paxla-emblem.jpg")} alt="PAXLA Ambassador emblem" className="h-24 w-24 shrink-0 rounded-full ring-4 ring-white/10" loading="lazy" />
              <div>
                <Eyebrow light>Ambassador program</Eyebrow>
                <h3 className="mt-3 font-display text-2xl font-semibold">Become a PAXLA Ambassador</h3>
                <p className="mt-3 leading-relaxed text-plum-100/80">
                  The Pan-African Xenial Leadership Ambassador program recognises leaders promoting unity, hospitality and
                  cross-border cooperation across Africa.
                </p>
              </div>
            </article>
            <article className="flex flex-col gap-6 rounded-[2rem] border border-plum-100 bg-plum-50 p-8 sm:flex-row sm:p-10">
              <span className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-gold-200 text-gold-600">
                <ScrollText className="h-10 w-10" aria-hidden />
              </span>
              <div>
                <Eyebrow>Certificate of commitment</Eyebrow>
                <h3 className="mt-3 font-display text-2xl font-semibold text-plum-900">Sign the Charter</h3>
                <p className="mt-3 leading-relaxed text-slate">
                  Participants receive a Certificate of Commitment to the Pan-African Xenial Leadership Charter — committing
                  to peace and reconciliation, hospitality and inclusion, and sustainable collaborative solutions.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-16 flex flex-col items-center rounded-[2rem] border border-dashed border-plum-300 p-10 text-center sm:p-14">
            <Globe2 className="h-10 w-10 text-plum-500" aria-hidden />
            <h2 className="mt-5 font-display text-3xl font-semibold text-plum-900 sm:text-4xl">Join us in Yaoundé</h2>
            <p className="mt-4 max-w-xl text-slate">
              October 27, 2026 · SOA, Yaoundé. Register your interest and we’ll share participation details.
            </p>
            <Button to="/contact?topic=paxls" className="mt-8" arrow>
              Register interest in PAXLS 2026
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
