import { useSearchParams } from 'react-router-dom'
import { Mail, Clock, MapPin } from 'lucide-react'
import { CONTACT, LOCATIONS, waLink } from '../data/content'
import { Container, PageHero, Button, WhatsAppIcon, Flag } from '../components/ui'
import { ContactForm } from '../components/Sections'

const TOPICS = { paxls: 'PAXLS 2026 registration' }

export default function Contact() {
  const [params] = useSearchParams()
  const topic = TOPICS[params.get('topic')] || ''

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Book a program or ask a question."
        intro="Tell us about your team and what you want to achieve. We’ll come back with a tailored proposal."
      />

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm defaultTopic={topic} />
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-3xl bg-plum-900 p-8 text-white">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#25D366] text-white">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-semibold">Prefer WhatsApp?</h2>
              <p className="mt-2 text-plum-100/80">Message us directly — it’s the fastest way to reach the team for a quote or booking.</p>
              <Button href={waLink()} variant="whatsapp" className="mt-6" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> {CONTACT.whatsappDisplay}
              </Button>
            </div>

            <div className="rounded-3xl border border-plum-100 bg-white p-8 shadow-card">
              <ul className="space-y-5 text-sm">
                <li className="flex gap-4">
                  <Mail className="h-5 w-5 shrink-0 text-plum-600" aria-hidden />
                  <span>
                    <span className="block font-semibold text-plum-900">Email</span>
                    <a href={`mailto:${CONTACT.email}`} className="break-all text-slate hover:text-plum-600">
                      {CONTACT.email}
                    </a>
                  </span>
                </li>
                <li className="flex gap-4">
                  <Clock className="h-5 w-5 shrink-0 text-plum-600" aria-hidden />
                  <span>
                    <span className="block font-semibold text-plum-900">Response</span>
                    <span className="text-slate">We aim to reply to every enquiry promptly.</span>
                  </span>
                </li>
                <li className="flex gap-4">
                  <MapPin className="h-5 w-5 shrink-0 text-plum-600" aria-hidden />
                  <span>
                    <span className="block font-semibold text-plum-900">Head office</span>
                    <span className="text-slate">{LOCATIONS[0].address}</span>
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      <section className="bg-sand py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-plum-900 sm:text-3xl">Our locations</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {LOCATIONS.map((l) => (
              <div key={l.country} className="flex gap-4 rounded-3xl border border-plum-100 bg-white p-6">
                <Flag code={l.flag} className="h-7 w-10 shrink-0" />
                <div>
                  <h3 className="font-display font-semibold text-plum-900">{l.country}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate">{l.address}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
