import React from 'react';
import '../../app.scss'

const Slidebar = ({ navMenu, toggleNav }) => {
  return <div className={navMenu ? 'isOpen slidebar' : 'slidebar'} navMenu={navMenu} onClick={toggleNav} >
    <i id="menuIcon" onClick={toggleNav} className="uil uil-bars"></i>
    <nav class="nav">
      <ul>
        <li><a href="https://patakiistvan.netlify.app">Home</a></li>
      </ul>
      <ul>
        <li><a href="https://patakiistvan.netlify.app">About me</a></li>
      </ul>
      <ul>
        <li><a href="https://patakiistvan.netlify.app"> Projects</a></li>
      </ul>
      <ul>
        <li><a href="https://patakiistvan.netlify.app">Technical skills</a></li>
      </ul>
      <ul>
        <li><a href="https://patakiistvan.netlify.app">Contact</a></li>
      </ul>
    </nav>
    <i className="menuIcon uil uil-bars"></i>
  </div >;
};

export default Slidebar;
