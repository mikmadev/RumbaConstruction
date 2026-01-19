import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function Services() {
  return (
  <>
   <section className="py-5 bg-light">
                <div className="container py-4">
                    {/* Section Header */}
                    <div className="text-center mb-5">
                        <h2 className="fw-bold" style={{ color: '#001A7E' }}>
                            Our Quality <span style={{ color: '#f39c12' }}>Services</span>
                        </h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
                            Discover our comprehensive range of construction and development services
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="row g-4">

                        {/* 1. Construction Card */}
                        <div className="col-lg-4 col-md-6">
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-4 overflow-hidden h-100 shadow-sm border-0"
                            >
                                <img
                                    src="https://i.pinimg.com/736x/4a/f1/a9/4af1a985d2c8271599233b612e301238.jpg"
                                    alt="Construction"
                                    className="w-100"
                                    style={{ height: '250px', objectFit: 'cover' }}
                                />
                                <div className="p-4">
                                    <h5 className="fw-bold mb-3" style={{ color: '#333' }}>Construction (RCC & Steel Structure)</h5>
                                    <p className="small text-muted mb-4" style={{ lineHeight: '1.6' }}>
                                        Construction is the ultimate phase where the design values and details take ...
                                    </p>
                                    <Link
                                        to="/services"
                                        className="text-decoration-none fw-bold d-inline-flex align-items-center gap-2 transition-all read-more-btn"
                                        style={{ color: '#0056D2' }}
                                    >
                                        Read More
                                        <motion.span
                                            variants={{
                                                initial: { x: 0 },
                                                hover: { x: 5 } // Hover garda icon 5px right slide hunchha
                                            }}
                                            transition={{ type: 'spring', stiffness: 400 }}
                                        >
                                            <ArrowRight size={18} />
                                        </motion.span>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>

                        {/* 2. Renovation Card */}
                        <div className="col-lg-4 col-md-6">
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-4 overflow-hidden h-100 shadow-sm border-0"
                            >
                                <img
                                    src="https://i.pinimg.com/736x/2f/df/0f/2fdf0fc42c31f04b72147c428a97b241.jpg"
                                    alt="Renovation"
                                    className="w-100"
                                    style={{ height: '250px', objectFit: 'cover' }}
                                />
                                <div className="p-4">
                                    <h5 className="fw-bold mb-3" style={{ color: '#333' }}>Renovation</h5>
                                    <p className="small text-muted mb-4" style={{ lineHeight: '1.6' }}>
                                        Welcome to <span style={{ color: '#f39c12' }}>Larkyung Construction Group</span>, your trusted source for professional renovation ...
                                    </p>
                                    <Link
                                        to="/services"
                                        className="text-decoration-none fw-bold d-inline-flex align-items-center gap-2 transition-all read-more-btn"
                                        style={{ color: '#0056D2' }}
                                    >
                                        Read More
                                        <motion.span
                                            variants={{
                                                initial: { x: 0 },
                                                hover: { x: 5 } // Hover garda icon 5px right slide hunchha
                                            }}
                                            transition={{ type: 'spring', stiffness: 400 }}
                                        >
                                            <ArrowRight size={18} />
                                        </motion.span>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>

                        {/* 3. Exterior/Interior Designs Card */}
                        <div className="col-lg-4 col-md-6">
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-4 overflow-hidden h-100 shadow-sm border-0"
                            >
                                <img
                                    src="https://i.pinimg.com/1200x/06/77/29/0677294bb8976762e149ff1b32823799.jpg"
                                    alt="Interior Design"
                                    className="w-100"
                                    style={{ height: '250px', objectFit: 'cover' }}
                                />
                                <div className="p-4">
                                    <h5 className="fw-bold mb-3" style={{ color: '#333' }}>Exterior / Interior Designs</h5>
                                    <p className="small text-muted mb-4" style={{ lineHeight: '1.6' }}>
                                        We listen to your needs and <strong>expectations of a home</strong>, commercial complex, hotels ...
                                    </p>
                                    <Link
                                        to="/services"
                                        className="text-decoration-none fw-bold d-inline-flex align-items-center gap-2 transition-all read-more-btn"
                                        style={{ color: '#0056D2' }}
                                    >
                                        Read More
                                        <motion.span
                                            variants={{
                                                initial: { x: 0 },
                                                hover: { x: 5 } // Hover garda icon 5px right slide hunchha
                                            }}
                                            transition={{ type: 'spring', stiffness: 400 }}
                                        >
                                            <ArrowRight size={18} />
                                        </motion.span>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>
  </>
  )
}

export default Services
