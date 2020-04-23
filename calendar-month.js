import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';
import { MonthHelper } from './month-helper.js';
import { config } from './config.js';
import { dateService } from './date-service.js'
import { WEEKDAY_LETTERS } from './date-constants.js';

import './calendar-day.js';

const DAYS_PER_WEEK = 7;

class XCalendarMonth extends LitElement {
    static get styles() {
        return css`
  :host {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(7, 1fr);
    gap: var(--x-margin-small);
    justify-items: stretch;
    font-size: var(--x-font-tiny);
}
x-calendar-day {
    box-sizing: border-box;
    cursor: pointer;
    
}

x-calendar-day[data-outside]{
    color: var(--x-color-primary--light);
}

x-calendar-day[data-today]{
    background-color: var(--x-color-secondary);
}

x-calendar-day[data-selected]{
    border: 1px solid var(--x-color-secondary);
}

.x-month__item {
    display: flex;
    justify-content: center;
    align-items: center;
}`;
    }
    get days() {
        return MonthHelper.getDays(this.date, config.startDay, DAYS_PER_WEEK * config.monthRows);
    }
    static get properties() {
        return {
            date: { type: Object }
        };
    }
    connectedCallback(){
        super.connectedCallback();
        this.addEventListener('click', this._onClickGuay);
    }
    disconnectedCallback(){
        super.disconnectedCallback();
        this.removeEventListener('click', this._onClickGuay);
    }
    _onClickCutron(ev){
        const newSelectedDay = ev.target;
        const selectedDay = this.renderRoot.querySelector('.x-month__item--selected')
        selectedDay && selectedDay.classList.remove('x-month__item--selected');
        newSelectedDay.classList.add('x-month__item--selected');
    }
     _onClickGuay = (ev) => {
        const newSelectedDay = this._findCalendarDay(ev.path);
        if (!newSelectedDay) {
            return;
        }
        const selectedDay = this.renderRoot.querySelector('.x-month__item--selected')
        selectedDay && selectedDay.classList.remove('x-month__item--selected')
        newSelectedDay.classList.add('x-month__item--selected');
    }
    _findCalendarDay(path) {
        return path.find((el) => el.localName === 'x-calendar-day');
    }
    _getWeekDays() {
        const days = [];
        for (let delante = config.startDay; delante < WEEKDAY_LETTERS.length; delante++) {
            days.push(WEEKDAY_LETTERS[delante]);
        }
        for (let detras = 0; detras < config.startDay; detras++) {
            days.push(WEEKDAY_LETTERS[detras])
        }
        return days;
    }
    _calculateClasses(day) {
        let classes = "x-month__item";
        if (dataService.isToday(day)) {
            classes += ' x-month__item--today x-month__item--selected';
        }
        if (dataService.isOutside(day, this.date)) {
            classes += ' x-month__item--outside';
        }
        return classes;
    }
    _renderDay(day) {
        const classes = this._calculateClasses(day)
        return html`<x-calendar-day class="${classes}" .date=${day}></x-calendar-day>`
    }
    _renderDays() {
        return this.days.map((day) => this._renderDay(day));
    }
    _renderWeekdays() {
        return this._getWeekDays().map((wd) => html`<div class="x-month__item">${wd}</div>`);
    }
    render() {
        return html`
           ${this._renderWeekdays()}
           ${this._renderDays()}
        `;
    }
}

customElements.define('x-calendar-month', XCalendarMonth);
