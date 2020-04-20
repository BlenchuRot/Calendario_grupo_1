import { EventEmitter } from './core/event-emitter.js';
import { config } from './config.js';

class DateService extends EventEmitter {
    constructor(date) {
        super();
        this._date = date;
    }
    get SECOND_CHANGED() {
        return 'second-changed';
    }
    get DAY_CHANGED() {
        return 'day-changed';
    }
    get MONTH_CHANGED() {
        return 'month-changed';
    }
    get date() {
        return this._date;
    }
    start() {
        this._updateDate();
        this._interval = window.setInterval(
            this._updateDate.bind(this),
            config.refreshInterval * 1000
        );
    }
    stop() {
        this._interval && window.clearInterval(this._interval);
    }
    isToday(date){
        return date.toDateString() === this._date.toDateString();
    }
    _updateDate() {
        const oldDate = new Date(this._date);
        this._date.setSeconds(this._date.getSeconds() + config.refreshInterval);
        if (oldDate.getMonth() !== this._date.getMonth()) {
            this.emit(this.MONTH_CHANGED, this._date);
        }
        if(oldDate.getDate() !== this._date.getDate()){
            this.emit(this.DAY_CHANGED, this._date);
        }
        this.emit(this.SECOND_CHANGED, this._date);
    }
}
export const dateService = new DateService(new Date());