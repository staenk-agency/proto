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
    return days;
}

export const useHandleClick = (empty, mDate) => {
    const [dateSelected, setDateSelected] = useState(empty)

    const select = function(event){
        if(event){
            // console.log("event reçu", event)
            // alert(event.title, event.message)
            return setDateSelected(event)
        }   
    }
    return [dateSelected, select];
}
