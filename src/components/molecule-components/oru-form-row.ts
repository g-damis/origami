import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@atom_components/oru-button.ts';
import { oruFormRowStyles } from '../../styles/components/oru-form-row.styles.ts';

let oruFormRowInputId = 0;

@customElement('oru-form-row')
export class OruFormRow extends LitElement {
  @property({ type: String }) label = 'Label';
  @property({ type: String }) buttonText = 'Submit';
  private readonly _inputId = `oru-form-row-input-${++oruFormRowInputId}`;

  static styles = oruFormRowStyles;

  private _onSubmit() {
    const input = this.renderRoot.querySelector('input');
    if (input) {
      this.dispatchEvent(new CustomEvent('oru-submit', {
        detail: input.value,
        bubbles: true,
        composed: true
      }));
    }
  }

  render() {
    return html`
      <label for=${this._inputId}>${this.label}</label>
      <div class="controls">
        <input id=${this._inputId} type="text" />
        <oru-button @oru-click=${this._onSubmit}>${this.buttonText}</oru-button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'oru-form-row': OruFormRow;
  }
}
