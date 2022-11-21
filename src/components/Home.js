import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import productData from "../data/product-data.json";
import {firestore} from "../firebase_config";
import styled from "@emotion/styled";

export const StyleWrapper = styled.div`

.fc-day-sun a {
  color: #FFD700;
  text-decoration: none;
}

.fc-day-sat a {
  color: #FFA500;
  text-decoration: none;
}
.fc td {
    background: #FFFAF0;
    color: #6F606E;
  }
.fc event{
  background: #FFFAF0;
}
`

class Home extends Component {
    render() {
        return (
          <div className="App" style={{backgroundColor:"#FFFAF0"}}>
            <StyleWrapper>
            <FullCalendar 
              defaultView="dayGridMonth" 
              plugins={[ dayGridPlugin, interactionPlugin ]}
              dateClick={this.handleDateClick}
              eventClick={this.handleEventClick}   
              events={productData}
              locale='ko'
            />
            </StyleWrapper>
          </div>
        );
    }
   
    handleDateClick = (arg) => {
      const calendar_data = firestore.collection("calendar_data");
      var a = prompt(arg.dateStr);
      calendar_data.add( { date : arg.dateStr , title : `${a}`})
    }

    handleEventClick = (info) => {
      console.log("")
    }
}
export default Home;