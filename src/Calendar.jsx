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