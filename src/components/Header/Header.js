import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <ul>
            <li><Link to="/">Scanner</Link></li>
            <li><Link to="/generator">Generator</Link></li>
            <li><Link to="/audit">Audit Log</Link></li>
        </ul>
    </header>
  )
}

export default Header