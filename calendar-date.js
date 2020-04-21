
import { LitElement, html } from 'https://cdn.pika.dev/lit-element';

import { DateFormatter } from './date-formatter.js';

class XCalendarDate extends LitElement {
    static get styles() {
        return css`
          .x-date {
    margin:0;
    font-size: var(--x-font-tiny);
    color: var(--x-color-secondary--light);
}
.x-date:hover {
    color: var(--x-color-primary--light);
    cursor: grab;
}
        `;
    }
    static get properties(){
        return {
            date: {type: Object}
        };
    }
    constructor() {
        super();
        this.date = dateService.date
        this._onDayChanged = this._onDayChanged.bind(this);
    }
    
   
    connectedCallback() {
        super.connectedCallback();
        dateService.on(dateService.DAY_CHANGED, this._onDayChanged);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        dateService.off(dateService.DAY_CHANGED, this._onDayChanged);
    }

    
    _onDayChanged() {
        this.date = date;
    }
    render() {
        return html`
            <p class="x-date" >${DateFormatter.dateString(this.date)}</p>
        `;
    }
}
window.customElements.define('x-calendar-date', XCalendarDate);