import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';

class XCalendarNavigation extends LitElement {
    static get styles() {
            return css`
            .x-navigation__icon {
    fill: var(--x-color-text-primary);
    cursor: pointer;
}
      `;      
    }
    
    _onNextClick = () => {
        this._notify(1);
      
    }
    _onPreviousClick = () => {
        this._notify(-1);
       
    }
    _notify(change) {
        this.dispatchEvent(new CustomEvent('change', {
            bubbles: true,
            composed: true,
            detail: change
        }));
    }
    render() {
        return html` 
      
            <svg @click= "${this._onNextClick}"  class="x-navigation__icon" id="previous" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
               <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/>
                
           </svg>
            <svg @click="${this._onPreviousClick}" class="x-navigation__icon" id="next" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
                 
            </svg>
        `
    }
}

window.customElements.define('x-calendar-navigation', XCalendarNavigation);