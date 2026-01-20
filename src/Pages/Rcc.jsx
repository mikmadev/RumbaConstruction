import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Rcc = () => {
    return (
        <section className="py-5 bg-white mt-5">
            <div className="container py-4">
                <div className="row g-5">

                    {/* --- Left Column: Main Content --- */}
                    <div className="col-lg-8">
                        <h3 className="fw-bold mb-4" style={{ color: '#001A7E' }}>
                            Construction (RCC & Steel Structure)
                        </h3>

                        {/* Main Image Placeholder */}
                        <div className="rounded-4 overflow-hidden mb-4 shadow-sm border">
                            <img
                                src="https://i.pinimg.com/736x/4a/f1/a9/4af1a985d2c8271599233b612e301238.jpg" // EMPTY IMG SRC
                                alt="Construction Site"
                                className="w-100 img-fluid"
                                style={{ minHeight: '400px', backgroundColor: '#f0f0f0' }}
                            />
                        </div>

                        {/* Description Content Placeholder */}
                        <div className="text-muted lh-lg">
                            <p>
                                Construction is the ultimate phase where the design values and details take a tangible form. Our expert team of civil engineers and workforce provides premium construction service, making use of the right materials with the right technology and working as per the scheduled design and timeline. It is believed choosing the right people is the half work done already.

                                There are lots of challenges and obstacles one could find going through the construction phase, like confusion regarding materials quality and competitive prices in the market, unskilled manpower and overheads due to them, using the right amount of ratio in the concrete mix, use of additional chemicals, setting time for formwork,  and other technical aspects.

                                When these factors are not taken into account lot of problems could arise during and later construction as well.  To mitigate any errors and work as your team, we from Jadan Construction Group hope to provide excellent service and less hassle in your daily routine promising a better home and a strong future.
                            </p>
                            {/* <p>
                
              </p> */}
                        </div>
                    </div>

                    {/* --- Right Column: More Services Sidebar --- */}
                    <div className="col-lg-4">
                        <div className="sticky-top" style={{ top: '100px' }}>
                            <h5 className="fw-bold mb-4 border-bottom pb-2">More Services</h5>

                            <div className="d-grid gap-3">
                                {/* Service Card 1: Renovation */}
                                <Link to="/rd" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <motion.div
                                        whileHover={{ x: 10, backgroundColor: '#f8faff' }}
                                        className="p-2 rounded-3 border shadow-sm d-flex align-items-center gap-3 bg-white"
                                        style={{ cursor: 'pointer', transition: '0.3s' }}
                                    >
                                        <div className="overflow-hidden rounded-2" style={{ width: '80px', height: '60px' }}>
                                            <img src="https://i.pinimg.com/736x/2f/df/0f/2fdf0fc42c31f04b72147c428a97b241.jpg" alt="Renovation" className="w-100 h-100 object-fit-cover bg-light" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0 fw-bold small">Renovation</h6>
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
                                        <img src="https://i.pinimg.com/736x/4a/f1/a9/4af1a985d2c8271599233b612e301238.jpg" alt="Construction" className="w-100 h-100 object-fit-cover bg-secondary" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <h6 className="mb-0 fw-bold small">Construction (RCC & Steel Structure)</h6>
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
    );
};

export default Rcc;