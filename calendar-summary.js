import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';
import { dateService } from './date-service.js';
import { DateFormatter } from './date-formatter.js';

class XCalendarSummary extends LitElement {
    static get styles(){
        return css`
        .x-calendar-summary {
            font-size: var(--x-font-tiny);
        }`
    }
    static get properties() {
        return {
            date: { type: Object }
        };
    }
    get monthString() {
        return DateFormatter.monthString(this.date);
    }
    constructor() {
        super();
        this.date = dateService.date;
    }
    connectedCallback() {
        super.connectedCallback();
        dateService.on(dateService.MONTH_CHANGED, this._onMonthChanged);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        dateService.off(dateService.MONTH_CHANGED, this._onMonthChanged);
    }
    _onMonthChanged = (date) => {
        this.date = date;
    }
    render() {
        return html`
            <span class="x-calendar-summary">${this.monthString}</span>
        `;
    }
}
window.customElements.define('x-calendar-summary', XCalendarSummary);