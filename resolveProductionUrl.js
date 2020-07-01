const previewSecret = 'catzzzz'
const projectUrl = process.env.NODE_ENV === 'production' ? 'https://bitso-sanity-example.vercel.app': 'http://localhost:3000'

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`
}
