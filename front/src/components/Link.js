import React from "react";

const Link = ({ links }) => {
  const onClick = (event) => {
    event.preventDefault();

    window.history.pushState({}, "", event.target.getAttribute("href"));
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  const link = links.map(({ linkName, href }) => {
    return (
      <li key={linkName} className="nav-item">
        <a onClick={onClick} className="navbar-brand" href={href}>
          {linkName}
        </a>
      </li>
    );
  });
  return <ul className="navbar-nav ml-auto mt-1">{link}</ul>;
};

export default Link;
