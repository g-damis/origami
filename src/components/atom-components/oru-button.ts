import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { oruButtonStyles } from '../styles/components/oru-button.styles.ts';

@customElement('oru-button')
export class OruButton extends LitElement {
  @property({ type: String }) variant: 'primary' | 'secondary' = 'primary';
  @property({ type: Boolean, reflect: true }) disabled = false;

  static styles = oruButtonStyles;

  render() {
    return html`
      <button ?disabled=${this.disabled} @click=${this._handleClick}>
        <slot></slot>
      </button>
    `;
  }

  private _handleClick(e: Event) {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('oru-click', { detail: e, bubbles: true, composed: true }));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'oru-button': OruButton;
  }
}
