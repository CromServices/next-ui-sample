'use client';

import { useState } from 'react';
import { StatusBadge } from './StatusBadge';

export function StatusBadgeDemo() {
  const [compact, setCompact] = useState(false);

  return (
    <>
      <div className="row">
        <StatusBadge label="Ready" tone="success" compact={compact} />
        <StatusBadge label="Review" tone="warning" compact={compact} />
        <StatusBadge label="Blocked" tone="danger" compact={compact} />
        <StatusBadge label="Draft" tone="neutral" compact={compact} />
      </div>
      <div className="row">
        <button type="button" onClick={() => setCompact((value) => !value)}>
          {compact ? 'Use comfortable density' : 'Use compact density'}
        </button>
      </div>
      <p className="meta">
        Scope boundary: only <code>StatusBadge</code> padding and font-size
        change. Card, heading, and page layout stay untouched.
      </p>
    </>
  );
}
