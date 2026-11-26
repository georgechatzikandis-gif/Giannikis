/* Giannikis — Sign & Print · interactions & animations (no dependencies) */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---------- Translations ---------- */
  const EN = {
    'logo.tag': 'SIGNS - PRINTING',
    'footer.cta': 'Have a project in mind?', 'footer.about': 'Printing and signs of every kind, in Kremasti, Rhodes.',
    'footer.follow': 'Find us on social media as', 'footer.menu': 'Menu', 'footer.weekdays': 'Monday – Friday',
    'footer.closed': 'Closed', 'footer.rights': 'All rights reserved.',
    'nav.hours': 'Hours', 'hours.eyebrow': 'Opening hours', 'hours.title': 'We’re here for you.', 'hours.local': 'Rhodes time',
    'nav.about': 'About', 'nav.services': 'Services', 'nav.work': 'Work', 'nav.space': 'Our space', 'nav.contact': 'Contact',
    'cta.call': 'Call us', 'cta.work': 'See our work', 'cta.quote': 'Get a quote', 'cta.directions': 'Directions & contact',
    'hero.l1': 'We make your name', 'hero.l2': 'stand out.',
    'hero.sub': 'Signs, digital printing, printed matter & graphic design — designed, made and installed in Rhodes.',
    'hero.scroll': 'Scroll',
    'about.eyebrow': 'About us', 'about.title': 'From idea to your wall.',
    'about.p2': 'Visit our showroom in Kremasti to see materials, finishes and samples up close.',
    's1.t': 'Signs of every kind',
    's1.d': 'Signs made from metal, wood, plastic and much more. Built entirely in-house from start to finish, whatever the difficulty or requirements.',
    's2.c1': 'Stickers',
    's2.c2': 'Banners',
    's2.c3': 'Perforated window film',
    's2.c4': 'Paper',
    's2.t': 'Digital printing',
    's2.d': 'High-resolution prints of any size and design, on a wide range of materials for indoor and outdoor use.',
    's3.t': 'Graphic Design',
    's3.d': 'Logo design and complete visual material tailored to every case and need, so you reach your customers as effectively as possible.',
    's4.t': 'Sign installation & maintenance',
    's4.d': 'Installation, removal and maintenance of any sign, ours or not, whatever its size, height or difficulty. We also install and remove prints (stickers, banners etc.) with specialist tools and cleaners.',
    's5.c1': 'Flyers',
    's5.c2': 'Business cards',
    's5.c3': 'Menus',
    's5.c4': 'Price lists',
    's5.t': 'Printed matter',
    's5.d': 'Printed matter of every kind, in large and small runs, at affordable prices.',
    's6.c1': 'Boxes',
    's6.c2': 'Coffee cups',
    's6.c3': 'Jars',
    's6.c4': 'Wine',
    's6.c5': 'Bags',
    's6.c6': 'Frozen & chilled goods',
    's6.t': 'Sticker labels of every kind',
    's6.d': 'Sticker labels, waterproof or not, in many sizes and shapes for all kinds of uses.',
    'services.lead': 'Design – Production – Installation of every product, for the best possible look of your business to the public.',
    'about.p1': 'For more than 35 years we have carried on our family tradition of designing and delivering solutions in signs and printing. With knowledge, experience and love for what we do, we create innovative solutions that meet our customers’ needs.',
    'about.s1': 'years of family tradition',
    'about.s2': 'service categories',
    'about.s3': 'showroom in Kremasti',
    'w1.t': 'Personalisation',
    'w1.d': 'Every project is unique, just like your needs.',
    'w2.t': 'Speed',
    'w2.d': 'We deliver on time without sacrificing quality.',
    'w3.t': 'Quality',
    'w3.d': 'We use state-of-the-art equipment for outstanding results.',
    'w4.t': '…and Price',
    'w4.d': 'With a focus on value for money, we are here to offer professional services that exceed your expectations.',
    'why.eyebrow': 'Why us?',
    'why.title': 'Fabricating your vision',
    'why.lead': 'Our goal is to understand each customer’s need and offer the ideal solution, combining excellent quality with a competitive price.',
    'reviews.eyebrow': 'Reviews',
    'reviews.title': 'What people say',
    'footer.sat': 'Saturday',
    'footer.sun': 'Sunday',
    'footer.appt': 'By appointment',
    'm1': 'Signs',
    'm2': 'Digital Printing',
    'm3': 'Graphic Design',
    'm4': 'Installation',
    'm5': 'Printed Matter',
    'm6': 'Sticker Labels',
    'm7': 'Maintenance',
    'a.lang': 'Change language',
    'a.menu': 'Menu',
    'a.scroll': 'Scroll down',
    'a.footer': 'Footer links',
    'a.photo': 'Photo',
    'a.close': 'Close',
    'a.prev': 'Previous',
    'a.next': 'Next',
    'a.nav': 'Main navigation',
    'rv1': 'Professionals! Everything on time and in excellent quality!',
    'rv2': 'Flawless work! Helpful, fast and at good prices. I recommend him without hesitation!',
    'rv3': 'Excellent, in a word. On schedule, cooperative and professional. Highly recommended.',
    'rv4': 'Very professional and friendly staff. Excellent and fast customer service with great ideas. Whatever you ask, they find the way to do it. 100% satisfied with the work they did.',
    'rv5': 'Good service, well done!',
    'rv6': 'Ok',
    'reviews.from': 'from',
    'reviews.google': 'Google reviews',
    'a.reviews': 'Google reviews',
    'services.eyebrow': 'Services', 'services.title': 'Everything your image needs.',
    'work.eyebrow': 'Work & samples', 'work.title': 'Work that speaks for itself.', 'work.hint': 'Tap a photo to enlarge it.',
    'g1': 'Light boxes & 3D letters', 'g2': 'Plaques, trophies & medals', 'g3': 'Printed acrylic awards',
    'g4': 'Letters in wood, metal & acrylic', 'g5': 'Our showroom',
    'process.eyebrow': 'How we work', 'process.title': 'Four steps, zero stress.',
    'p1.t': 'Talk', 'p1.d': 'Tell us what you need, where it goes and your budget.',
    'p2.t': 'Design', 'p2.d': 'We prepare a mock-up and suggest materials and sizes.',
    'p3.t': 'Build', 'p3.d': 'We produce it in our workshop with attention to every detail.',
    'p4.t': 'Install', 'p4.d': 'We deliver and install, ready to turn heads.',
    'space.eyebrow': 'Our space', 'space.title': 'Come and meet us in person.',
    'space.p': 'Find us at 17 Eleftherias Avenue in Kremasti. Look for the black pylon with our logo — you can’t miss it.',
    'contact.eyebrow': 'Contact', 'contact.title': 'Let’s make something together.',
    'contact.addr': '17 Eleftherias Ave, Kremasti – Rhodes', 'contact.social': 'Follow us or send us a message:', 'chat.label': 'Message us',
    'form.title': 'Request a quote', 'form.name': 'Full name', 'form.phone': 'Phone', 'form.type': 'What are you interested in?',
    'form.msg': 'Describe your project', 'form.send': 'Send by email', 'form.note': 'Your email app will open with the message ready to send.',
    'footer.loc': 'Kremasti, Rhodes', 'footer.top': 'Back to top ↑',
  };
  const EL = {};
  $$('[data-i18n]').forEach(el => { EL[el.dataset.i18n] = el.textContent.trim(); });
  $$('[data-i18n-aria]').forEach(el => { EL[el.dataset.i18nAria] = el.getAttribute('aria-label'); });

  let lang = 'el';
  try { lang = localStorage.getItem('gk-lang') || 'el'; } catch (e) {}

  function applyLang(l) {
    lang = l;
    const dict = l === 'en' ? EN : EL;
    document.documentElement.lang = l;
    $$('[data-i18n]').forEach(el => {
      const t = dict[el.dataset.i18n];
      if (t == null) return;
      el.textContent = t;
      if (el.classList.contains('split')) splitWords(el, el.classList.contains('is-in'));
    });
    $$('[data-i18n-aria]').forEach(el => { const t = dict[el.dataset.i18nAria]; if (t) el.setAttribute('aria-label', t); });
    $$('[data-decimals]').forEach(el => { el.textContent = el.textContent.replace(/[.,]/, l === 'el' ? ',' : '.'); });
    $('.lang__on').textContent = l.toUpperCase();
    $('.lang__off').textContent = l === 'el' ? 'EN' : 'EL';
    try { localStorage.setItem('gk-lang', l); } catch (e) {}
    renderHours();
  }

  /* ---------- Split headings into words ---------- */
  function splitWords(el, keepIn) {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map((w, i) => `<span class="w"><span style="--d:${(i * 0.06).toFixed(2)}s">${w}</span></span>`).join(' ');
    if (keepIn) el.classList.add('is-in');
  }
  $$('.split').forEach(el => splitWords(el));
  if (lang !== 'el') applyLang(lang);
  $('.lang').addEventListener('click', () => applyLang(lang === 'el' ? 'en' : 'el'));

  /* ---------- Preloader ---------- */
  const finishLoading = () => {
    document.body.classList.remove('is-loading');
    document.body.classList.add('is-loaded');
    setTimeout(() => $$('.hero .reveal').forEach((el, i) => { el.style.setProperty('--d', `${0.9 + i * 0.15}s`); el.classList.add('is-in'); }), 50);
  };
  const minTime = reduced ? 0 : 1400;
  const start = performance.now();
  const done = () => setTimeout(finishLoading, Math.max(0, minTime - (performance.now() - start)));
  if (document.readyState === 'complete') done(); else window.addEventListener('load', done);
  setTimeout(finishLoading, 4000); // safety net

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('is-in');
      if (el.dataset.count != null) countUp(el);
      io.unobserve(el);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  // stagger siblings
  $$('.reveal').forEach(el => {
    if (el.closest('.hero')) return;
    const sibs = $$(':scope > .reveal', el.parentElement);
    const i = sibs.indexOf(el);
    if (!el.style.getPropertyValue('--d') && i > 0) el.style.setProperty('--d', `${Math.min(i, 6) * 0.08}s`);
    io.observe(el);
  });
  $$('.footer__mega span').forEach((s, i) => s.style.setProperty('--i', i));
  $$('.split, [data-count], .footer__mega').forEach(el => io.observe(el));
  // clip-path hides gallery items from IntersectionObserver, so watch the grid itself
  const gallery = $('.gallery');
  $$('.gallery__item', gallery).forEach(el => io.unobserve(el));
  new IntersectionObserver((entries, obs) => {
    if (!entries[0].isIntersecting) return;
    $$('.gallery__item', gallery).forEach((el, i) => { el.style.setProperty('--d', `${i * 0.12}s`); el.classList.add('is-in'); });
    obs.disconnect();
  }, { threshold: 0.1 }).observe(gallery);

  /* ---------- Counters ---------- */
  function countUp(el) {
    const target = +el.dataset.count, dur = 1600, t0 = performance.now();
    const pre = el.dataset.prefix || '', suf = el.dataset.suffix || '';
    const tick = now => {
      const p = Math.min(1, (now - t0) / dur);
      const e = 1 - Math.pow(1 - p, 4);
      const dec = +(el.dataset.decimals || 0);
      el.textContent = pre + (target * e).toFixed(dec).replace('.', lang === 'el' ? ',' : '.') + suf;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* ---------- Scroll-driven: header, progress, parallax, step line ---------- */
  const header = $('.header'), bar = $('.progress'), stepLine = $('.steps__line span'), stepsWrap = $('.steps-wrap');
  const parallax = $$('.parallax');
  const heroImg = $('.hero__img'), heroContent = $('.hero__content');
  let lastY = 0, ticking = false;

  function onScroll() {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    header.classList.toggle('is-scrolled', y > 40);
    header.classList.toggle('is-hidden', y > lastY && y > 400 && !document.body.classList.contains('menu-open'));
    lastY = y;

    if (!reduced) {
      if (y < innerHeight * 1.2) {
        heroContent.style.transform = `translateY(${y * 0.25}px)`;
        heroContent.style.opacity = Math.max(0, 1 - y / (innerHeight * 0.8));
        heroImg.style.translate = `0 ${y * 0.3}px`;
      }
      parallax.forEach(el => {
        const r = el.getBoundingClientRect();
        const off = Math.max(-90, Math.min(90, (r.top + r.height / 2 - innerHeight / 2) * (+el.dataset.speed || 0)));
        el.style.translate = `0 ${off.toFixed(1)}px`;
      });
    }
    if (stepsWrap) {
      const r = stepsWrap.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight * 0.85 - r.top) / (innerHeight * 0.5)));
      stepLine.style.setProperty('--p', p.toFixed(3));
    }
    ticking = false;
  }
  addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
  addEventListener('resize', onScroll);
  onScroll();

  /* ---------- Active nav link ---------- */
  const navLinks = $$('.nav a');
  const sectionIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('section[id]').forEach(s => sectionIO.observe(s));

  /* ---------- Mobile menu ---------- */
  const burger = $('.burger');
  const setMenu = open => {
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open);
  };
  burger.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  navLinks.forEach(a => a.addEventListener('click', () => setMenu(false)));

  /* ---------- Videos: play only when visible ---------- */
  const vidIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      const v = e.target;
      if (e.isIntersecting && getComputedStyle(v).display !== 'none') {
        if (v.preload === 'none') v.preload = 'auto';
        v.play().catch(() => {});
      } else v.pause();
    });
  }, { threshold: 0.2 });
  $$('video').forEach(v => vidIO.observe(v));

  /* ---------- Fine-pointer effects: cursor, tilt, magnetic ---------- */
  if (finePointer && !reduced) {
    const cursor = $('.cursor');
    let cx = 0, cy = 0, tx = 0, ty = 0;
    addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; cursor.classList.add('is-visible'); });
    document.addEventListener('mouseleave', () => cursor.classList.remove('is-visible'));
    (function loop() {
      cx += (tx - cx) * 0.2; cy += (ty - cy) * 0.2;
      cursor.style.transform = `translate(${cx}px, ${cy}px)`;
      requestAnimationFrame(loop);
    })();
    $$('a, button, .gallery__item, .card').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
    });

    $$('.tilt').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        card.style.setProperty('--ry', `${(px - 0.5) * 12}deg`);
        card.style.setProperty('--rx', `${(0.5 - py) * 12}deg`);
        card.style.setProperty('--mx', `${px * 100}%`);
        card.style.setProperty('--my', `${py * 100}%`);
      });
      card.addEventListener('mouseleave', () => { card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg'); });
    });

    $$('.magnetic').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        btn.style.setProperty('--bx', `${(e.clientX - r.left - r.width / 2) * 0.25}px`);
        btn.style.setProperty('--by', `${(e.clientY - r.top - r.height / 2) * 0.35}px`);
      });
      btn.addEventListener('mouseleave', () => { btn.style.setProperty('--bx', '0px'); btn.style.setProperty('--by', '0px'); });
    });

    // hero mouse parallax on the logo
    const logo = $('.hero__logo');
    $('.hero').addEventListener('mousemove', e => {
      const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
      logo.style.translate = `${x * 18}px ${y * 14}px`;
    });
  }

  /* ---------- Lightbox ---------- */
  const items = $$('.gallery__item'), lb = $('.lightbox'), lbImg = $('img', lb);
  let idx = 0;
  const show = i => {
    idx = (i + items.length) % items.length;
    const it = items[idx];
    lbImg.style.opacity = 0;
    lbImg.onload = () => { lbImg.style.opacity = 1; };
    lbImg.src = it.dataset.full;
    lbImg.alt = $('img', it).alt;
  };
  const openLb = i => { show(i); lb.classList.add('is-open'); document.body.style.overflow = 'hidden'; $('.lightbox__close').focus(); };
  const closeLb = () => { lb.classList.remove('is-open'); document.body.style.overflow = ''; items[idx].focus(); };
  items.forEach((it, i) => {
    it.tabIndex = 0;
    it.setAttribute('role', 'button');
    it.addEventListener('click', () => openLb(i));
    it.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(i); } });
  });
  $('.lightbox__close').addEventListener('click', closeLb);
  $('.lightbox__prev').addEventListener('click', e => { e.stopPropagation(); show(idx - 1); });
  $('.lightbox__next').addEventListener('click', e => { e.stopPropagation(); show(idx + 1); });
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  addEventListener('keydown', e => {
    if (!lb.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });
  let sx = null;
  lb.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    if (sx == null) return;
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
    sx = null;
  });

  /* ---------- Quote form → mailto ---------- */
  $('#quote-form').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target;
    let ok = true;
    ['name', 'phone', 'message'].forEach(n => {
      const field = f[n].closest('.field');
      const bad = !f[n].value.trim();
      field.classList.toggle('is-error', bad);
      if (bad) ok = false;
    });
    if (!ok) return;
    const subject = (lang === 'en' ? 'Quote request – ' : 'Αίτημα προσφοράς – ') + f.type.value;
    const body = `${f.message.value.trim()}\n\n${f.name.value.trim()}\n${f.phone.value.trim()}`;
    location.href = `mailto:info@giannikis.eu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
  $$('#quote-form input, #quote-form textarea').forEach(el => el.addEventListener('input', () => el.closest('.field').classList.remove('is-error')));

  /* ---------- Opening hours (live, in Rhodes time) ---------- */
  renderHours();
  setInterval(renderHours, 20000);

  function renderHours() {
    const list = $('.days');
    if (!list) return;
    // minutes from midnight; index 0 = Sunday … 6 = Saturday
    const OPEN = [null, [540, 1020], [540, 1020], [540, 1020], [540, 1020], [540, 1020], null];
    const APPT = 6; // Saturday: by appointment
    const T = {
      el: { days: ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'],
            closed: 'Κλειστά', appt: 'Κατόπιν ραντεβού', apptToday: 'Σήμερα κατόπιν ραντεβού · καλέστε μας', today: 'Σήμερα', openNow: 'Ανοιχτά τώρα', closedNow: 'Κλειστά τώρα',
            closesIn: (t, l) => `Κλείνουμε στις ${t} · σε ${l}`, opensToday: t => `Ανοίγουμε σήμερα στις ${t}`,
            opensTomorrow: t => `Ανοίγουμε αύριο στις ${t}`, opensOn: (d, t) => `Ανοίγουμε ${['την Κυριακή', 'τη Δευτέρα', 'την Τρίτη', 'την Τετάρτη', 'την Πέμπτη', 'την Παρασκευή', 'το Σάββατο'][d]} στις ${t}`,
            h: 'ώ', m: 'λ' },
      en: { days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            closed: 'Closed', appt: 'By appointment', apptToday: 'Today by appointment · give us a call', today: 'Today', openNow: 'Open now', closedNow: 'Closed now',
            closesIn: (t, l) => `Closes at ${t} · in ${l}`, opensToday: t => `Opens today at ${t}`,
            opensTomorrow: t => `Opens tomorrow at ${t}`, opensOn: (d, t) => `Opens ${['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d]} at ${t}`,
            h: 'h', m: 'm' },
    }[lang];

    // current day/time in Greece, whatever the visitor's timezone
    const parts = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Athens', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
    }).formatToParts(new Date()).map(p => [p.type, p.value]));
    const today = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(parts.weekday);
    const now = +parts.hour * 60 + +parts.minute;
    const fmt = m => `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
    const dur = m => (m >= 60 ? `${Math.floor(m / 60)}${T.h} ` : '') + `${m % 60}${T.m}`;

    $('.clock').textContent = `${parts.hour}:${parts.minute}`;

    // week list, Monday first
    list.innerHTML = [1, 2, 3, 4, 5, 6, 0].map((d, i) => {
      const o = OPEN[d], isToday = d === today;
      let fill = 0;
      if (isToday && o) fill = Math.min(100, Math.max(0, (now - o[0]) / (o[1] - o[0]) * 100));
      return `<li class="day${o ? '' : d === APPT ? ' is-appt' : ' is-closed'}${isToday ? ' is-today' : ''}" style="--i:${i}">
        <span class="day__name">${T.days[d]}${isToday ? `<span class="day__badge">${T.today}</span>` : ''}</span>
        <span class="day__time">${o ? `${fmt(o[0])} – ${fmt(o[1])}` : d === APPT ? T.appt : T.closed}</span>
        ${isToday && o ? `<span class="day__bar"><span style="width:${fill.toFixed(1)}%"></span></span>` : ''}
      </li>`;
    }).join('');

    // open / closed status
    const status = $('.status'), o = OPEN[today];
    const isOpen = !!o && now >= o[0] && now < o[1];
    status.classList.toggle('is-open', isOpen);
    $('.status__main').textContent = isOpen ? T.openNow : T.closedNow;
    let sub;
    if (isOpen) sub = T.closesIn(fmt(o[1]), dur(o[1] - now));
    else if (o && now < o[0]) sub = T.opensToday(fmt(o[0]));
    else if (today === APPT) sub = T.apptToday;
    else {
      for (let k = 1; k <= 7; k++) {
        const d = (today + k) % 7;
        if (OPEN[d]) { sub = k === 1 ? T.opensTomorrow(fmt(OPEN[d][0])) : T.opensOn(d, fmt(OPEN[d][0])); break; }
      }
    }
    $('.status__sub').textContent = sub;
    const fs = $('.foot-status');
    if (fs) { fs.classList.toggle('is-open', isOpen); $('span', fs).textContent = isOpen ? T.openNow : T.closedNow; }
  }

  /* ---------- Reviews bar ---------- */
  $$('.rvbar__track').forEach(track => {
    [...track.children].forEach(card => { const c = card.cloneNode(true); c.setAttribute('aria-hidden', 'true'); track.appendChild(c); });
    const row = track.parentElement;
    row.addEventListener('touchstart', () => row.classList.add('is-paused'), { passive: true });
    row.addEventListener('touchend', () => setTimeout(() => row.classList.remove('is-paused'), 1500));
  });

  /* ---------- Floating chat button ---------- */
  const chat = $('.chat'), chatBtn = $('.chat__toggle');
  const setChat = open => { chat.classList.toggle('is-open', open); chatBtn.setAttribute('aria-expanded', open); };
  chatBtn.addEventListener('click', e => { e.stopPropagation(); setChat(!chat.classList.contains('is-open')); });
  document.addEventListener('click', e => { if (!chat.contains(e.target)) setChat(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape') setChat(false); });

  $('#year').textContent = new Date().getFullYear();
})();
