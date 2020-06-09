import React, { Component } from "react";
import Result from "./Result";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
class App extends Component {
  constructor() {
    super();
    this.state = {
      gender: "Male",
      animal: "Tiger",
    };
    this.onChangeGenderValue = this.onChangeGenderValue.bind(this);
    this.onChangeAnimalValue = this.onChangeAnimalValue.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  //Selected Radio Button
  onChangeGenderValue(event) {
    this.setState({
      selectedGenderOption: event.target.value,
    });
  }
  onChangeAnimalValue(event) {
    this.setState({
      selectedAnimalOption: event.target.value,
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedGenderOption);
    console.log(this.state.selectedAnimalOption);
  }

   /* onClick(){
    axios.post("./Result", {
      params: {
       this.state: this.setState;selectedGenderOption
      }
    });
  } */

  render() {
    return (
      // Form Grouping
      <>
        <h1>Club R46</h1><br/>
        <h2>Today's Survey</h2><br/>
        <h3>
          If you're going to join our Club,
          <br />
          please answer a simple survey!
          <br />
          We'll help you to find the best matches through this survey results :)
        </h3>
        <br />
        <form onSubmit={this.formSubmit}>
          <h3>Please select your gender.</h3>
          <div className="gender">
            <input name="gender" type="radio" value="Male" checked={this.state.selectedGenderOption === "Male"} onChange={this.onChangeGenderValue} />
            Male
            <input name="gender" type="radio" value="Female" checked={this.state.selectedGenderOption === "Female"} onChange={this.onChangeGenderValue} />
            Female
          </div>
          Selected option is : {this.state.selectedGenderOption}
          <br />
        </form>

        <form onSubmit={this.formSubmit}>
          <h3>Please select your favorite animal.</h3>
          <div className="animal">
            <input name="animal" type="radio" value="Tiger" checked={this.state.selectedAnimalOption === "Tiger"} onChange={this.onChangeAnimalValue} />
            Tiger
            <input name="animal" type="radio" value="Elephant" checked={this.state.selectedAnimalOption === "Elephant"} onChange={this.onChangeAnimalValue} />
            Elephant
          </div>
          Selected option is : {this.state.selectedAnimalOption} <br />

          <button onClick={onclick}>
            Submit
          </button>

        </form>
      </>
    );
  }
}
export default App;
