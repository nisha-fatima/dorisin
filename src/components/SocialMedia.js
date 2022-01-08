import React from "react";
import { Link } from "react-router-dom";

class SocialMedia extends React.Component {
  render() {
    return (
      <section className="cta bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ul className="list-inline social margin-t-20">
                <li className="list-inline-item">
                  {" "}
                  <Link
                    to="//https://www.facebook.com/profile.php?id=100025941521934"
                    target="_blank"
                    className="social-icon"
                  >
                    <i className="mdi mdi-facebook" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  {" "}
                  <Link
                    to="//www.github.com/nisha-fatima"
                    target="_blank"
                    className="social-icon"
                  >
                    <i className="mdi mdi-github-circle" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  {" "}
                  <Link
                    to="//www.linkedin.com/in/nisha-fatima-7a122b20b/"
                    target="_blank"
                    className="social-icon"
                  >
                    <i className="mdi mdi-linkedin" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 margin-t-30">
              <p className="margin-b-0 contact-title">
                <i className="pe-7s-call" /> &nbsp;+92 3249280500
              </p>
            </div>
            <div className="col-lg-3 margin-t-30 text-right">
              <p className="contact-title">
                <i className="pe-7s-mail-open" />
                &nbsp; nisha@live.com
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default SocialMedia;
