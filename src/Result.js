import React, { Component } from "react";

class Result extends Component {
  render() {
    return (
      <div>
        <h1>Result_Survey Total</h1>
        {/* Gender */}
        Gender
        <br />
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th class="male">
                <span>Male</span>
              </th>
              <th class="female">
                <span>Female</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="maleNum">1</td>
              <td class="femaleNum">2</td>
            </tr>
          </tbody>
        </table>
        <br />
        {/* Animal */}
        Animal
        <br />
        <br />
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th class="tiger">
                <span>Tiger</span>
              </th>
              <th class="elephant">
                <span>Elephant</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tigerNum">3</td>
              <td class="elephantNum">4</td>
            </tr>
          </tbody>
        </table>
        <br />
        <h3>Thank you for your survey!</h3>
        <button>Back</button>
      </div>
    );
  }
}

export default Result;
