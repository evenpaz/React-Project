import { Link } from "react-router-dom";

type ButtonMailtoProps = {
  mailto: string;
  label: string;
};

const ButtonMailto = ({ mailto, label }: ButtonMailtoProps) => {
  return (
    <Link
      to=""
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default ButtonMailto;
