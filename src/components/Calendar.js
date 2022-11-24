import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Component } from 'react';
import interactionPlugin from "@fullcalendar/interaction";
import productData from "../data/product-data.json";
import {firestore} from "../firebase_config"
import styled from "@emotion/styled";
import '../style/style.css'

export const Main=()=>{ //시작페이지

  return(
    <div className='mainPage'>
      <h1>TEAM : 2 0 1 8</h1>
    <h1><Link to ="calendar">C A L E N D A R</Link></h1>
    </div>
  );
}


export const Error=()=>{ //에러페이지
    const locations = useLocation();
    return(
      <div>
        <h3>Page not found at {locations.pathname}</h3>
      </div>
    );
  }



/*
const [eventsData, setEventsData] = useState({})
const getEventsData = () => { 
  firebase.firestore().collection("calendat_data").get().then((snapshot) => {
    const events = snapshot.docs.map(event => event.data());
    setEventsData(events)
    console.log(events)
  }).catch((e) => {
    console.log(e + "fetching error")
  })
}
useEffect(() => {
   getEventsData()
 },[])
*/

const calendar_data = firestore.collection("calendar_data");
const today = new Date();
const Calendar = (props) => {
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(today);
  const handleDateSelect = (newDate) => {
    setDate(newDate);
    setVisible(false);
  };

  const handleDateClick = (arg) => { // bind with an arrow function
    console.log(arg)
      var event = prompt("일정을 입력하세요.",);
      calendar_data.doc(arg.dateStr).set( { date : arg.dateStr , title : `${event}`})
  }

  // 클릭 시 이벤트 정보 받아옴
  const handleEventClick = (clickInfo) => {
    console.log(clickInfo.event.id) // id 값 나옴    
    }

  return (
    <div className='Calendar'>
      <FullCalendar
        plugins={[dayGridPlugin,interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
        selectable = {true}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        select={handleDateSelect}
        editable={true}
        droppable={true}
        weekends={true}
        events={productData}
      />
      </div>
  );
};
export default Calendar;