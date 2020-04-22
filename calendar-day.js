import { LitElement, html } from 'https://cdn.pika.dev/lit-element';

class XCalendarDay extends LitElement {
    static get properties() {
        return {
            date: {type: Object}
        };
    }
    get timeString() {
        return Dateformatter.timeString(dateService.date);
    }
    constructor() {
        super();
        this.date = dateService.date;  
    }
    connectedCallback() {
        super.connectedCallback();
        dateService.on(dateService.DAY_CHANGED, this._onDayChanged);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        dateService.off(dateService.DAY_CHANGED, this._onDayChanged);
    }
    _onDayChanged = (date) => {
        this.date = date;
    }
    render() {
        if (!DAY_CHANGED) {
            return html`
            <div>${this.date}</div>
            `;
        }
             return html`
             <div>${this.timeString}</div>
             `; 
        }  
    }

window.customElements.define(`calendar-day`, XCalendarDay);
