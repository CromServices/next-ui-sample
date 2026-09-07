import { useState } from 'react';
import { StatusBadge } from './components/StatusBadge';

/**
 * One-page sample of a scoped React UI change.
 * The density toggle only affects StatusBadge internals — not page chrome.
 * Same pattern ports cleanly to Next.js App Router / pages.
 */
export function App() {
  const [compact, setCompact] = useState(false);

  return (
    <main>
      <h1>Scoped UI change sample</h1>
      <p className="lede">
        Crom Services small-build pattern: ship a focused UI PR that changes one
        component&apos;s density and tone without rewriting the surrounding page.
        Built with React + TypeScript (Vite). Suitable for React or Next.js delivery.
      </p>

      <section className="card" aria-labelledby="demo-heading">
        <h2 id="demo-heading">StatusBadge density toggle</h2>
        <div className="row">
          <StatusBadge label="Ready" tone="success" compact={compact} />
          <StatusBadge label="Review" tone="warning" compact={compact} />
          <StatusBadge label="Blocked" tone="danger" compact={compact} />
          <StatusBadge label="Draft" tone="neutral" compact={compact} />
        </div>
        <div className="row">
          <button type="button" onClick={() => setCompact((v) => !v)}>
            {compact ? 'Use comfortable density' : 'Use compact density'}
          </button>
        </div>
        <p className="meta">
          Scope boundary: only <code>StatusBadge</code> padding/font-size change.
          Card, heading, and page layout stay untouched — the kind of PR-sized UI
          patch Crom Services delivers.
        </p>
      </section>
    </main>
  );
}
