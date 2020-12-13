import React from "react";
import { ConfirmBookingComponent } from "./ConfirmBookingComponent";
import Grid from "@material-ui/core/Grid";
import BookingClientInfoComponent from "./BookingClientInfoComponent";
const ConfirmBookingPage = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <Grid container spacing={1}>
        <Grid item xs={7}>
          <BookingClientInfoComponent />
        </Grid>
        <Grid item xs={5}>
          <ConfirmBookingComponent />
        </Grid>
      </Grid>
    </div>
  );
};

export default ConfirmBookingPage;
