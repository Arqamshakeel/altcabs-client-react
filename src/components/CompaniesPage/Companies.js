import React from "react";
import quotationsServices from "../../services/QuotationsServices";
import QuotationComponent from "../quotes/QuotationComponent";
import Grid from "@material-ui/core/Grid";
import CompanyTypeTabs from "./CompanyTypeTabs";

const Companies = () => {
  const [from, setFrom] = React.useState("Slough Station, Slough, UK");
  const [fromId, setFromId] = React.useState("ChIJq1arfcp6dkgRYVocPLV6oDo");
  const [to, setTo] = React.useState("Heathrow Airport (LHR), Longford, UK");
  const [toId, setToId] = React.useState("ChIJ6W3FzTRydkgRZ0H2Q1VT548");
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const [BookingId, setBookingId] = React.useState("");
  const [quotationData, setQuotationData] = React.useState([]);

  const handleQuotesBtn = () => {
    quotationsServices
      .getQuotesBtn({
        from_desc: from,
        from_place_id: fromId,
        to_desc: to,
        to_place_id: toId,

        startTime: selectedDate,
      })
      .then((r) => {
        console.log("====================================");
        console.log(r);
        setBookingId(r);
        quotationsServices
          .getBookingQuotes(r)
          .then((res) => {
            console.log("====================================");
            console.log(res);
            setQuotationData(res.quotations);
            console.log("====================================");
          })
          .catch((e) => {});
        console.log("====================================");
      })
      .catch((err) => {
        console.log("====================================");
        console.log(err.response.data);
        console.log("====================================");
      });
  };
  return (
    <div style={{ marginTop: "80px" }}>
      <div>
        <Grid
          container
          spacing={1}
          // direction="column"
          // alignItems="center"
          justify="center"
          // style={{ minHeight: "100vh" }}
        >
          <Grid item xs={4} justify="center" style={{ marginTop: "50px" }}>
            <QuotationComponent
              to={to}
              setTo={setTo}
              from={from}
              setFrom={setFrom}
              handleQuotesBtn={handleQuotesBtn}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </Grid>
          {/* <div style={{ borderRight: "solid #A9A9A9" }}></div> */}
          <Grid item xs={8}>
            <CompanyTypeTabs quotationData={quotationData} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Companies;
