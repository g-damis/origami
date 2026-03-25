import { css } from 'lit';

export const oruFormRowStyles = css`
  :host {
    display: block;
    margin-bottom: var(--oru-spacing-4);
    font-family: var(--oru-font-family-sans);
    color: var(--oru-color-text);
  }

  label {
    display: block;
    margin-bottom: var(--oru-spacing-1);
    font-size: var(--oru-font-size-base);
    font-weight: var(--oru-font-weight-bold);
    color: var(--oru-color-secondary);
  }

  .controls {
    display: flex;
    align-items: center;
    gap: var(--oru-spacing-2);
  }

  input {
    flex: 1;
    min-width: 0;
    padding: var(--oru-spacing-2);
    border: 1px solid var(--oru-color-accent);
    border-radius: var(--oru-radius-md);
    font-family: var(--oru-font-family-sans);
    font-size: var(--oru-font-size-base);
    color: var(--oru-color-text);
    background: var(--oru-color-gray-50);
    transition:
      border-color var(--oru-transition-base),
      box-shadow var(--oru-transition-fast);
  }

  input:focus-visible {
    outline: none;
    border-color: var(--oru-color-secondary);
    box-shadow: 0 0 0 var(--oru-spacing-1) var(--oru-color-accent);
  }
`;
