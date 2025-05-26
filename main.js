// ======= Theme Toggle ===========

const themeToggle = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const storedTheme = localStorage.getItem('color-theme');

const isDark = storedTheme === 'dark' || (!storedTheme && prefersDark);

document.documentElement.classList.toggle('dark', isDark);
darkIcon.classList.toggle('hidden', isDark);
lightIcon.classList.toggle('hidden', !isDark);

themeToggle.addEventListener('click', () => {
  const isCurrentlyDark = document.documentElement.classList.toggle('dark');
  darkIcon.classList.toggle('hidden', isCurrentlyDark);
  lightIcon.classList.toggle('hidden', !isCurrentlyDark);
  localStorage.setItem('color-theme', isCurrentlyDark ? 'dark' : 'light');
});

// ======= Mobile Menu Toggle ===========

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// ======= Header Scroll Effect ===========

const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
  header.classList.toggle('header-scrolled', window.scrollY > 50);
});

// ======= Portfolio Modal ===========

const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');
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

window.showModalFromId = (id) => {
  const data = modalData[id];
  if (!data) return; // Safety first!

  modalTitle.textContent = data.title;
  modalSubtitle.textContent = data.subtitle || '';
  modalContent.textContent = data.content;
  modalFeatures.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');
  modal.classList.remove('hidden');
};

closeModalBtn.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });

// ======= Skills Modal ===========

const skillsModal = document.getElementById('skills-modal');
const skillTitle = document.getElementById('skillsModalTitle');
const skillContent = document.getElementById('skillsModalContent');
const skillFeatures = document.getElementById('skillsModalFeatures');

const skillsData = {
  Copywriting: {
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
  Microcopy: {
    title: 'Microcopy',
    content: 'Textele mici, dar importante: butoane, mesaje de confirmare, erori. Vorbim pe scurt, dar cu efect.',
    features: ['✔ Butoane clare', '✔ Feedback instant', '✔ Ton natural și empatic']
  },
  'Brand Voice': {
    title: 'Brand Voice',
    content: 'Vocea brandului tău. Cum sună, cum se exprimă, cum este recunoscut.',
    features: ['✔ Ghid de stil', '✔ Ton coerent', '✔ Identitate verbală']
  },
  Figma: {
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
  JavaScript: {
    title: 'JavaScript',
    content: 'Magia din spatele interacțiunilor. Face site-ul viu – de la butoane care funcționează până la aplicații întregi.',
    features: ['✔ DOM manipulation', '✔ Evenimente și funcții', '✔ Bază pentru React, Vue etc.']
  }
};

window.showSkillModal = (skill) => {
  const data = skillsData[skill];
  if (!data) return;

  skillTitle.textContent = data.title;
  skillContent.textContent = data.content;
  skillFeatures.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');
  skillsModal.classList.remove('hidden');
};

['#skills-modal', '#skills-modal #closeModal'].forEach(selector => {
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target === el) skillsModal.classList.add('hidden');
    });
  });
});


// ======= Contact Form ===========
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Hide previous messages
    document.getElementById('formSuccess').classList.add('hidden');
    document.getElementById('formError').classList.add('hidden');
    document.querySelectorAll('[id$="Error"]').forEach(el => el.classList.add('hidden'));

    // Validate form
    let isValid = true;
    const name = this.from_name.value.trim();
    const email = this.reply_to.value.trim();
    const message = this.message.value.trim();

    if (name.length < 2) {
        document.getElementById('nameError').classList.remove('hidden');
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').classList.remove('hidden');
        isValid = false;
    }

    if (message.length < 5) {
        document.getElementById('messageError').classList.remove('hidden');
        isValid = false;
    }

    if (!isValid) return;

    // Show loading state
    const submitBtn = document.getElementById('submitBtn');
    const spinner = document.getElementById('spinner');
    submitBtn.disabled = true;
    spinner.classList.remove('hidden');
    document.getElementById('submitText').textContent = 'Se trimite...';

    // Send the email
    emailjs.sendForm('service_gpj70jd', 'template_b6e117o', this)
        .then(() => {
            document.getElementById('formSuccess').classList.remove('hidden');
            this.reset();
        })
        .catch((error) => {
            console.error('Email failed:', error);
            document.getElementById('formError').classList.remove('hidden');

            // More detailed error handling
            if (error.status === 400) {
                console.error('Bad request - check your template parameters');
            } else if (error.status === 401) {
                console.error('Unauthorized - check your public key');
            }
        })
        .finally(() => {
            submitBtn.disabled = false;
            spinner.classList.add('hidden');
            document.getElementById('submitText').textContent = 'Trimite mesajul';
        });
});