// ======= Theme Toggle ===========
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

  if (localStorage.getItem('color-theme') === 'dark' ||
    (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    themeToggleLightIcon.classList.remove('hidden');
  } else {
    document.documentElement.classList.remove('dark');
    themeToggleDarkIcon.classList.remove('hidden');
  }

  themeToggle.addEventListener('click', function () {
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  });

  // ======= Mobile menu toggle ===========
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // ======= Header scroll effect ===========
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });

  // ======= Portfolio Modal ===========
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalContent = document.getElementById('modalContent');
  const modalFeatures = document.getElementById('modalFeatures');

  const modalData = {
    card1: {
      title: 'Tastatura StreamBoard Pro',
      subtitle: 'Produs tech – Copy comercial clar și concis',
      content: 'Exercițiu de redactare pentru un produs tehnologic. Clar, concis, orientat pe beneficii reale.',
      features: [
        '✔ Bluetooth 5.0 cu conectare rapidă.',
        '✔ Autonomie 30h, încărcare rapidă.',
        '✔ Taste confortabile, iluminare LED reglabilă.',
        '✔ Compactă și ultra-subțire.'
      ]
    },
    card2: {
      title: 'Serviciu de redactare clară',
      subtitle: '',
      content: 'Auto-prezentare profesională. Texte clare, coerente, fără pretenții inutile.',
      features: [
        '✔ Descrieri de produs.',
        '✔ Texte informative.',
        '✔ Postări social media.',
        '✔ Articole scurte comerciale.'
      ]
    },
    card3: {
      title: 'Sunetul care îți mișcă sufletul',
      subtitle: '',
      content: 'Exercițiu de stil emoțional. Ton cald și apropiat, perfect pentru campanii sau descrieri produse.',
      features: [
        '✔ Simte muzica. Oriunde.',
        '✔ Sunetul care te însoțește.'
      ]
    },
    card4: {
      title: 'Profil personal – Redactor flexibil',
      subtitle: '',
      content: 'Nu sunt un redactor clasic. Scriu clar, organizat și la timp.',
      features: [
        '✔ Adaptabil – ton formal, creativ sau prietenos.',
        '✔ Rapid – învăț stilul și mă adaptez.',
        '✔ Corect – trec testul gramatical și logic.'
      ]
    }
  };

  window.showModalFromId = function (id) {
    const data = modalData[id];
    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle || '';
    modalContent.textContent = data.content;
    modalFeatures.innerHTML = '';
    data.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      modalFeatures.appendChild(li);
    });
    modal.classList.remove('hidden');
  };

  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  // ======= Skills Modal ===========
  const skillsModal = document.getElementById('skills-modal');
  const skillTitle = document.getElementById('skillsModalTitle');
const skillContent = document.getElementById('skillsModalContent');
const skillFeatures = document.getElementById('skillsModalFeatures');

  const skillsData = {
    'Copywriting': {
      title: 'Copywriting',
      content: 'Scriere de texte care conving, vând sau atrag. Tot ce înseamnă reclamă, descrieri de produs și titluri care rup!',
      features: ['✔ Mesaje clare și convingătoare', '✔ Psihologie în cuvinte', '✔ Texte cu impact']
    },
    'Content Strategy': {
      title: 'Content Strategy',
      content: 'Planificarea conținutului de pe site sau social media. Ce, când, cui și de ce scriem.',
      features: ['✔ Plan editorial', '✔ Structură de conținut', '✔ Mesaje adaptate publicului']
    },
    'UX Writing': {
      title: 'UX Writing',
      content: 'Textele din aplicații și site-uri care ghidează utilizatorul – butoane, mesaje, titluri, erori.',
      features: ['✔ Microtexte clare', '✔ Navigare intuitivă', '✔ Limbaj prietenos']
    },
    'SEO Writing': {
      title: 'SEO Writing',
      content: 'Scriere optimizată pentru Google. Să ajungi sus în căutări cu texte utile și bine scrise.',
      features: ['✔ Cuvinte cheie naturale', '✔ Structură clară', '✔ Texte relevante pentru oameni și algoritmi']
    },
    'Microcopy': {
      title: 'Microcopy',
      content: 'Textele mici, dar importante: butoane, mesaje de confirmare, erori. Vorbim pe scurt, dar cu efect.',
      features: ['✔ Butoane clare', '✔ Feedback instant', '✔ Ton natural și empatic']
    },
    'Brand Voice': {
      title: 'Brand Voice',
      content: 'Vocea brandului tău. Cum sună, cum se exprimă, cum este recunoscut.',
      features: ['✔ Ghid de stil', '✔ Ton coerent', '✔ Identitate verbală']
    },
    'Figma': {
      title: 'Figma',
      content: 'Tool de design colaborativ. Creezi UI/UX, prototipuri și layouturi responsive fără să instalezi nimic.',
      features: ['✔ Design live în browser', '✔ Feedback în timp real', '✔ Ușor de folosit în echipă']
    },
    'Tailwind CSS': {
      title: 'Tailwind CSS',
      content: 'Framework CSS utilitar. Scrii rapid designuri responsive direct în HTML, fără fișiere CSS separate.',
      features: ['✔ Utility-first', '✔ Rapid și flexibil', '✔ Perfect pentru design sistematic']
    },
    'HTML / CSS': {
      title: 'HTML / CSS',
      content: 'Baza oricărui site web. HTML oferă structură, CSS dă stil. Fără ele, internetul e doar text neformatat.',
      features: ['✔ Structuri semantice', '✔ Layouturi responsive', '✔ Control total asupra designului']
    },
    'JavaScript': {
      title: 'JavaScript',
      content: 'Magia din spatele interacțiunilor. Face site-ul viu – de la butoane care funcționează până la aplicații întregi.',
      features: ['✔ DOM manipulation', '✔ Evenimente și funcții', '✔ Bază pentru React, Vue etc.']
    }
  };

  window.showSkillModal = function (skill) {
    const data = skillsData[skill];
    skillTitle.textContent = data.title;
    skillContent.textContent = data.content;
    skillFeatures.innerHTML = '';
    data.features.forEach(f => {
      const li = document.createElement('li');
      li.textContent = f;
      skillFeatures.appendChild(li);
    });
    skillsModal.classList.remove('hidden');
  };

  document.querySelectorAll('#skills-modal, #skills-modal #closeModal').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target === el) {
        skillsModal.classList.add('hidden');
      }
    });
  });