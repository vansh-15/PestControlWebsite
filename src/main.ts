import "./style.css";

const services = [
  {
    name: "Termite Control",
    icon: "🐜",
    description: "Protect your property from damaging termites."
  },
  {
    name: "Cockroach Control",
    icon: "🪳",
    description: "Effective solutions for cockroach infestations."
  },
  {
    name: "Bed Bug Control",
    icon: "🛏️",
    description: "Get rid of bed bugs and protect your sleeping space."
  },
  {
    name: "Ant Control",
    icon: "🐜",
    description: "Keep unwanted ants away from your home."
  },
  {
    name: "Rat Control",
    icon: "🐀",
    description: "Professional solutions for rat and rodent problems."
  },
  {
    name: "Yellow Fly Control",
    icon: "🪰",
    description: "Control unwanted yellow flies around your property."
  },
  {
    name: "Honey Bee Control",
    icon: "🐝",
    description: "Safe and responsible honey bee control services."
  },
  {
    name: "Lizard Control",
    icon: "🦎",
    description: "Keep your home free from unwanted lizards."
  },
  {
    name: "Mosquito Control",
    icon: "🦟",
    description: "Reduce mosquitoes and make your surroundings safer."
  },
  {
    name: "Fly Control",
    icon: "🪰",
    description: "Effective fly control for cleaner surroundings."
  }
];

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App container not found");
}

