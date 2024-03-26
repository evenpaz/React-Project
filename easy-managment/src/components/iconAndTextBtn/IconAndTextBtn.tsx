import { ReactNode, useState } from "react";
import "./iconAndTextBtn.scss";
import { Link } from "react-router-dom";

export type IconAndTextBtnProps = {
  iconAndTextBtnArr: {
    logoSrc: ReactNode;
    text: string;
    linkTo: ReactNode;
    id?: string;
    subList?: ReactNode;
    onclick?: () => void;
  }[];
  flexDisplay?: string;
};

const IconAndTextBtn = ({
  flexDisplay,
  iconAndTextBtnArr,
}: IconAndTextBtnProps) => {
  return (
    <div className={`iconAndTextBtn-container ${flexDisplay}`}>
      {iconAndTextBtnArr.map((btn) => {
        return (
          <div
            id={btn.id}
            className="iconAndTextBtn"
            onClick={() => {
              btn.onclick();
            }}
          >
            <Link to={`${btn.linkTo}`}>
              <div className="iconAndTextBtn--link">
                <p>{btn.text}</p>
                {btn.logoSrc}
              </div>
            </Link>
            {btn.subList}
          </div>
        );
      })}
    </div>
  );
};

export default IconAndTextBtn;
