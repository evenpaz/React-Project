import { ReactNode, useState } from "react";
import "./toggleBtn.scss";

type ToggleBtnProps = {
  btnArr: [
    {
      id: string;
      text: string | ReactNode;
      subList: ReactNode;
    }
  ];
};

const ToggleBtn = ({ btnArr }: ToggleBtnProps) => {
  const isOpenArr: boolean[] = [];
  isOpenArr.length = btnArr.length;
  const [isOpen, setIsOpen] = useState(isOpenArr.fill(false));
  const toggleButton = (index: number) => {
    const updateIsOpen = [...isOpen];
    updateIsOpen[index] = !updateIsOpen[index];
    setIsOpen(updateIsOpen);
  };

  return (
    <div>
      {btnArr.map((btn, index) => {
        return (
          <div className="toggleBtn">
            <button
              onClick={() => {
                toggleButton(index);
              }}
            >
              {btn.text}
            </button>
            {isOpen[index] == false ? (
              <></>
            ) : (
              <div id={btn.id}> {btn.subList}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ToggleBtn;
