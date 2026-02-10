import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@atom_components/nu-button.ts';

let nuFormRowInputId = 0;

@customElement('nu-form-row')
export class NuFormRow extends LitElement {
  @property({ type: String }) label = 'Label';
  @property({ type: String }) buttonText = 'Submit';
  private readonly _inputId = `nu-form-row-input-${++nuFormRowInputId}`;

  static styles = css`
    :host {
      display: block;
      margin-bottom: var(--nu-spacing-4);
      font-family: var(--nu-font-family-sans);
      color: var(--nu-color-text);
    }

    label {
      display: block;
      margin-bottom: var(--nu-spacing-1);
      font-size: var(--nu-font-size-base);
      font-weight: var(--nu-font-weight-bold);
      color: var(--nu-color-secondary);
    }

    .controls {
      display: flex;
      align-items: center;
      gap: var(--nu-spacing-2);
    }

    input {
      flex: 1;
      min-width: 0;
      padding: var(--nu-spacing-2);
      border: 1px solid var(--nu-color-accent);
      border-radius: var(--nu-radius-md);
      font-family: var(--nu-font-family-sans);
      font-size: var(--nu-font-size-base);
      color: var(--nu-color-text);
      background: var(--nu-color-gray-50);
      transition:
        border-color var(--nu-transition-base),
        box-shadow var(--nu-transition-fast);
    }

    input:focus-visible {
      outline: none;
      border-color: var(--nu-color-secondary);
      box-shadow: 0 0 0 var(--nu-spacing-1) var(--nu-color-accent);
    }
  `;

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
