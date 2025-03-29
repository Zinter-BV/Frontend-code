import React from "react";
// import FullCalendar from "@fullcalendar/react";
// import { DayGridView } from "@fullcalendar/daygrid/internal.js";
import SideBar from "../components/SideBar";
// import Calendar from "@toast-ui/react-calendar";
// import Calendar from "@toast-ui/react-calendar"
// import "@toast-ui/calendar/dist/toastui-calendar.min.css";
// import "tui-calendar/dist/tui-calendar.css";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import { ScheduleComponent, Day, Week, Month, Inject } from "@syncfusion/ej2-react-schedule";
import "./calendarPage.css"
import { momentLocalizer, Calendar } from "react-big-calendar";

const CalendarPage = () => {

    // const localizer = momentLocalizer(moment);
    const localizer = momentLocalizer(moment)
    const events = [
        {
            title: "Interview",
            start: new Date(2024, 2, 28, 10, 0),
            end: new Date(2024, 2, 28, 11, 0),
        },
    ];

    // const eventData = [
    //     {
    //         Id: 1,
    //         Subject: "Meeting",
    //         StartTime: new Date(2024, 2, 28, 10, 0),
    //         EndTime: new Date(2024, 2, 28, 12, 0),
    //         IsAllDay: false
    //     }
    // ];
    return (
        <div className="sidebar_calendar">
            <div>
                <SideBar />
            </div>
            <div className="calendar_page">
                {/* <ScheduleComponent height="550px" eventSettings={{ dataSource: eventData }}>
                    <Inject services={[Day, Week, Month]} />
                </ScheduleComponent> */}
                {/* <FullCalendar
                    plugins={[DayGridView]}
                    initialView="dayGridMonth"
                    events={[
                        { title: "Meeting", date: "2024-03-28" },
                        { title: "Event", date: "2024-03-30" },
                    ]}
                    height="100vh" // Full height
                /> */}
                <div style={{ height: "80vh", background: "#f4f4f4", padding: "20px" }}>
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ backgroundColor: "white", borderRadius: "10px", padding: "10px" }}
                    />
                </div>
                {/* <Calendar
                    height="100%"
                    view="month"
                    schedules={[
                        { id: "1", title: "Lunch", category: "time", start: "2024-03-28T12:00:00", end: "2024-03-28T13:00:00" },
                    ]}
                /> */}



            </div>

        </div>
    )
}

export default CalendarPage