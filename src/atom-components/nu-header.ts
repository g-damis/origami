import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@atom_components/nu-button.ts';

@customElement('nu-header')
export class NuHeader extends LitElement {
  @property({ type: Boolean }) loggedIn = false;

  static styles = css`
    :host {
      display: block;
      font-family: var(--nu-font-family-sans);
      color: var(--nu-color-text);
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--nu-spacing-4);
      padding: var(--nu-spacing-4);
      background: var(--nu-color-surface);
      border-radius: var(--nu-radius-lg);
      box-shadow: var(--nu-shadow-sm);
    }

    .brand {
      font-size: var(--nu-font-size-lg);
      font-weight: var(--nu-font-weight-bold);
      color: var(--nu-color-secondary);
    }
  `;

  private onLoginClick() {
    this.dispatchEvent(new CustomEvent('login', { bubbles: true, composed: true }));
  }

  private onLogoutClick() {
    this.dispatchEvent(new CustomEvent('logout', { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <header>
        <div class="brand">Nucleus</div>
        <div>
          ${this.loggedIn
            ? html`<nu-button variant="secondary" @nu-click=${this.onLogoutClick}>Logout</nu-button>`
            : html`<nu-button @nu-click=${this.onLoginClick}>Login</nu-button>`}
        </div>
      </header>
    `;
  }
}
