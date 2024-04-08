<template>
  <!-- Navbar Start -->
  <nav
    class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0"
  >
    <a
      href="index.html"
      class="navbar-brand d-flex align-items-center px-4 px-lg-5"
    >
      <h2 class="m-0 text-primary"><i class="fa fa-book me-3"></i>iGA</h2>
    </a>
    <button
      type="button"
      class="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ms-auto p-4 p-lg-0">
        <a href="index.html" class="nav-item nav-link active">Home</a>
        <a href="about.html" class="nav-item nav-link">About</a>
        <a href="courses.html" class="nav-item nav-link">Courses</a>

        <a href="contact.html" class="nav-item nav-link">Contact</a>
        <router-link to="/login" class="nav-item nav-link btn-primary btn-sm"
          >Join Now</router-link
        >
      </div>
    </div>
  </nav>
  <!-- Navbar End -->

  <!-- Carousel Start -->
  <div class="container-fluid p-0 mb-5">
    <div class="owl-carousel header-carousel position-relative">
      <div class="owl-carousel-item position-relative">
        <img class="img-fluid" src="../../assets/img/carousel-1.jpg" alt="" />
        <div
          class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
          style="background: rgba(24, 29, 56, 0.7)"
        >
          <div class="container">
            <div class="row justify-content-start">
              <div class="col-sm-10 col-lg-8">
                <h5
                  class="text-primary text-uppercase mb-3 animated slideInDown"
                >
                  Best Online Courses
                </h5>
                <h1 class="display-3 text-white animated slideInDown">
                  The Best Online Learning Platform
                </h1>
                <p class="fs-5 text-white mb-4 pb-2">
                  Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                  no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                  sanctus eirmod elitr.
                </p>
                <a
                  href=""
                  class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >Read More</a
                >
                <a
                  href=""
                  class="btn btn-light py-md-3 px-md-5 animated slideInRight"
                  >Join Now</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="owl-carousel-item position-relative">
        <img class="img-fluid" src="../../assets/img/carousel-2.jpg" alt="" />
        <div
          class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
          style="background: rgba(24, 29, 56, 0.7)"
        >
          <div class="container">
            <div class="row justify-content-start">
              <div class="col-sm-10 col-lg-8">
                <h5
                  class="text-primary text-uppercase mb-3 animated slideInDown"
                >
                  Best Online Courses
                </h5>
                <h1 class="display-3 text-white animated slideInDown">
                  Get Educated Online From Your Home
                </h1>
                <p class="fs-5 text-white mb-4 pb-2">
                  Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                  no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                  sanctus eirmod elitr.
                </p>
                <a
                  href=""
                  class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >Read More</a
                >
                <a
                  href=""
                  class="btn btn-light py-md-3 px-md-5 animated slideInRight"
                  >Join Now</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Carousel End -->

  <!-- Service Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="service-item text-center pt-3">
            <div class="p-4">
              <i class="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
              <h5 class="mb-3">Skilled Instructors</h5>
              <p>
                Our platform fosters engaging, personalized learning. Dedicated
                educators facilitate dynamic exchanges, encouraging critical
                thinking and inquiry. Students receive expert guidance, ensuring
                their learning needs are met with care and expertise.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="service-item text-center pt-3">
            <div class="p-4">
              <i class="fa fa-3x fa-globe text-primary mb-4"></i>
              <h5 class="mb-3">Online Classes</h5>
              <p>
                Our online courses cover a wide range of subjects, from English
                and Math to Science and History. Our teachers are highly
                qualified and experienced, and they are dedicated to helping
                students learn and grow.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="service-item text-center pt-3">
            <div class="p-4">
              <i class="fa fa-3x fa-home text-primary mb-4"></i>
              <h5 class="mb-3">Tutoring</h5>
              <p>
                In addition to our online courses, we also offer one-on-one
                tutoring sessions. Our tutors work with students to identify
                their strengths and weaknesses, and they develop personalized
                lesson plans to help them improve.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
          <div class="service-item text-center pt-3">
            <div class="p-4">
              <i class="fa fa-3x fa-book-open text-primary mb-4"></i>
              <h5 class="mb-3">Book Library</h5>
              <p>
                Conveniently, study and access a digital library packed with
                resources from the Rwanda Education Board (REB) whenever and
                wherever you are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Service End -->

  <!-- About Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-5">
        <div
          class="col-lg-6 wow fadeInUp"
          data-wow-delay="0.1s"
          style="min-height: 400px"
        >
          <div class="position-relative h-100">
            <img
              class="img-fluid position-absolute w-100 h-100"
              src="../../assets/img/about.jpg"
              alt=""
              style="object-fit: cover"
            />
          </div>
        </div>
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <h6 class="section-title bg-white text-start text-primary pe-3">
            About Us
          </h6>
          <h1 class="mb-4">Welcome to iGA</h1>
          <p class="mb-4">A platform that adds quality to education.</p>
          <p class="mb-4">
            iGa was founded with the goal of adding quality to education. We
            believe that every student deserves access to quality teachers,
            regardless of where they live. Our team is passionate about
            education and is dedicated to making a positive impact in the lives
            of students around Rwanda.​We provide a range of services to
            students, including access to educational materials, academic
            support, and guidance from experienced teachers. Our platform is
            designed to be user-friendly and easy to navigate, making it easy
            for students to get the help they need to succeed.
          </p>
          <div class="row gy-2 gx-4 mb-4">
            <div class="col-sm-6">
              <p class="mb-0">
                <i class="fa fa-arrow-right text-primary me-2"></i>Skilled
                Instructors
              </p>
            </div>
            <div class="col-sm-6">
              <p class="mb-0">
                <i class="fa fa-arrow-right text-primary me-2"></i>Online
                Classes
              </p>
            </div>
            <div class="col-sm-6">
              <p class="mb-0">
                <i class="fa fa-arrow-right text-primary me-2"></i>Online REB
                library
              </p>
            </div>
          </div>
          <a class="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->

  <!-- Categories Start -->
  <div class="container-xxl py-5 category">
    <div class="container">
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 class="section-title bg-white text-center text-primary px-3">
          Categories
        </h6>
        <h1 class="mb-5">Courses Categories</h1>
      </div>
      <div class="row g-3">
        <div class="col-lg-7 col-md-6">
          <div class="row g-3">
            <div class="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
              <a class="position-relative d-block overflow-hidden" href="">
                <img
                  class="img-fluid"
                  src="https://education.scripps.edu/_files/images/graduate/doctoral-program/customizable-curriculum/600x400_chemical_biology_i.jpg"
                  alt=""
                />
                <div
                  class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                  style="margin: 1px"
                >
                  <h5 class="m-0">Biology & Chemistry</h5>
                  <small class="text-primary">Courses</small>
                </div>
              </a>
            </div>
            <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
              <a class="position-relative d-block overflow-hidden" href="">
                <img
                  class="img-fluid"
                  src="https://english.varthabharati.in/storage/uploads/india/WPC_vb_02.png"
                  alt=""
                />
                <div
                  class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                  style="margin: 1px"
                >
                  <h5 class="m-0">Mathematics & Physics</h5>
                  <small class="text-primary">Courses</small>
                </div>
              </a>
            </div>
            <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
              <a class="position-relative d-block overflow-hidden" href="">
                <img
                  class="img-fluid"
                  src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww&w=1000"
                  alt=""
                />
                <div
                  class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                  style="margin: 1px"
                >
                  <h5 class="m-0">Computer Science</h5>
                  <small class="text-primary">Courses</small>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          class="col-lg-5 col-md-6 wow zoomIn"
          data-wow-delay="0.7s"
          style="min-height: 350px"
        >
          <a class="position-relative d-block h-100 overflow-hidden" href="">
            <img
              class="img-fluid position-absolute w-100 h-100"
              src="https://cdn.sanity.io/images/f4xjorm8/production/c76a3ec607c335f7d187ebe3d44acb07689156f3-1024x683.jpg?rect=0,73,1024,538&w=1200&h=630"
              alt=""
              style="object-fit: cover"
            />
            <div
              class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
              style="margin: 1px"
            >
              <h5 class="m-0">Geography & Economics</h5>
              <small class="text-primary">Courses</small>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- Categories Start -->

  <!-- Courses Start -->
  <!-- Courses Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 class="section-title bg-white text-center text-primary px-3">
          Courses
        </h6>
        <h1 class="mb-5">Other courses</h1>
      </div>

      <div class="row g-3">
        <div class="col-lg-7 col-md-6">
          <div class="row g-3">
            <div class="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
              <a class="position-relative d-block overflow-hidden" href="">
                <img
                  class="img-fluid"
                  src="https://m.economictimes.com/thumb/msid-99108606,width-640,height-480,resizemode-4,imgsize-30790/best-indian-history-book.jpg"
                  alt=""
                />
                <div
                  class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                  style="margin: 1px"
                >
                  <h5 class="m-0">History</h5>
                  <small class="text-primary">Courses</small>
                </div>
              </a>
            </div>
            <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
              <a class="position-relative d-block overflow-hidden" href="">
                <img
                  class="img-fluid"
                  src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop"
                  alt=""
                />
                <div
                  class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                  style="margin: 1px"
                >
                  <h5 class="m-0">English & General Studies</h5>
                  <small class="text-primary">Courses</small>
                </div>
              </a>
            </div>
            <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
              <a class="position-relative d-block overflow-hidden" href="">
                <img
                  class="img-fluid"
                  src="https://hospitalityinsights.ehl.edu/hubfs/Entrepreunership%20vs.%20Employment.jpeg"
                  alt=""
                />
                <div
                  class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                  style="margin: 1px"
                >
                  <h5 class="m-0">Entrepreneurship</h5>
                  <small class="text-primary">Courses</small>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          class="col-lg-5 col-md-6 wow zoomIn"
          data-wow-delay="0.7s"
          style="min-height: 350px"
        >
          <a class="position-relative d-block h-100 overflow-hidden" href="">
            <img
              class="img-fluid position-absolute w-100 h-100"
              src="https://igihe.com/IMG/logo/35-118-2f76c_1_.webp?1672917413"
              alt=""
              style="object-fit: cover"
            />
            <div
              class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
              style="margin: 1px"
            >
              <h5 class="m-0">Kinyarwanda</h5>
              <small class="text-primary">Courses</small>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- Courses End -->

  <!-- Team Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 class="section-title bg-white text-center text-primary px-3">
          Instructors
        </h6>
        <h1 class="mb-5">Expert Instructors</h1>
      </div>
      <div class="row g-4">
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="team-item bg-light">
            <div class="overflow-hidden">
              <img class="img-fluid" src="../../assets/img/team-1.jpg" alt="" />
            </div>
            <div
              class="position-relative d-flex justify-content-center"
              style="margin-top: -23px"
            >
              <div class="bg-light d-flex justify-content-center pt-2 px-1">
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="fab fa-twitter"></i
                ></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="fab fa-instagram"></i
                ></a>
              </div>
            </div>
            <div class="text-center p-4">
              <h5 class="mb-0">Instructor Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="team-item bg-light">
            <div class="overflow-hidden">
              <img class="img-fluid" src="../../assets/img/team-2.jpg" alt="" />
            </div>
            <div
              class="position-relative d-flex justify-content-center"
              style="margin-top: -23px"
            >
              <div class="bg-light d-flex justify-content-center pt-2 px-1">
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="fab fa-twitter"></i
                ></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="fab fa-instagram"></i
                ></a>
              </div>
            </div>
            <div class="text-center p-4">
              <h5 class="mb-0">Instructor Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="team-item bg-light">
            <div class="overflow-hidden">
              <img class="img-fluid" src="../../assets/img/team-3.jpg" alt="" />
            </div>
            <div
              class="position-relative d-flex justify-content-center"
              style="margin-top: -23px"
            >
              <div class="bg-light d-flex justify-content-center pt-2 px-1">
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="fab fa-twitter"></i
                ></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="fab fa-instagram"></i
                ></a>
              </div>
            </div>
            <div class="text-center p-4">
              <h5 class="mb-0">Instructor Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div class="team-item bg-light">
            <div class="overflow-hidden">
              <img class="img-fluid" src="../../assets/img/team-4.jpg" alt="" />
            </div>
            <div
              class="position-relative d-flex justify-content-center"
              style="margin-top: -23px"
            >
              <div class="bg-light d-flex justify-content-center pt-2 px-1">
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="fab fa-twitter"></i
                ></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="fab fa-instagram"></i
                ></a>
              </div>
            </div>
            <div class="text-center p-4">
              <h5 class="mb-0">Instructor Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Team End -->

  <!-- Testimonial Start -->
  <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
      <div class="text-center">
        <h6 class="section-title bg-white text-center text-primary px-3">
          Testimonial
        </h6>
        <h1 class="mb-5">Our Students Say!</h1>
      </div>
      <div class="owl-carousel testimonial-carousel position-relative">
        <div class="testimonial-item text-center">
          <img
            class="border rounded-circle p-2 mx-auto mb-3"
            src="../../assets/img/testimonial-1.jpg"
            style="width: 80px; height: 80px"
          />
          <h5 class="mb-0">Client Name</h5>
          <p>Profession</p>
          <div class="testimonial-text bg-light text-center p-4">
            <p class="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
        </div>
        <div class="testimonial-item text-center">
          <img
            class="border rounded-circle p-2 mx-auto mb-3"
            src="../../assets/img/testimonial-2.jpg"
            style="width: 80px; height: 80px"
          />
          <h5 class="mb-0">Client Name</h5>
          <p>Profession</p>
          <div class="testimonial-text bg-light text-center p-4">
            <p class="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
        </div>
        <div class="testimonial-item text-center">
          <img
            class="border rounded-circle p-2 mx-auto mb-3"
            src="../../assets/img/testimonial-3.jpg"
            style="width: 80px; height: 80px"
          />
          <h5 class="mb-0">Client Name</h5>
          <p>Profession</p>
          <div class="testimonial-text bg-light text-center p-4">
            <p class="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
        </div>
        <div class="testimonial-item text-center">
          <img
            class="border rounded-circle p-2 mx-auto mb-3"
            src="../../assets/img/testimonial-4.jpg"
            style="width: 80px; height: 80px"
          />
          <h5 class="mb-0">Client Name</h5>
          <p>Profession</p>
          <div class="testimonial-text bg-light text-center p-4">
            <p class="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Testimonial End -->

  <!-- Footer Start -->
  <div
    class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div class="container py-5">
      <div class="row g-5">
        <div class="col-lg-3 col-md-6">
          <h4 class="text-white mb-3">Quick Link</h4>
          <a class="btn btn-link" href="">About Us</a>
          <a class="btn btn-link" href="">Contact Us</a>
          <a class="btn btn-link" href="">Privacy Policy</a>
          <a class="btn btn-link" href="">Terms & Condition</a>
        </div>
        <div class="col-lg-3 col-md-6">
          <h4 class="text-white mb-3">Contact</h4>
          <p class="mb-2">
            <i class="fa fa-map-marker-alt me-3"></i>Rwanda - Kigali
          </p>
          <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+250 788000000</p>
          <p class="mb-2">
            <i class="fa fa-envelope me-3"></i>info@alwaysiga.com
          </p>
          <div class="d-flex pt-2">
            <a class="btn btn-outline-light btn-social" href=""
              ><i class="fab fa-twitter"></i
            ></a>
            <a class="btn btn-outline-light btn-social" href=""
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a class="btn btn-outline-light btn-social" href=""
              ><i class="fab fa-youtube"></i
            ></a>
            <a class="btn btn-outline-light btn-social" href=""
              ><i class="fab fa-linkedin-in"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="copyright">
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; <a class="border-bottom" href="#">iGA App</a>, All Right
            Reserved.

            <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
            Designed By
            <a class="border-bottom" href="https://alwaysiga.com">ALWAYSIGA</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer End -->

  <!-- Back to Top -->
  <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"
    ><i class="bi bi-arrow-up"></i
  ></a>
</template>

<script>
import "https://code.jquery.com/jquery-3.4.1.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js";
// import '../../assets/lib/wow/wow.min.js';
import "../../assets/lib/easing/easing.min.js";
import "../../assets/lib/waypoints/waypoints.min.js";
import "../../assets/lib/owlcarousel/owl.carousel.min.js";
import "../../assets/js/main.js";
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css");
@import "../../assets/lib/animate//animate.min.css";
@import "../../assets/lib/owlcarousel/assets//owl.carousel.min.css";
@import "../../assets/home/css/style.css";
</style>

