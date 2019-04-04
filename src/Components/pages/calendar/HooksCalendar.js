import React, {useState} from 'react'
import moment from 'moment'

export const useCalendarState = (mDate, step) => {
    const [currentStep, setCurrentStep] = useState(mDate.utc().startOf(step));

    let nextStep = function(count, stepFunction, recomputeDays, stepArray){
        let newCurrent = currentStep.clone().add(count, stepFunction);
        setCurrentStep(newCurrent);
        recomputeDays(newCurrent, stepArray)
    }

    let previousStep = function(count, stepFunction, recomputeDays, stepArray){
        let newCurrent = currentStep.clone().subtract(count, stepFunction);
        setCurrentStep(newCurrent);
        recomputeDays(newCurrent, stepArray)
    }
    return [currentStep, nextStep, previousStep]
}

export const useInitCalendarState = (mDate, step) => {
    const [days, setDays] = useState(initDaysArray(mDate, step))

    let recomputeDays = function(mDate, step) {
        setDays(initDaysArray(mDate, step));
    }
    return [days, recomputeDays];
}

function initDaysArray(mDate, step) { 
    let days = [];
    for(let i = 0; i < mDate.clone().endOf('month').format('D'); ++i){
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
