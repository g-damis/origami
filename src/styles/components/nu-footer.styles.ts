import { css } from 'lit';

export const nuFooterStyles = css`
  :host {
    display: block;
    font-family: var(--nu-font-family-sans);
  }

  footer {
    padding: var(--nu-spacing-4);
    text-align: center;
    font-size: var(--nu-font-size-sm);
    font-weight: var(--nu-font-weight-normal);
    background: var(--nu-color-surface);
    color: var(--nu-color-text);
    border-radius: var(--nu-radius-md);
    box-shadow: var(--nu-shadow-sm);
  }
`;
