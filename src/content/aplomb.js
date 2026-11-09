/* ==================================================================
   APLOMB — featured case study
   Product facts come from the Aplomb brand board, the showcase film
   and the live site (aplomb.faydenai.com).
   Images: paths are relative to src/assets/images/
   Video:  public/media/aplomb-showcase.mp4
   ================================================================== */

export const aplomb = {
  name: 'Aplomb',
  tagline: 'A speaking coach for the moments that matter.',
  definition: { word: 'Aplomb', kind: 'noun', meaning: 'Calm confidence in a demanding situation.' },
  siteUrl: 'https://aplomb.faydenai.com',
  siteLabel: 'aplomb.faydenai.com',

  meta: [
    { label: 'Company', value: 'FaydenAI' },
    { label: 'My role', value: 'Product & Design Lead' },
    { label: 'Scope', value: 'Brand identity, iOS & Android app, landing page' },
    { label: 'Status', value: 'Coming soon to App Store, Google Play & Mac' },
    // TODO: add the project timeline, e.g. { label: 'Timeline', value: '2025 — 2026' }
  ],

  /* ---------- The film ---------- */
  film: {
    src: 'media/aplomb-showcase.mp4', // served from /public
    poster: 'aplomb/brand-intro.jpg',
    duration: 66,
    chapters: [
      { t: 0, label: 'Brand mark' },
      { t: 5, label: 'Landing page' },
      { t: 13, label: 'How it works' },
      { t: 21, label: 'Tools' },
      { t: 26, label: 'Responsive' },
      { t: 33, label: 'App: ask' },
      { t: 41, label: 'App: answer' },
      { t: 46, label: 'App: practise' },
      { t: 53, label: 'App: progress' },
      { t: 58, label: 'The system' },
    ],
  },

  /* ---------- Overview ---------- */
  overview: {
    lead: 'Aplomb is a speaking coach for people who live and work in a language they didn’t grow up speaking.',
    problem:
      'You know exactly what you want to say. Then the interview starts, or the doctor walks in, and the words come out… differently. Language courses teach you a language. They don’t get you ready for Thursday’s presentation.',
    approach:
      'Aplomb starts with the moment you’re nervous about, like a job interview, a salary review, a pitch or a doctor’s visit, and helps you practise it out loud, in your own words, until it feels easy.',
    moments: ['Job interview', 'Salary review', 'Presentation', 'Doctor’s visit', 'Pitch'],
  },

  /* ---------- My role ---------- */
  contributions: [
    {
      title: 'Brand identity',
      text: 'The Aplomb mark (an “A” holding a voice wave), plus the colours, type and tone that show up everywhere.',
    },
    {
      title: 'Product & UX',
      text: 'The coaching flow, from “I have something coming up” to “I’m ready”.',
    },
    {
      title: 'Mobile app UI',
      text: 'The iOS and Android screens: the coach, practice, progress and saved words.',
    },
    {
      title: 'Design system',
      text: 'Shared building blocks that keep the app and the website looking like family.',
    },
    {
      title: 'Landing page',
      text: 'aplomb.faydenai.com, from the animated top of the page down to the phone layout.',
    },
    {
      title: 'Digital presentation',
      text: 'How Aplomb introduces itself to the world, including the film at the top of this page.',
    },
  ],

  /* ---------- Key decisions ---------- */
  decisions: [
    {
      title: 'Support that fades',
      text: 'Practice goes from full script, to key points, to just you. The help steps back as your confidence steps up.',
    },
    {
      title: 'Your first language, alongside',
      text: 'Explanations can show up in your own language, so nothing gets lost along the way.',
    },
    {
      title: 'Controls for real rehearsal',
      text: 'Repeat, slow down to 0.75×, try another version, or change the tone: more polite, more casual, or shorter.',
    },
    {
      title: 'Privacy by default',
      text: 'Video takes stay on your phone. Nobody needs to see your tenth attempt.',
    },
  ],

  /* ---------- Design system ---------- */
  system: {
    intro:
      'A few decisions, used everywhere: a confident navy mark, soft periwinkle backgrounds, and violet for anything you can tap.',
    // Colours sampled from the Aplomb brand artwork.
    palette: [
      { name: 'Midnight', hex: '#122D6F', role: 'Mark & headings', light: false },
      { name: 'Violet', hex: '#5148C5', role: 'Actions & highlights', light: false },
      { name: 'Periwinkle', hex: '#726FCF', role: 'Voice bars', light: false },
      { name: 'Coral', hex: '#FF807E', role: 'Voice accent', light: false },
      { name: 'Lavender', hex: '#E2DFFC', role: 'Cards & progress', light: true },
      { name: 'Mist', hex: '#EEECFF', role: 'Chips & surfaces', light: true },
      { name: 'Sky', hex: '#DEEDFD', role: 'Backgrounds', light: true },
    ],
    // TODO: add the typeface name(s) used in Aplomb, e.g. { name: 'Lexend', use: 'Display & UI' }
    typefaces: [],
    mark: 'aplomb/brand-intro.jpg',
    components: [
      { image: 'aplomb/comp-say-this.jpg', caption: 'Phrase card', ratio: '430 / 400', width: 430 },
      { image: 'aplomb/comp-controls.jpg', caption: 'Practice controls', ratio: '410 / 170', width: 410 },
      { image: 'aplomb/comp-orb.jpg', caption: 'The coach', ratio: '170 / 150', width: 170 },
    ],
  },

  /* ---------- Final ---------- */
  final: {
    image: 'aplomb/brand-board.jpg',
    closing: 'A brand, an app and a website with one message: you’ve got this.',
  },
}
