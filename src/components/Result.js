import React, { Component } from "react";
import { Link } from "react-router-dom";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = { result: props.location.state.data };
    console.log(props.location.state.data);
  }

  render() {
    const { result } = this.state;
    return (
      <div>
        <h1>Result_Survey Total</h1>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Sorts</th>
              <th scope="col">Tiger</th>
              <th scope="col">Elephant</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Male</th>
              <td>{result.mt}</td>
              <td>{result.me}</td>
            </tr>
            <tr>
              <th scope="row">Female</th>
              <td>{result.ft}</td>
              <td>{result.fe}</td>
            </tr>
            <tr>
              <th scope="row">Total</th>
              <td>{result.mt + result.ft}</td>
              <td>{result.me + result.fe}</td>
            </tr>
          </tbody>
        </table>

        <h3>Thank you for your survey!</h3>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    );
  }
}

export default Result;
