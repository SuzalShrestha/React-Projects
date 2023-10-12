import "./App.css";
import { useState } from "react";
const message = [
  "Learn react and master it",
  "Make your resume stronger",
  "Apply for jobs and get rejected.",
];
import DateComponent from "./Date";

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div>
        <button
          className="close"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          &times;
        </button>
      </div>
      {isOpen && (
        <div className="card">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            MESSAGE : {step} --- {message[step - 1]}
          </p>
          <div className="buttons">
            <button
              onClick={() => {
                if (step > 1) setStep(step - 1);
              }}
            >
              Previous
            </button>
            <button
              onClick={() => {
                if (step < 3) setStep(step + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
      <DateComponent />
    </>
  );
}

export default App;
