import React, { Component } from "react";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Features from "./components/features";
import About from "./components/about";
import Services from "./components/services";
import Gallery from "./components/gallery";
import Testimonials from "./components/testimonials";
import Team from "./components/Team";
import Contact from "./components/contact";
import JsonData from "./data/data.json";
import LandingPage from "./components/LandingPage";
import { Switch, Route, Router, BrowserRouter } from "react-router-dom";
import Companies from "./components/CompaniesPage/Companies";
import ConfirmBookingPage from "./components/CompaniesPage/ConfirmBookingPage";

export class App extends Component {
  state = {
    landingPageData: {},
  };
  getlandingPageData() {
    this.setState({ landingPageData: JsonData });
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        {/* <BrowserRouter> */}
        <Switch>
          <Route
            path="/"
            exact
            component={LandingPage}
          />
          <Route
            path="/companies"
            exact
            component={Companies}
          />
          <Route
            path="/confirm"
            exact
            component={ConfirmBookingPage}
          />
        </Switch>
        {/* </BrowserRouter> */}
      </div>
    );
  }
}

export default App;
