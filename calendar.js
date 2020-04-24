import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';
import { dateService } from './date-service.js';
import './calendar-header.js';
import './calendar-body.js';

import { layout } from './layout.js'
class XCalendar extends LitElement{
    static get styles() {
        return [
            layout,
            css`
                 {
 :host {
    display: block;
    background-color: var(--x-color-primary);
    color: var(--x-color-text-primary);
    width: 60%;
    height: fit-content;
    border: 1px solid var(--x-color-primary--light);
}

.x-calendar__header {
    border-bottom: 1px solid var(--x-color-primary--light);
}
.x-calendar__body {
    display: block;
    padding: var(--x-padding-small);
}
`
              
            
        ]; 
    }
 

connectedCallback() {
        super.connectedCallback();
        dateService.start();
}
 disconnectedCallback() {
        super.disconnectedCallback();
        dateService.stop();
    }

    render(){
        return html`
            <x-calendar-header class="x-calendar__header"></x-calendar-header>
            <x-calendar-body class="x-calendar__body"></x-calendar-body>
        `; 
        
    }
}

customElements.define('x-calendar', XCalendar);