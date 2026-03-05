import { css } from 'lit';

export const nuFormRowStyles = css`
  :host {
    display: block;
    margin-bottom: var(--nu-spacing-4);
    font-family: var(--nu-font-family-sans);
    color: var(--nu-color-text);
  }

  label {
    display: block;
    margin-bottom: var(--nu-spacing-1);
    font-size: var(--nu-font-size-base);
    font-weight: var(--nu-font-weight-bold);
    color: var(--nu-color-secondary);
  }

  .controls {
    display: flex;
    align-items: center;
    gap: var(--nu-spacing-2);
  }

  input {
    flex: 1;
    min-width: 0;
    padding: var(--nu-spacing-2);
    border: 1px solid var(--nu-color-accent);
    border-radius: var(--nu-radius-md);
    font-family: var(--nu-font-family-sans);
    font-size: var(--nu-font-size-base);
    color: var(--nu-color-text);
    background: var(--nu-color-gray-50);
    transition:
      border-color var(--nu-transition-base),
      box-shadow var(--nu-transition-fast);
  }

  input:focus-visible {
    outline: none;
    border-color: var(--nu-color-secondary);
    box-shadow: 0 0 0 var(--nu-spacing-1) var(--nu-color-accent);
  }
`;
