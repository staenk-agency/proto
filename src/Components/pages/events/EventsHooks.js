import React, {useState, useEffect} from 'react'
import moment from 'moment'
import datasJson from '../../../data.json'

export const useEventState = (mDate, step, end) => {
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

export const useInitEventState = (mDate, step, end) => {
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

    const select = function(mDate){
        setDateSelected(moment(mDate).utc())
    }
        return [dateSelected, select];
}

export const fetchDatas = (day) => {
    let title = null
    let shortDescription = null
    let message = null
    let start = null
    let end = null
    for(let i = 0; i < datasJson.length; ++i){
        const json = moment(datasJson[i].date.start, "DD/MM/YY").utc()
        const dayLol = moment(day.format('DD/MM/YY'), "DD/MM/YY").utc()
        if(json.clone().format('DD MM YY') === dayLol.clone().format('DD MM YY')){
            title = datasJson[i].title
            shortDescription= datasJson[i].shortDescription
            message = datasJson[i].message
            start = datasJson[i].date.start
            end = datasJson[i].date.end
            return [title, shortDescription, message, start, end]
        }
        title = null
        shortDescription= null
        message = null
        start = null
        end = null
        // useEffect(() =>{ 
        //     setDatas(datasJson[i])
        // })
    }
    return [title, shortDescription, message, start, end]
}
