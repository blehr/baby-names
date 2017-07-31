import React from 'react';

const Footer = props => {
  return (
    <div style={{
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-end",
        marginTop: "15px"
      }} >
      <p>
        &copy; <a href="http://brandonlehr.com" style={{textDecoration: "none"}} >Brandon Lehr</a>
      </p>
    </div>
  );
};

export default Footer;