import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Home = () => {
  // 함수형에서 state를 쓸 수 있도록 useState란 Hooks 추가
  const [gender, setGender] = useState("");
  const [animal, setAnimal] = useState("");

  // setter
  function onChangeGenderValue(event) {
    console.log(gender);
    setGender(event.target.value);
  }
  function onChangeAnimalValue(event) {
    console.log(animal);
    setAnimal(event.target.value);
  }

  // Axios 설정
  function onClickAxios() {
    console.log(gender);

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
      <h3>Please select your gender.</h3>
      <div className="gender">
        <input
          name="gender"
          type="radio"
          value="Male"
          //onChange 함수 지정
          onChange={onChangeGenderValue}
        />
        Male
        <input
          name="gender"
          type="radio"
          value="Female"
          onChange={onChangeGenderValue}
        />
        Female
      </div>
      Selected option is : {gender}
      <br />
      <h3>Please select your favorite animal.</h3>
      <div className="animal">
        <input
          name="animal"
          type="radio"
          value="Tiger"
          onChange={onChangeAnimalValue}
        />
        Tiger
        <input
          name="animal"
          type="radio"
          value="Elephant"
          onChange={onChangeAnimalValue}
        />
        Elephant
      </div>
      Selected option is : {animal} <br />
      <Link to="/result">
        <button onClick={onClickAxios}>Submit</button>
      </Link>
    </>
  );
};

export default Home;
