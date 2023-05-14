import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className='footer-content'>
                    <h2>Redefine Status</h2>
                    <h3>BLOGS</h3>
                    <p>If only we could make love what people optimize for over wealth.<br></br> We can help society at large realize that is the true way to win the game of life</p>
                    <div className='social'>
                        <ul>
                            <li>
                                <i className="topIcon fab fa-facebook-square"></i>
                                <i className="topIcon fab fa-instagram-square"></i>
                                <i className="topIcon fab fa-pinterest-square"></i>
                                <i className="topIcon fab fa-twitter-square"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;