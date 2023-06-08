import React from "react";
import hamburger from "../assets/hamburger.svg";
import msicon from "../assets/msicon.svg";
import searchicon from "../assets/searchicon.svg";
import angledown from "../assets/angledown.png";
import signmore from "../assets/signmore.svg";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="azure-header-main">
        <div className="azure-header">
          <div className="text-hamburger">
            <div className="hamburger">
              <img src={hamburger} />
            </div>
            <div className="text-azure">
              <a href="#">Azure</a>
            </div>
          </div>
          <div className="microsoft-icon">
            <img src={msicon} />
          </div>
          <div className="search-text">
            <div className="search-icon">
              <img src={searchicon} />
            </div>
            <div className="text-sign">
              <a href="#">Sign In</a>
            </div>
          </div>
        </div>
        <div className="azure-header-tablet">
          <nav className="nav-header">
            <div className="azure-logo-tab">
              <div className="azure-icon">
                <img src={msicon} />
              </div>
              <div className="azure-text">
                <a href="#">Azure</a>
              </div>
            </div>
            <ul className="list-items">
              <li>
                <div className="text-angle">
                  <a href="#">Explore</a>
                  <img src={angledown} />
                </div>
                <div className="text-angle">
                  <a href="#">Products</a>
                  <img src={angledown} />
                </div>
                <div className="text-angle">
                  <a href="#">Solutions</a>
                  <img src={angledown} />
                </div>
                <div className="text-angle">
                  <a href="#">Pricing</a>
                  <img src={angledown} />
                </div>
                <div className="text-angle">
                  <a href="#">Partners</a>
                  <img src={angledown} />
                </div>
                <div className="text-angle">
                  <a href="#">Resources</a>
                  <img src={angledown} />
                </div>
              </li>
            </ul>
          </nav>
          <div className="sign">
            <div className="search-icon-tablet">
              <img src={searchicon} />
            </div>
            {/* <div className="signin-main"> */}
            <div className="sign-more">
              <img src={signmore} />
            </div>
            <div className="sign-text">
              <a href="#">Sign In</a>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="right-nav">
          <div className="search-field">
            <form>
              <input type="text" placeholder="Search" />
              <img src={searchicon} />
            </form>
          </div>
          <div class="right-navbar">
            <ul class="right-navbar-ul">
              <li class="learn">
                <a href="">Learn </a>
              </li>
              <li class="support">
                <a href="">Support</a>
              </li>
              <li class="contact-sale">
                <a href="">Contact Sales</a>
              </li>
              <li>
                <a href="" class="button">
                  Free account
                </a>
              </li>
              <li class="sign-in-down">
                <a href="" class="laptop-signin">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
