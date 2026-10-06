import { useEffect, useState } from 'react'

// Self-attention over the one-line pitch. Rows are queries, columns are keys;
// each row sums to 1. Weights are hand-tuned for illustration.
const TOKENS = ['I', 'build', 'and', 'measure', 'LLM', 'systems']
const WEIGHTS = [
  [0.5, 0.22, 0.06, 0.1, 0.06, 0.06],
  [0.16, 0.36, 0.08, 0.1, 0.12, 0.18],
  [0.06, 0.3, 0.22, 0.3, 0.06, 0.06],
  [0.05, 0.14, 0.1, 0.35, 0.16, 0.2],
  [0.03, 0.1, 0.03, 0.16, 0.36, 0.32],
  [0.03, 0.14, 0.04, 0.12, 0.37, 0.3],
]
const MAX = 0.5

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function AttentionMap() {
  const [active, setActive] = useState(4) // start on "LLM"
  const [touched, setTouched] = useState(false)

  // Gently step through the rows until the visitor takes over.
  useEffect(() => {
    if (touched || prefersReducedMotion()) return
    const id = window.setInterval(() => setActive(r => (r + 1) % TOKENS.length), 2400)
    return () => window.clearInterval(id)
  }, [touched])

  const pick = (row: number) => {
    setTouched(true)
    setActive(row)
  }

  return (
    <figure className="m-0">
      <div
        className="grid gap-1 select-none"
        style={{ gridTemplateColumns: `minmax(3.75rem, auto) repeat(${TOKENS.length}, minmax(0, 1fr))` }}
      >
        {/* Column headers (keys) */}
        <div aria-hidden="true" />
        {TOKENS.map((t, j) => (
          <div
            key={`k-${t}`}
            aria-hidden="true"
            className={`pb-1 text-center font-cond text-[0.8125rem] leading-none transition-colors ${
              WEIGHTS[active][j] === Math.max(...WEIGHTS[active]) ? 'text-ink font-semibold' : 'text-muted'
            }`}
          >
            {t}
          </div>
        ))}

        {/* Rows (queries) */}
        {TOKENS.map((t, i) => {
          const isActive = i === active
          return (
            <div key={`q-${t}`} className="contents">
              <button
                type="button"
                aria-label={`Show what "${t}" attends to`}
                onMouseEnter={() => pick(i)}
                onFocus={() => pick(i)}
                onClick={() => pick(i)}
                aria-pressed={isActive}
                className={`flex items-center justify-end gap-1.5 pr-2 font-cond text-[0.9375rem] leading-none transition-colors cursor-pointer ${
                  isActive ? 'text-ink font-semibold' : 'text-muted hover:text-ink'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${isActive ? 'bg-signal' : 'bg-transparent'}`}
                />
                {t}
              </button>
              {WEIGHTS[i].map((w, j) => {
                const pct = Math.round((w / MAX) * 100)
                return (
                  <div
                    key={j}
                    aria-hidden="true"
                    className={`relative aspect-square rounded-[3px] transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-40'
                    }`}
                    style={{ background: `color-mix(in oklab, var(--heat-1) ${pct}%, var(--heat-0))` }}
                  >
                    {isActive && (
                      <span
                        className={`absolute inset-0 flex items-center justify-center text-[0.6875rem] font-medium tabular-nums ${
                          pct > 55 ? 'text-[var(--on-heat)]' : 'text-ink'
                        }`}
                      >
                        {w.toFixed(2).replace(/^0/, '')}
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
      <p className="sr-only" aria-live={touched ? 'polite' : 'off'}>
        {`"${TOKENS[active]}" attends most to ${TOKENS.map((t, j) => ({ t, w: WEIGHTS[active][j] }))
          .sort((a, b) => b.w - a.w)
          .slice(0, 2)
          .map(x => `"${x.t}" (${x.w.toFixed(2)})`)
          .join(' and ')}.`}
      </p>
      <figcaption className="mt-4 max-w-[38ch] text-sm leading-relaxed text-muted">
        Self-attention, the core of a transformer, over my one-line pitch: each row is how much
        one word weighs every other word. Hover or tab through the rows. Weights are illustrative.
      </figcaption>
    </figure>
  )
}
