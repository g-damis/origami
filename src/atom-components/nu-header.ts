import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('nu-header')
export class NuHeader extends LitElement {
  @property({ type: Boolean }) loggedIn = false;

  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: #2a2a2a;
      color: white;
    }

    .actions button {
      margin-left: 0.5rem;
      padding: 0.4rem 1rem;
      font-size: 0.9rem;
      border: none;
      background-color: #4caf50;
      color: white;
      cursor: pointer;
      border-radius: 4px;
    }

    .actions button:hover {
      background-color: #45a049;
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
