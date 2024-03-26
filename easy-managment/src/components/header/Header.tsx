import Navbar from "../navbar/Navbar";
import Separator from "../separator/Separator";
import Header_top from "../header_top/Header_top";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <Header_top />
      <Separator />
      <Navbar
        linksArr={[
          { text: "דף הבית", link: "/" },
          { text: "אודות", link: "/about-us" },
          { text: "מוצרים", link: "/products" },
          { text: "צור קשר", link: "/contacts" },
        ]}
      />
      <Separator />
    </div>
  );
};

export default Header;
