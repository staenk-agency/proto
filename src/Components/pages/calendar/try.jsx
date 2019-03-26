import React, { Component } from 'react'

export class Try extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let d = new Date();
        var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var month = d.getMonth();   //0-11
        var year = d.getFullYear(); //2014
        var first_date =  month_name[month] + " " + 1 + " " + year;
        //September 1 2014
        console.log("firstdate", first_date)
        var tmp = new Date(first_date).toDateString();
        console.log("tmp", tmp) //doesn't work when the first_date is in french 
        //Mon Sep 01 2014 ...
        let first_day = first_date.substring(0, 3)
        console.log(first_day)
        var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        // var first_day = tmp.substring(0, 3);    //Mon
        var day_no = day_name.indexOf(first_day);   //1
        var days = new Date(year, month+1, 0).getDate();    //30
        //Tue Sep 30 2014 ...
        var calendar = this.get_calendar(day_no, days);
        document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
        document.getElementById("calendar-dates").appendChild(calendar);
    }

    get_calendar(day_no, days){
        var table = document.createElement('table');
        var tr = document.createElement('tr');
        
        //row for the day letters
        for(var c=0; c<=6; c++){
            var td = document.createElement('td');
            td.innerHTML = "SMTWTFS"[c];
            tr.appendChild(td);
        }
        table.appendChild(tr);
        
        //create 2nd row
        tr = document.createElement('tr');
        var c;
        for(c=0; c<=6; c++){
            if(c == day_no){
                break;
            }
            var td = document.createElement('td');
            td.innerHTML = "";
            tr.appendChild(td);
        }
        
        var count = 1;
        for(; c<=6; c++){
            var td = document.createElement('td');
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
        
        //rest of the date rows
        for(var r=3; r<=7; r++){
            tr = document.createElement('tr');
            for(var c=0; c<=6; c++){
                if(count > days){
                    table.appendChild(tr);
                    return table;
                }
                var td = document.createElement('td');
                td.innerHTML = count;
                count++;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        return table;
    }

    render() {
    return (
        <div id="calendar-container">
            <div id="calendar-header">
                <span id="calendar-month-year"></span>
            </div>
            <div id="calendar-dates">
            </div>
        </div>
    )
    }
}

export default Try
