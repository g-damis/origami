import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { nuFooterStyles } from '../styles/components/nu-footer.styles.ts';

@customElement('nu-footer')
export class NuFooter extends LitElement {
  @property({ type: String }) text = 'Default footer text';

  static styles = nuFooterStyles;
  
  render() {
    return html`<footer>${this.text}</footer>`;
  }
}
