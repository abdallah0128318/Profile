/* script.js */

/* ============================================================
   Abdallah Qapeel Taha Portfolio — script.js
   Features:
     1. Sticky navbar + hamburger menu          (original)
     2. Scroll reveal (IntersectionObserver)    (original)
     3. renderGallery()                         (original)
     4. renderReviews()                         (original)
     5. Scroll spy (active nav link)            (original)
     6. Smooth scroll for anchor links          (original)
     NEW ↓
     7. renderFeaturedReviews()                 (NEW)
     8. Language toggle AR / EN                 (NEW)
   ============================================================ */


/* ================================================================
   NEW — Featured Reviews Data
   Change these 3 paths to whichever review images look best.
   ================================================================ */
const featuredReviews = [
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
  "reviews/16.png",
  "reviews/17.png",
  "reviews/18.png",
  "reviews/19.png",
  "reviews/20.png",
];


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
      revealObserver.unobserve(entry.target);
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

    const wrap = document.createElement('div');
    wrap.className = 'gallery-img-wrap';

    const img = document.createElement('img');
    img.alt = student.name;
    img.loading = 'lazy';
    img.onerror = () => {
      wrap.innerHTML = `<div class="gallery-img-placeholder">🎓</div>`;
    };
    img.src = student.src;
    wrap.appendChild(img);

    const nameEl = document.createElement('div');
    nameEl.className = 'gallery-name';
    nameEl.textContent = student.name;

    item.appendChild(wrap);
    item.appendChild(nameEl);
    grid.appendChild(item);

    revealObserver.observe(item);
  });
}

renderGallery();


/* ---- 4. REVIEWS: Dynamic Rendering ---- */
function renderReviews() {
  const grid = document.getElementById('reviews-grid');
  if (!grid) return;

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

    const wrap = document.createElement('div');
    wrap.className = 'review-img-wrap';

    const img = document.createElement('img');
    img.alt = `Student Review ${index + 1}`;
    img.loading = 'lazy';
    img.onerror = () => {
      wrap.innerHTML = `<div class="review-img-placeholder">⭐</div>`;
    };
    img.src = src;
    wrap.appendChild(img);
    item.appendChild(wrap);
    grid.appendChild(item);

    revealObserver.observe(item);
  });
}

renderReviews();


/* ---- 5. SCROLL SPY ---- */
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


/* ---- 6. SMOOTH SCROLL ---- */
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


/* ================================================================
   NEW — 7. RENDER FEATURED REVIEWS
   Picks the top 3 from featuredReviews[] and injects them
   into #featured-reviews-grid with card UI + scroll reveal.
   ================================================================ */
function renderFeaturedReviews() {
  const grid = document.getElementById('featured-reviews-grid');
  if (!grid) return;

  if (!Array.isArray(featuredReviews) || featuredReviews.length === 0) return;

  featuredReviews.forEach((src, index) => {
    const card = document.createElement('div');
    card.className = 'fr-card reveal';
    card.style.transitionDelay = `${index * 0.12}s`;

    const img = document.createElement('img');
    img.src = src;
    img.alt = `Featured Review ${index + 1}`;
    img.loading = 'lazy';
    img.onerror = () => {
      card.innerHTML = `<div class="fr-placeholder">⭐<br>Review ${index + 1}</div>`;
    };

    card.appendChild(img);
    grid.appendChild(card);

    revealObserver.observe(card);
  });
}

renderFeaturedReviews();


/* ================================================================
   NEW — 8. LANGUAGE TOGGLE (AR / EN)
   - Button in navbar shows current opposite language
   - Translates all [data-en] / [data-ar] elements
   - Applies RTL direction + .arabic class on <body>
   - Persists choice in localStorage
   ================================================================ */
(function initLangToggle() {
  const langToggle = document.getElementById('langToggle');
  const langLabel  = document.getElementById('langLabel');
  if (!langToggle || !langLabel) return;

  // Read saved preference, default to English
  let currentLang = localStorage.getItem('aqt-lang') || 'en';

  function applyLanguage(lang) {
    const isAr = lang === 'ar';

    // Set HTML attributes
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');

    // Toggle body class for RTL CSS rules
    document.body.classList.toggle('arabic', isAr);

    // Update button label (shows the OTHER language)
    langLabel.textContent = isAr ? 'EN' : 'AR';

    // Translate every element that has data-en / data-ar
    document.querySelectorAll('[data-en]').forEach(el => {
      const text = isAr
        ? (el.getAttribute('data-ar') || el.getAttribute('data-en'))
        : el.getAttribute('data-en');

      // Only update textContent — never touch href, src, id, class
      if (text) el.textContent = text;
    });

    // Special case: hero-title has <br> — handle innerHTML carefully
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      if (isAr) {
        heroTitle.innerHTML = 'مدرّس رياضيات &nbsp;|&nbsp; من الأساسي حتى الثانوية العامة<br />مبرمج سابق';
      } else {
        heroTitle.innerHTML = 'Math Teacher &nbsp;|&nbsp; Foundation to Thanaweya Amma<br />Ex-Programmer';
      }
    }

    // Persist
    localStorage.setItem('aqt-lang', lang);
    currentLang = lang;
  }

  // Apply saved language on load
  applyLanguage(currentLang);

  // Toggle on click
  langToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent outside-click handler from firing
    applyLanguage(currentLang === 'en' ? 'ar' : 'en');
  });
})();