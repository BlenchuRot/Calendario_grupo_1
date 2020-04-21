import { LitElement, html, css } from 'lit-element';
import { dateService } from './date-service.js';
import { DateFormatter } from './date-formatter.js';    
 

class XCalendarClock extends LitElement {
    static get styles(){
        return css`
        .x-clock {
            margin: 0;
            font-size: var(--x-font-small);
        `}
    static get properties() {
        return {
            date: { type: Object }
        };
    }

    get $text() {
        if (!this._$text) {
            this._$text = this.renderRoot.getElementById('text');
        }
        return this._$text;
    }

    get timeString() {
        return DateFormatter.timeString(dateService.date);
        
    }
    constructor() {
        super();
        this.date = new Date();
        
    }
    connectedCallback() {
        super.connectedCallback();
        dateService.on(dateService.SECOND_CHANGED, this._onSecondChanged);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        dateService.off(dateService.SECOND_CHANGED, this._onSecondChanged);
    }
    _onSecondChanged = () => {
        this.date = date;
    }
    render() {
        return html`
            <p class="x-clock" id="text">${this.timeString}</p>
        `;
    }
}
 
window.customElements.define('x-clock', XCalendarClock);