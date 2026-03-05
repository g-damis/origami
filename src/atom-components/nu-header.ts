import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@atom_components/nu-button.ts';
import { nuHeaderStyles } from '../styles/components/nu-header.styles.ts';

@customElement('nu-header')
export class NuHeader extends LitElement {
  @property({ type: Boolean }) loggedIn = false;

  static styles = nuHeaderStyles;

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
