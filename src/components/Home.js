import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const Home = () => {
  // 함수형에서 state를 쓸 수 있도록 useState란 Hooks 추가
  const [gender, setGender] = useState("");
  const [animal, setAnimal] = useState("");
  const history = useHistory();

  // setter
  function onChangeGenderValue(event) {
    console.log(event.target.value);
    setGender(event.target.value);
  }
  function onChangeAnimalValue(event) {
    console.log(event.target.value);
    setAnimal(event.target.value);
  }

  // Axios 설정
  function onClickAxios() {
    console.log(gender);
    // { gender: gender, animal: animal }
    Axios.post("/submit", {
      gender: gender,
      animal: animal,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });

    Axios.get("/result")
      .then((res) => {
        console.log(res.data);

        const data = res.data;
        history.push("/result", { data: data });
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
        <button onClick={onClickAxios}>Submit</button>
    </>
  );
};

export default Home;
