import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  KeyboardDateTimePicker,
} from '@material-ui/pickers';

export default function DateTimePickerMui({setSelectedDate,selectedDate}) {
  // The first commit of Material-UI
  

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
    
      <KeyboardDateTimePicker
      fullWidth
        variant="inline"
        ampm={false}
        label="With keyboard"
        value={selectedDate}
        onChange={handleDateChange}
        onError={console.log}
        disablePast
        format="MM/dd/yyyy HH:mm"
      />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
