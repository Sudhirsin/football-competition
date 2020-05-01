import React from "react";
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer class='footer'>
      <div class='footer-inner d-flex justify-content-center'>
        <ul>
          <li>
            <Link className="text-white">Contact FootBall</Link>
          </li>
          <li>
            <Link className="text-white">Privacy & cookies</Link>
          </li>
          <li>
            <Link className="text-white">Terms of use</Link>
          </li>
          <li>
            <Link className="text-white">&copy; FootBall 2020</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
