import React from 'react';
import { Link } from 'react-router-dom';
import { backToTop } from '../helpers';

export default function Navbar() {
  return (
    <div id="navbar">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <Link to="/" className="navbar-brand mx-auto mx-lg-0">WW</Link>
        <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse offcanvas-collapse ml-2" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto" data-toggle="offcanvas">
            <li className="nav-item">
              <Link to="/" onClick={() => backToTop()} className="nav-link" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/lore" onClick={() => backToTop()} className="nav-link">Lore</Link>
            </li>
            <li className="nav-item">
              <Link to="/characters" onClick={() => backToTop()} className="nav-link" >Characters</Link>
            </li>
            <li className="nav-item">
              <Link to="/items" onClick={() => backToTop()} className="nav-link">Items</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
