import { profile } from '../data/profile'
import { AttentionMap } from './AttentionMap'
import { FileIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

const base = import.meta.env.BASE_URL

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-name" className="mx-auto max-w-6xl px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
      <div className="grid items-end gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-20">
        <div>
          <p className="flex items-start gap-2 text-[0.9375rem] text-muted">
            <span aria-hidden="true" className="mt-[0.5em] h-2 w-2 shrink-0 rounded-full bg-signal" />
            {profile.status}
          </p>

          <h1
            id="hero-name"
            className="mt-5 font-cond text-[clamp(3.5rem,12vw,7.25rem)] font-semibold leading-[0.88] tracking-[-0.025em] text-ink"
          >
            Howard
            <br />
            Guo
          </h1>

          <p className="mt-7 max-w-[30ch] text-[1.5rem] font-medium leading-snug text-ink sm:text-[1.75rem]">
            {profile.role}
          </p>
          <p className="mt-4 max-w-[60ch] text-muted">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2.5 font-medium text-paper no-underline transition-opacity hover:opacity-90"
            >
              <MailIcon />
              Email me
            </a>
            <a
              href={`${base}${profile.resume}`}
              className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2.5 font-medium text-ink no-underline transition-colors hover:border-muted"
            >
              <FileIcon />
              Resume (PDF)
            </a>
            <span className="flex items-center gap-1">
              <a
                href={profile.links.github}
                className="grid h-10 w-10 place-items-center rounded-md text-muted transition-colors hover:text-ink"
                aria-label="GitHub profile"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.links.linkedin}
                className="grid h-10 w-10 place-items-center rounded-md text-muted transition-colors hover:text-ink"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </span>
          </div>
        </div>

        <div className="w-full max-w-md lg:justify-self-end">
          <AttentionMap />
        </div>
      </div>
    </section>
  )
}
