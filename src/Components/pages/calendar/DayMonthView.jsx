import React from 'react'

const DayMonthView = ({day, handleClick}) => {
	let dayOfWeek = day.isoWeekday() -1;		//use to have the correct position in the grid, isoWeekday display days between 1 and 7

    return (
        <div className={'weekDay position' + dayOfWeek} onClick={() => handleClick(day)}>
			{day.format("DD")}
        </div>
    )
}
export default DayMonthView;