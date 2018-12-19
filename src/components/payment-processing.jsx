import React, { Component } from "react";
import loading from "../assets/imgs/loading.gif";
class PaymentProcessing extends Component {
  state = {};
  render() {
    return (
      <section className="hero is-medium is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-1">
                <img
                  style={{ width: "48px", marginLeft: "36px" }}
                  src={loading}
                />
              </div>
              <div className="column">
                <h1 className="title">Payment is Processing</h1>
                <h2 className="subtitle">Completing the order...</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PaymentProcessing;
