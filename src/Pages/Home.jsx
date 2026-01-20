import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import hero from '../assets/1stimg.jpg';
import { CheckCircle, Users, Handshake, ShieldCheck, HardHat, Clock, Sparkles, Settings,} from 'lucide-react';
import sec from '../assets/sechero.jpg';
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
import { ChevronDown, CheckCircle2 } from 'lucide-react';

const Home = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const stats = [
        { label: 'Projects Completed', value: '100+' },
        { label: 'Client Satisfaction', value: '100%', color: 'text-primary' },
        { label: 'Expert Team', value: '25+' }
    ];
    const [openDropdown, setOpenDropdown] = React.useState(null);

    return (
        <>

            <section className='pt-lg-5 pt-4'>
                <div className="py-5 bg-white overflow-hidden">
                    <div className="container">
                        {/* g-5 le gap maintain garchha column haru ko bich ma */}
                        <div className="row align-items-center g-5">

                            {/* Left Side: Image Section */}
                            <div className="col-lg-5 position-relative">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="rounded-4 overflow-hidden shadow-lg position-relative"
                                >
                                    <img
                                        src={hero}
                                        alt="Construction Building"
                                        className="img-fluid w-100"
                                        style={{
                                            minHeight: '550px',
                                            maxHeight: '700px', // Content bhanda dherai thulo nahoos bhanna ko lagi
                                            objectFit: 'cover'
                                        }}
                                    />

                                    {/* Excellence Badge */}
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="position-absolute bottom-0 end-0 m-4 p-4 rounded-4 shadow-lg text-center text-white"
                                        style={{ backgroundColor: '#001A7E', minWidth: '140px' }} // Theme sanga match gareko color
                                    >
                                        <h3 className="fw-bold mb-0">10+</h3>
                                        <p className="small mb-0">Years of<br />Excellence</p>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Right Side: Content Section */}
                            <div className="col-lg-7">
                                <motion.div {...fadeInUp}>
                                    <h6 className="fw-bold mb-3" style={{ color: '#333' }}>
                                        #No. 1 <span style={{ color: '#001A7E' }}>Construction</span> Company In Nepal!
                                    </h6>

                                    {/* Stats Grid */}
                                    <div className="row g-3 my-4">
                                        {stats.map((stat, index) => (
                                            <div className="col-4" key={index}>
                                                <motion.div
                                                    whileHover={{ y: -5 }}
                                                    className="p-3 text-center border rounded-4 bg-light shadow-sm"
                                                >
                                                    <h3 className={`fw-bold mb-1 ${index === 1 ? 'text-primary' : ''}`}>{stat.value}</h3>
                                                    <p className="text-muted small mb-0 lh-sm">{stat.label}</p>
                                                </motion.div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Paragraphs */}
                                    <div className="text-muted mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                                        <p>
                                            Larkyung Construction specialises in managing and supervising any kind of residential and commercial construction projects. No matter the scale or complexity of the project, we have the expertise and resources to deliver exceptional results at an affordable price.
                                        </p>
                                        <p>
                                            We prioritize earthquake resistance in all of our construction projects and have a proven track record of successful projects and satisfied clients, making us one of the best construction company in Nepal.
                                        </p>
                                    </div>

                                    {/* Contact Info Cards */}
                                    <div className="d-grid gap-3">
                                        <motion.div
                                            whileHover={{ x: 10 }}
                                            className="d-flex align-items-center p-3 border rounded-4 bg-white shadow-sm"
                                        >
                                            <div className="p-3 rounded-3 bg-light text-primary me-3 border">
                                                <Mail size={22} />
                                            </div>
                                            <div>
                                                <p className="small text-muted mb-0">Email us:</p>
                                                <h6 className="fw-bold mb-0" style={{ fontSize: '0.9rem' }}>info@larkyungconstructiongroup.com</h6>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ x: 10 }}
                                            className="d-flex align-items-center p-3 border rounded-4 bg-white shadow-sm"
                                        >
                                            <div className="p-3 rounded-3 bg-light text-primary me-3 border">
                                                <Phone size={22} />
                                            </div>
                                            <div>
                                                <p className="small text-muted mb-0">Call us:</p>
                                                <h6 className="fw-bold mb-0">980-2338566 01-5900441</h6>
                                            </div>
                                        </motion.div>
                                    </div>

                                </motion.div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
            <section className="py-5 bg-white">
                <div className="container">
                    {/* Section Heading */}
                    <div className="mb-5">
                        <h2 className="fw-bold" style={{ color: '#001A7E' }}>
                            Why <span style={{ color: '#0056D2' }}>Choose Larkyung</span> Construction Group ?
                        </h2>
                    </div>

                    <div className="row align-items-stretch g-0 shadow-lg rounded-4 overflow-hidden border">
                        {/* Left Side: Features List (Manual Content) */}
                        <div className="col-lg-6">
                            <div className="d-flex flex-column h-100">

                                {/* Item 1 */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="p-4 d-flex align-items-start border-bottom bg-white"
                                >
                                    <div className="me-4 mt-1">
                                        <CheckCircle className="text-primary" size={28} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-1" style={{ color: '#333' }}>Excellence in Delivery:</h6>
                                        <p className="small text-muted mb-0 lh-base">
                                            At Larkyung Construction Group, we take pride in delivering exceptional quality and craftsmanship. Every project is a reflection of our unwavering commitment to excellence.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Item 2 */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="p-4 d-flex align-items-start border-bottom bg-light"
                                >
                                    <div className="me-4 mt-1">
                                        <Users className="text-primary" size={28} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-1" style={{ color: '#333' }}>Vision to Reality:</h6>
                                        <p className="small text-muted mb-0 lh-base">
                                            Your vision is at the heart of everything we do. Our dedicated team ensures every detail is carefully executed to bring your ideas to life.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Item 3 */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="p-4 d-flex align-items-start border-bottom bg-white"
                                >
                                    <div className="me-4 mt-1">
                                        <Handshake className="text-primary" size={28} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-1" style={{ color: '#333' }}>Customer-Centric Approach:</h6>
                                        <p className="small text-muted mb-0 lh-base">
                                            Your satisfaction drives us forward. We strive to exceed expectations and foster long-lasting relationships built on trust.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Item 4 */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="p-4 d-flex align-items-start border-bottom bg-light"
                                >
                                    <div className="me-4 mt-1">
                                        <ShieldCheck className="text-primary" size={28} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-1" style={{ color: '#333' }}>Integrity & Transparency:</h6>
                                        <p className="small text-muted mb-0 lh-base">
                                            We believe in honest and open communication throughout every project. This fosters trust and ensures you're always in the loop.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Item 5 */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="p-4 d-flex align-items-start bg-white"
                                >
                                    <div className="me-4 mt-1">
                                        <HardHat className="text-primary" size={28} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-1" style={{ color: '#333' }}>Commitment to Safety:</h6>
                                        <p className="small text-muted mb-0 lh-base">
                                            Safety is our top priority, and we adhere to rigorous protocols to protect everyone involved. Your peace of mind is as important to us as the project itself.
                                        </p>
                                    </div>
                                </motion.div>

                            </div>
                        </div>

                        {/* Right Side: Team Image */}
                        <div className="col-lg-6">
                            <div className="h-100">
                                <img
                                    src={sec}
                                    alt="Our Team"
                                    className="w-100 h-100"
                                    style={{ objectFit: 'cover', minHeight: '500px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                        {/* <div className="d-inline-block px-4 py-1 rounded-pill mb-3" style={{ background: 'rgba(0, 86, 210, 0.05)', border: '1px solid rgba(0, 86, 210, 0.1)' }}>
                            <p className="text-uppercase fw-bold small m-0" style={{ color: '#f39c12', letterSpacing: '2px' }}>
                                — OUR PORTFOLIO —
                            </p>
                        </div> */}

                        <h2 className="fw-bold mb-3" style={{ color: '#001A7E' }}>
                            Featured <span style={{ color: '#f39c12' }}>Gallery</span>
                        </h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: '600px', fontSize: '0.9rem' }}>
                            Explore our collection of completed projects and architectural excellence.
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
                                    src="https://i.pinimg.com/736x/d6/27/eb/d627ebd86a53b7cc90889ae5b10e65c7.jpg"
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
                                    <h4 className="text-white fw-bold mb-3">Floor Plan</h4>

                                    {/* Button from Reference */}
                                    <Link to="/fp">
                                    <button
                                        className="btn btn-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2"
                                        style={{ backgroundColor: '#0056D2', border: 'none', fontWeight: 'bold' }}
                                    >
                                        View Gallery <i className="bi bi-images"></i>
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
                                    src="https://i.pinimg.com/736x/1e/7d/38/1e7d38d840355c8c191f593b0131abb6.jpg"
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
                                    <h4 className="text-white fw-bold mb-3">Interior Design</h4>

                                    {/* Button from Reference */}
                                    <Link to="/id">
                                    <button
                                        className="btn btn-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2"
                                        style={{ backgroundColor: '#0056D2', border: 'none', fontWeight: 'bold' }}
                                    >
                                        View Gallery <i className="bi bi-images"></i>
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
                                    src="https://i.pinimg.com/736x/1d/09/da/1d09da6bb7b8436a00d5514f352b783f.jpg"
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
                                    <h4 className="text-white fw-bold mb-3">Construction Underway</h4>

                                    {/* Button from Reference */}
                                    <Link to="/CU">
                                    <button
                                        className="btn btn-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2"
                                        style={{ backgroundColor: '#0056D2', border: 'none', fontWeight: 'bold' }}
                                    >
                                        View Gallery <i className="bi bi-images"></i>
                                    </button>
                                    </Link>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="rounded-4 overflow-hidden shadow-sm border bg-white position-relative"
                                style={{ cursor: 'pointer' }}
                            >
                                {/* Main Image */}
                                <img
                                    src="https://i.pinimg.com/1200x/93/19/1c/93191c8ab8bc06824d9ded382695359a.jpg"
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
                                    <h4 className="text-white fw-bold mb-3">Renovation</h4>

                                    {/* Button from Reference */}
                                    <Link to='/Renovation'>
                                    <button
                                        className="btn btn-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2"
                                        style={{ backgroundColor: '#0056D2', border: 'none', fontWeight: 'bold' }}
                                    >
                                        View Gallery <i className="bi bi-images"></i>
                                    </button>
                                    </Link>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="rounded-4 overflow-hidden shadow-sm border bg-white position-relative"
                                style={{ cursor: 'pointer' }}
                            >
                                {/* Main Image */}
                                <img
                                    src="https://i.pinimg.com/1200x/87/6e/33/876e33c19eb0157851444b2af8408ae5.jpg"
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
                                    <h4 className="text-white fw-bold mb-3">Interior Construction</h4>

                                    {/* Button from Reference */}
                                    <Link to="/IC">
                                    <button
                                        className="btn btn-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2"
                                        style={{ backgroundColor: '#0056D2', border: 'none', fontWeight: 'bold' }}
                                    >
                                        View Gallery <i className="bi bi-images"></i>
                                    </button>
                                    </Link>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* Action Button */}
                {/* <div className="text-center mt-4">
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: '#0046b8' }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary rounded-pill px-5 py-3 fw-bold d-inline-flex align-items-center gap-2 border-0 shadow"
                        style={{ backgroundColor: '#0056D2' }}
                    >
                        View All Galleries <ArrowRight size={20} />
                    </motion.button>
                </div> */}

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
            <section className="py-5" style={{ backgroundColor: '#1e3a8a' }}>
                <div className="container py-4">
                    {/* row-gap-5 le mobile ma euta column sakiye pachi thikka space dincha */}
                    <div className="row g-0 row-gap-5 text-white">

                        {/* 1. Zero Delays */}
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center">
                                {/* Timeline Icon & Line Container */}
                                <div className="d-flex flex-column align-items-center position-relative me-3" style={{ width: '50px' }}>
                                    {/* Top Line */}
                                    <div style={{ width: '1px', height: '20px', backgroundColor: 'rgba(255,255,255,0.4)' }}></div>

                                    {/* Main Icon */}
                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                                        style={{ width: '45px', height: '45px', backgroundColor: '#00c3ff', zIndex: 2 }}
                                    >
                                        <Clock color="white" size={20} />
                                    </div>

                                    {/* Bottom Line */}
                                    <div style={{ width: '1px', height: '20px', backgroundColor: 'rgba(255,255,255,0.4)' }}></div>
                                </div>

                                <div>
                                    <h5 className="fw-bold mb-1">Zero Delays</h5>
                                    <p className="small opacity-75 mb-0" style={{ fontSize: '0.85rem' }}>
                                        Zero tolerance for project delays.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 2. Absolute Transparency */}
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center">
                                <div className="d-flex flex-column align-items-center position-relative me-3" style={{ width: '50px' }}>
                                    <div style={{ width: '1px', height: '20px', backgroundColor: 'rgba(255,255,255,0.4)' }}></div>
                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                                        style={{ width: '45px', height: '45px', backgroundColor: '#00c3ff', zIndex: 2 }}
                                    >
                                        <Sparkles color="white" size={20} />
                                    </div>
                                    <div style={{ width: '1px', height: '20px', backgroundColor: 'rgba(255,255,255,0.4)' }}></div>
                                </div>

                                <div>
                                    <h5 className="fw-bold mb-1">Absolute Transparency</h5>
                                    <p className="small opacity-75 mb-0" style={{ fontSize: '0.85rem' }}>
                                        From detailed design to clear estimates till 24*7 live update feed.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 3. Assured Quality Control */}
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center">
                                <div className="d-flex flex-column align-items-center position-relative me-3" style={{ width: '50px' }}>
                                    <div style={{ width: '1px', height: '20px', backgroundColor: 'rgba(255,255,255,0.4)' }}></div>
                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                                        style={{ width: '45px', height: '45px', backgroundColor: '#00c3ff', zIndex: 2 }}
                                    >
                                        <Settings color="white" size={20} />
                                    </div>
                                    <div style={{ width: '1px', height: '20px', backgroundColor: 'rgba(255,255,255,0.4)' }}></div>
                                </div>

                                <div>
                                    <h5 className="fw-bold mb-1">Assured Quality Control</h5>
                                    <p className="small opacity-75 mb-0" style={{ fontSize: '0.85rem' }}>
                                        Multilayers of quality check of products from the source to installation.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
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
                                        to="/rcc"
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
                                        to="/rd"
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
                                        to="/exterior"
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
            <section className="py-5 position-relative overflow-hidden" style={{ background: '#f8faff' }}>
                {/* Background Decorative Blobs */}
                <div className="position-absolute top-0 start-0 translate-middle" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,26,126,0.05) 0%, transparent 70%)' }}></div>
                <div className="position-absolute bottom-0 end-0 translate-middle" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(243,156,18,0.05) 0%, transparent 70%)' }}></div>

                <div className="container py-5 position-relative">
                    {/* Header */}
                    <div className="text-center mb-5">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="fw-bold display-4 mb-3" style={{ color: '#001A7E' }}
                        >
                            How We <span style={{ color: '#f39c12' }}>Work</span>
                        </motion.h2>
                        <div className="mx-auto" style={{ width: '80px', height: '4px', background: '#f39c12', borderRadius: '10px' }}></div>
                    </div>

                    <div className="position-relative mt-5">
                        {/* Central Animated Line */}
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            transition={{ duration: 1.5 }}
                            className="position-absolute start-50 translate-middle-x d-none d-lg-block"
                            style={{ width: '6px', background: 'linear-gradient(to bottom, #001A7E, #f39c12, #001A7E)', borderRadius: '10px', boxShadow: '0 0 20px rgba(0,26,126,0.2)' }}
                        ></motion.div>

                        {/* --- STEP 01: CONSULT --- */}
                        <div className="row align-items-center mb-5 pb-5">
                            <div className="col-lg-5 order-1">
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    whileHover={{ scale: 1.02, rotateY: -5, perspective: 1000 }}
                                    className="p-4 rounded-5 shadow-lg position-relative overflow-hidden"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.8)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.3)',
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
                                    }}
                                >
                                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(135deg, rgba(0,26,126,0.05) 0%, transparent 100%)', zIndex: -1 }}></div>
                                    <div className="rounded-4 overflow-hidden mb-4 shadow-sm" style={{ height: '240px' }}>
                                        <img src="https://i.pinimg.com/736x/d6/11/f9/d611f9d685874ffb133f52e1403b427f.jpg" alt="Consult" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <h3 className="fw-bold h2 mb-3" style={{ color: '#001A7E' }}>Consult</h3>
                                    <p className="text-muted lh-lg">Meet our experts, share your requirements while post our analysis we submit best fit land use options, exterior and interior design along with budget and time lines for construction.</p>
                                </motion.div>
                            </div>
                            <div className="col-lg-2 d-none d-lg-flex justify-content-center order-2">
                                <motion.div
                                    initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                                    whileHover={{ scale: 1.2, boxShadow: '0 0 30px #001A7E' }}
                                    className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold shadow-lg"
                                    style={{ width: '70px', height: '70px', background: '#001A7E', border: '6px solid #fff', zIndex: 10, cursor: 'pointer' }}
                                >
                                    01
                                </motion.div>
                            </div>
                            <div className="col-lg-5 order-3 d-none d-lg-block"></div>
                        </div>

                        {/* --- STEP 02: CONTRACT --- */}
                        <div className="row align-items-center mb-5 pb-5">
                            <div className="col-lg-5 order-1 d-none d-lg-block"></div>
                            <div className="col-lg-2 d-none d-lg-flex justify-content-center order-2">
                                <motion.div
                                    initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                                    whileHover={{ scale: 1.2, boxShadow: '0 0 30px #f39c12' }}
                                    className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold shadow-lg"
                                    style={{ width: '70px', height: '70px', background: '#f39c12', border: '6px solid #fff', zIndex: 10, cursor: 'pointer' }}
                                >
                                    02
                                </motion.div>
                            </div>
                            <div className="col-lg-5 order-3">
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    whileHover={{ scale: 1.02, rotateY: 5, perspective: 1000 }}
                                    className="p-4 rounded-5 shadow-lg position-relative overflow-hidden"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.8)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.3)'
                                    }}
                                >
                                    <div className="position-absolute top-0 end-0 w-100 h-100" style={{ background: 'linear-gradient(-135deg, rgba(243,156,18,0.05) 0%, transparent 100%)', zIndex: -1 }}></div>
                                    <div className="rounded-4 overflow-hidden mb-4 shadow-sm" style={{ height: '240px' }}>
                                        <img src="https://i.pinimg.com/1200x/8e/b2/ca/8eb2ca46006e7b89089fc182659c918d.jpg" alt="Contract" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <h3 className="fw-bold h2 mb-3" style={{ color: '#f39c12' }}> Contract</h3>
                                    <p className="text-muted lh-lg">After finalizing details of design and construction materials with technical specification official contract will be done to move to next phase.</p>
                                </motion.div>
                            </div>
                        </div>
                        <div className="row align-items-center mb-5 pb-5">
                            <div className="col-lg-5 order-1">
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    whileHover={{ scale: 1.02, rotateY: -5, perspective: 1000 }}
                                    className="p-4 rounded-5 shadow-lg position-relative overflow-hidden"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.8)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.3)',
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
                                    }}
                                >
                                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(135deg, rgba(0,26,126,0.05) 0%, transparent 100%)', zIndex: -1 }}></div>
                                    <div className="rounded-4 overflow-hidden mb-4 shadow-sm" style={{ height: '240px' }}>
                                        <img src="https://i.pinimg.com/1200x/66/5a/b1/665ab158c777efd8fcdc69f5ceb509cb.jpg" alt="Consult" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <h3 className="fw-bold h2 mb-3" style={{ color: '#001A7E' }}>Construction</h3>
                                    <p className="text-muted lh-lg">Construction commences. While you sit back and relax our project management team tracks and monitors your project through our system and process - through regular site visits. To ensure absolute trust, we provide live access to installed cameras at site, reports and upcoming plans. Payments are done only on the basis of each upcoming phase.</p>
                                </motion.div>
                            </div>
                            <div className="col-lg-2 d-none d-lg-flex justify-content-center order-2">
                                <motion.div
                                    initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                                    whileHover={{ scale: 1.2, boxShadow: '0 0 30px #001A7E' }}
                                    className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold shadow-lg"
                                    style={{ width: '70px', height: '70px', background: '#001A7E', border: '6px solid #fff', zIndex: 10, cursor: 'pointer' }}
                                >
                                    03
                                </motion.div>
                            </div>
                            <div className="col-lg-5 order-3 d-none d-lg-block"></div>
                        </div>

                        {/* --- STEP 02: CONTRACT --- */}
                        <div className="row align-items-center mb-5 pb-5">
                            <div className="col-lg-5 order-1 d-none d-lg-block"></div>
                            <div className="col-lg-2 d-none d-lg-flex justify-content-center order-2">
                                <motion.div
                                    initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                                    whileHover={{ scale: 1.2, boxShadow: '0 0 30px #f39c12' }}
                                    className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold shadow-lg"
                                    style={{ width: '70px', height: '70px', background: '#f39c12', border: '6px solid #fff', zIndex: 10, cursor: 'pointer' }}
                                >
                                    04
                                </motion.div>
                            </div>
                            <div className="col-lg-5 order-3">
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    whileHover={{ scale: 1.02, rotateY: 5, perspective: 1000 }}
                                    className="p-4 rounded-5 shadow-lg position-relative overflow-hidden"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.8)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.3)'
                                    }}
                                >
                                    <div className="position-absolute top-0 end-0 w-100 h-100" style={{ background: 'linear-gradient(-135deg, rgba(243,156,18,0.05) 0%, transparent 100%)', zIndex: -1 }}></div>
                                    <div className="rounded-4 overflow-hidden mb-4 shadow-sm" style={{ height: '240px' }}>
                                        <img src="https://i.pinimg.com/736x/99/f8/ad/99f8adc7a23fe0c6ed8907fc619a6aaf.jpg" alt="Contract" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <h3 className="fw-bold h2 mb-3" style={{ color: '#f39c12' }}>Commissioning</h3>
                                    <p className="text-muted lh-lg">After we finish construction, we enter the Commissioning phase, in which we educate anyone who will use the new site about the features. We host project meetings with our team leads, managers, and contractors to identify and rectify the issues immediately for smooth operation of the system installed.</p>
                                </motion.div>
                            </div>
                        </div>
                        {/* Repeating Step 3 & 4 with similar fancy logic... */}
                    </div>
                </div>
            </section>
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
            <section className="py-5" style={{ backgroundColor: '#f4f7ff' }}>
                <div className="container py-5">
                    {/* Section Header */}
                    <div className="text-center mb-5">
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="fw-bold display-5" style={{ color: '#001A7E' }}
                        >
                            Our Exclusive <span style={{ color: '#f39c12' }}>Packages</span>
                        </motion.h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
                            Choose the best plan that fits your dream project requirements.
                        </p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {/* --- Package Card 1 (Standard) --- */}
                        <div className="col-lg-4 col-md-6">
                            <motion.div
                                whileHover={{ y: -12, scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="bg-white rounded-5 shadow-lg overflow-hidden border-0 h-100"
                            >
                                {/* Header Gradient */}
                                <div className="p-5 text-center" style={{ background: 'linear-gradient(135deg, #001A7E 0%, #0033cc 100%)' }}>
                                    <h3 className="text-white fw-bold">Standard</h3>
                                    <div className="display-5 fw-bold text-warning">NRs. 2500<span className="fs-6 text-white-50">/sq.ft</span></div>
                                </div>

                                <div className="p-4">
                                    {/* Fancy Dropdown Button */}
                                    <button
                                        onClick={() => setOpenDropdown(openDropdown === 0 ? null : 0)}
                                        className="btn w-100 d-flex align-items-center justify-content-between fw-bold py-3 px-4 rounded-4 shadow-sm"
                                        style={{ backgroundColor: '#f8faff', color: '#001A7E', border: '1px solid #e1e8ff', transition: '0.3s' }}
                                    >
                                        View Details
                                        <motion.div animate={{ rotate: openDropdown === 0 ? 180 : 0 }}>
                                            <ChevronDown size={20} />
                                        </motion.div>
                                    </button>

                                    {/* Dropdown Content with 5 Empty List Items */}
                                    <AnimatePresence>
                                        {openDropdown === 0 && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="mt-4"
                                                style={{ overflow: 'hidden' }}
                                            >
                                                <ul className="list-unstyled mt-4 mb-0">
                                                    <li className="d-flex align-items-center gap-2 mb-3 text-muted">
                                                        <CheckCircle2 size={18} className="text-success" />
                                                        <span><strong>Designs & Drawings:</strong> Architectural, Structural, Electrical & Plumbing</span>
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2 mb-3 text-muted">
                                                        <CheckCircle2 size={18} className="text-success" />
                                                        <span><strong>Structure:</strong> RCC Frame FE 500 Steel & Quality Concrete</span>
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2 mb-3 text-muted">
                                                        <CheckCircle2 size={18} className="text-success" />
                                                        <span><strong>Doors & Windows:</strong> Seasoned Wood Frames & Aluminum/UPVC Windows</span>
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2 mb-3 text-muted">
                                                        <CheckCircle2 size={18} className="text-success" />
                                                        <span><strong>Flooring:</strong> Vitrified Tiles (Rooms) & Anti-skid Tiles (Bathrooms)</span>
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2 mb-3 text-muted">
                                                        <CheckCircle2 size={18} className="text-success" />
                                                        <span><strong>Electrical:</strong> FRL Wires & Branded Modular Switches</span>
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2 mb-3 text-muted">
                                                        <CheckCircle2 size={18} className="text-success" />
                                                        <span><strong>Bathrooms:</strong> Branded CP Fittings & Sanitary Ware</span>
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2 mb-3 text-muted">
                                                        <CheckCircle2 size={18} className="text-success" />
                                                        <span><strong>Kitchen:</strong> Granite Countertop with Stainless Steel Sink</span>
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2 mb-3 text-muted">
                                                        <CheckCircle2 size={18} className="text-success" />
                                                        <span><strong>Painting:</strong> Double Putty & Premium Emulsion Finish</span>
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2 mb-3 text-muted">
                                                        <CheckCircle2 size={18} className="text-success" />
                                                        <span><strong>Miscellaneous:</strong> Site Cleaning & Standard Gate Installation</span>
                                                    </li>
                                                </ul>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <button className="btn btn-primary w-100 mt-4 py-3 rounded-pill fw-bold shadow" style={{ backgroundColor: '#001A7E', border: 'none' }}>
                                        Book Now
                                    </button>
                                </div>
                            </motion.div>
                        </div>

                        {/* --- Package Card 2 (Premium) --- */}
                        <div className="col-lg-4 col-md-6">
                            <motion.div
                                whileHover={{ y: -12, scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="bg-white rounded-5 shadow-lg overflow-hidden border-0 h-100"
                            >
                                <div className="p-5 text-center" style={{ background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)' }}>
                                    <h3 className="text-white fw-bold">Premium</h3>
                                    <div className="display-5 fw-bold text-white">NRs. 3500<span className="fs-6 text-white-50">/sq.ft</span></div>
                                </div>

                                <div className="p-4">
                                    <button
                                        onClick={() => setOpenDropdown(openDropdown === 1 ? null : 1)}
                                        className="btn w-100 d-flex align-items-center justify-content-between fw-bold py-3 px-4 rounded-4 shadow-sm"
                                        style={{ backgroundColor: '#fff8ef', color: '#f39c12', border: '1px solid #ffe8cc', transition: '0.3s' }}
                                    >
                                        View Details
                                        <motion.div animate={{ rotate: openDropdown === 1 ? 180 : 0 }}>
                                            <ChevronDown size={20} />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {openDropdown === 1 && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="mt-4"
                                                style={{ overflow: 'hidden' }}
                                            >
                                                <ul className="list-unstyled mt-4 mb-0">
                                                    <li className="d-flex align-items-center gap-2 mb-3 text-muted">
                                                        <CheckCircle2 size={18} className="text-success" />
                                                        <span><strong>Smart Home:</strong> Full home automation, video door phone & smart locks</span>
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2 mb-3 text-muted">
                                                        <CheckCircle2 size={18} className="text-success" />
                                                        <span><strong>Interior:</strong> Premium false ceiling with cove lighting in all rooms</span>
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2 mb-3 text-muted">
                                                        <CheckCircle2 size={18} className="text-success" />
                                                        <span><strong>Flooring:</strong> Italian Marble in living area & wooden flooring in master bedroom</span>
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2 mb-3 text-muted">
                                                        <CheckCircle2 size={18} className="text-success" />
                                                        <span><strong>Kitchen:</strong> Fully modular kitchen with chimney & built-in appliances</span>
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2 mb-3 text-muted">
                                                        <CheckCircle2 size={18} className="text-success" />
                                                        <span><strong>Bathrooms:</strong> Wall-hung closets, rain showers & premium Kohler/TOTO fittings</span>
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2 mb-3 text-muted">
                                                        <CheckCircle2 size={18} className="text-success" />
                                                        <span><strong>Windows:</strong> Double glazed soundproof UPVC windows with mosquito nets</span>
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2 mb-3 text-muted">
                                                        <CheckCircle2 size={18} className="text-success" />
                                                        <span><strong>Electrical:</strong> Premium modular switches with Schneider/Legrand components</span>
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2 mb-3 text-muted">
                                                        <CheckCircle2 size={18} className="text-success" />
                                                        <span><strong>Painting:</strong> Royal shine interior finish & textured weather-coat exterior</span>
                                                    </li>
                                                    <li className="d-flex align-items-center gap-2 mb-3 text-muted">
                                                        <CheckCircle2 size={18} className="text-success" />
                                                        <span><strong>Structure:</strong> Earthquake resistant design with extra pillar reinforcement</span>
                                                    </li>
                                                </ul>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <button className="btn btn-warning w-100 mt-4 py-3 rounded-pill fw-bold text-white shadow" style={{ border: 'none' }}>
                                        Book Now
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;