import { css } from 'lit';

export const oruCollapseStyles = css`
  :host {
    display: block;
  }

  .content {
    min-width: 0;
  }

  .content[hidden] {
    display: none;
  }
`;
