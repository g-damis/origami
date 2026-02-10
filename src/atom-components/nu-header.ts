import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('nu-header')
export class NuHeader extends LitElement {
  @property({ type: Boolean }) loggedIn = false;

  static styles = css`
    :host {
      background: var(--bg);
      color: var(--text);
      font-family: var(--font-base);
    }
  `

  private onLoginClick() {
    this.dispatchEvent(new CustomEvent('login', { bubbles: true, composed: true }));
  }

  private onLogoutClick() {
    this.dispatchEvent(new CustomEvent('logout', { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <header>
        <div><strong>My App</strong></div>
        <div class="actions">
          ${this.loggedIn
            ? html`<button @click=${this.onLogoutClick}>Logout</button>`
            : html`<button @click=${this.onLoginClick}>Login</button>`}
        </div>
      </header>
    `;
  }
}
