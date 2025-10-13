import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-banner-seven p-30">
      <div className="bg-wrapper position-relative pt-200 pb-20 md-pt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7" data-aos="fade-right">
              <div
                style={{
                  color: "#00CCCC !important",
                  fontFamily: "Nexa, sans-serif !important",
                }}
                className="slogan d-inline-block"
              >
                Bite into Growth
              </div>
              <h1 className="hero-heading fw-bold  mt-25">
                Build Digital
                <span className="position-relative d-inline-block " style={{
                  marginRight:"2px"
                }}>
                  Experiences
                </span>
                <br></br>
                That Perform.
              </h1>
              <p className="text-lg mb-70 pt-35 pe-xxl-5 md-pt-30 lg-mb-40" style={{
                color: "#4A4A4A",
                fontFamily: "Nexa, sans-serif !important",
              }}>
                We build high-performance eco-systems engineered for real business growth
              </p>
              <Link
                href="/contact/contact-v3"
                className="btn-fourteen fw-500 tran3s"
              >
                Get a Free Audit
              </Link>
            </div>
          </div>
          {/* End .container */}

          {/* <div className="illustration-holder" data-aos="fade-left">
            <img
              src="/images/assets/heroshark.png"
              alt="illustration"
              className="lazy-img main-illustration"
            />
          </div> */}
          {/* /.illustration-holder */}
        </div>
        {/* /.container */}
      </div>
    </div>
  );
};

export default Hero;
