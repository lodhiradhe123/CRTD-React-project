// src/components/Footer.js
import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-column">
            <div className="icon11"></div>
          <h2> Hiremi</h2>
          <p>+1-234-567-890</p>
          <p>info@hiremi.com</p>
        </div>
        <div className="footer-column">
          <h3>For Individuals</h3>
          <p>Job Opportunities</p>
          <p>Applicant Monitoring Services</p>
          <p>Mentorship</p>
        </div>
        <div className="footer-column">
          <h3>For Business</h3>
          <p>Recruiting Outsourcing</p>
          <p>Project Oversight</p>
        </div>
        <div className="footer-column">
          <h3>For College</h3>
          <p>Recruitment Drive Services</p>
          <p>Educational Talks</p>
          <p>Guest Lectures</p>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <p>Contact us</p>
          <p>Privecy Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div className="footer-column">
          <h3>Help</h3>
          <p>Recrutement Drive and Services</p>
          <p>Educational Talks and Guest Lectures</p>
        </div>
      </footer>
      <div className="last">
        <h3>copy right @ 2023 hiremi</h3>
        <div className="icon">
          <FaInstagram />
          <FaLinkedin />
          <IoMdMail />
        </div>
      </div>
    </div>
  );
};

export default Footer;
