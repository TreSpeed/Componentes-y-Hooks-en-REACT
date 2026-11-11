import React from 'react';

const Header = (props) => {
  const { logo, texto } = props;
  return (
    <header>
      <div className="header-wrapper">
        <h1>Webs de Empresa</h1>
        <img src={logo} alt="la imagen del logo" />
        <p>{texto}</p>
      </div>
    </header>
  );
};

export default Header;