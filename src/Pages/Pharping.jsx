import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import Poutimg from '../assets/Poutimg.jpg';

const Pharping = () => {
  return (
    <section className="bg-white min-vh-100 mt-5">
      {/* --- Top Banner Section --- */}
      <div 
        className="position-relative py-5 text-white d-flex align-items-end" 
        style={{ 
          minHeight: '400px', 
          backgroundColor: '#333',
          // Backticks use garnu `${variable}` ko lagi
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${Poutimg})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Pharping Residence</h1>
          <div className="d-flex flex-wrap gap-4 small opacity-90 fw-semibold">
            <span className="d-flex align-items-center gap-2">
              <User size={18} color="#f39c12" /> Client: Private Residential Owner
            </span>
            <span className="d-flex align-items-center gap-2">
              <MapPin size={18} color="#f39c12" /> Location: Dakshinkali Municipality
            </span>
            <span className="d-flex align-items-center gap-2">
              <Calendar size={18} color="#f39c12" /> Date: January 2026
            </span>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-5">
          
          {/* --- Left Column: Main Project Image --- */}
          <div className="col-lg-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-0 shadow-lg overflow-hidden border"
            >
              <img 
                src={Poutimg} // EMPTY SRC - Path halnu assets bata
                alt="Pharping Residence Perspective" 
                className="w-100 h-100 object-fit-cover"
                style={{ minHeight: '650px', backgroundColor: '#f8f9fa' }}
              />
            </motion.div>
          </div>

          {/* --- Right Column: Project Details & Amenities --- */}
          <div className="col-lg-5">
            <div className="ps-lg-4">
              {/* Table Style Details */}
              <div className="mb-5">
                <h5 className="fw-bold mb-4" style={{ color: '#001A7E', borderBottom: '2px solid #001A7E', display: 'inline-block' }}>
                  Project Details
                </h5>
                <div className="d-grid gap-1">
                  {[
                    { label: 'Client', value: 'Private Residential Owner' },
                    { label: 'Location', value: 'Dakshinkali Municipality' },
                    { label: 'Land Area', value: '0-12-0-0' },
                    { label: 'Land Size', value: "98' X 42'" },
                    { label: 'Road Access', value: 'East' }
                  ].map((detail, idx) => (
                    <div key={idx} className="d-flex justify-content-between py-3 border-bottom border-light">
                      <span className="text-muted small fw-bold">{detail.label}</span>
                      <span className="small text-dark fw-medium">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities Card */}
              <div className="p-4 rounded-4 shadow-sm border bg-white border-top border-4 border-primary">
                <h5 className="fw-bold mb-4" style={{ color: '#001A7E' }}>Amenities</h5>
                <ul className="list-unstyled d-grid gap-3">
                  {[
                    'Ground floor – Rental 2BHK',
                    'First floor – Living Room, Kitchenette, Master Bedroom -2, WC',
                    'Second floor – Master Bedroom -1, Kitchen Dining, Puja Room, WC, Covered Sitout',
                    'Top floor – Staircase cover, Laundry / Store'
                  ].map((amenity, idx) => (
                    <li key={idx} className="d-flex gap-3 small align-items-start">
                      <CheckCircle2 size={16} className="text-primary mt-1" />
                      <span className="text-secondary">{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pharping;