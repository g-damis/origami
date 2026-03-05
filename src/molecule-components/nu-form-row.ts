import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@atom_components/nu-button.ts';
import { nuFormRowStyles } from '../styles/components/nu-form-row.styles.ts';

let nuFormRowInputId = 0;

@customElement('nu-form-row')
export class NuFormRow extends LitElement {
  @property({ type: String }) label = 'Label';
  @property({ type: String }) buttonText = 'Submit';
  private readonly _inputId = `nu-form-row-input-${++nuFormRowInputId}`;

  static styles = nuFormRowStyles;

  private _onSubmit() {
    const input = this.renderRoot.querySelector('input');
    if (input) {
      this.dispatchEvent(new CustomEvent('nu-submit', {
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
        <nu-button @nu-click=${this._onSubmit}>${this.buttonText}</nu-button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nu-form-row': NuFormRow;
  }
}
