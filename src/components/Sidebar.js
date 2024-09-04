// Sidebar.js
import React from 'react';
import './Sidebar.css';
import { BsHouseDoorFill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>Logo</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <a href="#">
              <BsHouseDoorFill className="sidebar-icon" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <BsFillArchiveFill className="sidebar-icon" />
              <span>Products</span>
            </a>
          </li>
          <li>
            <a href="#">
              <BsFillGrid3X3GapFill className="sidebar-icon" />
              <span>Categories</span>
            </a>
          </li>
          <li>
            <a href="#">
              <BsPeopleFill className="sidebar-icon" />
              <span>Customers</span>
            </a>
          </li>
          <li>
            <a href="#">
              <BsFillBellFill className="sidebar-icon" />
              <span>Alerts</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
