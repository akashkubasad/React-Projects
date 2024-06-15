import "./styles.css";
import CountDownTimer from "./date";
import { useState } from "react";

export default function App() {
  const currentDate = new Date();
  const [timerValue, setTimerValue] = useState(0);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>
        {currentDate.getMonth()}-{currentDate.getDate()}-
        {currentDate.getFullYear()}
      </p>
      <label for="timer_input"> timer count down </label>
      <input
        type="text"
        value={timerValue}
        onChange={(e) => {
          setTimerValue(e.target.value);
        }}
      />
      {/* <button
        onClick={() => {
          setpropTimer(timerValue);
        }}
      >
        set the timer{" "}
      </button> */}
      {<CountDownTimer time={timerValue} />}
    </div>
  );
}
