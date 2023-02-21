import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css"
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import"date-fns/lacale/en-Us"


const locales = {
    "en-US": require("date-fns/locale/en-Us")
}
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2023, 1, 20),
        end: new Date(2023, 1, 20),    
    },
    {
        title: "Vacation",
        start: new Date(2023, 2 , 21),
        end: new Date(2023, 2 , 21),    
    },
    {
        title: "Conference",
        start: new Date(2023, 2 , 22),
        end: new Date(2023, 2 , 22),    
    },
    {
        title: "tite",
        start: new Date(2023, 2 , 23),
        end: new Date(2023, 2 , 24),    
    },
]

function CAlendar() {

    const [ newEvent, setNewEvent] = useState({title:'',time:''})
    const [allEvents, setAllEvents] = useState(events)
    
    const addeventhandler= (e) => {
        e.preventDefault()
        console.log(e)
        setAllEvents([...allEvents,newEvent])
        console.log(setAllEvents)
        console.log(newEvent)

    }
    const isWeekday = (date) => {
        const day = getDay(date);
        return day !== 0 && day !== 6;
      };
    
    return (
        <>
            <div className="calendar">
                <h2>Add New Event</h2>
                <div>
                    <form action="">
                    <input type="text" placeholder="Add Teitle" className="form-control sm"
                        value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value, })} />
                    <ReactDatePicker
                        isClearable
                        
                        minDate={new Date()}
                        placeholderText="The Date"
                        selected={newEvent.time}
                        onChange={(time) => setNewEvent({ ...newEvent,time })}
                        filterDate={isWeekday}
                        timeInputLabel="Time:"
                        dateFormat="dd/MM/yyyy h:mm aa"
                        withPortal
                        showTimeInput
                        showMonthDropdown
                        required
                        form='submitDate'
                        />
                    
                    
                        <button id='submitDate' className="btn btn-success" onClick={(e) => addeventhandler(e)}>Add Event</button>
                        </form>
                </div>
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{height:500,margin:"300px 50px"}} />
            </div>
        </>
    );
}
export default CAlendar;
