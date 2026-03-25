import { css } from 'lit';

export const oruFooterStyles = css`
  :host {
    display: block;
    font-family: var(--oru-font-family-sans);
  }

  footer {
    padding: var(--oru-spacing-4);
    text-align: center;
    font-size: var(--oru-font-size-sm);
    font-weight: var(--oru-font-weight-normal);
    background: var(--oru-color-surface);
    color: var(--oru-color-text);
    border-radius: var(--oru-radius-md);
    box-shadow: var(--oru-shadow-sm);
  }
`;
