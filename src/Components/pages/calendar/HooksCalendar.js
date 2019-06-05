import React, {useState} from 'react'
import moment from 'moment'

export const useInitCalendarState = (mDate, step, end) => {
    const [days, setDays] = useState(initDaysArray(mDate, step, end))
    const recomputeDays = function(mDate, step, end) {
        setDays(initDaysArray(mDate, step, end));
    }
    return [days, recomputeDays];
}

function initDaysArray(mDate, step, end) {
    let endFunction = end
    if(end === 'month'){
        endFunction = mDate.clone().endOf(end).format('D')
    }
    let days = [];
    for(let i = 0; i < endFunction; ++i){
        let moment = mDate.clone().add(i, step)
        days.push(moment)
    }
    // console.log("days pushed in array in hooks", days)
    return days;
}
