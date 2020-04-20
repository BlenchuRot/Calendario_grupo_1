import { LitElement, html, css } from 'lit-element';
 
// Un componente que solo pinta sin ninguna logica
// facil de probar
class XClockDisplay extends LitElement {
    static get properties() {
        return {
            date: { type: Object }
        };
    }
    static get styles(){
        return css`
            p {
                color:red;
                font-size: 2rem;
            }
        `;
    }
    constructor(){
        super();
        this.date = new Date();
    }
    _twoDigits(value){
        return value < 10 ? '0' + value : value;
    }
    render() {
        const hh = this._twoDigits(this.date.getHours());
        const mm = this._twoDigits(this.date.getMinutes());
        const ss = this._twoDigits(this.date.getSeconds());
        return html`
            <p>${hh}:${mm}:${ss}</p>
        `
    }
}
window.customElements.define('x-clock-display', XClockDisplay);
 
// Componente que no pinta nada* y resulve la lógica
// con lo cual este es el componente que tengo que testear
// para saber si la logica esta bien
class XClockProvider extends LitElement {
    static get properties() {
        return {
            date: { type: Object }
        };
    }
 
    constructor() {
        super();
        this.date = new Date();
        this._interval = null;
    }
    connectedCallback() {
        super.connectedCallback();
        this._interval = window.setInterval(this._updateDate.bind(this), 1000);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._interval && window.clearInterval(this._interval);
    }
    _updateDate() {
        this.date = new Date();
    }
    render() {
        return html`
            <x-Clock-display .date=${this.date}></x-Clock-display>
        `;
    }
}
 
window.customElements.define('x-clock', XClockProvider);

