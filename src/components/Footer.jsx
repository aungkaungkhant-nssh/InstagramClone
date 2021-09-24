import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className="footer">
            <Link to="/createPost">
                <div className="footer__box">
                    <h6>What's on your mind?</h6>
                </div>
            </Link>
            
        </div>
    )
}

export default Footer
