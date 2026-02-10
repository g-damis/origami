import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('nu-footer')
export class NuFooter extends LitElement {
  @property({ type: String }) text = 'Default footer text';

  static styles = css`
    footer {
      padding: 1rem;
      background-color: #222;
      color: white;
      text-align: center;
    }
  `;

  render() {
    return html`<footer>${this.text}</footer>`;
  }
}
