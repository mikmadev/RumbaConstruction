import React from 'react'
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Exterior() {
  return (
    <>
     <section className="py-5 bg-white mt-5">
      <div className="container py-4">
        <div className="row g-5">
          
          {/* --- Left Column: Main Content --- */}
          <div className="col-lg-8">
            <h3 className="fw-bold mb-4" style={{ color: '#001A7E' }}>
              Exterior / Interior Designs
            </h3>
            
            {/* Main Image Placeholder */}
            <div className="rounded-4 overflow-hidden mb-4 shadow-sm border">
              <img 
                src="https://i.pinimg.com/1200x/06/77/29/0677294bb8976762e149ff1b32823799.jpg" // EMPTY IMG SRC
                alt="Construction Site" 
                className="w-100 img-fluid"
                style={{ minHeight: '400px', backgroundColor: '#f0f0f0' }} 
              />
            </div>

            {/* Description Content Placeholder */}
       <div className="lh-lg" style={{ color: '#666', fontSize: '0.95rem', textAlign: 'justify' }}>
          <p className="mb-3">
           We listen to your needs and expectations of a home, commercial complex, hotels and other building structure you want, and our team of architects prepare drafts and concepts to meet them. With an abundance of meeting hours, we try to follow your dream concept and give it a REAL FORM. From the basics of floor planning to permits and approval from the concerned authority, we provide smooth and timely service.
          </p>
          
          

          <h3 className="fw-bold mb-3" style={{ color: '#333' }}>Design Process</h3>
          
          {/* Bullet Points Section */}
          <div className="ps-3 mb-4">
            <div className="mb-3">
              <span className="fw-bold text-dark">1. Site visit / Land measurement</span> 
            </div>
            <div className="mb-3">
              <span className="fw-bold text-dark">2. Requirements discussion</span>
            </div>
            <div className="mb-3">
              <span className="fw-bold text-dark">3. Floor planning (Conceptual ) -2D</span>
            </div>
            <div className="mb-3">
              <span className="fw-bold text-dark">4. Exterior elevation/facade – 3D</span>
            </div>
            <div className="mb-3">
              <span className="fw-bold text-dark">5. Architectural detail drawings</span>
            </div>
            <div className="mb-3">
              <span className="fw-bold text-dark">6. Structural analysis (Software based) / Detail drawings</span>
            </div>
            <div className="mb-3">
              <span className="fw-bold text-dark">7.  Budgeting and estimation</span>
            </div>
            <div className="mb-3">
              <span className="fw-bold text-dark">8. Documentation and Permit Processing</span>
            </div>
          </div>

         
        </div>
          </div>

          {/* --- Right Column: More Services Sidebar --- */}
          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: '100px' }}>
              <h5 className="fw-bold mb-4 border-bottom pb-2">More Services</h5>
              
              <div className="d-grid gap-3">
                {/* Service Card 1: Renovation */}
                <Link to="/rcc"style={{ textDecoration: 'none', color: 'inherit' }} >
                <motion.div 
                  whileHover={{ x: 10, backgroundColor: '#f8faff' }}
                  className="p-2 rounded-3 border shadow-sm d-flex align-items-center gap-3 bg-white"
                  style={{ cursor: 'pointer', transition: '0.3s' }}
                >
                  <div className="overflow-hidden rounded-2" style={{ width: '80px', height: '60px' }}>
                    <img src="https://i.pinimg.com/736x/4a/f1/a9/4af1a985d2c8271599233b612e301238.jpg" alt="Renovation" className="w-100 h-100 object-fit-cover bg-light" />
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mb-0 fw-bold small">Construction (RCC & Steel Structure)</h6>
                  </div>
                  <ChevronRight size={18} className="text-muted" />
                </motion.div>
                </Link>

                {/* Service Card 2: Designs */}
                 <Link to="/rd"style={{ textDecoration: 'none', color: 'inherit' }} >
                <motion.div 
                  whileHover={{ x: 10, backgroundColor: '#f8faff' }}
                  className="p-2 rounded-3 border shadow-sm d-flex align-items-center gap-3 bg-white"
                  style={{ cursor: 'pointer', transition: '0.3s' }}
                >
                  <div className="overflow-hidden rounded-2" style={{ width: '80px', height: '60px' }}>
                    <img src="https://i.pinimg.com/736x/2f/df/0f/2fdf0fc42c31f04b72147c428a97b241.jpg" alt="Designs" className="w-100 h-100 object-fit-cover bg-light" />
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mb-0 fw-bold small">Renovation</h6>
                  </div>
                  <ChevronRight size={18} className="text-muted" />
                </motion.div>
                </Link>

                {/* Service Card 3: Construction (Active State) */}
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="p-2 rounded-3 border shadow-sm d-flex align-items-center gap-3"
                  style={{ cursor: 'pointer', backgroundColor: '#001A7E', color: 'white' }}
                >
                  <div className="overflow-hidden rounded-2" style={{ width: '80px', height: '60px' }}>
                    <img src="https://i.pinimg.com/1200x/06/77/29/0677294bb8976762e149ff1b32823799.jpg" alt="Construction" className="w-100 h-100 object-fit-cover bg-secondary" />
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mb-0 fw-bold small">Exterior / Interior Designs</h6>
                  </div>
                  <ChevronRight size={18} className="text-white-50" />
                </motion.div>
              </div>

              {/* Contact Card Shortcut */}
             
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Exterior
