import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Send
} from 'lucide-react';
import logo from '../assets/newlogo.png';

const Footer = () => {
  return (
    <footer className="pt-5 pb-3" style={{ backgroundColor: '#001A7E', color: 'white' }}>
      <div className="container py-4">
        <div className="row g-4">
          
          {/* 1. Brand & About Section */}
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="d-inline-block mb-4">
              <img src={logo} alt="Larkyung Logo" style={{ height: '70px' }} />
            </Link>
            <p className="text-white-50 mb-4 lh-lg" style={{ fontSize: '0.9rem' }}>
              We are a leading construction group dedicated to delivering high-quality architectural excellence and sustainable development projects.
            </p>
            <div className="d-flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -5, backgroundColor: '#f39c12' }}
                  className="rounded-circle d-flex align-items-center justify-content-center border border-white-50 text-white"
                  style={{ width: '40px', height: '40px', transition: '0.3s' }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="col-lg-2 col-md-6 px-lg-4">
            <h5 className="fw-bold mb-4 position-relative pb-2">
              Quick Links
              <span className="position-absolute start-0 bottom-0" style={{ width: '30px', height: '2px', background: '#f39c12' }}></span>
            </h5>
            <ul className="list-unstyled d-grid gap-3">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
                    className="text-white-50 text-decoration-none d-flex align-items-center gap-2 hover-link"
                  >
                    <ArrowRight size={14} className="text-warning" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Services Links */}
          <div className="col-lg-3 col-md-6 px-lg-4">
            <h5 className="fw-bold mb-4 position-relative pb-2">
              Our Services
              <span className="position-absolute start-0 bottom-0" style={{ width: '30px', height: '2px', background: '#f39c12' }}></span>
            </h5>
            <ul className="list-unstyled d-grid gap-3">
              {['Construction', 'Renovation', 'Interior Design', 'Landscaping'].map((service) => (
                <li key={service} className="text-white-50" style={{ cursor: 'pointer' }}>
                   {service}
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Info & Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-4 position-relative pb-2">
              Get In Touch
              <span className="position-absolute start-0 bottom-0" style={{ width: '30px', height: '2px', background: '#f39c12' }}></span>
            </h5>
            <div className="d-grid gap-3 mb-4">
              <div className="d-flex align-items-start gap-3 text-white-50">
                <MapPin size={20} className="text-warning" />
                <span>Gokarna Atterkhel, Kathmandu, Nepal</span>
              </div>
              <div className="d-flex align-items-center gap-3 text-white-50">
                <Phone size={20} className="text-warning" />
                <span>+977 98XXXXXXXX</span>
              </div>
              <div className="d-flex align-items-center gap-3 text-white-50">
                <Mail size={20} className="text-warning" />
                <span>info@larkyungconstruction.com</span>
              </div>
            </div>
            
            
          </div>
        </div>

        <hr className="my-5 opacity-25" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="small mb-0 text-white-50">
              © 2026 Larkyung Construction. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <p className="small mb-0 text-white-50">
              Developed By React
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .hover-link:hover {
          color: #f39c12 !important;
          transform: translateX(5px);
          transition: all 0.3s ease;
        }
        ::placeholder {
          color: rgba(255,255,255,0.4) !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;