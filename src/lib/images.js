// Every image in src/assets/images is discovered at build time.
// Content files refer to images by path (e.g. 'aplomb/landing-hero.jpg').
// If a file doesn't exist yet, img() returns null and the UI shows a
// tasteful placeholder instead — no broken images, no 404s.
const files = import.meta.glob('../assets/images/**/*.{jpg,jpeg,png,webp,avif,gif,svg}', {
  eager: true,
  import: 'default',
})

const byPath = Object.fromEntries(
  Object.entries(files).map(([key, url]) => [key.replace('../assets/images/', ''), url]),
)

export function img(path) {
  if (!path) return null
  return byPath[path] ?? null
}

// Files in /public (like the Aplomb film) need the deploy base path.
export function publicUrl(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
