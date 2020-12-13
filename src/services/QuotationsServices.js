import GenericService from "./GenericService";
// import jwtDecode from "jwt-decode";
class QuotationsServices extends GenericService {
  constructor() {
    super();
  }



  getQuotesBtn = (data) => this.post("/api/public/bookings/quotations", data);
  

  //quotatiosns/id
  getBookingQuotes = (id) => this.get("/quotations/"+id);
 
}

let quotationsServices = new QuotationsServices();
export default quotationsServices;
