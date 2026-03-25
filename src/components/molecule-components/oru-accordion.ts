import { LitElement, html, nothing } from 'lit';
import type { PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '@atom_components/oru-collapse.ts';
import { oruAccordionStyles } from '../../styles/components/oru-accordion.styles.ts';

export type OruAccordionVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';

export interface OruAccordionTypographyProps {
  variant?: OruAccordionVariant;
}

export interface OruAccordionItem {
  title: string;
  content?: unknown;
  expanded?: boolean;
  disabled?: boolean;
  icon?: unknown;
  expandIcon?: unknown;
  typographyProps?: OruAccordionTypographyProps;
}

let oruAccordionId = 0;

@customElement('oru-accordion')
export class OruAccordion extends LitElement {
  @property({ attribute: false }) items: OruAccordionItem[] = [];
  @property({ type: Boolean, reflect: true }) multiple = false;
  @property({ type: String }) title = 'Change this content to see how it gets overwritten';
  @property({ type: Boolean, reflect: true }) expanded = false;
  @property({ attribute: false }) expandIcon: unknown = null;
  @property({ attribute: false }) onChange: ((event: Event, isExpanded: boolean) => void) | null = null;
  @property({ attribute: false }) icon: unknown = null;
  @property({ attribute: false }) typographyProps: OruAccordionTypographyProps = { variant: 'h2' };
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ attribute: false }) otherProps: Record<string, string | number | boolean | null | undefined> = {};

  private readonly _accordionId = `oru-accordion-${++oruAccordionId}`;
  private readonly _panelId = `oru-accordion-panel-${++oruAccordionId}`;
  @state() private _openIndexes: number[] = [];
  private _appliedOtherProps: string[] = [];

  static styles = oruAccordionStyles;

  show(index = 0) {
    if (this._hasItemsMode()) {
      this._setItemExpanded(index, true);
      return;
    }

    if (this.disabled) {
      return;
    }

    this.expanded = true;
  }

  hide(index = 0) {
    if (this._hasItemsMode()) {
      this._setItemExpanded(index, false);
      return;
    }

    this.expanded = false;
  }

  toggle(index = 0) {
    if (this._hasItemsMode()) {
      const isExpanded = this._isOpen(index);
      this._setItemExpanded(index, !isExpanded);
      return;
    }

    if (this.disabled) {
      return;
    }

    this.expanded = !this.expanded;
  }

  protected firstUpdated() {
    this._syncOtherProps();
  }

  protected updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('otherProps')) {
      this._syncOtherProps();
    }

    if (this._hasItemsMode() && (changedProperties.has('items') || changedProperties.has('multiple') || changedProperties.has('expanded'))) {
      this._syncOpenIndexesFromItems();
      return;
    }

    if (changedProperties.has('expanded') && changedProperties.get('expanded') !== undefined) {
      this.dispatchEvent(new CustomEvent('oru-change', {
        detail: {
          expanded: this.expanded,
          index: 0,
          openIndexes: this.expanded ? [0] : []
        },
        bubbles: true,
        composed: true
      }));
    }
  }

  private _hasItemsMode() {
    return this.items.length > 0;
  }

  private _isOpen(index: number) {
    return this._openIndexes.includes(index);
  }

  private _syncOpenIndexesFromItems() {
    const nextOpenIndexes = this.items
      .map((item, index) => (item.expanded ? index : -1))
      .filter((index) => index !== -1);

    if (nextOpenIndexes.length === 0 && this.expanded) {
      nextOpenIndexes.push(0);
    }

    this._openIndexes = this.multiple ? nextOpenIndexes : nextOpenIndexes.slice(0, 1);
  }

  private _setItemExpanded(index: number, expanded: boolean) {
    const item = this.items[index];
    if (!item || this.disabled || item.disabled) {
      return;
    }

    const currentlyOpen = this._isOpen(index);
    if (currentlyOpen === expanded) {
      return;
    }

    let nextOpenIndexes: number[] = [];
    if (this.multiple) {
      nextOpenIndexes = expanded
        ? [...this._openIndexes, index]
        : this._openIndexes.filter((openIndex) => openIndex !== index);
      nextOpenIndexes = Array.from(new Set(nextOpenIndexes)).sort((a, b) => a - b);
    } else {
      nextOpenIndexes = expanded ? [index] : [];
    }

    this._openIndexes = nextOpenIndexes;
    this.dispatchEvent(new CustomEvent('oru-change', {
      detail: {
        expanded,
        index,
        openIndexes: this._openIndexes
      },
      bubbles: true,
      composed: true
    }));
  }

  private _syncOtherProps() {
    const accordionElement = this.renderRoot.querySelector('.accordion-root') as HTMLElement | null;

    if (!accordionElement) {
      return;
    }

    for (const key of this._appliedOtherProps) {
      accordionElement.removeAttribute(key);
    }
    this._appliedOtherProps = [];

    for (const [key, value] of Object.entries(this.otherProps)) {
      if (value === null || value === undefined || value === false) {
        continue;
      }

      if (value === true) {
        accordionElement.setAttribute(key, '');
      } else {
        accordionElement.setAttribute(key, String(value));
      }
      this._appliedOtherProps.push(key);
    }
  }

  private _onTriggerClick(event: Event) {
    const target = event.currentTarget as HTMLButtonElement;
    const itemIndexRaw = target.dataset.index;

    if (itemIndexRaw !== undefined) {
      const itemIndex = Number(itemIndexRaw);
      if (Number.isNaN(itemIndex)) {
        return;
      }

      const item = this.items[itemIndex];
      if (!item || this.disabled || item.disabled) {
        return;
      }

      const isExpanded = !this._isOpen(itemIndex);
      this._setItemExpanded(itemIndex, isExpanded);
      if (this.onChange) {
        this.onChange(event, isExpanded);
      }
      return;
    }

    if (this.disabled) {
      return;
    }

    const isExpanded = !this.expanded;
    this.expanded = isExpanded;

    if (this.onChange) {
      this.onChange(event, isExpanded);
    }
  }

  private _getTitleVariantClass(typographyProps?: OruAccordionTypographyProps) {
    const variant = typographyProps?.variant ?? this.typographyProps.variant ?? 'h2';
    return `variant-${variant}`;
  }

  private _getIndicator(icon: unknown, expandIcon: unknown) {
    return icon ?? expandIcon;
  }

  render() {
    if (this._hasItemsMode()) {
      return html`
        <div class="accordion-root">
          ${this.items.map((item, index) => {
            const panelId = `${this._accordionId}-panel-${index}`;
            const indicator = this._getIndicator(item.icon, item.expandIcon ?? this.expandIcon);
            const isExpanded = this._isOpen(index);

            return html`
              <section class="item">
                <button
                  class="trigger"
                  type="button"
                  data-index=${String(index)}
                  ?disabled=${this.disabled || item.disabled === true}
                  aria-expanded=${String(isExpanded)}
                  aria-controls=${panelId}
                  @click=${this._onTriggerClick}>
                  <span class="title ${this._getTitleVariantClass(item.typographyProps)}">
                    ${item.title}
                  </span>
                  <span class="icon" aria-hidden="true">
                    <slot name=${`icon-${index}`}>
                      ${indicator === null || indicator === undefined || indicator === ''
                        ? html`<span class="icon-default">&#9662;</span>`
                        : indicator}
                    </slot>
                  </span>
                </button>
                <oru-collapse id=${panelId} ?open=${isExpanded}>
                  <div class="panel">${item.content ?? nothing}</div>
                </oru-collapse>
              </section>
            `;
          })}
        </div>
      `;
    }

    const customIndicator = this._getIndicator(this.icon, this.expandIcon);

    return html`
      <div class="accordion-root">
        <section class="item">
          <button
            class="trigger"
            type="button"
            ?disabled=${this.disabled}
            aria-expanded=${String(this.expanded)}
            aria-controls=${this._panelId}
            @click=${this._onTriggerClick}>
            <span class="title ${this._getTitleVariantClass()}">
              <slot name="title">${this.title}</slot>
            </span>
            <span class="icon" aria-hidden="true">
              <slot name="icon">
                ${customIndicator === null || customIndicator === undefined || customIndicator === ''
                  ? html`<span class="icon-default">&#9662;</span>`
                  : customIndicator}
              </slot>
            </span>
          </button>
          <oru-collapse id=${this._panelId} ?open=${this.expanded}>
            <div class="panel">
              <slot>${nothing}</slot>
            </div>
          </oru-collapse>
        </section>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'oru-accordion': OruAccordion;
  }
}
