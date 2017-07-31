import React from 'react';
import Header from "./header";
import Footer from "./footer";

const siteWrapper = {
  paddingLeft: "8px",
  paddingRight: "8px",
  height: "100%"
}

const Layout = props => {
  return (
    <div style={siteWrapper} >
      <Header />
      { props.children }
      <Footer />
    </div>
  );
};

export default Layout;