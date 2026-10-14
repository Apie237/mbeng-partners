import {
  Users,
  MessagesSquare,
  ShieldCheck,
  Handshake,
  BarChart3,
  Scale,
  Star,
  HeartHandshake,
} from 'lucide-react'

export const CONTACT = {
  whatsapp: '237677359801',
  whatsappDisplay: '+237 677 359 801',
  email: 'johnayuknchong@gmail.com',
}

export const waLink = (text = 'Hello Dr. Mbeng & Partners, I would like to enquire about a training program.') =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/paxls-2026', label: 'PAXLS 2026' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
]

export const INSTITUTIONS = [
  'United States Institute of Peace',
  'Folke Bernadotte Academy',
  'Geneva Centre for Security Policy',
  'UN Women',
  "Harvard's Human Flourishing Program",
]

export const PRACTICES = [
  {
    id: 'peace',
    number: '01',
    title: 'Peacebuilding, Governance & Protection',
    summary:
      'Internationally credentialed work for communities in conflict and transition — from dialogue facilitation to GBV response, DDR and good governance.',
    items: [
      'Conflict Transformation & Dialogue Facilitation',
      'Gender-Based Violence Response & Referral (UN Women / LUKMEF network)',
      'Disarmament, Demobilization & Reintegration (DDR) — Folke Bernadotte Academy',
      'Design, Monitoring & Evaluation in Fragile Environments — USIP / GCSP',
      'Good Governance & Rule of Law After Conflict',
      'Child Protection & Safeguarding — Harvard / Catholic University of America',
    ],
  },
  {
    id: 'corporate',
    number: '02',
    title: 'Corporate Leadership & Management',
    summary:
      'Practical leadership, people management and customer-experience programs, delivered on-site by our mobile training team.',
    items: [
      'Resource Mobilisation and Partnership',
      'Team Building',
      'Leadership, People Management & Conflict Resolution',
      'Emotional Intelligence',
      'Performance Appraisal, Delegation & Coaching',
      'Consultative Selling, CRM & Customer Retention',
    ],
  },
]

export const BRANCHES = [
  { title: 'Leadership & People Management', icon: Users, practice: 'corporate' },
  { title: 'Conflict Transformation & Dialogue', icon: MessagesSquare, practice: 'peace' },
  { title: 'Gender & GBV Response', icon: ShieldCheck, practice: 'peace' },
  { title: 'DDR: Disarmament, Demobilization & Reintegration', icon: Handshake, practice: 'peace' },
  { title: 'Design, Monitoring & Evaluation', icon: BarChart3, practice: 'peace' },
  { title: 'Good Governance & Rule of Law', icon: Scale, practice: 'peace' },
  { title: 'Consultative Selling & Customer Experience', icon: Star, practice: 'corporate' },
  { title: 'Team Building & Emotional Intelligence', icon: HeartHandshake, practice: 'corporate' },
]

// Sample testimonials — replace with real, approved quotes from clients.
export const TESTIMONIALS = [
  {
    quote:
      "Dr. Mbeng's workshop gave our supervisors tools they used the very next week. The delegation and coaching module alone changed how our floor runs.",
    name: 'Client name',
    org: 'Organisation',
    sample: true,
  },
  {
    quote:
      'Our customer retention numbers improved within a quarter of the sales training. The objection-handling framework was exactly what our team needed.',
    name: 'Client name',
    org: 'Organisation',
    sample: true,
  },
  {
    quote:
      "The post-training WhatsApp coaching made the difference — it wasn't a one-off session, it was a month of real support.",
    name: 'Client name',
    org: 'Organisation',
    sample: true,
  },
]

export const INSIGHTS = [
  {
    slug: 'emotional-intelligence-in-management',
    date: 'Aug 2026',
    category: 'Leadership',
    readTime: '4 min read',
    title: 'Why emotional intelligence outperforms raw technical skill in management roles',
    excerpt: 'A look at how EQ shapes the decisions that most affect team performance and retention.',
    body: [
      'Technical skill earns people their first promotion. What keeps a team performing after that is something quieter: the manager’s ability to read the room, regulate their own reactions, and respond to people rather than to problems alone.',
      'In our programs we see the same pattern across industries. The decisions that most affect performance — how feedback is given, how conflict is handled, who gets trusted with responsibility — are emotional decisions before they are technical ones.',
      'Emotional intelligence is not a personality trait you either have or lack. It is a set of habits: pausing before responding, naming what you notice, asking before assuming. Like any habit, it can be practised, coached and measured.',
      'That is why our leadership modules pair every framework with live practice and follow-up coaching. We don’t push people — we push passion, and that starts with leaders who understand what moves the people around them.',
    ],
  },
  {
    slug: 'consultative-selling-in-practice',
    date: 'Jun 2026',
    category: 'Sales & CX',
    readTime: '5 min read',
    title: 'What consultative selling looks like in practice',
    excerpt: "Moving sales teams away from pitching and toward genuinely understanding the customer's problem.",
    body: [
      'Most sales teams are trained to talk. Consultative selling asks them to listen first — to treat every conversation as a diagnosis rather than a presentation.',
      'In practice that means better questions: What happens if this problem is not solved? Who else is affected? What has already been tried? The answers shape a recommendation the customer recognises as their own.',
      'It also changes how teams measure success. Instead of counting pitches, strong teams track the quality of discovery conversations, follow-through on commitments, and retention over time.',
      'Our Sales & Customer Experience track builds these habits through role-play, real account reviews and CRM routines that keep the customer’s problem at the centre of every interaction.',
    ],
  },
  {
    slug: 'coaching-after-the-workshop',
    date: 'Mar 2026',
    category: 'Coaching',
    readTime: '3 min read',
    title: 'Coaching after the workshop: why the first 30 days matter most',
    excerpt: 'The reasoning behind our post-training WhatsApp coaching, and what it changes in practice.',
    body: [
      'A workshop creates energy. The first month back at work decides whether that energy turns into new behaviour or fades into old routine.',
      'That is why our programs don’t end when the session does. Participants stay connected with our facilitators over WhatsApp for follow-up questions, quick check-ins and support as they try new approaches with their teams.',
      'The questions that come up in those 30 days are the most valuable part of the learning: the difficult conversation that didn’t go to plan, the delegation that needed a second attempt, the customer who pushed back.',
      'Short, timely coaching at those moments is what turns training into capability — and capability into results the organisation can see.',
    ],
  },
]

export const LOCATIONS = [
  { country: 'Cameroon', address: 'Grand Chantier Fougerole, Beside Espoir et Vie, Yaoundé', flag: 'cm', hq: true },
  { country: 'USA', address: '337 College Ave, Orofino, ID 83544', flag: 'us' },
  { country: 'Slovakia', address: 'CSA 184/3, 967 01 Kremnica', flag: 'sk' },
  { country: 'Czech Republic', address: 'Dr. E. Benes 966, 27711 Neratovice', flag: 'cz' },
]

// Resolve files in /public so they work when the site is served from a subpath (e.g. GitHub Pages).
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
