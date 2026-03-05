import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { nuButtonStyles } from '../styles/components/nu-button.styles.ts';

@customElement('nu-button')
export class NuButton extends LitElement {
  @property({ type: String }) variant: 'primary' | 'secondary' = 'primary';
  @property({ type: Boolean, reflect: true }) disabled = false;

  static styles = nuButtonStyles;

  render() {
    return html`
      <button ?disabled=${this.disabled} @click=${this._handleClick}>
        <slot></slot>
      </button>
    `;
  }

  private _handleClick(e: Event) {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('nu-click', { detail: e, bubbles: true, composed: true }));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nu-button': NuButton;
  }
}
