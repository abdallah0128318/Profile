
.
├── images
│   ├── abdallah.jpg
│   ├── abdallah_sayed.jpeg
│   ├── adham_mohamed.jpeg
│   ├── Adham_Mohamed.jpeg
│   ├── Anas_Hesham.jpeg
│   ├── Eman_Khaled.jpeg
│   ├── mocca.jpeg
│   ├── Mohamed_Ehab.jpeg
│   ├── rana_ramadan.jpeg
│   └── tamara.jpeg
├── images.js
├── index.html
├── prompt.md
├── reviews
│   ├── 10.jpeg
│   ├── 11.jpeg
│   ├── 1.jpeg
│   ├── 2.jpeg
│   ├── 3.jpeg
│   ├── 4.jpeg
│   ├── 5.jpeg
│   ├── 6.jpeg
│   ├── 7.jpeg
│   ├── 8.jpeg
│   └── 9.jpeg
├── reviews.js
├── script.js
└── style.css

3 directories, 27 files
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Abdallah Qapeel Taha | Math Teacher</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />

  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-0VHWKX9MCW"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-0VHWKX9MCW');
  </script>
</head>
<body>

  <!-- ===== NAVBAR ===== -->
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="#hero" class="nav-logo">AQT</a>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="nav-links">
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#levels" class="nav-link">Levels</a></li>
        <li><a href="#style" class="nav-link">Teaching Style</a></li>
        <li><a href="#experience" class="nav-link">Experience</a></li>
        <li><a href="#gallery" class="nav-link">Gallery</a></li>
        <li><a href="#reviews" class="nav-link">Reviews</a></li>
        <li><a href="#contact" class="nav-link nav-cta">Contact</a></li>
      </ul>
    </div>
  </nav>

  <!-- ===== HERO ===== -->
  <section class="hero" id="hero">
    <div class="hero-bg-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>
    <div class="hero-content">
      <div class="hero-text">
        <span class="hero-tag reveal">Math Educator</span>
        <h1 class="hero-name reveal delay-1">Abdallah<br /><em>Qapeel Taha</em></h1>
        <p class="hero-title reveal delay-2">Math Teacher &nbsp;|&nbsp; Foundation to Thanaweya Amma<br />Ex-Programmer</p>
        <div class="hero-btns reveal delay-3">
          <a href="#contact" class="btn btn-primary">Contact Me</a>
          <a href="#gallery" class="btn btn-outline">View Students Gallery</a>
        </div>
      </div>
      <div class="hero-image reveal delay-2">
        <div class="profile-frame">
          <img
            src="images/abdallah.jpg"
            alt="Abdallah Qapeel Taha"
            class="profile-photo"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
          />
          <div class="profile-placeholder" style="display:none;">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="35" r="22" fill="rgba(255,255,255,0.25)"/>
              <ellipse cx="50" cy="85" rx="35" ry="22" fill="rgba(255,255,255,0.25)"/>
            </svg>
            <span>Photo</span>
          </div>
          <div class="profile-badge">
            <span>✦</span> Math Expert
          </div>
        </div>
      </div>
    </div>
    <a href="#about" class="scroll-hint">
      <span>Scroll</span>
      <div class="scroll-arrow"></div>
    </a>
  </section>

  <!-- ===== ABOUT ===== -->
  <section class="section about-section" id="about">
    <div class="container">
      <div class="section-label reveal">About Me</div>
      <div class="about-grid">
        <div class="about-text reveal delay-1">
          <h2 class="section-title">From Code to Classroom —<br /><em>Logic Never Changes</em></h2>
          <p>My journey began in software engineering, where I spent years solving complex problems through structured, logical thinking. That foundation became my greatest teaching asset when I transitioned into mathematics education.</p>
          <p>I believe that mathematics is not a subject to be memorized — it is a language to be understood. My programming background allows me to break down any concept into clear, logical steps that students genuinely grasp, not just repeat.</p>
          <p>From foundational arithmetic to the demands of Thanaweya Amma, I meet every student where they are and guide them toward deep, confident understanding — building problem-solvers, not just exam-passers.</p>
        </div>
        <div class="about-highlights reveal delay-2">
          <div class="highlight-card">
            <div class="highlight-icon">🧠</div>
            <div>
              <h4>Logical Thinking</h4>
              <p>Engineering background fuels a structured, analytical teaching approach</p>
            </div>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">🎯</div>
            <div>
              <h4>Deep Understanding</h4>
              <p>Concepts are explained from their roots, not through shortcuts</p>
            </div>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">🌱</div>
            <div>
              <h4>Student-Centered</h4>
              <p>Every lesson adapts to the individual student's pace and needs</p>
            </div>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">💡</div>
            <div>
              <h4>Real-World Math</h4>
              <p>Showing students where and why math matters in everyday life</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== TEACHING LEVELS ===== -->
  <section class="section levels-section" id="levels">
    <div class="container">
      <div class="section-label reveal">What I Teach</div>
      <h2 class="section-title centered reveal delay-1">Teaching Levels</h2>
      <p class="section-subtitle reveal delay-2">Comprehensive mathematics education across all scholastic stages</p>
      <div class="levels-grid">
        <div class="level-card reveal delay-1">
          <div class="level-icon">🔢</div>
          <h3>Foundation</h3>
          <p>Building a rock-solid numerical foundation with confidence, number sense, and basic operations that last a lifetime.</p>
          <div class="card-accent"></div>
        </div>
        <div class="level-card reveal delay-2">
          <div class="level-icon">📐</div>
          <h3>Primary &amp; Prep</h3>
          <p>Algebra, geometry, fractions, and equations — taught with clarity and patience to prepare students for secondary challenges.</p>
          <div class="card-accent"></div>
        </div>
        <div class="level-card reveal delay-3">
          <div class="level-icon">🎓</div>
          <h3>Secondary &amp; Thanaweya Amma</h3>
          <p>Full curriculum coverage — calculus, trigonometry, statistics — with focused exam strategies and deep conceptual mastery.</p>
          <div class="card-accent"></div>
        </div>
        <div class="level-card reveal delay-4">
          <div class="level-icon">🌍</div>
          <h3>International &amp; Languages</h3>
          <p>Mathematics taught in English for international curricula, language schools, and globally-oriented students.</p>
          <div class="card-accent"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== TEACHING STYLE ===== -->
  <section class="section style-section" id="style">
    <div class="container">
      <div class="section-label reveal">My Approach</div>
      <div class="style-grid">
        <div class="style-text reveal delay-1">
          <h2 class="section-title">A Teaching Style Built on<br /><em>Clarity &amp; Logic</em></h2>
          <p>Every student deserves to understand the "why" behind every equation. My teaching philosophy is shaped by years of engineering problem-solving, brought into the classroom with warmth and accessibility.</p>
        </div>
        <div class="style-pillars">
          <div class="pillar reveal delay-1">
            <div class="pillar-num">01</div>
            <div class="pillar-content">
              <h4>Simplified Explanations</h4>
              <p>Complex topics are broken down into digestible, logical steps that click — not confuse.</p>
            </div>
          </div>
          <div class="pillar reveal delay-2">
            <div class="pillar-num">02</div>
            <div class="pillar-content">
              <h4>Step-by-Step Problem Solving</h4>
              <p>Students learn a reliable method for approaching any problem, building unshakeable confidence.</p>
            </div>
          </div>
          <div class="pillar reveal delay-3">
            <div class="pillar-num">03</div>
            <div class="pillar-content">
              <h4>Real-Life Applications</h4>
              <p>Math is shown in context — students see why it matters, making concepts far more memorable.</p>
            </div>
          </div>
          <div class="pillar reveal delay-4">
            <div class="pillar-num">04</div>
            <div class="pillar-content">
              <h4>Understanding Over Memorization</h4>
              <p>The goal is never to memorize — it's to truly understand, so knowledge holds under exam pressure.</p>
            </div>
          </div>
          <div class="pillar reveal delay-5">
            <div class="pillar-num">05</div>
            <div class="pillar-content">
              <h4>Supportive Environment</h4>
              <p>A friendly, judgment-free space where students feel safe to ask questions and make mistakes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== EXPERIENCE ===== -->
  <section class="section experience-section" id="experience">
    <div class="container">
      <div class="section-label reveal">Track Record</div>
      <h2 class="section-title centered reveal delay-1">Experience &amp; Impact</h2>
      <p class="section-subtitle reveal delay-2">Building a reputation one student at a time</p>
      <div class="experience-grid">
        <div class="exp-card reveal delay-1">
          <div class="exp-icon">📚</div>
          <h3>Multi-Level Teaching</h3>
          <p>Extensive experience delivering mathematics across all educational stages — from early learners building number sense to senior students conquering Thanaweya Amma curricula.</p>
        </div>
        <div class="exp-card reveal delay-2">
          <div class="exp-icon">📈</div>
          <h3>Measurable Improvement</h3>
          <p>Students consistently demonstrate significant grade improvements and, more importantly, a genuine shift in confidence and attitude toward mathematics.</p>
        </div>
        <div class="exp-card reveal delay-3">
          <div class="exp-icon">🤝</div>
          <h3>Parent-Teacher Partnership</h3>
          <p>Transparent communication with families ensures that progress is tracked, concerns are addressed early, and goals remain aligned throughout the learning journey.</p>
        </div>
        <div class="exp-card reveal delay-4">
          <div class="exp-icon">💻</div>
          <h3>Tech-Enhanced Teaching</h3>
          <p>A programming background enables the use of digital tools, visual aids, and structured frameworks that make abstract math tangible and engaging for modern learners.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== GALLERY ===== -->
  <section class="section gallery-section" id="gallery">
    <div class="container">
      <div class="section-label reveal">Success Stories</div>
      <h2 class="section-title centered reveal delay-1">Students Gallery</h2>
      <p class="section-subtitle reveal delay-2">Proud moments and achievements from the classroom</p>
      <div class="gallery-grid" id="gallery-grid">
        <!-- Dynamically populated by script.js -->
      </div>
    </div>
  </section>

  <!-- ===== REVIEWS ===== -->
  <section class="section reviews-section" id="reviews">
    <div class="container">
      <div class="section-label reveal">Social Proof</div>
      <h2 class="section-title centered reveal delay-1">Student Reviews</h2>
      <p class="section-subtitle reveal delay-2">Real feedback from students and parents who experienced the difference</p>
      <div class="reviews-grid" id="reviews-grid">
        <!-- Dynamically populated by script.js -->
      </div>
    </div>
  </section>

  <!-- ===== CONTACT ===== -->
  <section class="section contact-section" id="contact">
    <div class="container">
      <div class="section-label reveal">Get In Touch</div>
      <h2 class="section-title centered reveal delay-1">Ready to Start Learning?</h2>
      <p class="section-subtitle reveal delay-2">Reach out today to discuss your child's needs and schedule a first session</p>
      <div class="contact-cards reveal delay-2">
        <a href="tel:+201069076948" class="contact-card">
          <div class="contact-icon">📞</div>
          <div class="contact-info">
            <span class="contact-label">Call Directly</span>
            <span class="contact-value">+20 106 907 6948</span>
          </div>
        </a>
        <a href="https://wa.me/201069076948?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20math%20lessons" class="contact-card whatsapp" target="_blank" rel="noopener">
          <div class="contact-icon">💬</div>
          <div class="contact-info">
            <span class="contact-label">WhatsApp</span>
            <span class="contact-value">Chat Now</span>
          </div>
        </a>
        <a href="https://www.facebook.com/bdallhqabyl.152632/" class="contact-card facebook" target="_blank" rel="noopener">
          <div class="contact-icon">📘</div>
          <div class="contact-info">
            <span class="contact-label">Facebook</span>
            <span class="contact-value">Follow Page</span>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- ===== FOOTER ===== -->
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <a href="#hero" class="footer-logo">AQT</a>
        <p class="footer-name">Abdallah Qapeel Taha</p>
        <p class="footer-copy">&copy; 2025 All rights reserved. Math Teacher | Ex-Programmer</p>
      </div>
    </div>
  </footer>

  <script src="images.js"></script>
  <script src="reviews.js"></script>
  <script src="script.js"></script>
