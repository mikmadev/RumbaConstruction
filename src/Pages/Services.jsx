import React from 'react';

function Services() {
  const sewa = [
    {
      id: 1,
      head: "Civil Construction",
      info: "Specialising in road works, drainage, and infrastructure development with high precision.",
      img: "https://www.jadanconstructiongroup.com/uploads/gallery/album/202301201349_3-min.jpg"
    },
    {
      id: 2,
      head: "Excavation & Earthworks",
      info: "Comprehensive bulk excavation and detailed earthworks for residential and commercial projects.",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFzcC16dQUCU1rBRcU4pdm3SDEBxGhPyBcSaUOdkAK5MzdSylDnSPkhKmCZg99G6Fo_Q2NEK_yYfLgRZLn0NxGEJex-x8hlHUjBUG9EFy7mxlydXU4M6I_6WCMFgLxliuydwA6CyigewE/s1600/2-+Earthwork+Excavation+01.jpg"
    },
    {
      id: 3,
      head: "Concreting Works",
      info: "High-quality concrete structures, footways, and kerb and gutter construction.",
      img: "https://www.civilengineermag.com/wp-content/uploads/2024/12/concrete-works.jpg"
    },
    {
      id: 3,
      head: "Project Management",
      info: "End-to-end project management ensuring safety, quality, and timely delivery.",
      img: "https://www.contractcomplete.com/wp-content/uploads/2024/02/AdobeStock_333094597-1024x683.jpeg"
    },
    {
      id: 4,
      head: "Plant & Equipment Hire",
      info: "Providing a range of modern and well-maintained machinery for various construction needs.",
      img: "https://www.mymobileworkers.com/wp-content/uploads/2024/09/Plant-Hire-2-1024x683.jpeg"
    },
    {
      id: 5,
      head: "Site Preparation",
      info: "Professional site clearing and preparation to ensure a solid foundation for your project.",
      img: "https://verdeterrecontracting.com/wp-content/uploads/2025/02/site-preparation-contractors-1080x675.jpg"
    }
  ];

  return (
    <div className="bg-white pt-5 mt-5">
      <section className="container py-5 text-center">
        <h6 className="text-warning fw-bold text-uppercase">
          OUR WORK
        </h6>
        <h1 className="fw-bold display-5 mb-4 text-dark">
          Our Professional Services
        </h1>
        <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
          Jadan Construction Group provides a wide range of civil construction services across Sydney.
        </p>
      </section>

      <section className="container pb-5">
        <div className="row g-4">
          {sewa.map((s) => (
            <div className="col-lg-4 col-md-6" key={s.id}>
              <div className="card h-100 border-0 shadow-sm overflow-hidden">
                <div style={{ height: '220px' }}>
                  <img
                    src={s.img}
                    alt={s.head}
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>

                <div className="card-body p-4 text-center">
                  <h4 className="fw-bold mb-3">{s.head}</h4>
                  <p className="text-secondary small mb-0">
                    {s.info}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-dark text-white py-5 mt-4">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="fw-bold">Need a custom construction solution?</h2>
              <p className="text-light mb-0">Contact our expert team today.</p>
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