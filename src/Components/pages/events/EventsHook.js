import React, {useState} from 'react'

export  const useEventContent = (id) => {
    const [eventContentDisplayed, setEventContentDisplayed] = useState(null)
    const [text, setText] = useState('Plus')
    const displayContent = () => {
        if(text === 'Plus'){
            setEventContentDisplayed(id)
            setText('Moins')
        } else {
            setEventContentDisplayed(null)
            setText('Plus')
        }
    }
        return [eventContentDisplayed, text, displayContent]
}