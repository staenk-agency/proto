import React from 'react'

const DayHourView = ({hour, handleClick}) => {
    return (
        <div className={'hour ' + hour.format('hh')} onClick={() => handleClick(hour)}>
            {hour.format('hh a')}
        </div>
    )
}

export default DayHourView;