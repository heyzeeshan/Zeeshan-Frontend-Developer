import React from 'react'
import { Link } from "react-router-dom"

import './Footer.css'

const MenuBar = () => {
    return (
        <footer >
            <div className="footer bg-blue-500">
                <ul>
                    <li><Link to="/#">Home</Link></li>
                    <li><Link to="/#">About Us</Link></li>
                    <li><Link to="/#">Contact Us</Link></li>
                </ul>

                <ul className="social">
                    <li>
                        <a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com"><i className="fa fa-youtube"></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com"><i className="fa fa-linkedin"></i></a>
                    </li>
                </ul>

                <p>&copy; Zeeshan. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default MenuBar;