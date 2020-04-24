import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';
import { dateService } from './date-service.js';
import { DateFormatter } from './date-formatter.js';    
 

class XCalendarClock extends LitElement {
    static get styles(){
        return css`
        .x-clock {
            margin: 0;
            font-size: var(--x-font--small);
        }`;
    }
    static get properties() {
        return {
            date: { type: Object }
        };
    }
    get timeString() {
        return DateFormatter.timeString(dateService.date); 
    }
    constructor() {
        super();
        this.date = dateService.date;  
    }
    connectedCallback() {
        super.connectedCallback();
        dateService.on(dateService.SECOND_CHANGED, this._onSecondChanged);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        dateService.off(dateService.SECOND_CHANGED, this._onSecondChanged);
    }
    _onSecondChanged = (date) => {
        this.date = date;
    }
    render() {
        return html`
            <p class="x-clock">${this.timeString}</p>
        `;
    }
}
 
window.customElements.define('x-calendar-clock', XCalendarClock);