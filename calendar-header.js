import { LitElement, html } from 'lit-element';
import { BaseElement } from './core/base-element.js';
import './calendar-clock.js';
import './calendar-date.js';

class XCalendarHeader extends BaseElement {
    static get styles() {
        return ['/calendar-header.css'];
    }
    render() {
        return `
            <x-calendar-clock></x-calendar-clock>
            <x-calendar-date class="x-header__date"></x-calendar-date>
        `
    }
}
customElements.define('x-calendar-header', XCalendarHeader);