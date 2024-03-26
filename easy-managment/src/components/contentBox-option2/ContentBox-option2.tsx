import { ReactNode } from "react";
import "./contentBox-option2.scss";

type ContentBoxOption2Props = {
  contentBox: {
    icon?: ReactNode;
    title?: string;
    text?: string;
    link?: ReactNode;
    hr?: ReactNode;
  }[];
  containerTitle?: string;
  containerClassName?: string;
  hr?: ReactNode;
  id?: string;
};

const ContentBoxOption2 = ({
  contentBox,
  containerTitle,
  containerClassName,
  hr,
  id,
}: ContentBoxOption2Props) => {
  return (
    <div className={containerClassName} id={id}>
      <div className="contentBox-container-title">
        <h1>{containerTitle}</h1>
      </div>
      <div className="contentBox-container">
        {contentBox.map((c) => {
          return (
            <>
              <div className="contentBox">
                <span id="contentBox__iconAndTitle">
                  <div className="icon">{c.icon}</div>
                  <h2>{c.title}</h2>
                </span>
                {c.hr}
                <p>{c.text}</p>
                {c.link}
              </div>
              {hr}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ContentBoxOption2;
