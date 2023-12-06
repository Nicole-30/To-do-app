import React from 'react';
import '../Components/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';






function Navbar() {
    return (
        <div>
        <ul>
            <li> <a href="/">home</a></li>
            <li><a href="/about">about</a></li>
            <li><a href="/access">access</a></li>
        </ul>
      </div>
    );
}

export default Navbar;
