import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';
import './calendar-clock.js';
import './calendar-date.js';
import { layout } from './layout.js'
class XCalendarHeader extends LitElement  {
    static get styles() {
        return [
            layout,
            css`
:host {
    display: block;
    padding: var(--x-padding-big);
}
.x-header__date {
    display: block;
    padding-top: var(--x-padding-small);
    
}`
];
}
    render() {
        return html`
            <x-calendar-clock></x-calendar-clock>
            <x-calendar-date class="x-header__date"></x-calendar-date>
        `
    }
}

customElements.define('x-calendar-header', XCalendarHeader);