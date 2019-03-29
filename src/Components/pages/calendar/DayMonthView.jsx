import React from 'react'

const Day = ({day, handleClick}) => {
	let dayOfWeek = day.isoWeekday() -1;		//use to have the correct position in the grid

    return (
        <div className={'weekDay ' + 'position' + dayOfWeek} onClick={() => handleClick(day)}>
			{day.format("DD")}
        </div>
    )
}
export default Day;