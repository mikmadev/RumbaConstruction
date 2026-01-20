import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
// ConstructionUnderwayPhotos array lai import gareko
import { ConstructionUnderwayPhotos } from '../Comp/Data'; 

const ConstructionUnderway = () => {
  // 1. Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Euta page ma 8 ota photo dekhine

  // 2. Modal (Lightbox) State
  const [selectedImg, setSelectedImg] = useState(null);

  // Logic for Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ConstructionUnderwayPhotos.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(ConstructionUnderwayPhotos.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="py-5 bg-white mt-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#001A7E' }}>Construction <span style={{ color: '#f39c12' }}>Underway</span></h2>
          <div className="mx-auto mt-2" style={{ width: '50px', height: '3px', background: '#f39c12' }}></div>
        </div>

        {/* --- Image Grid Mapping ConstructionUnderwayPhotos --- */}
        <div className="row g-4">
          {currentItems.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImg(item.image)} // Photo click garda modal khulcha
                className="rounded-4 overflow-hidden shadow-sm border"
                style={{ cursor: 'pointer', height: '250px' }}
              >
                <img 
                  src={item.image} 
                  alt={`Construction Underway ${item.id}`} 
                  className="w-100 h-100" 
                  style={{ objectFit: 'cover' }} 
                />
              </motion.div>
            </div>
          ))}
        </div>

        {/* --- Pagination UI --- */}
        <div className="d-flex justify-content-center mt-5">
          <nav>
            <ul className="pagination shadow-sm rounded-3 overflow-hidden">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link border-0 py-3 px-4" onClick={() => paginate(currentPage - 1)}>
                  <ChevronLeft size={18} />
                </button>
              </li>
              
              {[...Array(totalPages)].map((_, i) => (
                <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                  <button 
                    onClick={() => paginate(i + 1)} 
                    className="page-link border-0 py-3 px-4 fw-bold"
                    style={{ 
                      backgroundColor: currentPage === i + 1 ? '#0d6efd' : 'white',
                      color: currentPage === i + 1 ? 'white' : '#0d6efd'
                    }}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}

              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link border-0 py-3 px-4" onClick={() => paginate(currentPage + 1)}>
                  <ChevronRight size={18} />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* --- Lightbox Modal (Click garepachi khulne thulo image) --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999, padding: '20px' }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.div 
              initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }}
              className="position-relative bg-white p-2 rounded-4 shadow-lg overflow-hidden"
              style={{ maxWidth: '900px', width: '100%' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImg(null)}
                className="btn btn-dark rounded-circle position-absolute top-0 end-0 m-3 shadow-lg"
                style={{ zIndex: 10, width: '40px', height: '40px', padding: 0 }}
              >
                <X size={24} />
              </button>
              
              <img src={selectedImg} className="img-fluid rounded-3 w-100" alt="Construction Preview" />
              
              <div className="p-3 text-center border-top mt-2">
                <button className="btn btn-secondary px-4 fw-bold" onClick={() => setSelectedImg(null)}>Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ConstructionUnderway;