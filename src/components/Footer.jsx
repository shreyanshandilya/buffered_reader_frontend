import React from 'react'
import { Link } from 'react-router-dom';
import '../css/footer.css'
import 'https://kit.fontawesome.com/3acc7f1241.js';

export default function Footer() {
  return (
   <>
   <footer className="footer" id="Footer">
        <div className="container2">
          <div className="row">
            <div className="footer-col">
              <h4>Buffered Reader</h4>
              <ul className="ff">
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/">Our Aim</Link></li>
                <li><Link to="/">privacy policy</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Get Help</h4>
              <ul className="ff">
                <li><Link to="/">Suggestions</Link></li>
                <li><Link to="/">Enquire</Link></li>
                <li><Link to="/">Contact Us</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Our Merchandise</h4>
              <ul className="ff">
                {/* <li><Link to="/">Cap</Link></li> */}
                {/* <li><Link to="/">Bag</Link></li> */}
                <li><Link to="/">Hoodies</Link></li>
                <li><Link to="/">T-shirts</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <ul className="ff">
                  <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                  <Link to="/"><i className="fab fa-twitter"></i></Link>
                  <Link to="/"><i className="fab fa-instagram"></i></Link>
                  <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
   </>
  )
}
