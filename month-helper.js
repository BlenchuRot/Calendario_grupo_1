class MonthHelper {
    static getDays(fromDate, startDay, totalToShow) {
        const date = this._startDateInLastMonth(fromDate, startDay);
        const days = [];
        let i = 0;
        while(i < totalToShow){
            days.push(new Date(date));
            this._addDay(date);
            i++;
        }
        return days;
    }
    static _startDateInLastMonth(date, startDay){
        const lastMonthDate = this._getFirstOfMonth(date);
        const daysToFillWeek = lastMonthDate.getDay();
        lastMonthDate.setDate(lastMonthDate.getDate() - daysToFillWeek + startDay);
        return lastMonthDate;
    }   
    static _getFirstOfMonth(date) {
        const newDate = new Date(date);
        newDate.setDate(1);
        return newDate;
    }
    static _addDay(date) {
        date.setDate(date.getDate() + 1);
    }
}

export {MonthHelper}