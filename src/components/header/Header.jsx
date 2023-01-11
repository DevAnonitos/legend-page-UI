import React from 'react';
import "./header.scss";

import { logo } from "../../assets/images";

import Login from '../button/Login/Login';

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='header__inner container'>
          <div className='header__logo'>
            <img 
              src={logo} alt="logo"

            />
          </div>

          <ul className='header__nav antialiased'>
            <li>
              <a href="#">
                overview
              </a>
            </li>
            <li>
              <a href="#">
                news
              </a>
            </li>
            <li>
              <a href="#">
                champions
              </a>
            </li>
            <li>
              <a href="#">
                support
              </a>
            </li>
          </ul>

        </div>
      </div>
    </>
  )
}

export default Header