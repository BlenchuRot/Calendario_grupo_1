
import { BaseElement } from './core/base-element.js';
import { dateService } from './date-service.js';
import { DateFormatter } from './date-formatter.js';

class XCalendarDate extends BaseElement {
    static get styles() {
        return [
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
   
    connectedCallback() {
        super.connectedCallback();
        dateService.on(dateService.DAY_CHANGED, this._onDayChanged);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        dateService.off(dateService.DAY_CHANGED, this._onDayChanged);
    }
    _onDayChanged() {
        this.$text.textContent = this.dateString;
    }
    render() {
        return `
            <p class="x-date" id="text">${this.dateString}</p>
        `;
    }
}
window.customElements.define('x-calendar-date', XCalendarDate);