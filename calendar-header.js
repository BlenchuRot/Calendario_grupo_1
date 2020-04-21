import { LitElement, html,css} from 'lit-element';
import './calendar-clock.js';
import './calendar-date.js';

class XCalendarHeader extends LitElement  {
    static get styles() {
        return css['/calendar-header.css'];
    }
    render() {
        return html`
            <x-calendar-clock></x-calendar-clock>
            <x-calendar-date class="x-header__date"></x-calendar-date>
        `
    }
}
customElements.define('x-calendar-header', XCalendarHeader);