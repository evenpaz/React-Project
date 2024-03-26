import { ReactNode } from "react";
import "./contentBox.scss";

export type ContentBoxProps = {
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

const ContentBox = ({
  contentBox,
  containerTitle,
  containerClassName,
  hr,
  id,
}: ContentBoxProps) => {
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
                <div className="icon">{c.icon}</div>
                <h2>{c.title}</h2>
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

export default ContentBox;