</body>
</html>/**
 * reviews.js — Student Reviews / Testimonials
 *
 * HOW TO ADD REVIEWS:
 * 1. Place the screenshot inside the /reviews/ folder
 * 2. Add the filename to the array below:
 *    "reviews/YOUR_FILE_NAME.jpg"
 * 3. Save and refresh — the section updates automatically.
 *
 * Supported formats: .jpg, .jpeg, .png, .webp
 * Recommended: screenshot at full mobile width for best display
 */

const reviews = [
  "reviews/1.jpeg",
  "reviews/2.jpeg",
  "reviews/3.jpeg",
  "reviews/4.jpeg",
  "reviews/5.jpeg",
  "reviews/6.jpeg",
  "reviews/7.jpeg",
  "reviews/8.jpeg",
  "reviews/9.jpeg",
  "reviews/10.jpeg",
  "reviews/11.jpeg",
];/* ============================================================
   script.js — Abdallah Qapeel Taha Portfolio
   ============================================================ */

/* ---- 1. NAVBAR: Scroll + Hamburger ---- */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
const allNavLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  navLinks.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close menu on link click
allNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  }
});


/* ---- 2. SCROLL REVEAL ANIMATION ---- */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);  // animate once
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));


/* ---- 3. GALLERY: Dynamic Rendering ---- */
function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  // Guard: images array must exist (defined in images.js)
  if (typeof images === 'undefined' || !Array.isArray(images)) {
    grid.innerHTML = '<p class="gallery-empty">Gallery coming soon.</p>';
    return;
  }

  if (images.length === 0) {
    grid.innerHTML = '<p class="gallery-empty">No students added yet. Edit images.js to populate the gallery.</p>';
    return;
  }

  images.forEach((student, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-item reveal';
    item.style.animationDelay = `${index * 0.07}s`;

    // Image wrapper
    const wrap = document.createElement('div');
    wrap.className = 'gallery-img-wrap';

    const img = document.createElement('img');
    img.alt = student.name;
    img.loading = 'lazy';

    // Graceful fallback if image doesn't exist
    img.onerror = () => {
      wrap.innerHTML = `<div class="gallery-img-placeholder">🎓</div>`;
    };

    img.src = student.src;
    wrap.appendChild(img);

    // Name label
    const nameEl = document.createElement('div');
    nameEl.className = 'gallery-name';
    nameEl.textContent = student.name;

    item.appendChild(wrap);
    item.appendChild(nameEl);
    grid.appendChild(item);

    // Re-observe newly created elements for reveal animation
    revealObserver.observe(item);
  });
}

