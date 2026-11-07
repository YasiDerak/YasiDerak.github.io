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
    { label: 'Scope', value: 'Brand identity · iOS & Android app · Landing page' },
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
      { t: 33, label: 'App · Ask' },
      { t: 41, label: 'App · Answer' },
      { t: 46, label: 'App · Practise' },
      { t: 53, label: 'App · Progress' },
      { t: 58, label: 'The system' },
    ],
  },

  /* ---------- 01 Overview ---------- */
  overview: {
    lead: 'Aplomb is a speaking coach for people who live and work in a language they didn’t grow up speaking.',
    problem:
      'You know what you want to say. Then the interview starts, or the doctor walks in, and it doesn’t come out the way it sounded in your head. Language courses teach the language — they don’t get you ready for Thursday’s presentation.',
    approach:
      'Aplomb starts from the moment you have coming up — a job interview, a salary review, a pitch, a doctor’s visit — and helps you rehearse it out loud, in your own words, until you’re ready.',
    moments: ['Job interview', 'Salary review', 'Presentation', 'Doctor’s visit', 'Pitch'],
  },

  /* ---------- 02 Vision ---------- */
  vision: {
    statement: 'Prepare for the moment, not the course.',
    pillars: [
      {
        title: 'Your moment, not a course',
        text: 'Every lesson starts from something real you have coming up, in your own words.',
      },
      {
        title: 'Out loud, always',
        text: 'Reading a script isn’t practice. Saying it is — so every lesson has you speaking.',
      },
      {
        title: 'Your words stay yours',
        text: 'Moments, recordings and saved words belong to the user, and can be deleted at any time.',
      },
    ],
  },

  /* ---------- 03 My contributions ---------- */
  contributions: [
    {
      title: 'Brand identity',
      text: 'The Aplomb mark — an “A” holding a voice waveform — plus the colour, type and tone that carry across every surface.',
    },
    {
      title: 'Product & UX',
      text: 'The coaching flow from first question to finished rehearsal, and how the app guides people through it.',
    },
    {
      title: 'Mobile app UI',
      text: 'Interface design for iOS and Android: the coach, practice, progress and saved-word screens.',
    },
    {
      title: 'Design system',
      text: 'Shared components and tokens that keep the app and the website consistent.',
    },
    {
      title: 'Landing page',
      text: 'The aplomb.faydenai.com experience, from the animated hero to the responsive layout.',
    },
    {
      title: 'Digital presentation',
      text: 'How Aplomb is shown to the world — including the showcase film on this page.',
    },
  ],

  /* ---------- 04 Process / user journey ---------- */
  journey: {
    intro:
      'The core experience is designed as one continuous journey: from “I have something coming up” to “I’ve said it out loud, and I’m ready.”',
    steps: [
      { n: '01', title: 'Your coach’s home', text: 'One clear next step, and what else is worth doing today.' },
      { n: '02', title: 'Ask for what you need', text: 'A moment to get ready for, a sentence to say now, or a word you just met.' },
      { n: '03', title: 'Say it out loud', text: 'The coach says each line and you say it back. Then the script fades until it’s only you.' },
      { n: '04', title: 'Take the hard question', text: 'The coach plays the other side — the CFO, the interviewer — and you answer in your own words.' },
      { n: '05', title: 'Watch yourself back', text: 'Film a take and see what the coach heard: pace, fillers, what you covered and what you missed.' },
      { n: '06', title: 'See what you’ve built', text: 'Minutes spoken, words kept and mistakes fixed — progress you can feel.' },
    ],
    decisions: [
      {
        title: 'Support that fades',
        text: 'Practice moves from full script, to key points, to on your own — so help steps back as confidence grows.',
      },
      {
        title: 'Your first language, alongside',
        text: 'Explanations can appear in the user’s own language, so nothing gets lost while learning to say it.',
      },
      {
        title: 'Controls for real rehearsal',
        text: 'Repeat, slow down to 0.75×, ask for another version, or switch tone — more polite, more casual, shorter.',
      },
      {
        title: 'Privacy by default',
        text: 'Video takes stay on the phone. A small promise that makes it easier to practise honestly.',
      },
    ],
    // TODO: add your process artefacts (research notes, sketches, wireframes, iterations).
    // Drop images in src/assets/images/aplomb/ and set the file names here.
    artefacts: [
      { image: 'aplomb/process-research.jpg', caption: 'Research & early notes', placeholder: true },
      { image: 'aplomb/process-wireframes.jpg', caption: 'Wireframes', placeholder: true },
      { image: 'aplomb/process-iterations.jpg', caption: 'Visual iterations', placeholder: true },
    ],
  },

  /* ---------- 05 Product interface ---------- */
  interface: {
    intro:
      'A calm, bright interface built around one object: the coach. Everything else — the line to say, the controls, the feedback — sits quietly around it.',
    feature: [
      { image: 'aplomb/app-answer.jpg', title: 'The coach sorts it', text: 'Words to say, a simpler version, and why they work. Then you say it out loud.' },
      { image: 'aplomb/app-practise.jpg', title: 'Less help each time', text: 'Scripts fade line by line until the words are yours.' },
    ],
    screens: [
      { image: 'aplomb/screen-home.jpg', caption: 'Coach home' },
      { image: 'aplomb/screen-say-this.jpg', caption: 'Say this' },
      { image: 'aplomb/screen-progress.jpg', caption: 'Progress' },
      { image: 'aplomb/screen-word.jpg', caption: 'Saved word' },
    ],
    more: [
      { image: 'aplomb/app-ask.jpg', title: 'Ask for what you need' },
      { image: 'aplomb/app-progress.jpg', title: 'Watch it add up' },
      { image: 'aplomb/app-vocabulary.jpg', title: 'Vocabulary bank' },
    ],
  },

  /* ---------- 06 Design system ---------- */
  system: {
    intro:
      'One small set of decisions, used everywhere: a confident navy mark, a soft periwinkle field, and violet for anything you can act on.',
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

  /* ---------- 07 Website ---------- */
  website: {
    intro:
      'The landing page tells the product’s story by showing it working — the page itself rehearses real lines from real moments.',
    hero: { image: 'aplomb/landing-hero.jpg', title: 'The mark speaks real lines from real moments.' },
    beats: [
      { image: 'aplomb/landing-how-it-works.jpg', title: 'Scroll, and the coach’s story plays out.', text: 'How it works becomes a single horizontal journey through the six steps.' },
      { image: 'aplomb/landing-tools.jpg', title: 'Tiles that play on their own.', text: 'Audio Companion, Songs, Articulation Gym and Vocal Gym each demo themselves.' },
      { image: 'aplomb/landing-responsive.jpg', title: 'One page, from desktop to phone.', text: 'The same story, recomposed for a small screen.' },
    ],
  },

  /* ---------- 08 Final ---------- */
  final: {
    image: 'aplomb/brand-board.jpg',
    closing: 'A brand, an app and a website that all say the same thing: you can do this.',
  },
}
