import React from "react";
import Style from "./Style.css"

const Header = () => {
  return (
    <>
      <header className="header">
        <img src="http://i.imgflip.com/1bij.jpg" className="header--image" />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React Course - Project 3</h4>
      </header>
    </>
  );
};

export default Header;