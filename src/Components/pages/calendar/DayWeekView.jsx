import React from 'react'

let daysName = [ "DIMANCHE" ,"LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI"]

const displayDaysFrench = (mDate) => {
    return daysName[mDate]
}

const DayWeekView = ({day, handleClick}) => {
    return (
        <div className={"day position" + day.format('d') } onClick={() => handleClick(day)}>
            <p>{displayDaysFrench(day.format('d'))} {day.format('DD')}</p>
            <div className="day-post morning">
                <div>Ajouter un post</div>
            </div>
            <div className="day-post afternoon">
                <div>Ajouter un post</div>
            </div>
        </div>
    )

}

export default DayWeekView;