import React from 'react';

function Services() {
  const serviceList = [
    {
      title: "Civil Construction",
      desc: "Specialising in road works, drainage, and infrastructure development with high precision.",
      image: "https://www.jadanconstructiongroup.com/uploads/gallery/album/202301201349_3-min.jpg"
    },
    {
      title: "Excavation & Earthworks",
      desc: "Comprehensive bulk excavation and detailed earthworks for residential and commercial projects.",
       image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFzcC16dQUCU1rBRcU4pdm3SDEBxGhPyBcSaUOdkAK5MzdSylDnSPkhKmCZg99G6Fo_Q2NEK_yYfLgRZLn0NxGEJex-x8hlHUjBUG9EFy7mxlydXU4M6I_6WCMFgLxliuydwA6CyigewE/s1600/2-+Earthwork+Excavation+01.jpg"
    },
    {
      title: "Concreting Works",
      desc: "High-quality concrete structures, footways, and kerb and gutter construction.",
       image: "https://www.civilengineermag.com/wp-content/uploads/2024/12/concrete-works.jpg"
    },
    {
      title: "Project Management",
      desc: "End-to-end project management ensuring safety, quality, and timely delivery.",
       image: "https://www.contractcomplete.com/wp-content/uploads/2024/02/AdobeStock_333094597-1024x683.jpeg"
    },
    {
      title: "Plant & Equipment Hire",
      desc: "Providing a range of modern and well-maintained machinery for various construction needs.",
       image: "https://www.mymobileworkers.com/wp-content/uploads/2024/09/Plant-Hire-2-1024x683.jpeg"
    },
    {
      title: "Site Preparation",
      desc: "Professional site clearing and preparation to ensure a solid foundation for your project.",
       image: "https://verdeterrecontracting.com/wp-content/uploads/2025/02/site-preparation-contractors-1080x675.jpg"
    }
  ];

  return (
    <div style={{ paddingTop: '100px' }} className="bg-white">
      {/* Header Section */}
      <section className="container py-5 text-center">
        <h6 className="text-warning fw-bold text-uppercase" style={{ letterSpacing: '2px' }}>
          What We Do
        </h6>
        <h1 className="fw-bold display-5 mb-4" style={{ color: '#202c3c' }}>
          Our Professional Services
        </h1>
        <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
          Jadan Construction Group provides a wide range of civil construction services across Sydney, 
          focusing on delivering excellence through experience and innovation.
        </p>
      </section>

      {/* Services Grid Section */}
      <section className="container pb-5">
        <div className="row g-4">
          {serviceList.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card h-100 border-0 shadow-sm overflow-hidden group">
                {/* Image Placeholder - Source khali chha bro */}
                <div style={{ height: '220px', backgroundColor: '#f3f3f3' }}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-100 h-100" 
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                
                <div className="card-body p-4 text-center">
                  <h4 className="fw-bold mb-3">{service.title}</h4>
                  <p className="text-secondary small mb-0">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-dark text-white py-5 mt-4">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="fw-bold">Need a custom construction solution?</h2>
              <p className="text-light mb-0">Contact our expert team today to discuss your project requirements.</p>
            </div>
            <div className="col-md-4 text-md-end mt-4 mt-md-0">
              <button className="btn btn-warning fw-bold px-5 py-3 rounded-0">
                GET A QUOTE
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;