renderGallery();


/* ---- 4. REVIEWS: Dynamic Rendering ---- */
function renderReviews() {
  const grid = document.getElementById('reviews-grid');
  if (!grid) return;

  // Guard: reviews array must exist (defined in reviews.js)
  if (typeof reviews === 'undefined' || !Array.isArray(reviews)) {
    grid.innerHTML = '<p class="reviews-empty">Reviews coming soon.</p>';
    return;
  }

  if (reviews.length === 0) {
    grid.innerHTML = '<p class="reviews-empty">No reviews added yet. Edit reviews.js to populate this section.</p>';
    return;
  }

  reviews.forEach((src, index) => {
    const item = document.createElement('div');
    item.className = 'review-item reveal';
    item.style.animationDelay = `${index * 0.07}s`;

    // Image wrapper
    const wrap = document.createElement('div');
    wrap.className = 'review-img-wrap';

    const img = document.createElement('img');
    img.alt = `Student Review ${index + 1}`;
    img.loading = 'lazy';

    // Graceful fallback if image doesn't exist
    img.onerror = () => {
      wrap.innerHTML = `<div class="review-img-placeholder">⭐</div>`;
    };

    img.src = src;
    wrap.appendChild(img);
    item.appendChild(wrap);
    grid.appendChild(item);

    // Observe for scroll reveal animation
    revealObserver.observe(item);
  });
}

