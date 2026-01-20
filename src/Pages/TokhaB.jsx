import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import Toutimg from '../assets/Toutimg.jpg';

const TokhaB = () => {
  return (
    <section className="bg-white min-vh-100">
      {/* --- Top Banner Section --- */}
      <div 
        className="position-relative py-5 text-white d-flex align-items-end" 
        style={{ 
          minHeight: '400px', 
          backgroundColor: '#333',
          // Backticks use karela che variable mate
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Toutimg})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Tokha Residence - B</h1>
          <div className="d-flex flex-wrap gap-4 small opacity-90">
            <span className="d-flex align-items-center gap-2"><User size={18} color="#f39c12" /> Client: Private Owner</span>
            <span className="d-flex align-items-center gap-2"><MapPin size={18} color="#f39c12" /> Location: Tokha, Kathmandu</span>
            <span className="d-flex align-items-center gap-2"><Calendar size={18} color="#f39c12" /> Date: Jan 2026</span>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-5">
          
          {/* --- Left Column: Main Perspective Image --- */}
          <div className="col-lg-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-0 shadow-lg overflow-hidden border"
            >
              <img 
                src={Toutimg} // EMPTY IMG SRC
                alt="Tokha Residence Perspective" 
                className="w-100 h-100 object-fit-cover"
                style={{ minHeight: '600px', backgroundColor: '#f8f9fa' }}
              />
            </motion.div>
          </div>

          {/* --- Right Column: Project Details & Amenities --- */}
          <div className="col-lg-5">
            <div className="ps-lg-4">
              <div className="mb-5">
                <h5 className="fw-bold mb-4 d-inline-block" style={{ color: '#001A7E', borderBottom: '2px solid #f39c12' }}>
                  Project Specifications
                </h5>
                <div className="d-grid gap-3">
                  <div className="d-flex justify-content-between py-2 border-bottom border-light">
                    <span className="text-muted small fw-bold">Client</span>
                    <span className="small">Private Client</span>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom border-light">
                    <span className="text-muted small fw-bold">Location</span>
                    <span className="small text-end">Tokha Municipality</span>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom border-light">
                    <span className="text-muted small fw-bold">Built-up Area</span>
                    <span className="small">2850 Sq. Ft.</span>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom border-light">
                    <span className="text-muted small fw-bold">Status</span>
                    <span className="small">Under Construction</span>
                  </div>
                </div>
              </div>

              {/* Floor Wise Details / Amenities */}
              <div className="p-4 rounded-4 shadow-sm border bg-white">
                <h5 className="fw-bold mb-4 d-inline-block" style={{ color: '#001A7E', borderBottom: '2px solid #f39c12' }}>
                  Floor Amenities
                </h5>
                <ul className="list-unstyled d-grid gap-3 mt-2">
                  <li className="d-flex gap-3 small lh-base">
                    <CheckCircle2 size={18} className="text-warning mt-1" />
                    <div><strong>Ground Floor</strong> – Parking, Guest Room, Kitchen & Living</div>
                  </li>
                  <li className="d-flex gap-3 small lh-base">
                    <CheckCircle2 size={18} className="text-warning mt-1" />
                    <div><strong>First Floor</strong> – 3 Bedrooms with Attached Bathrooms</div>
                  </li>
                  <li className="d-flex gap-3 small lh-base">
                    <CheckCircle2 size={18} className="text-warning mt-1" />
                    <div><strong>Second Floor</strong> – Puja Room, Laundry, Open Terrace</div>
                  </li>
                  <li className="d-flex gap-3 small lh-base">
                    <CheckCircle2 size={18} className="text-warning mt-1" />
                    <div><strong>Top Roof</strong> – Solar Panels & Water Tank Access</div>
                  </li>
                </ul>
              </div>

              {/* Extra Message Box */}
              <div className="mt-4 p-3 rounded-3 bg-light border-start border-4 border-warning">
                <p className="small mb-0 text-muted italic">
                  * Note: Design details are subject to client approval and structural variations.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TokhaB;