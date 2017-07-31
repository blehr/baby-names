import React from 'react';

const headerStyle = {
  width: "100%",
  height: "150px",
  textAlign: "center",
  fontFamily: 'Roboto',
}

const Header = props => {
  return (
    <header style={headerStyle} >
      <h1>Popular Baby Names</h1>
      <h3>1880 - 2016</h3>
    </header>
  );
};

export default Header;