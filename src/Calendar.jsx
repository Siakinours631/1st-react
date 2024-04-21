/*

import React, { useEffect } from 'react';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import './App.css';

function Calendar() {
  useEffect(() => {
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
      if (div.style.position === 'fixed' && div.style.zIndex === '999999999') {
        div.style.display = 'none';
      }
    });
  }, []); // Le tableau vide garantit que cela s'exécute une fois après le premier rendu

  return (
    <div>
      <CalendarComponent />
    </div>
  );
}



export default Calendar;
*/
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const today = dayjs();

const isInCurrentYear = (date) => date.get('year') === dayjs().get('year');


function Calendar({inputTitle}) {
  const [title, setTitle] = useState()
  
  useEffect(() => {
    console.log('useEffect Calendar')
    
  },[])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DemoItem label={title}>
          <DatePicker defaultValue={today} shouldDisableYear={isInCurrentYear} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  )
}


export default Calendar;
