import { PageHero, Button } from '../components/ui'

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="This page has moved on." intro="The page you’re looking for doesn’t exist. Let’s get you back on track.">
      <div className="mt-10 flex flex-wrap gap-3">
        <Button to="/" variant="gold" arrow>Go home</Button>
        <Button to="/contact" variant="ghostLight">Contact us</Button>
      </div>
    </PageHero>
  )
}
