import React, {useState} from 'react'
import moment from 'moment'
import datasJson from '../../../data.json'

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
    }
    return [title, shortDescription, message, start, end]
}
