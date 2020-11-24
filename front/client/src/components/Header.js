import React from "react";

const Header = ({ children }) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#000018" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/aaa">
            Share Tech
          </a>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">{children}</ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
