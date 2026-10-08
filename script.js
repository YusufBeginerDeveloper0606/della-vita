const menuBtn = document.querySelector(".menuBtn");
const nav = document.querySelector(".nav nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => nav.classList.toggle("mobileOpen"));
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("mobileOpen"))
  );
  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      nav.classList.remove("mobileOpen");
    }

  });
}

// Scroll reveal, progress indicator and subtle header motion
const revealItems = document.querySelectorAll('.section, .page, .box, .doctor, .newsCard, .preview, .cta');
revealItems.forEach((el, i) => {
  if (!el.classList.contains('reveal')) {
    el.classList.add('reveal');
  }
  if (i % 3 === 1) el.classList.add('delay-1');
  if (i % 3 === 2) el.classList.add('delay-2');
});
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
}
const header = document.querySelector('header');
function updateScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
  document.body.style.setProperty('--scroll-progress', pct + '%');
  if (header) header.classList.toggle('scrolled', window.scrollY > 12);
}
}

window.addEventListener('scroll', updateScroll, { passive: true });
updateScroll();
