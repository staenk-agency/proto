import React, {useState} from 'react'
import moment from 'moment'

export const useCalendarState = (mDate, step, end) => {
    const [currentStart, setCurrentStep] = useState(mDate.utc().startOf(step));

    let nextStep = function(count, stepFunction, recomputeDays, stepArray){
        let newCurrent = currentStart.clone().add(count, stepFunction);
        setCurrentStep(newCurrent);
        recomputeDays(newCurrent, stepArray, end)
    }

    let previousStep = function(count, stepFunction, recomputeDays, stepArray){
        let newCurrent = currentStart.clone().subtract(count, stepFunction);
        setCurrentStep(newCurrent);
        recomputeDays(newCurrent, stepArray, end)
    }
    return [currentStart, nextStep, previousStep]
}

export const useInitCalendarState = (mDate, step, end) => {
    const [days, setDays] = useState(initDaysArray(mDate, step, end))

    let recomputeDays = function(mDate, step, end) {
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
    const [dateSelected, setDateSelected] = useState(empty);

    let select = function(mDate){
        setDateSelected(moment(mDate).utc())
    }
        return [dateSelected, select];
}
