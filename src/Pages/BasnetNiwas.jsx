import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Maximize, Ruler, Navigation } from 'lucide-react';
import Houtimg from '../assets/outimg.jpg';

const BasnetNiwas = () => {
  return (
    <section className="bg-white min-vh-100">
      {/* --- Top Banner Section --- */}
      <div 
        className="position-relative py-5 text-white d-flex align-items-end" 
        style={{ 
          minHeight: '400px', 
          backgroundColor: '#333',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Houtimg})`, // EMPTY IMAGE
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Basnet Niwas</h1>
          <div className="d-flex flex-wrap gap-4 small opacity-90">
            <span className="d-flex align-items-center gap-2"><User size={18} color="#f39c12" /> Client: Private Residential Owner</span>
            <span className="d-flex align-items-center gap-2"><MapPin size={18} color="#f39c12" /> Location: Dakshinkali Municipality</span>
            <span className="d-flex align-items-center gap-2"><Calendar size={18} color="#f39c12" /> Date: January 2026</span>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-5">
          
          {/* --- Left Column: Main Image --- */}
          <div className="col-lg-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-0 shadow-lg overflow-hidden border"
            >
              <img 
                src={Houtimg} // EMPTY IMAGE
                alt="Basnet Niwas Perspective" 
                className="w-100 h-100 object-fit-cover"
                style={{ minHeight: '600px', backgroundColor: '#f8f9fa' }}
              />
            </motion.div>
          </div>

          {/* --- Right Column: Project Details & Amenities --- */}
          <div className="col-lg-5">
            <div className="ps-lg-4">
              <div className="mb-5">
                <h5 className="fw-bold mb-3 d-inline-block" style={{ color: '#001A7E', borderBottom: '2px solid #001A7E' }}>
                  Project Details
                </h5>
                <div className="mt-4 d-grid gap-3">
                  <div className="d-flex justify-content-between py-2 border-bottom border-light">
                    <span className="text-muted small fw-bold">Client</span>
                    <span className="small">Private Residential Owner</span>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom border-light">
                    <span className="text-muted small fw-bold">Location</span>
                    <span className="small text-end">Dakshinkali Municipality</span>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom border-light">
                    <span className="text-muted small fw-bold">Land Area</span>
                    <span className="small">0-12-0-0</span>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom border-light">
                    <span className="text-muted small fw-bold">Land Size</span>
                    <span className="small">98' X 42'</span>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom border-light">
                    <span className="text-muted small fw-bold">Road Access</span>
                    <span className="small">East</span>
                  </div>
                </div>
              </div>

              {/* Amenities Box */}
              <div className="p-4 rounded-4 shadow-sm border bg-white">
                <h5 className="fw-bold mb-4 d-inline-block" style={{ color: '#001A7E', borderBottom: '2px solid #001A7E' }}>
                  Amenities
                </h5>
                <ul className="list-unstyled d-grid gap-3 mt-2">
                  <li className="d-flex gap-3 small lh-base">
                    <div className="text-primary mt-1">•</div>
                    <div><strong>Ground floor</strong> – Rental 2BHK</div>
                  </li>
                  <li className="d-flex gap-3 small lh-base">
                    <div className="text-primary mt-1">•</div>
                    <div><strong>First floor</strong> – Living Room, Kitchenette, Master Bedroom - 2, WC</div>
                  </li>
                  <li className="d-flex gap-3 small lh-base">
                    <div className="text-primary mt-1">•</div>
                    <div><strong>Second floor</strong> – Master Bedroom - 1, Kitchen Dining, Puja Room, WC, Covered Sitout</div>
                  </li>
                  <li className="d-flex gap-3 small lh-base">
                    <div className="text-primary mt-1">•</div>
                    <div><strong>Top floor</strong> – Staircase cover, Laundry / Store</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BasnetNiwas;