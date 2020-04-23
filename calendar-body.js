import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';
import { dateService } from './date-service.js';
import './calendar-summary.js';
import './calendar-navigation.js';
import './calendar-month.js';
 
/* Body
- Componente x - calendar - bod
 - Pinta el month el summary y el navigation
 - Almacena una propiedad con la fecha seleccionada que incialmente es la del dateService
 - Cuando el navigation notifique se ha de actualizar la fecha seleccionada
 - La fecha seleccionada a de propagarse al month y al summary
 - Cuando el dateService indique un cambio de dia tambien se ha de actualizar la fecha seleccionada*/
 class XCalendarBody extends LitElement{
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
         
        `
    }
 }
customElements.define('x-calendar-body', XCalendarBody);