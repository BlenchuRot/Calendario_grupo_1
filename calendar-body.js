import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';
import { dateService } from './date-service.js';
import './calendar-summary.js';
import './calendar-navigation.js';
import './calendar-month.js';
 
 class XCalendarBody extends LitElement {
     static get styles(){
         return css`
 .x-body__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--x-margin-small);
}`;
     }
     static get properties(){
           return{
               selectedDate: {type: Object}
           }
     }
     constructor(){
         super();
         this.selectedDate = dateService.date;    
     }
     connectedCallback(){
         super.connectedCallback();
         dateService.on(dateService.DAY_CHANGED, this._onDayChanged);

     }
     disconnectedCallback() {
         super.disconnectedCallback();
         dateService.off(dateService.DAY_CHANGED, this._onDayChanged);
     }
     _onDayChanged = (newDate) => {
         this.selectedDate = newDate;
     }
     _onNavigation(ev){
        const change = ev.detail;
         this.selectedDate = new Date(this.selectedDate);
        this.selectedDate.setMonth(this.selectedDate.getMonth() + change);
        
     }
    render(){
        return html`
         <x-calendar-summary .date=${this.selectedDate}></x-calendar-summary>
         <x-calendar-navigation @change=${this._onNavigation}></x-calendar-navigation>
         <x-calendar-month .date=${this.selectedDate}></x-calendar-month>
         
        `;
    }
 }
window.customElements.define('x-calendar-body', XCalendarBody);