app.innerHTML = `
  <!-- NAVBAR -->
  <header class="navbar">
    <div class="container nav-container">

      <a href="#home" class="logo-link">
        <img src="${import.meta.env.BASE_URL}logo.jpeg" alt="Pest Control Services Logo" class="logo">
      </a>

      <nav class="desktop-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>

        <a href="tel:+919369214131" class="nav-call">
          Call Now
        </a>
      </nav>

      <button class="menu-button" id="menuButton" aria-label="Open menu">
        ☰
      </button>

    </div>

    <div class="mobile-menu" id="mobileMenu">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#gallery">Our Work</a>
      <a href="#contact">Contact</a>

      <a href="tel:+919369214131" class="mobile-call">
        📞 Call Now
      </a>
    </div>
  </header>


  <!-- HERO -->
  <main>

    <section class="hero" id="home">

      <div class="hero-pattern"></div>

      <div class="container hero-container">

        <div class="hero-content">

          <span class="hero-badge">
            PROFESSIONAL PEST CONTROL SERVICES
          </span>

          <h1>
            A Safer, Cleaner &
            <span>Pest-Free</span>
            Tomorrow
          </h1>

          <p>
            Professional pest control solutions for homes,
            offices and commercial spaces. Protect your property
            from unwanted pests with reliable service.
          </p>

          <div class="hero-buttons">

            <a href="tel:+919369214131" class="btn btn-primary">
              📞 Call Now
            </a>

            <a href="#services" class="btn btn-secondary">
              Explore Services
            </a>

          </div>

          <div class="hero-info">

            <div class="hero-info-item">
              <strong>10+</strong>
              <span>Pest Control Services</span>
            </div>

            <div class="hero-divider"></div>

            <div class="hero-info-item">
              <strong>Professional</strong>
              <span>Service</span>
            </div>

            <div class="hero-divider"></div>

            <div class="hero-info-item">
              <strong>Kanpur</strong>
              <span>Based Service</span>
            </div>

          </div>

        </div>


        <div class="hero-logo-area">

          <div class="logo-circle">

            <div class="circle-decoration circle-one"></div>
            <div class="circle-decoration circle-two"></div>

            <img
              src="${import.meta.env.BASE_URL}logo.jpeg"
              alt="Pest Control Services"
              class="hero-logo"
            />

          </div>

        </div>

      </div>

      <div class="hero-bottom-shape"></div>

    </section>


    <!-- ABOUT -->
    <section class="about section" id="about">

      <div class="container">

        <div class="section-heading">

          <span class="section-label">
            ABOUT US
          </span>

          <h2>
            Professional Pest Control You Can Trust
          </h2>

          <p>
            We provide reliable pest control services designed
            to help keep your home, workplace and surroundings
            clean, comfortable and protected from unwanted pests.
          </p>

        </div>


        <div class="about-grid">

          <div class="about-image">

            <div class="about-image-box">

              <img
                src="${import.meta.env.BASE_URL}logo.jpeg"
                alt="Pest Control Services"
              />

            </div>

          </div>


          <div class="about-content">

            <h3>
              Your Protection Against Unwanted Pests
            </h3>

            <p>
              From termites and cockroaches to mosquitoes,
              rats, flies and other common pests, we offer
              solutions for a wide range of pest problems.
            </p>

            <p>
              Our goal is simple — to provide dependable
              pest control services while helping you maintain
              a cleaner and healthier environment.
            </p>


            <div class="benefits">

              <div class="benefit">
                <div class="benefit-icon">✓</div>
                <div>
                  <h4>Reliable Service</h4>
                  <p>Professional pest management solutions.</p>
                </div>
              </div>

              <div class="benefit">
                <div class="benefit-icon">✓</div>
                <div>
                  <h4>Multiple Solutions</h4>
                  <p>Services for a wide range of common pests.</p>
                </div>
              </div>

              <div class="benefit">
                <div class="benefit-icon">✓</div>
                <div>
                  <h4>Residential & Commercial</h4>
                  <p>Solutions for homes, offices and businesses.</p>
                </div>
              </div>

              <div class="benefit">
                <div class="benefit-icon">✓</div>
                <div>
                  <h4>Quick Assistance</h4>
                  <p>Get in touch when you have a pest problem.</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- SERVICES -->
    <section class="services section" id="services">

      <div class="container">

        <div class="section-heading">

          <span class="section-label">
            OUR SERVICES
          </span>

          <h2>
            Complete Pest Control Solutions
          </h2>

          <p>
            Professional solutions for common household
            and commercial pest problems.
          </p>

        </div>


        <div class="services-grid">

          ${services
            .map(
              (service) => `
                <div class="service-card">

                  <div class="service-icon">
                    ${service.icon}
                  </div>

                  <div class="service-content">

                    <h3>${service.name}</h3>

                    <p>
                      ${service.description}
                    </p>

                    <a href="#contact">
                      Enquire Now →
                    </a>

                  </div>

                </div>
              `
            )
            .join("")}

        </div>

      </div>

    </section>


      <!-- PEST PROBLEMS -->
    <section class="pest-gallery section" id="gallery">

      <div class="container">

        <div class="section-heading">

          <span class="section-label">
            PEST PROBLEMS
          </span>

          <h2>
            See What We Help Protect You From
          </h2>

          <p>
            Unwanted pests can hide in walls, cupboards, kitchens,
            bedrooms and other areas of your property. Our professional
            pest control services help tackle these common problems.
          </p>

        </div>


        <!-- IMAGE GALLERY -->

        <div class="pest-image-grid">

          <div class="pest-image-card">
            <img
              src="${import.meta.env.BASE_URL}images/pest-1.jpg"
              alt="Pest found inside a property"
              loading="lazy"
            />

            <div class="image-overlay">
              <span>Pest Inspection</span>
            </div>
          </div>


          <div class="pest-image-card">
            <img
              src="${import.meta.env.BASE_URL}images/pest-2.jpg"
              alt="Insects found on a wall"
              loading="lazy"
            />

            <div class="image-overlay">
              <span>Wall Pest Treatment</span>
            </div>
          </div>


          <div class="pest-image-card">
            <img
              src="${import.meta.env.BASE_URL}images/pest-3.jpg"
              alt="Pests found inside a cupboard"
              loading="lazy"
            />

            <div class="image-overlay">
              <span>Cupboard Pest Control</span>
            </div>
          </div>


          <div class="pest-image-card">
            <img
              src="${import.meta.env.BASE_URL}images/pest-4.jpg"
              alt="Household pest problem"
              loading="lazy"
            />

            <div class="image-overlay">
              <span>Household Pest Control</span>
            </div>
          </div>


          <div class="pest-image-card">
            <img
              src="${import.meta.env.BASE_URL}images/pest-5.jpg"
              alt="Insects inside a property"
              loading="lazy"
            />

            <div class="image-overlay">
              <span>Pest Management</span>
            </div>
          </div>


          <div class="pest-image-card">
            <img
              src="${import.meta.env.BASE_URL}images/pest-6.jpg"
              alt="Pest infestation"
              loading="lazy"
            />

            <div class="image-overlay">
              <span>Professional Treatment</span>
            </div>
          </div>

        </div>


        <!-- VIDEOS -->

        <div class="demonstration-heading">

          <span class="section-label">
            OUR WORK IN ACTION
          </span>

          <h3>
            Professional Pest Control Demonstrations
          </h3>

          <p>
            Watch our pest control work in action and see how
            we tackle pest problems in different areas.
          </p>

        </div>


        <div class="video-grid">

          <div class="video-card">

            <video
              controls
              preload="metadata"
              playsinline
            >
              <source
                src="${import.meta.env.BASE_URL}videos/demo-1.mp4"
                type="video/mp4"
              />
              Your browser does not support video playback.
            </video>

            <div class="video-info">
              <span>01</span>
              <h4>Pest Control Demonstration</h4>
            </div>

          </div>


          <div class="video-card">

            <video
              controls
              preload="metadata"
              playsinline
            >
              <source
                src="${import.meta.env.BASE_URL}videos/demo-2.mp4"
                type="video/mp4"
              />
              Your browser does not support video playback.
            </video>

            <div class="video-info">
              <span>02</span>
              <h4>Professional Pest Treatment</h4>
            </div>

          </div>


          <div class="video-card">

            <video
              controls
              preload="metadata"
              playsinline
            >
              <source
                src="${import.meta.env.BASE_URL}videos/demo-3.mp4"
                type="video/mp4"
              />
              Your browser does not support video playback.
            </video>

            <div class="video-info">
              <span>03</span>
              <h4>On-Site Pest Control</h4>
            </div>

          </div>


          <div class="video-card">

            <video
              controls
              preload="metadata"
              playsinline
            >
              <source
                src="${import.meta.env.BASE_URL}videos/demo-4.mp4"
                type="video/mp4"
              />
              Your browser does not support video playback.
            </video>

            <div class="video-info">
              <span>04</span>
              <h4>Property Pest Treatment</h4>
            </div>

          </div>


          <div class="video-card">

            <video
              controls
              preload="metadata"
              playsinline
            >
              <source
                src="${import.meta.env.BASE_URL}videos/demo-5.mp4"
                type="video/mp4"
              />
              Your browser does not support video playback.
            </video>

            <div class="video-info">
              <span>05</span>
              <h4>Pest Management in Action</h4>
            </div>

          </div>

        </div>

      </div>

    </section>

    <!-- CTA -->
    <section class="cta">

      <div class="container cta-container">

        <div>

          <span>
            NEED PEST CONTROL?
          </span>

          <h2>
            Don't Let Pests Take Over Your Space
          </h2>

          <p>
            Contact us today for professional pest control
            assistance.
          </p>

        </div>

        <a href="tel:+919369214131" class="cta-button">
          📞 93692 14131
        </a>

      </div>

    </section>


    <!-- CONTACT -->
    <section class="contact section" id="contact">

      <div class="container">

        <div class="section-heading">

          <span class="section-label">
            CONTACT US
          </span>

          <h2>
            Let's Take Care of Your Pest Problem
          </h2>

          <p>
            Get in touch with us for pest control services.
          </p>

        </div>


        <div class="contact-grid">

          <a
            href="tel:+919369214131"
            class="contact-card"
          >

            <div class="contact-icon">
              📞
            </div>

            <div>
              <span>Call Us</span>
              <h3>+91 93692 14131</h3>
            </div>

          </a>


          <div class="contact-card">

            <div class="contact-icon">
              📍
            </div>

            <div>
              <span>Our Location</span>

              <h3>Kanpur, Uttar Pradesh</h3>

              <p>
                16/805C, Rawatpur Gaon,<br>
                Karbala Maidan,<br>
                Kanpur – 208019
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  </main>


  <!-- FOOTER -->
  <footer class="footer">

    <div class="container footer-container">

      <div class="footer-brand">

        <img
          src="${import.meta.env.BASE_URL}logo.jpeg"
          alt="Pest Control Services"
        />

        <p>
          A Safer • Cleaner • Pest Free Tomorrow
        </p>

      </div>


      <div class="footer-links">

        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#gallery">Our Work</a>
        <a href="#contact">Contact</a>

      </div>


      <div class="footer-contact">

        <a href="tel:+919369214131">
          📞 +91 93692 14131
        </a>

      </div>

    </div>


    <div class="footer-bottom">

      <p>
        © ${new Date().getFullYear()} Pest Control Services.
        All Rights Reserved.
      </p>

    </div>

  </footer>


  <!-- FLOATING CALL BUTTON -->
  <a
    href="tel:+919369214131"
    class="floating-call"
    aria-label="Call Pest Control"
  >
    📞
  </a>
`;


/* MOBILE MENU */

const menuButton =
  document.querySelector<HTMLButtonElement>("#menuButton");

const mobileMenu =
  document.querySelector<HTMLDivElement>("#mobileMenu");

menuButton?.addEventListener("click", () => {
  mobileMenu?.classList.toggle("active");
});


/* CLOSE MOBILE MENU AFTER CLICKING LINK */

const mobileLinks =
  document.querySelectorAll<HTMLAnchorElement>(".mobile-menu a");

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu?.classList.remove("active");
  });
});