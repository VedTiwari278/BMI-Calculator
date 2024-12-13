import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";
import { useState } from "react";
import Result from "./Result";

function Input() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBmiResult] = useState("");
  const [BMI, setBMI] = useState("");
  const [error, setError] = useState("");

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
    setError("");
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
    setError("");
  };

  const handleOnClick = () => {
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      setError(
        "Unable to calculate. Please enter valid numeric values for weight and height."
      );
      setBmiResult("");
      setBMI("");
      return;
    }

    let heightInMeters = height * 0.3048;
    let bmi = weight / (heightInMeters * heightInMeters);

    let fixedBmi = bmi.toFixed(2);

    let resultMessage = "";
    if (bmi < 18.5) {
      resultMessage = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      resultMessage = "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
      resultMessage = "Overweight";
    } else {
      resultMessage = "Obese";
    }

    setBmiResult(resultMessage);
    setBMI(fixedBmi);

    setWeight("");
    setHeight("");
    setError("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Weight (kg)"
        value={weight}
        onChange={handleWeightChange}
        required
        className="form-control INPUT"
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Height (feet)"
        value={height}
        onChange={handleHeightChange}
        required
        className="form-control INPUT"
      />
      <br />
      <br />
      <Button HandleOnclick={handleOnClick}></Button>
      <br />
      {error && (
        <div style={{ color: "black", font: "40px", marginTop: "10px" }}>
          {error}
        </div>
      )}
      <hr />
      <Result result={bmiResult} BMI={BMI}></Result>
    </>
  );
}

export default Input;
