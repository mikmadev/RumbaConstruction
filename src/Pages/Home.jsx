import React from 'react';

function Home() {
    return (
        <div style={{ paddingTop: '80px' }}>

            {/* 1. HERO SECTION: Thulo Photo bhako part */}
            <section className="bg-dark text-white py-5 d-flex align-items-center" style={{ minHeight: '80vh', backgroundColor: '#202c3c' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="display-4 fw-bold mb-3">Building Nepal's Future With Excellence</h1>
                            <p className="lead mb-4">#No. 1 Construction Company in Nepal! Trusted for residential and commercial projects.</p>

                        </div>
                        <div className="col-md-6">
                            {/* IMAGE BLANK RAKHEKO CHHU BRO */}
                            <div className="bg-secondary rounded shadow-lg" style={{ width: '100%', height: '400px' }}>
                                <img src="https://www.asanduff.com/wp-content/uploads/2020/08/rsz_construction_company.jpg" alt="Hero Image" className="w-100 h-100 rounded" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. STATS SECTION: Numbers wala part */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row text-center g-4">
                        <div className="col-md-4">
                            <div className="p-4 bg-white shadow-sm rounded">
                                <h2 className="fw-bold text-warning">100+</h2>
                                <p className="text-muted mb-0">Projects Completed</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4 bg-white shadow-sm rounded">
                                <h2 className="fw-bold text-warning">100%</h2>
                                <p className="text-muted mb-0">Client Satisfaction</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4 bg-white shadow-sm rounded">
                                <h2 className="fw-bold text-warning">25+</h2>
                                <p className="text-muted mb-0">Expert Team</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. WHY CHOOSE US: Bullet points wala part */}
            <section className="py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">Why Choose Rumba Construction?</h2>
                        <div className="bg-warning mx-auto" style={{ height: '3px', width: '80px' }}></div>
                    </div>
                    <div className="row g-4 align-items-center">
                        <div className="col-md-5">
                            <div className="bg-secondary rounded shadow-sm overflow-hidden" style={{ width: '100%', height: '350px' }}>
                                <img
                                    src="https://www.jadanconstructiongroup.com/jadan-min.jpg"
                                    alt="Why Choose Us"
                                    className="w-100 h-100"
                                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                                />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border-0 ps-0">
                                    <h5 className="fw-bold text-warning">Excellence in Delivery</h5>
                                    <p className="text-muted small">We take pride in delivering exceptional quality and craftsmanship.</p>
                                </li>
                                <li className="list-group-item border-0 ps-0">
                                    <h5 className="fw-bold text-warning">Integrity & Transparency</h5>
                                    <p className="text-muted small">We believe in honest and open communication throughout every project.</p>
                                </li>
                                <li className="list-group-item border-0 ps-0">
                                    <h5 className="fw-bold text-warning">Commitment to Safety</h5>
                                    <p className="text-muted small">Safety is our top priority for everyone involved in the site.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. BLUE BANNER: Zero Delays wala part */}
            <section className="py-4 text-white" style={{ backgroundColor: '#FFCA2C' }}>
                <div className="container">
                    <div className="row text-center g-4">
                        <div className="col-md-4 border-end border-dark">
                            <h5 className="fw-bold text-black">Zero Delays</h5>
                            <p className="small mb-0 opacity-75 text-black">Zero tolerance for project delays.</p>
                        </div>
                        <div className="col-md-4 border-end border-dark">
                            <h5 className="fw-bold text-black">Absolute Transparency</h5>
                            <p className="small mb-0 opacity-75 text-black">From detailed design to clear estimates.</p>
                        </div>
                        <div className="col-md-4">
                            <h5 className="fw-bold text-black">Assured Quality Control</h5>
                            <p className="small mb-0 opacity-75 text-black">Multi-layers of quality checks.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* --- HOW WE WORK SECTION START --- */}
            <section className="py-5 bg-light overflow-hidden">
                <div className="container position-relative">
                    <div className="text-center mb-5">
                        <h6 className="text-warning fw-bold text-uppercase">Process</h6>
                        <h2 className="fw-bold">How We <span className="text-warning">Work</span></h2>
                        <div className="bg-warning mx-auto" style={{ height: '3px', width: '60px' }}></div>
                    </div>

                    {/* Vertical Line in Middle */}
                    <div className="d-none d-md-block" style={{
                        position: 'absolute', left: '50%', width: '2px', height: '85%',
                        backgroundColor: '#dee2e6', transform: 'translateX(-50%)', zIndex: 0, marginTop: '20px'
                    }}></div>

                    {/* Step 01: Consult */}
                    <div className="row mb-5 align-items-center fade-in-up">
                        <div className="col-md-5 text-md-end order-2 order-md-1">
                            <div className="bg-white p-4 shadow-sm rounded-4 border-bottom border-warning border-3">
                                <div className="bg-light rounded mt-2 d-flex justify-content-end p-2" style={{ height: '120px' }}>
                                    <img src="https://www.jadanconstructiongroup.com/assets/How_it_works_Consult.png"
                                        alt="Consult"
                                        className="h-100 w-auto object-fit-contain" />
                                </div>
                                <h4 className="fw-bold text-dark">Consult</h4>
                                <p className="text-muted small">Meet our experts, share requirements while we analyze and submit best fit land use options.</p>

                            </div>
                        </div>
                        <div className="col-md-2 text-center order-1 order-md-2 position-relative z-1 mb-3 mb-md-0">
                            <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center fw-bold shadow" style={{ width: '50px', height: '50px', border: '5px solid white' }}>01</div>
                        </div>
                        <div className="col-md-5 order-3"></div>
                    </div>

                    {/* Step 02: Contract */}
                    <div className="row mb-5 align-items-center fade-in-up">
                        <div className="col-md-5 order-1"></div>
                        <div className="col-md-2 text-center order-2 position-relative z-1 mb-3 mb-md-0">
                            <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center fw-bold shadow" style={{ width: '50px', height: '50px', border: '5px solid white' }}>02</div>
                        </div>
                        <div className="col-md-5 order-3">
                            <div className="bg-white p-4 shadow-sm rounded-4 border-bottom border-warning border-3">
                                <div className="bg-light rounded mb-3 d-flex justify-content-start p-2" style={{ height: '120px' }}>
                                    <img
                                        src="https://www.jadanconstructiongroup.com/assets/How_it_works_Invest.png"
                                        alt="Contract"
                                        className="h-100 w-auto object-fit-contain"
                                    />
                                </div>
                                <h4 className="fw-bold text-dark">Contract</h4>
                                <p className="text-muted small">After finalizing details of design and materials, official contract will be done to move next phase.</p>

                            </div>
                        </div>
                    </div>

                    {/* Step 03: Construction */}
                    <div className="row mb-5 align-items-center fade-in-up">
                        <div className="col-md-5 text-md-end order-2 order-md-1">
                            <div className="bg-white p-4 shadow-sm rounded-4 border-bottom border-warning border-3">
                                <div className="bg-light rounded mt-2 d-flex justify-content-end p-2" style={{ height: '120px' }}>
                                    <img src="https://www.jadanconstructiongroup.com/assets/how-it-works-Build.png"
                                        alt="Consult"
                                        className="h-100 w-auto object-fit-contain" />
                                </div>
                                <h4 className="fw-bold text-dark">Construction</h4>
                                <p className="text-muted small">Construction commences while our project management team tracks and monitors your project through regular site visits.</p>

                            </div>
                        </div>
                        <div className="col-md-2 text-center order-1 order-md-2 position-relative z-1 mb-3 mb-md-0">
                            <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center fw-bold shadow" style={{ width: '50px', height: '50px', border: '5px solid white' }}>03</div>
                        </div>
                        <div className="col-md-5 order-3"></div>
                    </div>

                    {/* Step 04: Commissioning - ABA YO PANI THAPYO HAI! */}
                    <div className="row mb-5 align-items-center fade-in-up">
                        <div className="col-md-5 order-1"></div>
                        <div className="col-md-2 text-center order-2 position-relative z-1 mb-3 mb-md-0">
                            <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center fw-bold shadow" style={{ width: '50px', height: '50px', border: '5px solid white' }}>04</div>
                        </div>
                        <div className="col-md-5 order-3">
                            <div className="bg-white p-4 shadow-sm rounded-4 border-bottom border-warning border-3">
                                <div className="bg-light rounded mb-3 d-flex justify-content-start p-2" style={{ height: '120px' }}>
                                    <img
                                        src="https://www.jadanconstructiongroup.com/assets/how-it-works-Track.png"
                                        alt="Contract"
                                        className="h-100 w-auto object-fit-contain"
                                    />
                                </div>
                                <h4 className="fw-bold text-dark">Commissioning</h4>
                                <p className="text-muted small">After finish construction, we educate anyone who will use the site and rectify any issues immediately.</p>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* --- HOW WE WORK SECTION END --- */}
            {/* --- BUILDING PACKAGES SECTION START --- */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">Building <span className="text-warning">Packages</span></h2>
                        <div className="bg-warning mx-auto" style={{ height: '3px', width: '80px' }}></div>
                    </div>

                    <div className="row g-4">
                        {/* 1. Budget Friendly Package */}
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm rounded-0">
                                <div className="card-header bg-warning text-white text-center py-3 rounded-0 border-0">
                                    <h5 className="fw-bold mb-0">Budget Friendly</h5>
                                </div>
                                <ul className="list-group list-group-flush text-center">
                                    <li className="list-group-item py-3">Designs & Drawings</li>
                                    <li className="list-group-item py-3">Structure</li>
                                    <li className="list-group-item py-3">Doors and Windows</li>
                                    <li className="list-group-item py-3">Flooring</li>
                                    <li className="list-group-item py-3">Electrical</li>
                                    <li className="list-group-item py-3">Bathrooms & Plumbing</li>
                                    <li className="list-group-item py-3">Kitchen</li>
                                    <li className="list-group-item py-3">Painting</li>
                                    <li className="list-group-item py-3">Miscellaneous</li>
                                </ul>
                            </div>
                        </div>

                        {/* 2. Moderate Package */}
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm rounded-0">
                                <div className="card-header bg-warning text-white text-center py-3 rounded-0 border-0">
                                    <h5 className="fw-bold mb-0">Moderate</h5>
                                </div>
                                <ul className="list-group list-group-flush text-center">
                                    <li className="list-group-item py-3">Designs & Drawings</li>
                                    <li className="list-group-item py-3">Structure</li>
                                    <li className="list-group-item py-3">Doors and Windows</li>
                                    <li className="list-group-item py-3">Flooring</li>
                                    <li className="list-group-item py-3">Electrical</li>
                                    <li className="list-group-item py-3">Bathrooms & Plumbing</li>
                                    <li className="list-group-item py-3">Kitchen</li>
                                    <li className="list-group-item py-3">Painting</li>
                                    <li className="list-group-item py-3">Miscellaneous</li>
                                </ul>
                            </div>
                        </div>

                        {/* 3. Premium Package */}
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm rounded-0">
                                <div className="card-header bg-warning text-white text-center py-3 rounded-0 border-0">
                                    <h5 className="fw-bold mb-0">Premium</h5>
                                </div>
                                <ul className="list-group list-group-flush text-center">
                                    <li className="list-group-item py-3">Designs & Drawings</li>
                                    <li className="list-group-item py-3">Structure</li>
                                    <li className="list-group-item py-3">Doors and Windows</li>
                                    <li className="list-group-item py-3">Flooring</li>
                                    <li className="list-group-item py-3">Electrical</li>
                                    <li className="list-group-item py-3">Bathrooms & Plumbing</li>
                                    <li className="list-group-item py-3">Kitchen</li>
                                    <li className="list-group-item py-3">Painting</li>
                                    <li className="list-group-item py-3">Miscellaneous</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* --- BUILDING PACKAGES SECTION END --- */}
        </div>
    );
}

export default Home;