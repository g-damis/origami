import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('nu-footer')
export class NuFooter extends LitElement {
  @property({ type: String }) text = 'Default footer text';

  static styles = css`
    :host {
      background: var(--bg);
      color: var(--text);
      font-family: var(--font-base);
    }
  `
  
  render() {
    return html`<footer>${this.text}</footer>`;
  }
}
