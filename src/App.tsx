import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Contact, Experience, Faq, Skills, Work } from './components/Sections'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Faq />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-8 text-sm text-muted sm:px-6">
          <p>© {new Date().getFullYear()} Howard Guo</p>
          <p>
            Built with React and Vite.{' '}
            <a href="https://github.com/howardguoui/howardreactmainpage" className="text-link">
              Source on GitHub
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}
