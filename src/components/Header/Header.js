import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <ul>
            <li><Link to="/">Scanner</Link></li>
            <li><Link to="/cafeteria">Cafeteria QR</Link></li>
            <li><Link to="/meeting">Meeting QR</Link></li>
            <li><Link to="/basketball">Basketball QR</Link></li>
            <li><Link to="/videogame">VideoGame QR</Link></li>
            <li><Link to="/audit">Audit Log</Link></li>

        </ul>
    </header>
  )
}

export default Header