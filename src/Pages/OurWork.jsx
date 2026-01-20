import React from 'react'
import { motion,  } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Houtimg from '../assets/outimg.jpg';
import Toutimg from '../assets/Toutimg.jpg';
import Poutimg from '../assets/Poutimg.jpg';

function OurWork() {
  return (
    <>
    <section className="py-5 bg-white">
                {/* Header Section */}
                <div className="container text-center mb-5">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Badge Style from Reference Image */}
                        <div className="d-inline-block px-4 py-1 rounded-pill mb-3" style={{ background: 'rgba(0, 86, 210, 0.05)', border: '1px solid rgba(0, 86, 210, 0.1)' }}>
                            <p className="text-uppercase fw-bold small m-0" style={{ color: '#f39c12', letterSpacing: '2px' }}>
                                — OUR PORTFOLIO —
                            </p>
                        </div>

                        <h2 className="fw-bold mb-3" style={{ color: '#001A7E' }}>
                            Featured <span style={{ color: '#f39c12' }}>Gallery</span>
                        </h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: '600px', fontSize: '0.9rem' }}>
                            Discover our exceptional construction projects and success stories
                        </p>
                    </motion.div>
                </div>

                {/* Slider Section */}
                <div className="container position-relative px-md-5">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={25}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2000 }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-5 portfolio-swiper"
                    >
                        {/* Slide 1 - Interior */}
                        <SwiperSlide>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="rounded-4 overflow-hidden shadow-sm border bg-white position-relative"
                                style={{ cursor: 'pointer' }}
                            >
                                {/* Main Image */}
                                <img
                                    src={Houtimg}
                                    className="w-100"
                                    style={{ height: '350px', objectFit: 'cover', display: 'block' }}
                                    alt="Interior Design"
                                />

                                {/* Blue Hover Overlay */}
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center"
                                    style={{
                                        background: 'linear-gradient(rgba(0, 86, 210, 0.7), rgba(0, 30, 100, 0.8))',
                                        opacity: 0,
                                        transition: 'opacity 0.4s ease',
                                        zIndex: 2
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                                    onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                                >
                                    {/* Title from Reference */}
                                    <h4 className="text-white fw-bold mb-3">Basnet Niwas</h4>

                                    {/* Button from Reference */}
                                    <Link to="/BN">
                                    <button
                                        className="btn btn-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2"
                                        style={{ backgroundColor: '#0056D2', border: 'none', fontWeight: 'bold' }}
                                    >
                                        View Details <i className="bi bi-images"></i>
                                    </button>
                                    </Link>
                                </div>
                            </motion.div>
                            
                        </SwiperSlide>

                        {/* Slide 2 - Construction Underway */}

                        <SwiperSlide>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="rounded-4 overflow-hidden shadow-sm border bg-white position-relative"
                                style={{ cursor: 'pointer' }}
                            >
                                {/* Main Image */}
                                <img
                                    src={Toutimg}
                                    className="w-100"
                                    style={{ height: '350px', objectFit: 'cover', display: 'block' }}
                                    alt="Interior Design"
                                />

                                {/* Blue Hover Overlay */}
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center"
                                    style={{
                                        background: 'linear-gradient(rgba(0, 86, 210, 0.7), rgba(0, 30, 100, 0.8))',
                                        opacity: 0,
                                        transition: 'opacity 0.4s ease',
                                        zIndex: 2
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                                    onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                                >
                                    {/* Title from Reference */}
                                    <h4 className="text-white fw-bold mb-3">Tokha-Bungalow</h4>

                                    {/* Button from Reference */}
                                    <Link to="/TB">
                                    <button
                                        className="btn btn-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2"
                                        style={{ backgroundColor: '#0056D2', border: 'none', fontWeight: 'bold' }}
                                    >
                                        View Details <i className="bi bi-images"></i>
                                    </button>
                                    </Link>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                        {/* Slide 3 - Completed Villa */}
                        <SwiperSlide>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="rounded-4 overflow-hidden shadow-sm border bg-white position-relative"
                                style={{ cursor: 'pointer' }}
                            >
                                {/* Main Image */}
                                <img
                                    src={Poutimg}
                                    className="w-100"
                                    style={{ height: '350px', objectFit: 'cover', display: 'block' }}
                                    alt="Interior Design"
                                />

                                {/* Blue Hover Overlay */}
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center"
                                    style={{
                                        background: 'linear-gradient(rgba(0, 86, 210, 0.7), rgba(0, 30, 100, 0.8))',
                                        opacity: 0,
                                        transition: 'opacity 0.4s ease',
                                        zIndex: 2
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                                    onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                                >
                                    {/* Title from Reference */}
                                    <h4 className="text-white fw-bold mb-3">Pharping Residence</h4>

                                    {/* Button from Reference */}
                                    <Link to="/P">
                                    <button
                                        className="btn btn-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2"
                                        style={{ backgroundColor: '#0056D2', border: 'none', fontWeight: 'bold' }}
                                    >
                                        View Details <i className="bi bi-images"></i>
                                    </button>
                                    </Link>
                                </div>
                            </motion.div>
                        </SwiperSlide>


                    </Swiper>
                </div>

                {/* Action Button */}
                <div className="text-center mt-4">
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: '#0046b8' }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary rounded-pill px-5 py-3 fw-bold d-inline-flex align-items-center gap-2 border-0 shadow"
                        style={{ backgroundColor: '#0056D2' }}
                    >
                        SEE MORE <ArrowRight size={20} />
                    </motion.button>
                </div>

                {/* Custom Styles to match Reference Image exactly */}
                <style dangerouslySetInnerHTML={{
                    __html: `
        .portfolio-swiper .swiper-button-next, 
        .portfolio-swiper .swiper-button-prev {
          background-color: #0056D2;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          color: white !important;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: 0.3s;
        }
        .portfolio-swiper .swiper-button-next:after, 
        .portfolio-swiper .swiper-button-prev:after {
          font-size: 16px !important;
          font-weight: 900;
        }
        .portfolio-swiper .swiper-button-next:hover, 
        .portfolio-swiper .swiper-button-prev:hover {
          background-color: #f39c12;
          transform: scale(1.1);
        }
        .portfolio-swiper .swiper-pagination-bullet-active {
          background: #0056D2 !important;
          width: 25px;
          border-radius: 5px;
        }
      `}} />
            </section>
    </>
  )
}

export default OurWork
