import { useState } from "react";
import "./qa_box.scss";

type qa_boxType = {
  title?: string;
  questions_box: { question: string; answer: string }[];
};

const QA_box = ({ title, questions_box }: qa_boxType) => {
  const isOpenArr: Boolean[] = [];
  isOpenArr.length = questions_box.length;

  const [isOpen, setIsOpen] = useState(isOpenArr.fill(false));

  const toggleQuestion = (index: number) => {
    const updateIsOpen = [...isOpen];
    updateIsOpen[index] = !updateIsOpen[index];
    setIsOpen(updateIsOpen);
  };

  return (
    <div>
      <h1>{title}</h1>
      <div className="qa-boxes">
        {questions_box.map((qa, index) => {
          return (
            <div className={`qa-box`} onClick={() => toggleQuestion(index)}>
              {isOpen[index] == false ? (
                <>
                  <p className="show-answer">+</p>
                  <p className="qa-question">{qa.question}</p>
                </>
              ) : (
                <>
                  <p className="close-answer">-</p>
                  <div className="qa-question-answer">
                    <p className="qa-question">{qa.question}</p>
                    <p className="qa-answer">{qa.answer}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QA_box;
