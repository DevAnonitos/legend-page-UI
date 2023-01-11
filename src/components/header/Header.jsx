import React from 'react';
import "./header.scss";

import { logo } from "../../assets/images";

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

          <ul className='header__nav antialiased text-zinc-200'>
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