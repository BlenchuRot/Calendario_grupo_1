import { LitElement, html } from 'https://cdn.pika.dev/lit-element';

class XCalendarDay extends LitElement {
    static get properties() {
        return {
            date: {type: Object}
        };
    }
    render() {
       if(!this.date){
            return null;
        }
        return html`<div>${this.date.getDate()}</div>`
    }
}

window.customElements.define(`x-calendar-day`, XCalendarDay);