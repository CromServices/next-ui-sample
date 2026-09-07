import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatusBadge } from './StatusBadge';

describe('StatusBadge', () => {
  it('renders the label', () => {
    render(<StatusBadge label="Ready" tone="success" />);
    expect(screen.getByTestId('status-badge')).toHaveTextContent('Ready');
  });

  it('applies compact density as a scoped attribute', () => {
    const { rerender } = render(<StatusBadge label="Draft" compact={false} />);
    expect(screen.getByTestId('status-badge')).toHaveAttribute('data-compact', 'false');

    rerender(<StatusBadge label="Draft" compact />);
    expect(screen.getByTestId('status-badge')).toHaveAttribute('data-compact', 'true');
  });
});
