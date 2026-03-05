import { css } from 'lit';

export const nuHeaderStyles = css`
  :host {
    display: block;
    font-family: var(--nu-font-family-sans);
    color: var(--nu-color-text);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--nu-spacing-4);
    padding: var(--nu-spacing-4);
    background: var(--nu-color-surface);
    border-radius: var(--nu-radius-lg);
    box-shadow: var(--nu-shadow-sm);
  }

  .brand {
    font-size: var(--nu-font-size-lg);
    font-weight: var(--nu-font-weight-bold);
    color: var(--nu-color-secondary);
  }
`;
