import { LitElement, html } from 'lit';
import type { PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { oruCollapseStyles } from '../styles/components/oru-collapse.styles.ts';

@customElement('oru-collapse')
export class OruCollapse extends LitElement {
  @property({ type: Boolean, reflect: true }) open = false;

  static styles = oruCollapseStyles;

  show() {
    this.open = true;
  }

  hide() {
    this.open = false;
  }

  toggle() {
    this.open = !this.open;
  }

  protected updated(changedProperties: PropertyValues<this>) {
    if (!changedProperties.has('open')) {
      return;
    }

    this.dispatchEvent(new CustomEvent('oru-toggle', {
      detail: { open: this.open },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="content" part="content" ?hidden=${!this.open} aria-hidden=${String(!this.open)}>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'oru-collapse': OruCollapse;
  }
}
