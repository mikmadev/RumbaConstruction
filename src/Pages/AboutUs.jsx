import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Target, Eye, ShieldCheck, Award } from 'lucide-react';

const AboutUs = () => {
  // Animation settings for simplicity
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white">
      {/* 1. Page Header */}
      <section className="py-5" style={{ backgroundColor: '#001A7E' }}>
        <div className="container py-4 text-center text-white">
          <motion.h1 {...fadeIn} className="fw-bold display-4">About <span style={{ color: '#f39c12' }}>Larkyung</span></motion.h1>
          <div className="mx-auto mt-2" style={{ width: '50px', height: '3px', background: '#f39c12' }}></div>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <motion.div {...fadeIn}>
                <h2 className="fw-bold mb-4" style={{ color: '#001A7E' }}>Our Story & Specialization</h2>
                <p className="text-muted lh-lg">
                  The area of specialization of <strong>Larkyung Construction</strong> in Kathmandu is managing and overseeing construction projects. The trusting relationships we've fostered with our clients serve as the cornerstone of our reputation. 
                </p>
                <p className="text-muted lh-lg">
                  From project planning to completion, we provide top-notch, cost-effective service. All our projects are built with **earthquake resistance** in mind, adhering strictly to engineering standards and ethics.
                </p>
                <div className="mt-4 p-3 border-start border-4 border-warning bg-light">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <Mail size={18} className="text-primary" /> <span className="small fw-bold">info@larkyung.com</span>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <Phone size={18} className="text-primary" /> <span className="small fw-bold">01-5900441</span>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div {...fadeIn} className="rounded-4 overflow-hidden shadow-lg">
                 {/* Khali image thau - src afai halnu */}
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1470&auto=format&fit=crop" alt="Construction" className="w-100" style={{ height: '400px', objectFit: 'cover' }} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision (Simple Two-Column) */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <motion.div {...fadeIn} className="p-4 bg-white rounded-4 shadow-sm h-100 border-top border-4 border-primary">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-subtle rounded-3 text-primary"><Target size={24} /></div>
                  <h3 className="fw-bold m-0 h4">Our Mission</h3>
                </div>
                <ul className="list-unstyled text-muted small lh-lg">
                  <li className="mb-2">● To become the leading construction company in Nepal.</li>
                  <li className="mb-2">● Completing value-added projects on schedule and at the highest standard.</li>
                  <li>● Launching environment-friendly designs and supporting adaptation.</li>
                </ul>
              </motion.div>
            </div>
            <div className="col-md-6">
              <motion.div {...fadeIn} className="p-4 bg-white rounded-4 shadow-sm h-100 border-top border-4 border-warning">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="p-2 bg-warning-subtle rounded-3 text-warning"><Eye size={24} /></div>
                  <h3 className="fw-bold m-0 h4">Our Vision</h3>
                </div>
                <ul className="list-unstyled text-muted small lh-lg">
                  <li className="mb-2">● Growth of infrastructure in residential and commercial sectors.</li>
                  <li className="mb-2">● Advancing as the most professional and trustworthy company in Nepal.</li>
                  <li>● Providing outstanding value and creative construction solutions.</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Team Message (Clean Layout) */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: '#001A7E' }}>Leadership Messages</h2>
          </div>
          <div className="row g-4">
            {/* MD Message */}
            <div className="col-lg-6">
              <motion.div {...fadeIn} className="p-4 border rounded-4 bg-white">
                <h5 className="fw-bold mb-1">Mr. Sushil Kumar Karki</h5>
                <span className="text-primary small fw-bold text-uppercase">Managing Director</span>
                <p className="mt-3 text-muted small italic">
                  "At Larkyung, we understand that meeting our customer's requirement with optimum safety is essential. Our leadership is a result of our employees' enthusiastic contribution."
                </p>
              </motion.div>
            </div>
            {/* Executive Message */}
            <div className="col-lg-6">
              <motion.div {...fadeIn} className="p-4 border rounded-4 bg-white">
                <h5 className="fw-bold mb-1">Mr. Simon Maharjan</h5>
                <span className="text-warning small fw-bold text-uppercase">Executive Director</span>
                <p className="mt-3 text-muted small">
                  "We strive for mutual benefit with our suppliers and create a better working environment for our staff with fair treatment and teamwork."
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Team Grid (Simplified) */}
      <section className="py-5 position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f8faff 0%, #ffffff 100%)' }}>
  {/* Background Decorative Circles */}
  <div className="position-absolute top-0 start-0 translate-middle opacity-25" style={{ width: '300px', height: '300px', borderRadius: '50%', border: '2px solid #001A7E' }}></div>
  
  <div className="container position-relative">
    <div className="text-center mb-5">
      <motion.h2 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="fw-bold display-5 mb-3" style={{ color: '#001A7E' }}
      >
        The Expert <span style={{ color: '#f39c12' }}>Team</span>
      </motion.h2>
      <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
        Meet the backbone of Larkyung — a powerhouse of technical expertise and creative brilliance.
      </p>
    </div>

    <div className="row g-4 justify-content-center">
      {/* Skill Card 1 */}
      <div className="col-lg-2 col-md-4 col-6">
        <motion.div 
          whileHover={{ y: -15, scale: 1.05 }}
          className="p-4 text-center rounded-4 shadow-sm bg-white h-100 border-bottom border-4 border-primary"
        >
          <div className="mb-3 text-primary"><i className="bi bi-buildings-fill fs-1"></i></div>
          <h6 className="fw-bold mb-0">Civil Engineers</h6>
        </motion.div>
      </div>

      {/* Skill Card 2 */}
      <div className="col-lg-2 col-md-4 col-6">
        <motion.div 
          whileHover={{ y: -15, scale: 1.05 }}
          className="p-4 text-center rounded-4 shadow-sm bg-white h-100 border-bottom border-4 border-warning"
        >
          <div className="mb-3 text-warning"><i className="bi bi-pencil-ruler fs-1"></i></div>
          <h6 className="fw-bold mb-0">Architects</h6>
        </motion.div>
      </div>

      {/* Skill Card 3 */}
      <div className="col-lg-2 col-md-4 col-6">
        <motion.div 
          whileHover={{ y: -15, scale: 1.05 }}
          className="p-4 text-center rounded-4 shadow-sm bg-white h-100 border-bottom border-4 border-primary"
        >
          <div className="mb-3 text-primary"><i className="bi bi-palette-fill fs-1"></i></div>
          <h6 className="fw-bold mb-0">Graphic Designers</h6>
        </motion.div>
      </div>

      {/* Skill Card 4 */}
      <div className="col-lg-2 col-md-4 col-6">
        <motion.div 
          whileHover={{ y: -15, scale: 1.05 }}
          className="p-4 text-center rounded-4 shadow-sm bg-white h-100 border-bottom border-4 border-warning"
        >
          <div className="mb-3 text-warning"><i className="bi bi-eye-fill fs-1"></i></div>
          <h6 className="fw-bold mb-0">Supervisors</h6>
        </motion.div>
      </div>

      {/* Skill Card 5 */}
      <div className="col-lg-2 col-md-4 col-6">
        <motion.div 
          whileHover={{ y: -15, scale: 1.05 }}
          className="p-4 text-center rounded-4 shadow-sm bg-white h-100 border-bottom border-4 border-primary"
        >
          <div className="mb-3 text-primary"><i className="bi bi-lightning-charge-fill fs-1"></i></div>
          <h6 className="fw-bold mb-0">Electricians</h6>
        </motion.div>
      </div>

      {/* Skill Card 6 */}
      <div className="col-lg-2 col-md-4 col-6">
        <motion.div 
          whileHover={{ y: -15, scale: 1.05 }}
          className="p-4 text-center rounded-4 shadow-sm bg-white h-100 border-bottom border-4 border-warning"
        >
          <div className="mb-3 text-warning"><i className="bi bi-droplet-fill fs-1"></i></div>
          <h6 className="fw-bold mb-0">Plumbers</h6>
        </motion.div>
      </div>
    </div>

    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mt-5 text-center"
    >
      <p className="text-muted fst-italic shadow-sm d-inline-block p-3 rounded-pill bg-white border">
        "With combined technological expertise, we deliver quality results without compromising integrity".
      </p>
    </motion.div>
  </div>
</section>
    </div>
  );
};

export default AboutUs;