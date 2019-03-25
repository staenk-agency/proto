import React, { Component } from 'react'
import './Calendar.scss';

export class Calendar extends Component {
    render() {
        return (
            <div className="calendar-container">
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
                        <tr>
                            <td>01</td>
                            <td>02</td>
                            <td>03</td>
                            <td>04</td>
                            <td>05</td>
                            <td>06</td>
                            <td>07</td>
                        </tr>
                        <tr>
                            <td>08</td>
                            <td>09</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                            <td>01</td>
                            <td>02</td>
                            <td>03</td>
                            <td>04</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Calendar