renderReviews();
const sections = document.querySelectorAll('section[id]');

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      allNavLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === `#${id}`
        );
      });
    }
  });
}, {
  threshold: 0.35,
  rootMargin: '-70px 0px -35% 0px'
});

sections.forEach(s => spyObserver.observe(s));


/* ---- 5. SMOOTH SCROLL for all anchor links ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = navbar.offsetHeight + 8;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

and here is the css file also

```
/* ============================================================
   ABDALLAH QAPEEL TAHA — Portfolio CSS
   Mobile-First | Dark Navy + Gold Accent
   ============================================================ */

/* ---- RESET & BASE ---- */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --navy:       #0d1b2a;
  --navy-mid:   #1a2d42;
  --navy-light: #243b55;
  --gold:       #c9a84c;
  --gold-light: #e2c472;
  --white:      #ffffff;
  --off-white:  #f5f7fa;
  --gray:       #8a9bb0;
  --gray-light: #e8edf3;
  --text:       #2c3e50;
  --radius:     14px;
  --shadow:     0 8px 32px rgba(13,27,42,0.13);
  --shadow-lg:  0 20px 60px rgba(13,27,42,0.18);
  --transition: 0.35s cubic-bezier(0.4,0,0.2,1);
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body:    'Poppins', system-ui, sans-serif;
}

