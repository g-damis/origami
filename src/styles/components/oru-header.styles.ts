import { css } from 'lit';

export const oruHeaderStyles = css`
  :host {
    display: block;
    font-family: var(--oru-font-family-sans);
    color: var(--oru-color-text);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--oru-spacing-4);
    padding: var(--oru-spacing-4);
    background: var(--oru-color-surface);
    border-radius: var(--oru-radius-lg);
    box-shadow: var(--oru-shadow-sm);
  }

  .brand {
    font-size: var(--oru-font-size-lg);
    font-weight: var(--oru-font-weight-bold);
    color: var(--oru-color-secondary);
  }
`;
