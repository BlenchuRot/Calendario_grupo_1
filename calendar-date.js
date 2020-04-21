
import { LitElement, html, css } from 'lit-element';
import { dateService } from './date-service.js';
import { DateFormatter } from './date-formatter.js';

class XCalendarDate extends LitElement {
    static get styles() {
        return css[
            '/calendar-date.css'
        ];
    }
    constructor() {
        super();
        this._onDayChanged = this._onDayChanged.bind(this);
    }
    get dateString() {
        return DateFormatter.dateString(dateService.date);
    }
    get $text() {
        return this.renderRoot.getElementById('text');
    }
   
    connectedCallback() {
        super.connectedCallback();
        dateService.on(dateService.DAY_CHANGED, this._onDayChanged);
    }
    
    _onDayChanged() {
        this.$text.textContent = this.dateString;
    }
    render() {
        return html`
            <p class="x-date" id="text">${this.dateString}</p>
        `;
    }
}
window.customElements.define('x-calendar-date', XCalendarDate);