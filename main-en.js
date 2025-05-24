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
    title: 'StreamBoard Pro Keyboard',
    subtitle: 'Tech Product – Clear Commercial Copy',
    content: 'Copywriting exercise for a tech product. Clear, concise, focused on real benefits.',
    features: [
      '✔ Bluetooth 5.0 with quick pairing',
      '✔ 30h battery life, fast charging',
      '✔ Comfortable keys, adjustable LED lighting',
      '✔ Compact and ultra-slim design'
    ]
  },
  card2: {
    title: 'Clear Writing Service',
    subtitle: '',
    content: 'Professional self-presentation. Clear, coherent texts without unnecessary pretentiousness.',
    features: [
      '✔ Product descriptions',
      '✔ Informational texts',
      '✔ Social media posts',
      '✔ Short commercial articles'
    ]
  },
  card3: {
    title: 'The Sound That Moves Your Soul',
    subtitle: '',
    content: 'Emotional style exercise. Warm and approachable tone, perfect for campaigns or product descriptions.',
    features: [
      '✔ Feel the music. Anywhere.',
      '✔ Sound that accompanies you'
    ]
  },
  card4: {
    title: 'Personal Profile – Flexible Copywriter',
    subtitle: '',
    content: "I'm not a traditional copywriter. I write clearly, organized, and on time.",
    features: [
      '✔ Adaptable – formal, creative or friendly tone',
      '✔ Fast – I learn the style and adapt quickly',
      '✔ Correct – passes grammar and logic tests'
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
    content: 'Writing texts that convince, sell or attract. Everything from ads, product descriptions to attention-grabbing headlines!',
    features: ['✔ Clear and persuasive messages', '✔ Psychology in words', '✔ Impactful texts']
  },
  'Content Strategy': {
    title: 'Content Strategy',
    content: 'Planning website or social media content. What, when, for whom and why we write.',
    features: ['✔ Editorial plan', '✔ Content structure', '✔ Audience-adapted messages']
  },
  'UX Writing': {
    title: 'UX Writing',
    content: 'The texts in apps and websites that guide users - buttons, messages, titles, error notifications.',
    features: ['✔ Clear microcopy', '✔ Intuitive navigation', '✔ Friendly language']
  },
  'SEO Writing': {
    title: 'SEO Writing',
    content: 'Writing optimized for Google. Ranking high with useful, well-written content.',
    features: ['✔ Natural keywords', '✔ Clear structure', '✔ Texts relevant for both people and algorithms']
  },
  'Microcopy': {
    title: 'Microcopy',
    content: 'Small but important texts: buttons, confirmation messages, errors. We say little but make it count.',
    features: ['✔ Clear buttons', '✔ Instant feedback', '✔ Natural and empathetic tone']
  },
  'Brand Voice': {
    title: 'Brand Voice',
    content: "Your brand's voice. How it sounds, how it expresses itself, how it's recognized.",
    features: ['✔ Style guide', '✔ Consistent tone', '✔ Verbal identity']
  },
  'Figma': {
    title: 'Figma',
    content: 'Collaborative design tool. Create UI/UX, prototypes and responsive layouts without installing anything.',
    features: ['✔ Browser-based design', '✔ Real-time feedback', '✔ Easy team collaboration']
  },
  'Tailwind CSS': {
    title: 'Tailwind CSS',
    content: 'Utility CSS framework. Quickly create responsive designs directly in HTML, without separate CSS files.',
    features: ['✔ Utility-first', '✔ Fast and flexible', '✔ Perfect for systematic design']
  },
  'HTML / CSS': {
    title: 'HTML / CSS',
    content: 'The foundation of any website. HTML provides structure, CSS provides style. Without them, the internet would be just unformatted text.',
    features: ['✔ Semantic structures', '✔ Responsive layouts', '✔ Complete design control']
  },
  'JavaScript': {
    title: 'JavaScript',
    content: 'The magic behind interactions. Makes websites come alive - from working buttons to full applications.',
    features: ['✔ DOM manipulation', '✔ Events and functions', '✔ Foundation for React, Vue etc.']
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