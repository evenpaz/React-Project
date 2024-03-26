import { HashLink } from "react-router-hash-link";
import "./hashLinkBox.scss";

type HashLinkBoxProps = {
  hashLinkBox: { linkTo: string; text: string }[];
  containerTitle?: string;
  id?: string;
};

const HashLinkBox = ({ hashLinkBox, containerTitle, id }: HashLinkBoxProps) => {
  return (
    <>
      <div id={id} className="hashLinkContainer-title">
        <h1>{containerTitle}</h1>
      </div>
      <div className="hashLinkContainer">
        {hashLinkBox.map((hlb) => {
          return (
            <HashLink to={`${hlb.linkTo}`} smooth>
              <div className="hashLinkBox">
                <h3>{hlb.text}</h3>
              </div>
            </HashLink>
          );
        })}
      </div>
    </>
  );
};

export default HashLinkBox;
