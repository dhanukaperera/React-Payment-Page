import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/app-title";
import PaymentForm from "./components/payment-form";
import PaymentProcessing from "./components/payment-processing";
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <section className="section">
          <div className="container" />
          <BrowserRouter>
            <div>
              <Route path="/" component={PaymentForm} exact />
              <Route path="/processing" component={PaymentProcessing} />
            </div>
          </BrowserRouter>
        </section>
      </div>
    );
  }
}

export default App;
