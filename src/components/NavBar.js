import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElements = links.map((section) => {
    return <a key={section} href={`#${section}`}>{section}</a>
  })

  return (
    <nav>{linkElements}</nav>
  )
}

export default NavBar;
