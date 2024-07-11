import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
        <div className="footer">
            <div className="footer-container">

              <div className="footer-block">
                  <ul>
                    <li className='li-weight' >Product</li>
                    <li>Website Templates</li>
                    <li>Website Builder</li>
                    <li>Website Design</li>
                    <li>Wix Features</li>
                    <li>App Market</li>
                    <li>Web Hosting</li>
                    <li>Website Accessibility</li>
                    <li>Mobile App Builder</li>
                  </ul>
              </div>

              <div className="footer-block">
                  <ul>
                    <li className='li-weight' >Solutions</li>
                    <li>Wix Blog</li>
                    <li>Online Booking</li>
                    <li>Restaurant Website</li>
                    <li>Blog Website</li>
                    <li>Portfolio Website</li>
                    <li>eCommerce Website</li>
                    <li>Enterprise Solutions</li>
                    <li>Student Website</li>
                    <li>Professional Tools</li>
                    <li>Logo Maker</li>
                  </ul>
              </div>

              <div className="footer-block">
                  <ul>
                    <li className='li-weight' >Learn</li>
                    <li>Wix Blog</li>
                    <li>Privacy and Security Hub</li>
                    <li>SEO Learning Hub</li>
                    <li>Wix Encyclopedia</li>
                  </ul>
              </div>

              <div className="footer-block">
                  <ul>
                    <li className='li-weight' >Support</li>
                    <li>Help Center</li>
                    <li>Hire a Professional</li>
                    <li>Report Abuse </li>
                    <li>Report Abuse</li>
                  </ul>
              </div>

              <div className="footer-block">
                  <ul>
                    <li className='li-weight' >Company</li>
                    <li>Help Center</li>
                    <li>Hire a Professional</li>
                    <li>Report Abuse </li>
                    <li>Accessibility Statement</li>
                    <li>Patent Notice</li>
                    <li>Sitemap</li>
                    <li>Careers</li>
                  </ul>
              </div>

              <div className="footer-block-end">
                  <img src="./imgs/Cobify 3.jpg" />
                  <p>The Wix website builder offers a complete solution from enterprise-grade infrastructure and business features to advanced SEO and marketing tools–enabling anyone to create and grow online.</p>
                  <h3>About</h3>
                  <h3>Contact Us</h3>
              </div>

            </div>
        </div>

<div className="footer-container-end">
        <div className="footer-end">
            <div className="footer-right">
              <FaInstagram />
              <FaYoutube />
              <FaFacebook />
              <FaTiktok />
              <FaLinkedin />
              <FaTwitter />
            </div>
            <div className="footer-left">
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
              <p>© 2006-2024 Wix.com, Inc</p>
            </div>
        </div>
</div>
    </>
  )
}

export default Footer