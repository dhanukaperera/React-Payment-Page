import React, { Component } from "react";
import loading from "../assets/imgs/loading.gif";
class PaymentProcessing extends Component {
  state = {};
  render() {
    return (
      <section class="hero is-medium is-bold">
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-1">
                <img
                  style={{ width: "48px", marginLeft: "36px" }}
                  src={loading}
                />
              </div>
              <div class="column">
                <h1 class="title">Payment is Processing</h1>
                <h2 class="subtitle">Completing the order...</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PaymentProcessing;
