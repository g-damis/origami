import { css } from 'lit';

export const nuAccordionStyles = css`
  :host {
    display: block;
    font-family: var(--nu-font-family-sans);
    color: var(--nu-color-text);
  }

  .accordion-root {
    display: grid;
    gap: var(--nu-spacing-2);
  }

  .item {
    border: 1px solid var(--nu-color-accent);
    border-radius: var(--nu-radius-md);
    background: var(--nu-color-surface);
    box-shadow: var(--nu-shadow-sm);
    overflow: hidden;
  }

  .trigger {
    width: 100%;
    border: 0;
    padding: var(--nu-spacing-3) var(--nu-spacing-4);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--nu-spacing-3);
    font-family: inherit;
    font-size: var(--nu-font-size-base);
    font-weight: var(--nu-font-weight-bold);
    color: var(--nu-color-secondary);
    text-align: left;
    background: transparent;
    cursor: pointer;
  }

  .trigger[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .trigger:focus-visible {
    outline: 2px solid var(--nu-color-secondary);
    outline-offset: -2px;
  }

  .title {
    flex: 1;
    min-width: 0;
  }

  .icon {
    display: inline-flex;
    align-items: center;
    transition: transform var(--nu-transition-base);
  }

  .trigger[aria-expanded='true'] .icon {
    transform: rotate(180deg);
  }

  .icon-default {
    line-height: 1;
  }

  .variant-h1 {
    font-size: var(--nu-font-size-xl);
  }

  .variant-h2 {
    font-size: var(--nu-font-size-lg);
  }

  .variant-h3 {
    font-size: var(--nu-font-size-base);
  }

  .variant-h4,
  .variant-h5,
  .variant-h6,
  .variant-body1 {
    font-size: var(--nu-font-size-base);
  }

  .variant-body2 {
    font-size: var(--nu-font-size-sm);
  }

  .panel {
    padding: var(--nu-spacing-4);
    border-top: 1px solid var(--nu-color-accent);
    background: var(--nu-color-gray-50);
    color: var(--nu-color-text);
  }
`;
