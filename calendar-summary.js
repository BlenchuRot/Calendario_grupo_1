import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';
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
        return DateFormatter.monthString(dateService.date);
    }
    constructor() {
        super();
        this.date = dateService.date;
    }
    
    render() {
        return html`
            <span class="x-calendar-summary">${this.summary}</span>
        `;
    }
}
window.customElements.define('x-calendar-summary', XCalendarSummary);