html { scroll-behavior: smooth; overflow-x: hidden; }

body {
  font-family: var(--font-body);
  color: var(--text);
  background: var(--white);
  overflow-x: hidden;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}

img { max-width: 100%; display: block; }
a { text-decoration: none; color: inherit; }
ul { list-style: none; }

/* ---- UTILITY ---- */
.container {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 80px 0;
}

.section-label {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  border: 1.5px solid var(--gold);
  padding: 5px 14px;
  border-radius: 100px;
  margin-bottom: 18px;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 700;
  color: var(--navy);
  line-height: 1.2;
  margin-bottom: 16px;
}

.section-title em {
  font-style: italic;
  color: var(--gold);
}

.section-title.centered { text-align: center; }

.section-subtitle {
  font-size: 1rem;
  color: var(--gray);
  text-align: center;
  max-width: 560px;
  margin: 0 auto 48px;
}

/* ---- SCROLL REVEAL ---- */
.reveal {
  opacity: 0;
  transform: translateY(36px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.delay-1 { transition-delay: 0.1s; }
.delay-2 { transition-delay: 0.2s; }
.delay-3 { transition-delay: 0.3s; }
.delay-4 { transition-delay: 0.4s; }
.delay-5 { transition-delay: 0.5s; }

/* ============================================================
   NAVBAR
   ============================================================ */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 16px 0;
  background: transparent;
  transition: background var(--transition), box-shadow var(--transition), padding var(--transition);
}

.navbar.scrolled {
  background: rgba(13, 27, 42, 0.97);
  box-shadow: 0 2px 20px rgba(0,0,0,0.25);
  padding: 10px 0;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
}

.nav-logo {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 900;
  color: var(--white);
  letter-spacing: 0.04em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-link {
  font-size: 0.88rem;
  font-weight: 500;
  color: rgba(255,255,255,0.82);
  transition: color var(--transition);
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -3px; left: 0; right: 0;
  height: 1.5px;
  background: var(--gold);
  transform: scaleX(0);
  transition: transform var(--transition);
  transform-origin: left;
}

.nav-link:hover { color: var(--white); }
.nav-link:hover::after { transform: scaleX(1); }

.nav-cta {
  background: var(--gold);
  color: var(--navy) !important;
  padding: 9px 22px;
  border-radius: 100px;
  font-weight: 600;
  transition: background var(--transition), transform var(--transition) !important;
}

.nav-cta::after { display: none; }
.nav-cta:hover { background: var(--gold-light); transform: translateY(-1px); }

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  z-index: 1001;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: var(--transition);
}

.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ============================================================
   HERO
   ============================================================ */
.hero {
  min-height: 100svh;
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 60%, #1e3a5f 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 100px 20px 60px;
}

/* Background shapes */
.hero-bg-shapes { position: absolute; inset: 0; pointer-events: none; }

.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.18;
}

