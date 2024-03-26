import { ReactNode } from "react";
import "./contentBox-option3.scss";

type ContentBoxOption3Props = {
  contentBoxOption3: {
    icon?: ReactNode;
    title?: string;
    text?: string;
    link?: ReactNode;
    img?: ReactNode;
    id?: string;
  }[];
  containerTitle?: string;
  containerClassName?: string;
  id?: string;
};

const ContentBoxOption3 = ({
  contentBoxOption3,
  containerTitle,
  containerClassName,
  id,
}: ContentBoxOption3Props) => {
  return (
    <div className={containerClassName} id={id}>
      <div className="contentBoxOption3-container-title">
        <h1>{containerTitle}</h1>
      </div>
      <div className="contentBoxOption3-container">
        {contentBoxOption3.map((c) => {
          return (
            <>
              <div id={c.id} className="contentBoxOption3">
                <div className="contentBoxOption3__icon">{c.icon}</div>
                <div className="contentBoxOption3__titleAndText">
                  <h1>{c.title}</h1>
                  <p>{c.text}</p>
                  {c.link}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ContentBoxOption3;
