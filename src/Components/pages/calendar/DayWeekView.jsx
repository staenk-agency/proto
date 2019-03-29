import React from 'react'

let daysName = [ "DIMANCHE" ,"LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI"]

const displayDaysFrench = (mDate) => {
    return daysName[mDate]
}

const DayWeekView = ({day, handleClick}) => {
    return (
        <div className={"day" + 'position'} onClick={() => handleClick(day)}>

            {displayDaysFrench(day)} {day.format('DD MMMM')}
        </div>
    )

}

export default DayWeekView;