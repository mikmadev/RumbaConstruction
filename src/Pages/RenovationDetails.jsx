import React from 'react'
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function RenovationDetails() {
    return (
        <>
            <section className="py-5 bg-white mt-5">
                <div className="container py-4">
                    <div className="row g-5">

                        {/* --- Left Column: Main Content --- */}
                        <div className="col-lg-8">
                            <h3 className="fw-bold mb-4" style={{ color: '#001A7E' }}>
                                Renovation
                            </h3>

                            {/* Main Image Placeholder */}
                            <div className="rounded-4 overflow-hidden mb-4 shadow-sm border">
                                <img
                                    src="https://i.pinimg.com/736x/2f/df/0f/2fdf0fc42c31f04b72147c428a97b241.jpg" // EMPTY IMG SRC
                                    alt="Construction Site"
                                    className="w-100 img-fluid"
                                    style={{ minHeight: '400px', backgroundColor: '#f0f0f0' }}
                                />
                            </div>

                            {/* Description Content Placeholder */}
                            <div className="lh-lg" style={{ color: '#666', fontSize: '0.95rem', textAlign: 'justify' }}>
                                <p className="mb-3">
                                    Welcome to <span className="fw-bold" style={{ color: '#f39c12' }}>Larkyung Construction Group</span>,
                                    your trusted source for professional renovation services. Our team of experts has extensive experience
                                    in transforming homes and businesses into beautiful, functional spaces. We are dedicated to providing
                                    our clients with top-quality workmanship and excellent customer service at competitive prices.
                                </p>

                                <p className="mb-4">
                                    Whether you are looking to renovate your kitchen, bathroom, living room, or any other area of your home,
                                    we have the skills and expertise to bring your vision to life. We take pride in our attention to detail
                                    and ability to complete projects on time and within budget.
                                </p>

                                <h6 className="fw-bold mb-3" style={{ color: '#333' }}>Our renovation services include:</h6>

                                {/* Bullet Points Section */}
                                <div className="ps-3 mb-4">
                                    <div className="mb-3">
                                        <span className="fw-bold text-dark">1. Kitchen Renovation:</span> Upgrade your kitchen with new countertops, cabinets, lighting, and more. We can create a functional and stylish kitchen that meets all your needs.
                                    </div>
                                    <div className="mb-3">
                                        <span className="fw-bold text-dark">2. Bathroom Renovation:</span> Transform your bathroom into a relaxing spa-like retreat. Choose from a range of options, including new fixtures, tiles, and lighting, to create your dream bathroom.
                                    </div>
                                    <div className="mb-3">
                                        <span className="fw-bold text-dark">3. Living Room Renovation:</span> Give your living room a fresh look and feel with new flooring, lighting, and furniture. We can help you create a warm and inviting space for your family and guests.
                                    </div>
                                    <div className="mb-3">
                                        <span className="fw-bold text-dark">4. Home Additions:</span> Increase your living space with a home addition. Our team can help you design and build the perfect addition to meet your specific needs.
                                    </div>
                                </div>

                                <p className="mb-3">
                                    In addition to our renovation services, we also offer home remodelling, custom carpentry, and project
                                    management services. Our team of professionals works closely with each client to ensure their complete
                                    satisfaction with the final result.
                                </p>

                                <p>
                                    At <span className="fw-bold" style={{ color: '#f39c12' }}>Larkyung Construction Group</span>, we understand
                                    that your home is a significant investment, and we take pride in providing the highest quality workmanship
                                    and customer service to each of our clients.
                                </p>
                            </div>
                        </div>

                        {/* --- Right Column: More Services Sidebar --- */}
                        <div className="col-lg-4">
                            <div className="sticky-top" style={{ top: '100px' }}>
                                <h5 className="fw-bold mb-4 border-bottom pb-2">More Services</h5>

                                <div className="d-grid gap-3">
                                    {/* Service Card 1: Renovation */}
                                    <Link to="/rcc" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                                    <Link to="/exterior" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <motion.div
                                            whileHover={{ x: 10, backgroundColor: '#f8faff' }}
                                            className="p-2 rounded-3 border shadow-sm d-flex align-items-center gap-3 bg-white"
                                            style={{ cursor: 'pointer', transition: '0.3s' }}
                                        >
                                            <div className="overflow-hidden rounded-2" style={{ width: '80px', height: '60px' }}>
                                                <img src="https://i.pinimg.com/1200x/06/77/29/0677294bb8976762e149ff1b32823799.jpg" alt="Designs" className="w-100 h-100 object-fit-cover bg-light" />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0 fw-bold small">Exterior / Interior Designs</h6>
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
                                            <img src="https://i.pinimg.com/736x/2f/df/0f/2fdf0fc42c31f04b72147c428a97b241.jpg" alt="Construction" className="w-100 h-100 object-fit-cover bg-secondary" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0 fw-bold small">Renovation</h6>
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

export default RenovationDetails
