import type { CSSProperties } from 'react';

export type StatusTone = 'neutral' | 'success' | 'warning' | 'danger';

export type StatusBadgeProps = {
  label: string;
  tone?: StatusTone;
  /** Scoped UI change: compact density without touching surrounding layout */
  compact?: boolean;
};

const tones: Record<StatusTone, CSSProperties> = {
  neutral: { background: '#e2e8f0', color: '#334155' },
  success: { background: '#dcfce7', color: '#166534' },
  warning: { background: '#fef3c7', color: '#92400e' },
  danger: { background: '#fee2e2', color: '#991b1b' },
};

/**
 * Scoped UI pattern: visual density and tone stay inside this component.
 * Parent layout (spacing, grid, copy) does not need to change when compact flips.
 */
export function StatusBadge({
  label,
  tone = 'neutral',
  compact = false,
}: StatusBadgeProps) {
  const style: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: 999,
    fontWeight: 600,
    letterSpacing: '0.01em',
    border: '1px solid transparent',
    padding: compact ? '0.15rem 0.55rem' : '0.35rem 0.75rem',
    fontSize: compact ? '0.75rem' : '0.875rem',
    lineHeight: 1.2,
    ...tones[tone],
  };

  return (
    <span data-testid="status-badge" data-compact={compact ? 'true' : 'false'} style={style}>
      {label}
    </span>
  );
}
