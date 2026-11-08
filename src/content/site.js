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
    'I lead product, design and brand at FaydenAI, and design products that make sense and feel good to use: from the question a product answers to the interface people actually touch.',
  // Your photo, shown in the arch on the first screen.
  portrait: 'about/portrait.jpg',
}

export const about = {
  greeting: 'Hi, I’m Yasaman — most people call me Yasi.',
  paragraphs: [
    'I trained as an architect, and I still think like one: start with the people who’ll use the space, understand how they move through it, then make every detail earn its place.',
    'That way of thinking carried straight into digital product design. Since 2022 I’ve worked as a UI/UX designer in Vancouver, and today I lead product, design and brand at FaydenAI — a small team building AI-powered products, including Aplomb.',
    'Day to day that means moving between strategy and detail: shaping product direction, turning research into decisions, designing web and mobile interfaces, building the brand, and working closely with the engineers who bring it to life. I like turning complex ideas into things that are easy to use — and, where I can, add a little joy to the journey.',
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
      'I lead product design, user experience and brand across FaydenAI’s AI-powered products — including Aplomb. I set product and UX direction, design the web and mobile experiences, and work closely with engineering to turn ideas into polished, user-focused products.',
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
    summary: 'Independent UI/UX design for websites and digital products.',
  },
  {
    role: 'Web & UI/UX Designer',
    company: 'Immibright',
    period: 'Dec 2024 – Feb 2025',
    place: 'Vancouver, contract',
    summary:
      'Designed the responsive website in Figma and built and launched it in Odoo, in English and Persian — including the logos, icons and banners, a clearer navigation, and a smoother assessment form and booking flow.',
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
      'A speaking coach for people who live and work in a language they didn’t grow up speaking. Brand, iOS & Android app and landing page for FaydenAI.',
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
      { name: 'Product design', note: 'From problem framing to shipped feature' },
      { name: 'UX strategy', note: 'Deciding what a product should do, and not do' },
      { name: 'User research & journeys', note: 'Turning insight into product decisions' },
      { name: 'AI-powered products', note: 'Making capable systems feel simple' },
    ],
  },
  {
    group: 'Interface & craft',
    items: [
      { name: 'UI design for mobile & web', note: 'iOS, Android and responsive web' },
      { name: 'Wireframing & prototyping', note: 'Testing ideas before committing to them' },
      { name: 'Brand & visual identity', note: 'Marks, type and colour that hold together' },
      { name: 'Bilingual interfaces', note: 'English and Persian, left-to-right and right-to-left' },
    ],
  },
  {
    group: 'Systems & teams',
    items: [
      { name: 'Design systems', note: 'Tokens, components and consistency' },
      { name: 'Website design & build', note: 'Landing pages that tell a product’s story' },
      { name: 'Design leadership', note: 'Setting direction across product, design and brand' },
      { name: 'Cross-functional collaboration', note: 'Working closely with engineering and product' },
    ],
  },
]

// Tools listed on LinkedIn. Leave empty to hide the row.
export const tools = ['Figma', 'Adobe Photoshop', 'Adobe Premiere Pro', 'Canva', 'Odoo']
