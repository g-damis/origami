import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@atom_components/oru-button.ts';
import { oruHeaderStyles } from '../styles/components/oru-header.styles.ts';

@customElement('oru-header')
export class OruHeader extends LitElement {
  @property({ type: Boolean }) loggedIn = false;

  static styles = oruHeaderStyles;

  private onLoginClick() {
    this.dispatchEvent(new CustomEvent('login', { bubbles: true, composed: true }));
  }

  private onLogoutClick() {
    this.dispatchEvent(new CustomEvent('logout', { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <header>
        <div class="brand">Origami</div>
        <div>
          ${this.loggedIn
            ? html`<oru-button variant="secondary" @oru-click=${this.onLogoutClick}>Logout</oru-button>`
            : html`<oru-button @oru-click=${this.onLoginClick}>Login</oru-button>`}
        </div>
      </header>
    `;
  }
}
