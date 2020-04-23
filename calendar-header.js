import { LitElement, html,css} from 'lit-element';
import './calendar-clock.js';
import './calendar-date.js';

class XCalendarHeader extends LitElement  {
    static get styles() {
        return css`
 :host {
    display: block;
    padding: var(--x-padding-medium);
}

.x-header__date {
    padding-top: var(--x-padding-tiny);
    display: block;
}
        `;
    }
    render() {
        return html`
            <x-calendar-clock></x-calendar-clock>
            <x-calendar-date class="x-header__date"></x-calendar-date>
        `
    }
}
customElements.define('x-calendar-header', XCalendarHeader);