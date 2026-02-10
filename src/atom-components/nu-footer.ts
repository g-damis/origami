import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('nu-footer')
export class NuFooter extends LitElement {
  @property({ type: String }) text = 'Default footer text';

  static styles = css`
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
  
  render() {
    return html`<footer>${this.text}</footer>`;
  }
}
