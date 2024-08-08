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
              <h4>Company</h4>
              <ul className="ff">
                <li><Link to="/">About us</Link></li>
                <li><Link to="/">our services</Link></li>
                <li><Link to="/">privacy policy</Link></li>
                <li><Link to="/">affiliate program</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Get Help</h4>
              <ul className="ff">
                <li><Link to="/">FAQ</Link></li>
                <li><Link to="/">Contact Us</Link></li>
                <li><Link to="/">Host Elections</Link></li>
                <li><Link to="/">Policy</Link></li>
                <li><Link to="/">Brains</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Our Merchandise</h4>
              <ul className="ff">
                <li><Link to="/">Cap</Link></li>
                <li><Link to="/">Bag</Link></li>
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
