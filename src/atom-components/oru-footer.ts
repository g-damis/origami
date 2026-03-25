import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { oruFooterStyles } from '../styles/components/oru-footer.styles.ts';

@customElement('oru-footer')
export class OruFooter extends LitElement {
  @property({ type: String }) text = 'Default footer text';

  static styles = oruFooterStyles;

  render() {
    return html`<footer>${this.text}</footer>`;
  }
}
