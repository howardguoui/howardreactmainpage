import { useState } from 'react'
import type { ReactNode } from 'react'
import { experience, faq, profile, projects, skills } from '../data/profile'
import { CheckIcon, CopyIcon, ExternalIcon, FileIcon, GitHubIcon, LinkedInIcon, PlusIcon } from './Icons'

const base = import.meta.env.BASE_URL

function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.33fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <h2 id={`${id}-title`} className="font-cond text-[2.25rem] font-semibold leading-tight tracking-[-0.01em] text-ink">
              {title}
            </h2>
            {intro && <p className="mt-3 max-w-[36ch] text-muted">{intro}</p>}
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  )
}

export function Work() {
  return (
    <Section id="work" title="Selected work" intro="Recent projects, with links where the code is public.">
      <ul className="divide-y divide-line border-y border-line">
        {projects.map(p => (
          <li key={p.name} className="py-7">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h3 className="font-cond text-[1.5625rem] font-semibold leading-tight text-ink">{p.name}</h3>
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-[0.9375rem]">
                {p.live && (
                  <a href={p.live} className="text-link inline-flex items-center gap-1">
                    Live demo
                    <ExternalIcon />
                  </a>
                )}
                {p.code && (
                  <a href={p.code} className="text-link inline-flex items-center gap-1">
                    Source code
                    <ExternalIcon />
                  </a>
                )}
                {p.note && <span className="text-muted">{p.note}</span>}
              </div>
            </div>
            <p className="mt-2 max-w-[64ch]">{p.summary}</p>
            <p className="mt-3 text-[0.9375rem] text-muted">{p.stack.join(', ')}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function Experience() {
  return (
    <Section id="experience" title="Experience" intro="Work and study, newest first.">
      <ol className="relative border-l border-line">
        {experience.map(r => {
          const ongoing = r.dates.includes('present')
          return (
            <li key={r.title + r.org} className="relative pb-10 pl-7 last:pb-0">
              <span
                aria-hidden="true"
                className={`absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full border-2 ${
                  ongoing ? 'border-signal bg-signal' : 'border-line bg-paper'
                }`}
              />
              <p className="text-[0.9375rem] tabular-nums text-muted">{r.dates}</p>
              <h3 className="mt-1 text-[1.1875rem] font-semibold leading-snug text-ink">
                {r.title}
                <span className="font-normal text-muted">, {r.org}</span>
              </h3>
              <p className="mt-2 max-w-[64ch]">{r.detail}</p>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {skills.map(s => (
          <div key={s.group}>
            <dt className="text-[0.9375rem] font-medium text-muted">{s.group}</dt>
            <dd className="mt-1 text-ink">{s.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

export function Faq() {
  return (
    <Section id="questions" title="Common questions">
      <div className="divide-y divide-line border-y border-line">
        {faq.map(item => (
          <details key={item.q} className="group">
            <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 text-[1.0625rem] font-medium text-ink">
              {item.q}
              <PlusIcon className="faq-icon h-4 w-4 shrink-0 text-muted transition-transform duration-200" />
            </summary>
            <p className="max-w-[64ch] pb-5 text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <Section id="contact" title="Contact" intro={`${profile.location}. I reply within a day.`}>
      <div className="flex items-center gap-4">
        <img
          src={`${base}${profile.photo}`}
          alt="Howard Guo"
          width={64}
          height={64}
          loading="lazy"
          className="h-16 w-16 shrink-0 rounded-full object-cover object-top"
        />
        <p className="text-muted">The fastest way to reach me is email.</p>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
        <a
          href={`mailto:${profile.email}`}
          className="font-cond text-[clamp(1.625rem,7vw,2.75rem)] font-semibold leading-tight text-ink underline decoration-line decoration-2 underline-offset-[6px] [overflow-wrap:anywhere] transition-colors hover:decoration-signal"
        >
          {profile.email}
        </a>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1.5 text-sm text-muted transition-colors hover:text-ink"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          {copied ? 'Copied' : 'Copy'}
        </button>
        <span className="sr-only" aria-live="polite">
          {copied ? 'Email address copied' : ''}
        </span>
      </div>

      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
        <li>
          <a href={profile.links.linkedin} className="text-link inline-flex items-center gap-2">
            <LinkedInIcon /> LinkedIn
          </a>
        </li>
        <li>
          <a href={profile.links.github} className="text-link inline-flex items-center gap-2">
            <GitHubIcon /> GitHub
          </a>
        </li>
        {profile.resume && (
          <li>
            <a href={`${base}${profile.resume}`} className="text-link inline-flex items-center gap-2">
              <FileIcon /> Resume (PDF)
            </a>
          </li>
        )}
      </ul>
    </Section>
  )
}
