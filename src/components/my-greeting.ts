import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('my-greeting')
export class MyGreeting extends LitElement{
    @property({type: String}) name: string = 'World';

    static styles = css`
        p {color: teal; font-size: 1.2em;}
    `;

    render () {
        return html`<p>Ciao, ${this.name}!</p>`;
    }
}