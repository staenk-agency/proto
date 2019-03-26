import React, { Component } from 'react'
import moment from "moment"

import './CalendarMonth.scss'

export class CalendarMonth extends Component {
    constructor(props){
        super(props)
        this.state = {
            today : moment(),
        }
    }
    render() {
        console.log(this.state)
    return (
        <div className="calendar-month-container">
            <h1>{moment().format("MMMM")}</h1>
            <h2>{moment().format("YYYY")}</h2>
            <p>{moment().endOf("month").format("dddd")} </p>


            <table className="calendar-table" id="calendar">
                    <thead>
                        <tr>
                            <th>LUNDI</th>
                            <th>MARDI</th>
                            <th>MERCREDI</th>
                            <th>JEUDI</th>
                            <th>VENDREDI</th>
                            <th>SAMEDI</th>
                            <th>DIMANCHE</th>
                        </tr>
                    </thead>
        
                    <tbody id="calendar-body">
                        <tr className="calendar-rows">
                            <td className="row lun"></td>
                            <td className="row mar"></td>
                            <td className="row mer"></td>
                            <td className="row jeu"></td>
                            <td className="row ven"></td>
                            <td className="row sam"></td>
                            <td className="row dim"></td>
                        </tr>
                        <tr className="calendar-rows">
                            <td className="row lun"></td>
                            <td className="row mar"></td>
                            <td className="row mer"></td>
                            <td className="row jeu"></td>
                            <td className="row ven"></td>
                            <td className="row sam"></td>
                            <td className="row dim"></td>
                        </tr>
                        <tr className="calendar-rows">
                            <td className="row lun"></td>
                            <td className="row mar"></td>
                            <td className="row mer"></td>
                            <td className="row jeu"></td>
                            <td className="row ven"></td>
                            <td className="row sam"></td>
                            <td className="row dim"></td>
                        </tr>
                        <tr className="calendar-rows">
                            <td className="row lun"></td>
                            <td className="row mar"></td>
                            <td className="row mer"></td>
                            <td className="row jeu"></td>
                            <td className="row ven"></td>
                            <td className="row sam"></td>
                            <td className="row dim"></td>
                        </tr>
                        <tr className="calendar-rows">
                            <td className="row lun"></td>
                            <td className="row mar"></td>
                            <td className="row mer"></td>
                            <td className="row jeu"></td>
                            <td className="row ven"></td>
                            <td className="row sam"></td>
                            <td className="row dim"></td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
    }
}

export default CalendarMonth
