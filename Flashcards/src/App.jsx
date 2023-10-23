import { useState } from "react";
import "./App.css";
const questions = [
  {
    id: 1,
    question: "What is 2+2?",
    answer: 4,
  },
  {
    id: 2,
    question: "What is 2+3?",
    answer: 5,
  },
  {
    id: 3,
    question: "What is 2+4?",
    answer: 6,
  },
  {
    id: 4,
    question: "What is 2+5?",
    answer: 7,
  },
  {
    id: 5,
    question: "What is 2+6?",
    answer: 8,
  },
  {
    id: 6,
    question: "What is 2+7?",
    answer: 9,
  },
  {
    id: 7,
    question: "What is 2+8?",
    answer: 10,
  },
  {
    id: 8,
    question: "What is 2+9?",
    answer: 11,
  },
  {
    id: 9,
    question: "What is 2+10?",
    answer: 12,
  },
  {
    id: 10,
    question: "What is 2+11?",
    answer: 13,
  },
];
function App() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      {questions.map(({ id, question, answer }) => {
        return (
          <div key={id}>
            <button
              onClick={() => {
                setSelectedId(id);
              }}
            >
              {selectedId == id ? answer : question}
            </button>
          </div>
        );
      })}
    </>
  );
}
export default App;