.shape-1 {
  width: 500px; height: 500px;
  background: var(--gold);
  top: -150px; right: -100px;
}

.shape-2 {
  width: 350px; height: 350px;
  background: #3a7bd5;
  bottom: -100px; left: -80px;
}

.shape-3 {
  width: 200px; height: 200px;
  background: var(--gold-light);
  top: 50%; left: 40%;
  transform: translate(-50%, -50%);
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  max-width: 1100px;
  width: 100%;
  position: relative;
  z-index: 1;
}

.hero-text { flex: 1; }

.hero-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  border: 1.5px solid rgba(201,168,76,0.5);
  padding: 5px 14px;
  border-radius: 100px;
  margin-bottom: 20px;
}

.hero-name {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 7vw, 4.5rem);
  font-weight: 900;
  color: var(--white);
  line-height: 1.08;
  margin-bottom: 20px;
}

.hero-name em {
  font-style: italic;
  color: var(--gold);
}

.hero-title {
  font-size: clamp(0.85rem, 2.5vw, 1.05rem);
  color: rgba(255,255,255,0.7);
  font-weight: 300;
  line-height: 1.7;
  margin-bottom: 36px;
  letter-spacing: 0.02em;
}

.hero-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 30px;
  border-radius: 100px;
  font-family: var(--font-body);
  font-size: 0.92rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  min-height: 48px; /* touch-friendly */
  white-space: nowrap;
}

.btn-primary {
  background: var(--gold);
  color: var(--navy);
}

.btn-primary:hover {
  background: var(--gold-light);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(201,168,76,0.35);
}

.btn-outline {
  border: 2px solid rgba(255,255,255,0.5);
  color: var(--white);
  background: transparent;
}

.btn-outline:hover {
  border-color: var(--white);
  background: rgba(255,255,255,0.1);
  transform: translateY(-2px);
}

/* Profile Image */
.hero-image {
  flex-shrink: 0;
}

.profile-frame {
  width: 320px;
  height: 400px;
  border-radius: 160px 160px 120px 120px;
  border: 3px solid rgba(201,168,76,0.4);
  background: rgba(255,255,255,0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  backdrop-filter: blur(10px);
  overflow: visible;
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  border-radius: 157px 157px 117px 117px;
  overflow: hidden;
}

.profile-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: rgba(255,255,255,0.45);
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.profile-placeholder svg {
  width: 80px;
  height: 80px;
}

.profile-badge {
  position: absolute;
  bottom: -16px; right: -18px;
  background: var(--gold);
  color: var(--navy);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 10px 18px;
  border-radius: 100px;
  box-shadow: 0 6px 20px rgba(201,168,76,0.45);
  white-space: nowrap;
  z-index: 2;
}

/* Scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 28px; left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
  z-index: 2;
}

.scroll-arrow {
  width: 1.5px;
  height: 36px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.3), transparent);
  animation: scrollPulse 1.8s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(1); }
  50% { opacity: 0.9; transform: scaleY(1.15); }
}

/* ============================================================
   ABOUT
   ============================================================ */
.about-section { background: var(--off-white); }

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

.about-text p {
  color: #5a6a7a;
  margin-bottom: 16px;
  font-size: 0.97rem;
}

.about-highlights {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.highlight-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: var(--white);
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: var(--shadow);
  transition: transform var(--transition), box-shadow var(--transition);
}

.highlight-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

.highlight-icon {
  font-size: 1.6rem;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(201,168,76,0.1);
  border-radius: 10px;
}

.highlight-card h4 {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--navy);
  margin-bottom: 4px;
}

.highlight-card p {
  font-size: 0.84rem;
  color: var(--gray);
  line-height: 1.5;
}

/* ============================================================
   LEVELS
   ============================================================ */
.levels-section { background: var(--white); }

.levels-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.level-card {
  background: var(--white);
  border: 1.5px solid var(--gray-light);
  border-radius: var(--radius);
  padding: 32px 24px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
  cursor: default;
}

.level-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: var(--gold);
}

.level-card:hover .card-accent {
  width: 100%;
}

.level-icon {
  font-size: 2.4rem;
  margin-bottom: 16px;
  display: block;
}

