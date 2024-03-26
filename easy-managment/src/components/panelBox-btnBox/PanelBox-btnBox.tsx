import { ReactNode } from "react";
import "./panelBox-btnBox.scss";

type PanelBox_btnBoxProps = {
  buttonArr: {
    btn_id: string;
    btn_placeholder: ReactNode;
    btn_onclick: () => void;
  }[];
};

const PanelBox_btnBox = ({ buttonArr }: PanelBox_btnBoxProps) => {
  return (
    <div className="PanelBox_btnBox">
      {buttonArr.map((btn) => {
        return (
          <div className="PanelBox_btnBox__btn">
            <button id={btn.btn_id} onClick={btn.btn_onclick}>
              {btn.btn_placeholder}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PanelBox_btnBox;
