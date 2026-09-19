import { StatusBadgeDemo } from '@/src/components/StatusBadgeDemo';

export default function HomePage() {
  return (
    <div className="wrap">
      <header className="topbar">
        <p className="brand">Crom Services · Perth WA · Remote</p>
        <span className="sample">Next.js App Router · static export</span>
      </header>

      <p className="banner">Finish-gap sample</p>
      <h1>Stub screen, then one scoped ship</h1>
      <p className="lede">
        Client-facing pattern for a half-built UI: leave unfinished chrome as
        stub, and close the gap with one component. This page is a real Next.js
        App Router app, statically exported for GitHub Pages — not a Vite
        stand-in labelled as Next.
      </p>

      <div className="gap-grid">
        <section className="panel stub" aria-labelledby="stub-heading">
          <p className="kicker">Still stub</p>
          <h2 id="stub-heading">Filters and extra states</h2>
          <p className="note">
            Intentionally unfinished. Placeholder chips and an empty slot stand
            in for work that is out of scope for this delivery.
          </p>
          <div className="row" aria-hidden="true">
            <span className="skel" />
            <span className="skel short" />
            <span className="skel" />
          </div>
          <div className="dashed-slot">Saved views · not in this PR</div>
        </section>

        <section className="panel shipped" aria-labelledby="shipped-heading">
          <p className="kicker">Shipped</p>
          <h2 id="shipped-heading">StatusBadge density</h2>
          <p className="note">
            Scoped change: tone and compact density stay inside the badge.
            Surrounding layout does not rewrite when density flips.
          </p>
          <StatusBadgeDemo />
        </section>
      </div>

      <section className="story" aria-labelledby="story-heading">
        <h2 id="story-heading">What this sample shows</h2>
        <ul>
          <li>
            Finish-gap: stub UI remains visible so the shipped piece is obvious
            in review.
          </li>
          <li>
            Next.js App Router with <code>output: &apos;export&apos;</code> for
            a project Pages site.
          </li>
          <li>
            Same StatusBadge contract a React or Next delivery can drop into a
            real page.
          </li>
        </ul>
      </section>

      <footer>
        <p>Crom Services · Perth WA · Remote across Australia</p>
        <p>
          Site:{' '}
          <a href="https://cromservices.com.au">https://cromservices.com.au</a>
          {' · '}
          Contact:{' '}
          <a href="mailto:cromservices@gmail.com">cromservices@gmail.com</a>
        </p>
        <p>Portfolio sample only · MIT · not a client system</p>
      </footer>
    </div>
  );
}
