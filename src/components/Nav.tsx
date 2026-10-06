import { useState } from 'react'
import { MoonIcon, SunIcon } from './Icons'

type Theme = 'light' | 'dark'

function currentTheme(): Theme {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
}

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [theme, setTheme] = useState<Theme>(currentTheme)

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('hg-theme', next)
    } catch {
      /* private mode: theme still applies for this visit */
    }
    setTheme(next)
  }

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75">
      <nav aria-label="Main" className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-4 sm:gap-4 sm:px-6">
        <a href="#top" className="whitespace-nowrap font-cond text-lg font-semibold tracking-tight text-ink no-underline">
          Howard Guo
        </a>
        <ul className="ml-auto flex items-center sm:gap-2">
          {LINKS.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded px-1.5 py-1.5 text-[0.875rem] text-muted sm:px-2 sm:text-[0.9375rem] no-underline transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={toggle}
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-line text-muted transition-colors hover:text-ink"
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </nav>
    </header>
  )
}
