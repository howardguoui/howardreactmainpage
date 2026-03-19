import React, { useState, useEffect } from 'react';

/* Tokens shown as both row (query) and column (key) headers */
const TOKENS = ['model', 'learns', 'from', 'large', 'text', 'data'];

/*
 * Attention weights per query token (rows).
 * Each row sums to ~1 and peaks on the diagonal (self-attention).
 */
const WEIGHTS = [
  [0.82, 0.07, 0.04, 0.03, 0.02, 0.02], // "model"  attends most to itself
  [0.06, 0.79, 0.08, 0.04, 0.02, 0.01], // "learns"
  [0.03, 0.09, 0.74, 0.08, 0.04, 0.02], // "from"
  [0.04, 0.05, 0.10, 0.71, 0.07, 0.03], // "large"
  [0.02, 0.03, 0.06, 0.09, 0.73, 0.07], // "text"
  [0.02, 0.02, 0.04, 0.05, 0.12, 0.75], // "data"
];

const Testimonials = () => {
  const [activeRow, setActiveRow] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveRow(r => (r + 1) % TOKENS.length),
      1800
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section id='testimonials'>
      <div className='attn-section'>

        {/* Header */}
        <div className='attn-badge'>
          <span className='attn-dot'></span>
          Self-Attention · Transformer Core
        </div>
        <h3 className='attn-title'>How AI Models Understand Language</h3>
        <p className='attn-sub'>
          Every token weighs its relationship to every other token — simultaneously,
          in parallel. The highlighted row shows which tokens the current query attends&nbsp;to.
        </p>

        {/* Matrix */}
        <div className='attn-matrix-wrap'>
          <div className='attn-matrix'>

            {/* Top-left corner spacer */}
            <div className='attn-corner' />

            {/* Column headers (key tokens) */}
            {TOKENS.map((t, j) => (
              <div
                key={`col-${j}`}
                className={`attn-col-label${activeRow === j ? ' attn-label--active' : ''}`}
              >
                {t}
              </div>
            ))}

            {/* Rows */}
            {TOKENS.map((rowToken, i) => (
              <React.Fragment key={`row-${i}`}>
                {/* Row header (query token) */}
                <div className={`attn-row-label${activeRow === i ? ' attn-label--active' : ''}`}>
                  {rowToken}
                </div>
                {/* Cells */}
                {WEIGHTS[i].map((w, j) => (
                  <div
                    key={`${i}-${j}`}
                    className={`attn-cell${activeRow === i ? ' attn-cell--active' : ''}`}
                    style={{ '--w': w }}
                    title={`${(w * 100).toFixed(0)}%`}
                  />
                ))}
              </React.Fragment>
            ))}
          </div>

          {/* Legend */}
          <div className='attn-legend'>
            <span className='attn-legend-label'>Low</span>
            <div className='attn-legend-bar' />
            <span className='attn-legend-label'>High attention</span>
          </div>
        </div>

        {/* Query label */}
        <p className='attn-query-label'>
          Query: <strong>&ldquo;{TOKENS[activeRow]}&rdquo;</strong> attends to all tokens
        </p>

      </div>
    </section>
  );
};

export default Testimonials;
