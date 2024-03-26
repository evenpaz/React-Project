import { ReactNode } from "react";
import "./list.scss";
import Separator from "../separator/Separator";

type ListProps = {
  headline?: string;
  text?: string;
  contentBox: { title: string; listItems: ReactNode[]; link: ReactNode }[];
  id?: string;
};

const List = ({ headline, text, contentBox, id }: ListProps) => {
  return (
    <div className="list-container" id={id}>
      <h1>{headline}</h1>
      <p>{text}</p>
      <div className="list-container__content">
        {contentBox.map((c) => {
          return (
            <div className="list-container-content__box">
              <h2>{c.title}</h2>
              <Separator />
              {c.listItems}
              {c.link}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
