import React, { Component } from "react";

const divStyle = {
  width: "66%",
  margin: "auto"
};

class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cardno: "",
      month: "",
      year: "",
      csv: ""
    };
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  nextPage = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div style={divStyle}>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Customer Name</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input
                  name="name"
                  value={this.state.name}
                  onChange={event => this.handleUserInput(event)}
                  className="input"
                  type="text"
                  placeholder="Customr Name"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Card No</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input
                  value={this.state.cardno}
                  onChange={event => this.handleUserInput(event)}
                  name="cardno"
                  className="input"
                  type="number"
                  placeholder="Card No"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Exp Date (Month / Year)</label>
          </div>
          <div className="field-body">
            <div className="control">
              <div className="columns">
                <div className="column">
                  <div className="control">
                    <div className="select">
                      <select
                        value={this.state.month}
                        name="month"
                        onChange={event => this.handleUserInput(event)}
                      >
                        <option />
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="control">
                    <div className="select">
                      <select
                        value={this.state.year}
                        name="year"
                        onChange={event => this.handleUserInput(event)}
                      >
                        <option />
                        <option>2000</option>
                        <option>2001</option>
                        <option>2002</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">CSV</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input
                  value={this.state.csv}
                  onChange={event => this.handleUserInput(event)}
                  name="csv"
                  className="input"
                  type="number"
                  placeholder="CSV No"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal" />
          <div className="field-body">
            <div className="field">
              <a onClick={this.nextPage} className="button is-primary">
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentForm;
