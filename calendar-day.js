import { LitElement, html } from 'https://cdn.pika.dev/lit-element';

class XCalendarDay extends LitElement {
    get date() {
        return new Date(this.dataset.date);
    }
    render() {
        return html`<div>${this.date.getDate()}</div>`
    }
}

window.customElements.define('x-calendar-day', XCalendarDay);