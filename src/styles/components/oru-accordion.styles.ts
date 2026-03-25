import { css } from 'lit';

export const oruAccordionStyles = css`
  :host {
    display: block;
    font-family: var(--oru-font-family-sans);
    color: var(--oru-color-text);
  }

  .accordion-root {
    display: grid;
    gap: var(--oru-spacing-2);
  }

  .item {
    border: 1px solid var(--oru-color-accent);
    border-radius: var(--oru-radius-md);
    background: var(--oru-color-surface);
    box-shadow: var(--oru-shadow-sm);
    overflow: hidden;
  }

  .trigger {
    width: 100%;
    border: 0;
    padding: var(--oru-spacing-3) var(--oru-spacing-4);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--oru-spacing-3);
    font-family: inherit;
    font-size: var(--oru-font-size-base);
    font-weight: var(--oru-font-weight-bold);
    color: var(--oru-color-secondary);
    text-align: left;
    background: transparent;
    cursor: pointer;
  }

  .trigger[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .trigger:focus-visible {
    outline: 2px solid var(--oru-color-secondary);
    outline-offset: -2px;
  }

  .title {
    flex: 1;
    min-width: 0;
  }

  .icon {
    display: inline-flex;
    align-items: center;
    transition: transform var(--oru-transition-base);
  }

  .trigger[aria-expanded='true'] .icon {
    transform: rotate(180deg);
  }

  .icon-default {
    line-height: 1;
  }

  .variant-h1 {
    font-size: var(--oru-font-size-xl);
  }

  .variant-h2 {
    font-size: var(--oru-font-size-lg);
  }

  .variant-h3 {
    font-size: var(--oru-font-size-base);
  }

  .variant-h4,
  .variant-h5,
  .variant-h6,
  .variant-body1 {
    font-size: var(--oru-font-size-base);
  }

  .variant-body2 {
    font-size: var(--oru-font-size-sm);
  }

  .panel {
    padding: var(--oru-spacing-4);
    border-top: 1px solid var(--oru-color-accent);
    background: var(--oru-color-gray-50);
    color: var(--oru-color-text);
  }
`;