.level-card h3 {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--navy);
  margin-bottom: 12px;
  font-weight: 700;
}

.level-card p {
  font-size: 0.86rem;
  color: var(--gray);
  line-height: 1.6;
}

.card-accent {
  position: absolute;
  bottom: 0; left: 0;
  height: 3px;
  width: 0;
  background: linear-gradient(to right, var(--gold), var(--gold-light));
  transition: width 0.5s ease;
}

/* ============================================================
   TEACHING STYLE
   ============================================================ */
.style-section { background: var(--navy); }

.style-section .section-label { color: var(--gold-light); border-color: rgba(201,168,76,0.4); }

.style-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 64px;
  align-items: start;
}

.style-text .section-title { color: var(--white); }
.style-text p { color: rgba(255,255,255,0.65); font-size: 0.97rem; }

.style-pillars {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.pillar {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 22px;
  border-radius: var(--radius);
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  transition: background var(--transition), border-color var(--transition);
}

.pillar:hover {
  background: rgba(201,168,76,0.08);
  border-color: rgba(201,168,76,0.25);
}

.pillar-num {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 900;
  color: rgba(201,168,76,0.3);
  flex-shrink: 0;
  line-height: 1;
  min-width: 40px;
}

.pillar-content h4 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 6px;
}

.pillar-content p {
  font-size: 0.86rem;
  color: rgba(255,255,255,0.55);
  line-height: 1.6;
}

/* ============================================================
   EXPERIENCE
   ============================================================ */
.experience-section { background: var(--off-white); }

.experience-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.exp-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 32px;
  box-shadow: var(--shadow);
  transition: transform var(--transition), box-shadow var(--transition);
  border-left: 4px solid transparent;
}

.exp-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-left-color: var(--gold);
}

.exp-icon {
  font-size: 2rem;
  margin-bottom: 16px;
  display: block;
}

.exp-card h3 {
  font-family: var(--font-display);
  font-size: 1.15rem;
  color: var(--navy);
  margin-bottom: 12px;
  font-weight: 700;
}

.exp-card p {
  font-size: 0.9rem;
  color: #6a7a8a;
  line-height: 1.7;
}

/* ============================================================
   GALLERY
   ============================================================ */
.gallery-section { background: var(--white); }

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.gallery-item {
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  background: var(--gray-light);
  transition: transform var(--transition), box-shadow var(--transition);
  animation: fadeInUp 0.6s ease both;
  cursor: pointer;
}

.gallery-item:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: var(--shadow-lg);
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

.gallery-img-wrap {
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;
  background: linear-gradient(135deg, var(--navy-light), var(--navy-mid));
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover .gallery-img-wrap img {
  transform: scale(1.08);
}

.gallery-img-placeholder {
  font-size: 3rem;
  opacity: 0.4;
}

.gallery-name {
  padding: 12px 14px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--navy);
  text-align: center;
  background: var(--white);
}

/* Empty gallery state */
.gallery-empty {
  grid-column: 1 / -1;
  text-align: center;
  padding: 48px;
  color: var(--gray);
  font-size: 0.95rem;
}

/* ============================================================
   CONTACT
   ============================================================ */
.contact-section {
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%);
}

.contact-section .section-label { color: var(--gold-light); border-color: rgba(201,168,76,0.4); }
.contact-section .section-title { color: var(--white); }
.contact-section .section-subtitle { color: rgba(255,255,255,0.6); }

.contact-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 8px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(255,255,255,0.07);
  border: 1.5px solid rgba(255,255,255,0.12);
  border-radius: var(--radius);
  padding: 22px 28px;
  min-width: 220px;
  transition: background var(--transition), transform var(--transition), border-color var(--transition);
  cursor: pointer;
}

.contact-card:hover {
  background: rgba(255,255,255,0.13);
  border-color: rgba(255,255,255,0.28);
  transform: translateY(-3px);
}

.contact-card.whatsapp:hover { background: rgba(37,211,102,0.15); border-color: rgba(37,211,102,0.4); }
.contact-card.facebook:hover { background: rgba(66,103,178,0.2); border-color: rgba(66,103,178,0.5); }

