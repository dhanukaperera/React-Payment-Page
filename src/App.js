import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/app-title";
import PaymentForm from "./components/payment-form";
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <section className="section">
          <div className="container" />
          <PaymentForm />
        </section>
      </div>
    );
  }
}

export default App;
