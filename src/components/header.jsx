import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Box, FormControlLabel, Radio, Typography } from "@material-ui/core";
import GradientBtn from "./quotes/GradientBtn";
import DateTimePickerMui from "./quotes/DateTimePickerMui";
import quotationsServices from "../services/QuotationsServices";
import QuotationComponent from "./quotes/QuotationComponent";
import { withRouter } from "react-router-dom";

const Header = (props) => {

  const [from, setFrom] = React.useState("Slough Station, Slough, UK");
  const [fromId, setFromId] = React.useState("ChIJq1arfcp6dkgRYVocPLV6oDo");
  const [to, setTo] = React.useState("Heathrow Airport (LHR), Longford, UK");
  const [toId, setToId] = React.useState("ChIJ6W3FzTRydkgRZ0H2Q1VT548");
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const [BookingId, setBookingId] = React.useState("");
  // const [quotationData, setQuotationData] = React.useState([]);


  const handleQuotesBtn = () => {
    

    quotationsServices.getQuotesBtn({
      from_desc: from,
      from_place_id: fromId,
      to_desc: to,
      to_place_id: toId,

      startTime: selectedDate,
    }).then((r) => {
      console.log('====================================');
      console.log(r);
      setBookingId(r);
      quotationsServices.getBookingQuotes(r).then((res) => {
        console.log('====================================');
        console.log(res.quotations);
        // setQuotationData(res.quotations)
        props.history.push("/companies")
        
        console.log('====================================');
      }).catch((e) => { })
      console.log('====================================');
    }).catch((err) => {
      console.log('====================================');
      console.log(err.response.data);
      console.log('====================================');
    })


  }



  return (
    <header id="header">
      {/* class intro is related to background image */}
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="intro-text">
                <Grid container spacing={1}>
                  <Grid item xs={4} >
                    {/* <TextField id="" label="" variant="outlined" /> */}
                  </Grid>
                  <Grid item xs={4} >
                    {/* <TextField id="" label="" variant="outlined" /> */}
                  </Grid>
                  <Grid item xs={4} >
                    <QuotationComponent to={to} setTo={setTo} from={from} setFrom={setFrom} handleQuotesBtn={handleQuotesBtn} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default withRouter( Header);
