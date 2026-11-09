/* ==================================================================
   SITE CONTENT
   Everything you'll want to edit lives in this folder.
   Items marked `placeholder: true` render with a subtle "placeholder"
   tag on the page, so you can spot what still needs real content.
   Search this folder for "TODO" to find every gap.
   ================================================================== */

export const profile = {
  name: 'Yasaman Derakhshandeh',
  shortName: 'Yasi',
  company: 'FaydenAI',
  companyUrl: 'https://faydenai.com',
  role: 'Product & Design Lead',
  titles: ['UI/UX Designer', 'Product Designer', 'Design Lead'],
  location: 'Vancouver, Canada',
  email: 'yasi.derak@gmail.com',
}

export const links = {
  linkedin: 'https://www.linkedin.com/in/yasamanderakhshandeh/',
  github: 'https://github.com/YasiDerak',
  behance: 'https://www.behance.net/yasamanderakhshandeh',
  email: `mailto:${profile.email}`,
}

export const nav = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'What I do' },
]

export const hero = {
  title: 'Product & UI/UX Designer in Vancouver',
  intro:
    'I make complicated things feel simple, which is harder than it looks. Right now I lead product and design at FaydenAI in Vancouver.',
  // Your photo, shown in the arch on the first screen.
  portrait: 'about/portrait.jpg',
}

export const about = {
  greeting: 'I’m Yasaman, a UX and product designer in Vancouver.',
  paragraphs: [
    'I studied architecture, so I still think about how people move through a space. These days the spaces are screens, and the people are usually looking for the right button.',
    'I’ve worked as a UI/UX designer in Vancouver since 2022. Today I lead product, design and brand at FaydenAI, a small team building AI-powered products, including Aplomb.',
    'My days swing between big questions and tiny details: what should we build, why, and is that spacing really right? I work closely with the engineers who bring it all to life, and my favourite moment is when something complicated finally feels obvious.',
  ],
  // Three short beliefs about how you work. Edit freely — they should sound like you.
  principles: [
    {
      title: 'Start with the moment',
      text: 'Design for the situation someone is actually in, not a generic user on a generic day.',
    },
    {
      title: 'Make complex things calm',
      text: 'AI products can do a lot. The work is deciding what to show, and when.',
    },
    {
      title: 'Design with the builders',
      text: 'The best details come from working side by side with engineering, not handing off.',
    },
  ],
  // Small facts shown in the About section.
  facts: [
    { label: 'Based in', value: 'Vancouver, Canada' },
    { label: 'Background', value: 'Architecture' },
    { label: 'Languages', value: 'English & Persian' },
  ],
}

/* ------------------------------------------------------------------
   EXPERIENCE  (from LinkedIn)
   The first entry gets the featured treatment.
------------------------------------------------------------------- */
export const experience = [
  {
    current: true,
    role: 'Product & Design Lead',
    company: 'FaydenAI',
    period: 'Jun 2025 – present',
    place: 'Vancouver',
    summary:
      'I lead product, design and brand for FaydenAI’s AI-powered products, including Aplomb. That means setting the direction, designing the web and mobile experience, and working with engineers until it works well and feels right.',
    focus: [
      'Product direction & UX strategy',
      'Web & mobile UI/UX',
      'User research → product decisions',
      'Brand & visual identity',
      'Marketing assets & positioning',
      'Close collaboration with engineering',
    ],
  },
  {
    role: 'UI/UX Designer',
    company: 'Freelance',
    period: 'Apr 2022 – May 2025',
    place: 'Vancouver, remote',
    summary: 'Designing websites and digital products for clients, from first sketch to final screens.',
  },
  {
    role: 'Web & UI/UX Designer',
    company: 'Immibright',
    period: 'Dec 2024 – Feb 2025',
    place: 'Vancouver, contract',
    summary:
      'Designed a bilingual website (English and Persian) in Figma, then built and launched it in Odoo: logos, icons, banners, clearer navigation, and a booking flow that’s much easier to get through.',
  },
]

export const education = [
  {
    title: 'Bachelor’s degree, Architecture',
    school: 'Azad University (IAU)',
    period: '2014–2018',
  },
  {
    title: 'Google UI/UX Design',
    school: 'Google Career Certificates',
    period: 'Aug 2024',
  },
  {
    title: 'YWCA Tech Connect',
    school: 'YWCA BC',
    period: '2024',
  },
  {
    title: 'Designing Microinteractions with Figma',
    school: 'LinkedIn',
    period: '',
  },
]

/* ------------------------------------------------------------------
   SELECTED WORK
   Every project is a card on the home page.
   slug:  give a project its own page at #/work/<slug> (register the page
          in src/components/ProjectPage.jsx). Without a slug, the card
          links out to `link` instead (or nowhere, if link is null).
   image: path inside src/assets/images/ (e.g. 'work/project-one.jpg')
   video: optional, from /public — plays on hover over the card
------------------------------------------------------------------- */
export const projects = [
  {
    slug: 'aplomb',
    title: 'Aplomb',
    description:
      'A speaking coach for people who live and work in a language they didn’t grow up speaking. I designed the brand, the iOS and Android app, and the landing page for FaydenAI.',
    role: 'Product & Design Lead',
    tags: ['Brand', 'Mobile app', 'Website'],
    image: 'aplomb/brand-board.jpg',
    video: 'media/aplomb-showcase.mp4',
    plate: '#EAE2FC', // background colour behind the cover
  },
  {
    // Details to come. Remove `comingSoon` and add a description, role,
    // tags and an image once Faydesk is ready to show.
    title: 'Faydesk',
    comingSoon: true,
    plate: '#E4DAFB',
  },
]

/* ------------------------------------------------------------------
   EXPERTISE
------------------------------------------------------------------- */
export const expertise = [
  {
    group: 'Product thinking',
    items: [
      { name: 'Product design', note: 'From “what if…” to shipped' },
      { name: 'UX strategy', note: 'Deciding what a product should do, and what it really shouldn’t' },
      { name: 'User research & journeys', note: 'Listening first, then designing' },
      { name: 'AI-powered products', note: 'Making clever technology feel simple' },
    ],
  },
  {
    group: 'Interface & craft',
    items: [
      { name: 'UI design for mobile & web', note: 'iOS, Android and the web, all looking like family' },
      { name: 'Wireframing & prototyping', note: 'Trying ideas while they’re still cheap to change' },
      { name: 'Brand & visual identity', note: 'Logos, type and colour that get along' },
      { name: 'Bilingual interfaces', note: 'English and Persian, left to right and right to left' },
    ],
  },
  {
    group: 'Systems & teams',
    items: [
      { name: 'Design systems', note: 'So the tenth screen still matches the first' },
      { name: 'Website design & build', note: 'Landing pages that tell a product’s story' },
      { name: 'Design leadership', note: 'Keeping product, design and brand heading the same way' },
      { name: 'Cross-functional collaboration', note: 'Good friends with engineers (it helps a lot)' },
    ],
  },
]

// Tools listed on LinkedIn. Leave empty to hide the row.
export const tools = ['Figma', 'Adobe Photoshop', 'Adobe Premiere Pro', 'Canva', 'Odoo']
