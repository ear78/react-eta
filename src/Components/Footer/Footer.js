import React from "react";

import "./Footer.css";

const footer = (props) => {
    return (
      <footer className="Footer">
          <div className="Footer-line"></div>
          <div className="Social-icons">
              <a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook-f" aria-hidden="true"></i></a>
              <a href=""><i className="fa fa-tree" aria-hidden="true"></i></a>
              <a href="https://www.plus.google.com" target="_blank"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
              <a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>
          </div>
          <p>Designed & Built By: Elliot Richardson</p>
      </footer>
    );
}

export default footer;
