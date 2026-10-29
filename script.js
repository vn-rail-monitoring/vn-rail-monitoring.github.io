(() => {
  'use strict';
  const header = document.getElementById('siteHeader');
  const menuButton = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const progress = document.getElementById('scrollProgress');
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
  const closeMenu = () => {
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Mở menu');
    document.body.classList.remove('menu-open');
  };
  menuButton.addEventListener('click', () => {
    const willOpen = mobileNav.hidden;
    mobileNav.hidden = !willOpen;
    menuButton.setAttribute('aria-expanded', String(willOpen));
    menuButton.setAttribute('aria-label', willOpen ? 'Đóng menu' : 'Mở menu');
    document.body.classList.toggle('menu-open', willOpen);
  });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 950) closeMenu(); }, {passive:true});
  const navLinks = document.querySelectorAll('.desktop-nav a');
  const sections = [...navLinks].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 24);
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${max > 0 ? Math.max(0,Math.min(100,100*scrollY/max)) : 0}%`;
    let activeId = '';
    for (const section of sections) if (section.getBoundingClientRect().top < 160) activeId = section.id;
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${activeId}`));
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver((entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {entry.target.classList.add('is-visible'); observer.unobserve(entry.target);}
      }
    }, { threshold: 0.08, rootMargin: '0px 0px 25px 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));}
})();
