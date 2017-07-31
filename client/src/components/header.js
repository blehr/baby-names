import React from 'react';

const headerStyle = {
  width: "100%",
  textAlign: "center",
  fontFamily: 'Mountains of Christmas',
  fontSize: "28px",
  paddingBottom: "8px"
}

const Header = props => {
  return (
    <header style={headerStyle} >
      <h1 style={{margin: "0"}} >Popular Baby Names</h1><br />
      <span>1880 - 2016</span>
    </header>
  );
};

export default Header;