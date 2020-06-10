import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      gender: "asdasd",
      animal: "",
    };
    this.formSubmit = this.formSubmit.bind(this);
  }

  //Selected Radio Button
  onChangeGenderValue(event) {
    console.log(event.target.value);
    console.log(this.state.gender);

    this.setState({
      gender: event.target.value,
    });
  }

  onChangeAnimalValue(event) {
    this.setState({
      animal: event.target.value,
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedGenderOption);
    console.log(this.state.selectedAnimalOption);
  }

  render() {
    function onClickAxios() {
      console.log(this.state.gender);

      const { gender, animal } = this.state;
      Axios.post("http://localhost:4000/", { gender: gender, animal: animal })
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    return (
      // Form Grouping
      <>
        <h1>Club R46</h1>
        <br />
        <h2>Today's Survey</h2>
        <br />
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
            <input
              name="gender"
              type="radio"
              value="Male"
              checked={this.state.selectedGenderOption === "Male"}
              onChange={this.onChangeGenderValue}
            />
            Male
            <input
              name="gender"
              type="radio"
              value="Female"
              checked={this.state.selectedGenderOption === "Female"}
              onChange={this.onChangeGenderValue}
            />
            Female
          </div>
          Selected option is : {this.state.selectedGenderOption}
          <br />
        </form>

        <form onSubmit={this.formSubmit}>
          <h3>Please select your favorite animal.</h3>
          <div className="animal">
            <input
              name="animal"
              type="radio"
              value="Tiger"
              checked={this.state.selectedAnimalOption === "Tiger"}
              onChange={this.onChangeAnimalValue}
            />
            Tiger
            <input
              name="animal"
              type="radio"
              value="Elephant"
              checked={this.state.selectedAnimalOption === "Elephant"}
              onChange={this.onChangeAnimalValue}
            />
            Elephant
          </div>
          Selected option is : {this.state.selectedAnimalOption} <br />
          <Link to="/result">
            <button onClick={onClickAxios}>Submit</button>
          </Link>
        </form>
      </>
    );
  }
}
export default Home;
