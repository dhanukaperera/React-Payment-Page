import React, { Component } from "react";

class Title extends Component {
  state = {};
  render() {
    return (
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Payments</h1>
            <h2 className="subtitle">Enter your card details</h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Title;
