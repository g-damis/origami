import { css } from 'lit';

export const oruButtonStyles = css`
  :host {
    display: inline-block;
  }

  button {
    font-family: var(--oru-font-family-sans);
    font-size: var(--oru-font-size-base);
    font-weight: var(--oru-font-weight-bold);
    padding: var(--oru-spacing-2) var(--oru-spacing-4);
    border: 1px solid transparent;
    border-radius: var(--oru-radius-md);
    cursor: pointer;
    color: var(--oru-color-black);
    background-color: var(--oru-color-primary);
    transition:
      background-color var(--oru-transition-base),
      color var(--oru-transition-base),
      transform var(--oru-transition-fast);
    box-shadow: var(--oru-shadow-sm);
  }

  button[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  button:not([disabled]):hover {
    transform: translateY(-1px);
    box-shadow: var(--oru-shadow-md);
  }

  button:focus-visible {
    outline: 2px solid var(--oru-color-accent);
    outline-offset: 2px;
  }

  :host([variant='secondary']) button {
    background-color: var(--oru-color-secondary);
    color: var(--oru-color-on-secondary);
  }
`;
