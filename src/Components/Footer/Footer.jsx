import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import fbLogo from "../../images/fb.png";
import googleLogo from "../../images/google.png";

const Footer = () => {
  return (
    <footer className="Footer pt-24 pb-12">
      <div className="container mx-auto flex justify-between">
        <div>
          <h3 className="text-cyan-500 text-md mb-3"> Online's Portal</h3>
          <ul>
            <li>
              <NavLink to="/">a.support@gmail.com</NavLink>
            </li>
            <li>
              <NavLink to="/">a.support@gmail.com</NavLink>
            </li>
            <li>
              <NavLink to="/">a.support@gmail.com</NavLink>
            </li>
            <li>
              <NavLink to="/">a.support@gmail.com</NavLink>
            </li>
            <li>
              <NavLink to="/">a.support@gmail.com</NavLink>
            </li>
            <li>
              <NavLink to="/">Emergency</NavLink>
            </li>
            <li>
              <NavLink to="/">Tooth Extentions</NavLink>
            </li>
            <li>
              <NavLink to="/">CheckUp</NavLink>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-cyan-500 text-md mb-3"> Online's Portal</h3>
          <ul>
            <li>
              <NavLink to="/">a.support@gmail.com</NavLink>
            </li>
            <li>
              <NavLink to="/">a.support@gmail.com</NavLink>
            </li>
            <li>
              <NavLink to="/">a.support@gmail.com</NavLink>
            </li>
            <li>
              <NavLink to="/">a.support@gmail.com</NavLink>
            </li>
            <li>
              <NavLink to="/">a.support@gmail.com</NavLink>
            </li>
            <li>
              <NavLink to="/">Emergency</NavLink>
            </li>
            <li>
              <NavLink to="/">Tooth Extentions</NavLink>
            </li>
            <li>
              <NavLink to="/">CheckUp</NavLink>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-cyan-500 text-md mb-3"> Online's Portal</h3>
          <ul>
            <li>
              <NavLink to="/">a.support@gmail.com</NavLink>
            </li>
            <li>
              <NavLink to="/">a.support@gmail.com</NavLink>
            </li>
            <li>
              <NavLink to="/">a.support@gmail.com</NavLink>
            </li>
            <li>
              <NavLink to="/">a.support@gmail.com</NavLink>
            </li>
            <li>
              <NavLink to="/">a.support@gmail.com</NavLink>
            </li>
            <li>
              <NavLink to="/">Emergency</NavLink>
            </li>
            <li>
              <NavLink to="/">Tooth Extentions</NavLink>
            </li>
            <li>
              <NavLink to="/">CheckUp</NavLink>
            </li>
          </ul>
        </div>
        
        <div>
          <h3>Our Address:</h3>
          <ul>
            <li className="cursor-default">
              <p className="cursor-default">House-1, Road 6, Dhaka 1205</p>
            </li>
            <li>
              <NavLink to="/">View in Map</NavLink>
            </li>
            <li className="flex mt-4">
              <NavLink to="/">
                <img className="w-10" src={fbLogo} alt="" />
              </NavLink>
              <NavLink to="/">
                <img src={googleLogo} className="w-10 mx-4" alt="" />
              </NavLink>
              <NavLink to="/">
                <img src={googleLogo} className="w-10 " alt="" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12">
        <p className='text-center text-gray-500'>© 2022 Developed by Muhammad Wakiullah </p>
      </div>
    </footer>
  );
};
export default Footer;
