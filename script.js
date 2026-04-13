/* ============================================================
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