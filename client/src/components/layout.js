import React from 'react';
import Header from "./header";

const siteWrapper = {
  paddingLeft: "8px",
  paddingRight: "8px"
}

const Layout = props => {
  return (
    <div style={siteWrapper} >
      <Header />
      { props.children }
    </div>
  );
};

export default Layout;