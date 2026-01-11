import React from 'react';

function AboutUs() {
  return (
    <div style={{ paddingTop: '100px' }} className="bg-light">
      {/* SECTION 1: Who We Are */}
      <section className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h6 className="text-warning fw-bold text-uppercase mb-3" style={{ letterSpacing: '2px' }}>
              Quality. Safety. Integrity.
            </h6>
            <h1 className="fw-bold mb-4 display-5" style={{ color: '#202c3c' }}>
              Leading the Way in Civil Construction
            </h1>
            <p className="lead text-muted mb-4">
              Jadan Construction Group is a family-owned and operated company based in Sydney, 
              specialising in civil construction and infrastructure projects.
            </p>
            <p className="text-secondary mb-4">
              With decades of combined experience, we have built a reputation for delivering 
              high-quality workmanship and reliable service. Our commitment to safety and 
              environmental standards makes us a preferred partner for major infrastructure works.
            </p>
            <div className="border-start border-warning border-4 ps-4 my-4">
              <em className="text-dark fw-medium">
                "Our mission is to provide efficient construction solutions while maintaining 
                the highest standards of safety and professionalism."
              </em>
            </div>
          </div>
          <div className="col-lg-6">
           <div className="container">
            <img className='w-100' src="https://www.jadanconstructiongroup.com/assets/about.png" alt="" />
           </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Core Values (Cards) */}
      <section className="bg-white py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Core Values</h2>
            <div className="bg-warning mx-auto" style={{ height: '3px', width: '60px' }}></div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <h4 className="fw-bold text-warning mb-3">Safety</h4>
                <p className="text-muted small">
                  Safety is at the heart of everything we do. We ensure a safe working 
                  environment for our team, clients, and the community.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <h4 className="fw-bold text-warning mb-3">Quality</h4>
                <p className="text-muted small">
                  We take pride in our workmanship. Every project is executed with precision 
                  and adherence to the highest industry standards.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <h4 className="fw-bold text-warning mb-3">Integrity</h4>
                <p className="text-muted small">
                  We believe in honest communication and transparent business practices, 
                  building long-term relationships based on trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;