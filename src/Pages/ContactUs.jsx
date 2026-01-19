import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, RefreshCw } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="bg-white py-5">
      <div className="container py-4">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#001A7E' }}>Get In Touch</h2>
          <div className="mx-auto my-3" style={{ width: '40px', height: '3px', background: '#001A7E' }}></div>
          <p className="text-muted small mx-auto" style={{ maxWidth: '500px' }}>
            We're here to help with all your construction and building needs. Contact us today to discuss your project.
          </p>
        </div>

        <div className="row g-4">
          {/* Left Column: Contact Information */}
          <div className="col-lg-4">
            <div className="p-4 rounded-4 shadow-sm border h-100 bg-white">
              <h5 className="fw-bold mb-4" style={{ fontSize: '1.1rem' }}>Contact Information</h5>
              
              <div className="d-grid gap-4">
                {/* Phone */}
                <div className="d-flex align-items-center gap-3 p-3 rounded-4" style={{ background: '#f8faff' }}>
                  <div className="rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '45px', height: '45px', background: '#e1e8ff', color: '#001A7E' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="small fw-bold">Phone Number</div>
                    <div className="small text-muted">+977 9802338588, 01-5900441</div>
                  </div>
                </div>

                {/* Email */}
                <div className="d-flex align-items-center gap-3 p-3 rounded-4" style={{ background: '#f8faff' }}>
                  <div className="rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '45px', height: '45px', background: '#e1e8ff', color: '#001A7E' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="small fw-bold">Email Address</div>
                    <div className="small text-muted">info@larkyungconstruction.com</div>
                  </div>
                </div>

                {/* Office */}
                <div className="d-flex align-items-center gap-3 p-3 rounded-4" style={{ background: '#f8faff' }}>
                  <div className="rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '45px', height: '45px', background: '#e1e8ff', color: '#001A7E' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="small fw-bold">Office Address</div>
                    <div className="small text-muted">Gokarna Atterkhel, Kathmandu, Nepal</div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="d-flex align-items-center gap-3 p-3 rounded-4" style={{ background: '#f8faff' }}>
                  <div className="rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '45px', height: '45px', background: '#e1e8ff', color: '#001A7E' }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="small fw-bold">Working Hours</div>
                    <div className="small text-muted">Sunday - Friday: 10:00 AM - 5:30 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="col-lg-8">
            <div className="p-4 p-md-5 rounded-4 shadow-sm border bg-white">
              <div className="d-flex align-items-center gap-3 mb-4">
                <h5 className="fw-bold mb-0">Send Us A Message</h5>
                <div style={{ width: '60px', height: '3px', background: 'linear-gradient(to right, #001A7E, #f39c12)', borderRadius: '10px' }}></div>
              </div>

              <form>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="small fw-medium text-muted mb-2">Full Name</label>
                    <input type="text" className="form-control border-0 border-bottom rounded-0 px-0 shadow-none bg-transparent" placeholder="Your full name" style={{ borderBottomColor: '#001A7E !important' }} />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-medium text-muted mb-2">Phone Number</label>
                    <input type="text" className="form-control border-0 border-bottom rounded-0 px-0 shadow-none bg-transparent" placeholder="Your phone number" />
                  </div>
                  <div className="col-12">
                    <label className="small fw-medium text-muted mb-2">Email Address</label>
                    <input type="email" className="form-control border shadow-sm rounded-3 py-3 px-3" placeholder="Your email address" />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-medium text-muted mb-2">Property Location</label>
                    <input type="text" className="form-control border-0 border-bottom rounded-0 px-0 shadow-none bg-transparent" placeholder="Location of your land/building" />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-medium text-muted mb-2">Property Area</label>
                    <input type="text" className="form-control border-0 border-bottom rounded-0 px-0 shadow-none bg-transparent" placeholder="Area of your land/building" />
                  </div>
                  <div className="col-12">
                    <label className="small fw-medium text-muted mb-2">Your Message</label>
                    <textarea className="form-control border shadow-sm rounded-3 py-3" rows="4" placeholder="Tell us about your construction requirements..."></textarea>
                  </div>
                  
                  {/* Verification Section */}
                  

                  <div className="col-12 text-center mt-5">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn btn-primary w-100 py-3 rounded-3 d-flex align-items-center justify-content-center gap-2 fw-bold"
                      style={{ background: '#0D6EFD', border: 'none' }}
                    >
                      <Send size={20} /> Send Message
                    </motion.button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;