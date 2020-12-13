import { Box, Grid, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import DateTimePickerMui from "./DateTimePickerMui";
import GradientBtn from "./GradientBtn";
const useStyles = makeStyles({
  root: {
    color: "#FFFFFF",
  },
});
const QuotationComponent = (props) => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={1} style={{ borderRight: "solid #A9A9A9" }}>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <TextField
              InputProps={{
                className: classes.multilineColor,
              }}
              fullWidth
              size="small"
              label="Enter a pick up address..."
              variant="filled"
              value={props.from}
              onChange={(e) => {
                props.setFrom(e.target.value);
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <TextField
              fullWidth
              size="small"
              label="Enter a drop off address..."
              variant="filled"
              value={props.to}
              onChange={(e) => {
                props.setTo(e.target.value);
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <DateTimePickerMui
              selectedDate={props.selectedDate}
              setSelectedDate={props.setSelectedDate}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <GradientBtn handleQuotesBtn={props.handleQuotesBtn} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default QuotationComponent;
