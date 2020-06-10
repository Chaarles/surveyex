import React, { Component } from "react";
import { Link } from "react-router-dom";

class Result extends Component {
  render() {
    return (
      <div>
        <h1>Result_Survey Total</h1>
        {/* Gender */}
        Gender
        <br />
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="male">
                <span>Male</span>
              </th>
              <th className="female">
                <span>Female</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="maleNum">1</td>
              <td className="femaleNum">2</td>
            </tr>
          </tbody>
        </table>
        <br />
        {/* Animal */}
        Animal
        <br />
        <br />
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="tiger">
                <span>Tiger</span>
              </th>
              <th className="elephant">
                <span>Elephant</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tigerNum">3</td>
              <td className="elephantNum">4</td>
            </tr>
          </tbody>
        </table>
        <br />
        <h3>Thank you for your survey!</h3>
        <Link to="/">
        <button>Back</button>
        </Link>
      </div>
    );
  }
}

export default Result;
