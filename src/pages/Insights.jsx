import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Clock } from 'lucide-react'
import { INSIGHTS } from '../data/content'
import { Container, PageHero, Button } from '../components/ui'
import { InsightCard, CtaBand } from '../components/Sections'

export function Insights() {
  const [featured, ...rest] = INSIGHTS
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes on leadership & performance."
        intro="Short, practical perspectives from our work with leaders, teams and communities."
      />
      <section className="py-24">
        <Container>
          <Link
            to={`/insights/${featured.slug}`}
            className="group grid overflow-hidden rounded-[2rem] border border-plum-100 bg-white shadow-soft transition hover:border-plum-300 lg:grid-cols-5"
          >
            <div className="relative flex min-h-[220px] items-end bg-gradient-to-br from-plum-700 to-plum-950 p-8 lg:col-span-2">
              <span className="font-display text-7xl font-semibold text-white/10">EQ</span>
              <span className="absolute left-8 top-8 rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-plum-950">Latest</span>
            </div>
            <div className="p-8 sm:p-10 lg:col-span-3">
              <div className="flex items-center gap-3 text-xs font-medium text-slate">
                <span className="rounded-full bg-plum-50 px-3 py-1 font-semibold text-plum-700">{featured.category}</span>
                <span>{featured.date}</span>
                <span aria-hidden>·</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-snug text-plum-900 group-hover:text-plum-600 sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 leading-relaxed text-slate">{featured.excerpt}</p>
              <span className="mt-6 inline-block text-sm font-semibold text-plum-600">Read the note →</span>
            </div>
          </Link>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {rest.map((p) => (
              <InsightCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  )
}

export function InsightDetail() {
  const { slug } = useParams()
  const post = INSIGHTS.find((p) => p.slug === slug)

  if (!post) {
    return (
      <PageHero eyebrow="Insights" title="We couldn’t find that note.">
        <Button to="/insights" variant="gold" className="mt-8">
          Back to insights
        </Button>
      </PageHero>
    )
  }

  const others = INSIGHTS.filter((p) => p.slug !== slug)

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title}>
        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-plum-200">
          <span>{post.date}</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" aria-hidden /> {post.readTime}
          </span>
          <span>By Dr. John A. Mbeng</span>
        </div>
      </PageHero>
      <article className="py-20">
        <Container className="max-w-3xl">
          <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-plum-600 hover:text-plum-800">
            <ArrowLeft className="h-4 w-4" aria-hidden /> All insights
          </Link>
          <div className="prose prose-lg mt-10 max-w-none prose-p:leading-relaxed prose-p:text-slate">
            <p className="!text-xl !text-ink">{post.excerpt}</p>
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Container>
      </article>
      <section className="bg-sand py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-plum-900">Keep reading</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((p) => (
              <InsightCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
