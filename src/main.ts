import "./style.css";

const services = [
  {
    name: "Termite Control",
    icon: `${import.meta.env.BASE_URL}images/termite.png`,
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
    icon: `${import.meta.env.BASE_URL}images/yellowfly.png`,
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
            PEST CONTROL WALA
          </span>

          <h1>
            <span>Pest Control Wala</span>
             Professional Pest Control Services in Kanpur
          </h1>

          <p>
            Pest Control Wala provides professional pest control services in Kanpur for homes,
            offices and commercial spaces. We provide termite control,
            cockroach control, bed bug treatment, rat control,
            mosquito control, fly control, ant control, lizard control,
            honey bee control and yellow fly control to help protect
            your property from common pest problems.
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
              <strong>16 Years</strong>
              <span>Experience</span>
            </div>

            <div class="hero-divider"></div>

            <div class="hero-info-item">
              <strong>Since 2015</strong>
              <span>Serving Customers</span>
            </div>

            <div class="hero-divider"></div>

            <div class="hero-info-item">
              <strong></strong>
              <span>Service Professional</span>
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
            Pest Control Wala — Pest Control Services You Can Trust in Kanpur
          </h2>

          <p>
            Led by <strong></strong>, our pest control service
            has been serving customers since 2015. With <strong>16 years of
            experience</strong>, we provide professional pest management
            solutions for homes, offices, shops and commercial spaces in Kanpur.
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
              Complete Pest Control for Homes & Businesses
            </h3>

            <p>
              From termite and cockroach infestations to bed bugs, ants,
              rats, mosquitoes, flies, lizards, honey bees and yellow flies,
              we offer practical pest control solutions for a wide range of
              common pest problems.
            </p>

            <p>
               focuses on dependable service and professional
              pest management to help keep your property cleaner, safer and
              protected from unwanted pests.
            </p>


            <div class="benefits">

              <div class="benefit">
                <div class="benefit-icon">✓</div>
                <div>
                  <h4>16 Years Experience</h4>
                  <p>Experienced professional pest control service.</p>
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
            Pest Control Wala — Pest Control Services in Kanpur
          </h2>

          <p>
            Professional termite, cockroach, bed bug, ant, rat, mosquito,
            fly, lizard, honey bee and yellow fly control services for
            residential and commercial properties in Kanpur.
          </p>

        </div>


        <div class="services-grid">

          ${services
            .map(
              (service) => `
                <div class="service-card">

                  <div class="service-icon">
                    ${
                      service.icon.startsWith("http") ||
                      service.icon.includes("/images/")
                        ? `<img src="${service.icon}" alt="${service.name}" loading="lazy">`
                        : service.icon
                    }
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
            Whether you need termite treatment, cockroach control, bed bug
            treatment, ant control, rat control, mosquito control, fly control,
            lizard control, honey bee control or yellow fly control, our
            pest control services are designed for homes, offices and
            commercial spaces in Kanpur.
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
            Contact Pest Control Wala and  today for professional pest control
            assistance in Kanpur.
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
            Contact Pest Control Wala and  for reliable pest control services in
            Kanpur, including termite, cockroach, bed bug, rat, mosquito,
            fly and other common pest treatments.
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


          <a
            href="https://wa.me/919369214131"
            class="contact-card whatsapp-contact"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
          >
            <div class="contact-icon whatsapp-icon" aria-hidden="true">
              <svg viewBox="0 0 32 32" role="img" aria-label="WhatsApp">
                <path d="M16 3.2A12.8 12.8 0 0 0 5 22.6L3.4 28.5l6-1.6A12.8 12.8 0 1 0 16 3.2Z" fill="currentColor"/>
                <path d="M11.3 9.8c.3-.3.7-.4 1-.2l1.8 1.1c.3.2.4.6.3.9l-.7 1.5c-.1.2-.1.4 0 .6.5.9 1.4 1.8 2.3 2.3.2.1.4.1.6 0l1.5-.7c.3-.1.7 0 .9.3l1.1 1.8c.2.3.1.7-.2 1- .5.5-1.2.8-1.9.7-1.7-.2-3.7-1.3-5.3-2.9-1.6-1.6-2.7-3.6-2.9-5.3-.1-.7.2-1.4.7-1.9Z" fill="white"/>
              </svg>
            </div>

            <div>
              <span>WhatsApp</span>
              <h3>Chat With Us</h3>
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
          Pest Control Wala • A Safer • Cleaner • Pest Free Tomorrow
        </p>
        <p class="footer-experience">
          Pest Control Wala • 16 Years Experience • Since 2015
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


  <!-- FLOATING CONTACT BUTTONS -->
  <div class="floating-actions">
    <a
      href="https://wa.me/919369214131"
      class="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 3.2A12.8 12.8 0 0 0 5 22.6L3.4 28.5l6-1.6A12.8 12.8 0 1 0 16 3.2Z" fill="currentColor"/>
        <path d="M11.3 9.8c.3-.3.7-.4 1-.2l1.8 1.1c.3.2.4.6.3.9l-.7 1.5c-.1.2-.1.4 0 .6.5.9 1.4 1.8 2.3 2.3.2.1.4.1.6 0l1.5-.7c.3-.1.7 0 .9.3l1.1 1.8c.2.3.1.7-.2 1- .5.5-1.2.8-1.9.7-1.7-.2-3.7-1.3-5.3-2.9-1.6-1.6-2.7-3.6-2.9-5.3-.1-.7.2-1.4.7-1.9Z" fill="white"/>
      </svg>
    </a>

    <a
      href="tel:+919369214131"
      class="floating-call"
      aria-label="Call Pest Control"
    >
      📞
    </a>
  </div>
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