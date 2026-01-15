import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          
          
          <div className="col-lg-4 col-md-6">
            <h3 className="fw-bold mb-3">RUMBA <span className="text-warning">GROUP</span></h3>
            <p className="text-secondary small">
              Leading the way in civil construction and infrastructure projects with a commitment to quality, safety, and integrity.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="btn btn-outline-warning btn-sm rounded-circle"><FaFacebookF /></a>
              <a href="#" className="btn btn-outline-warning btn-sm rounded-circle"><FaInstagram /></a>
              <a href="#" className="btn btn-outline-warning btn-sm rounded-circle"><FaLinkedinIn /></a>
            </div>
          </div>

          
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-secondary text-decoration-none small">Home</Link></li>
              <li className="mb-2"><Link to="/about" className="text-secondary text-decoration-none small">About Us</Link></li>
              <li className="mb-2"><Link to="/services" className="text-secondary text-decoration-none small">Services</Link></li>
              </ul>
          </div>

        

          
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <ul className="list-unstyled text-secondary small">
              <li className="mb-3 d-flex align-items-center gap-2">
                <FaMapMarkerAlt className="text-warning" />  Kathmandu, Nepal
              </li>
              <li className="mb-3 d-flex align-items-center gap-2">
                <FaPhoneAlt className="text-warning" /> 980-2338566
              </li>
              <li className="mb-3 d-flex align-items-center gap-2">
                <FaEnvelope className="text-warning" /> info@rumbaconstructiongroup.com
              </li>
            </ul>
          </div>

        </div>

        <hr className="mt-5 mb-4 border-secondary opacity-25" />
        
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="small text-secondary mb-0">
             @Rumba Construction Group. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
            <p className="small text-secondary mb-0">Designed by Mikma</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;