.contact-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
}

.contact-label {
  display: block;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
  margin-bottom: 3px;
}

.contact-value {
  font-weight: 600;
  color: var(--white);
  font-size: 1rem;
}

/* ============================================================
   FOOTER
   ============================================================ */
.footer {
  background: var(--navy);
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 36px 0;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
}

.footer-logo {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 900;
  color: var(--gold);
  margin-bottom: 4px;
}

.footer-name {
  font-size: 0.95rem;
  font-weight: 500;
  color: rgba(255,255,255,0.75);
}

.footer-copy {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.35);
}

/* ============================================================
   REVIEWS / TESTIMONIALS
   ============================================================ */
.reviews-section { background: var(--off-white); }

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 22px;
}

.review-item {
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  background: var(--white);
  transition: transform var(--transition), box-shadow var(--transition);
  animation: fadeInUp 0.6s ease both;
  cursor: pointer;
}

.review-item:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: var(--shadow-lg);
}

.review-img-wrap {
  width: 100%;
  overflow: hidden;
  background: var(--gray-light);
  display: flex;
  align-items: center;
  justify-content: center;
}

.review-img-wrap img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.review-item:hover .review-img-wrap img {
  transform: scale(1.04);
}

.review-img-placeholder {
  font-size: 3rem;
  opacity: 0.35;
  padding: 48px 0;
}

.reviews-empty {
  grid-column: 1 / -1;
  text-align: center;
  padding: 48px;
  color: var(--gray);
  font-size: 0.95rem;
}

/* ============================================================
   RESPONSIVE — TABLET (max 1024px)
   ============================================================ */
@media (max-width: 1024px) {
  .levels-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .style-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

/* ============================================================
   RESPONSIVE — MOBILE (max 768px)
   ============================================================ */
@media (max-width: 768px) {

  /* Nav */
  .hamburger { display: flex; }

  .nav-links {
    position: fixed;
    top: 0; right: 0;
    width: min(300px, 80vw);
    height: 100svh;
    background: var(--navy);
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0;
    padding: 80px 32px 40px;
    transform: translateX(100%);
    transition: transform var(--transition);
    box-shadow: -8px 0 40px rgba(0,0,0,0.3);
  }

  .nav-links.open {
    transform: translateX(0);
  }

  .nav-links li {
    width: 100%;
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }

  .nav-link {
    display: block;
    padding: 16px 0;
    font-size: 1.05rem;
    color: rgba(255,255,255,0.85);
  }

  .nav-cta {
    margin-top: 20px;
    background: var(--gold);
    color: var(--navy) !important;
    text-align: center;
    border-radius: 100px;
    padding: 14px 0 !important;
    width: 100%;
  }

  /* Hero */
  .hero {
    padding: 90px 20px 70px;
    align-items: flex-start;
  }

  .hero-content {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    gap: 32px;
  }

  .hero-btns {
    justify-content: center;
  }

  .profile-frame {
    width: 230px;
    height: 285px;
  }

  .profile-badge {
    right: -10px;
    bottom: -14px;
    font-size: 0.7rem;
    padding: 8px 13px;
  }

  .scroll-hint { display: none; }

  /* Sections */
  .section { padding: 60px 0; }

  .levels-grid { grid-template-columns: 1fr; gap: 16px; }

  .experience-grid {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  .reviews-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  .contact-cards {
    flex-direction: column;
    align-items: stretch;
  }

  .contact-card {
    min-width: unset;
    width: 100%;
  }

  .style-pillars { gap: 12px; }
  .pillar { padding: 16px; }
}

/* ============================================================
   RESPONSIVE — SMALL MOBILE (max 420px)
   ============================================================ */
@media (max-width: 420px) {
  .hero-name { font-size: 2.2rem; }

  .gallery-grid {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .btn {
    padding: 13px 22px;
    font-size: 0.87rem;
  }

  .section-title { font-size: 1.65rem; }
}
```

and now please give me a fully updated veriosn of the files u changed not just the part u changed and put the files name commented at the top of the file. and give me a fully updted summary for everything u did which i need to start a new chat to lessen tokeens burning. 