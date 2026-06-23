const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll('a[href]').forEach((link) => {
  const href = link.getAttribute('href');

  if (!href || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return;
  }

  const isInternal = href.startsWith('#') || href.startsWith('/') || href.startsWith('index.html') || href.startsWith('careers.html');

  if (isInternal) {
    link.setAttribute('target', '_self');
  }

  if (href.startsWith('#')) {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(href);

      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', href);
    });
  }
});

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.textContent = isOpen ? '×' : '☰';
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.textContent = '☰';
    });
  });
}
