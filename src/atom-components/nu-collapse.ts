import { LitElement, html } from 'lit';
import type { PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { nuCollapseStyles } from '../styles/components/nu-collapse.styles.ts';

@customElement('nu-collapse')
export class NuCollapse extends LitElement {
  @property({ type: Boolean, reflect: true }) open = false;

  static styles = nuCollapseStyles;

  show() {
    this.open = true;
  }

  hide() {
    this.open = false;
  }

  toggle() {
    this.open = !this.open;
  }

  protected updated(changedProperties: PropertyValues<this>) {
    if (!changedProperties.has('open')) {
      return;
    }

    this.dispatchEvent(new CustomEvent('nu-toggle', {
      detail: { open: this.open },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="content" part="content" ?hidden=${!this.open} aria-hidden=${String(!this.open)}>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nu-collapse': NuCollapse;
  }
}
