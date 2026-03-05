import { css } from 'lit';

export const nuButtonStyles = css`
  :host {
    display: inline-block;
  }

  button {
    font-family: var(--nu-font-family-sans);
    font-size: var(--nu-font-size-base);
    font-weight: var(--nu-font-weight-bold);
    padding: var(--nu-spacing-2) var(--nu-spacing-4);
    border: 1px solid transparent;
    border-radius: var(--nu-radius-md);
    cursor: pointer;
    color: var(--nu-color-black);
    background-color: var(--nu-color-primary);
    transition:
      background-color var(--nu-transition-base),
      color var(--nu-transition-base),
      transform var(--nu-transition-fast);
    box-shadow: var(--nu-shadow-sm);
  }

  button[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  button:not([disabled]):hover {
    transform: translateY(-1px);
    box-shadow: var(--nu-shadow-md);
  }

  button:focus-visible {
    outline: 2px solid var(--nu-color-accent);
    outline-offset: 2px;
  }

  :host([variant='secondary']) button {
    background-color: var(--nu-color-secondary);
    color: var(--nu-color-on-secondary);
  }
`;
