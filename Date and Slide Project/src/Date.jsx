import { useState } from "react";

function DateComponent() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const currentdate = new Date("october 12 2023");
  currentdate.setDate(currentdate.getDate() + count);

  return (
    <>
      <div className="steps">
        <button
          onClick={() => {
            setStep(step - 1);
          }}
        >
          -
        </button>
        Steps is : {step}
        <button
          onClick={() => {
            setStep(step + 1);
          }}
        >
          +
        </button>
      </div>
      <div className="count">
        <button
          onClick={() => {
            setCount(count - step);
          }}
        >
          -
        </button>
        Count is : {count}
        <button
          onClick={() => {
            setCount(count + step);
          }}
        >
          +
        </button>
      </div>
      <p className="todaysMessage">
        <span>
          {count == 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : count < 0
            ? `${Math.abs(count)} days ago was `
            : ""}
        </span>
        <span>{currentdate.toDateString()}</span>
      </p>
    </>
  );
}
export default DateComponent;
