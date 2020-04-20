import {WEEKDAYS, MONTHS} from './date-constants.js';
class DateFormatter {
    static timeString(date) {
        const hours = this._twoDigits(date.getHours());
        const minutes = this._twoDigits(date.getMinutes());
        const seconds = this._twoDigits(date.getSeconds());
        return `${hours}:${minutes}:${seconds}`;
    }
    static dateString(date) {
        const weekday = WEEKDAYS[date.getDay()];
        const day = date.getDate();
        const month = MONTHS[date.getMonth()];
        const year = date.getFullYear();
        return `${weekday}, ${day} de ${month} de ${year}`;
    }
    static monthString(date){
        const month = MONTHS[date.getMonth()];
        const year = date.getFullYear();
        return `${month} de ${year}`;
    }
    static _twoDigits(value) {
        if (value < 10) {
            return `0${value}`;
        }
        return value;
    }
}

export { DateFormatter };