import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-3 ps-3">
      <Link to={"/"}>
        <img
          style={{ maxWidth: "150px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        />
      </Link>
    </header>
  );
};

export default Header;
