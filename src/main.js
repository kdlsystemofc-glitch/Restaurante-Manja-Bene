/* ==========================================================================
   RESTAURANTE MANJA BENE — CINEMATIC INTERACTIVE LOGIC & MOTION ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Drawer Navigation Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileClose = document.getElementById('mobile-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

  function openMobileNav() {
    mobileDrawer.classList.add('active');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileDrawer.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileNav);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileNav);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileNav);
  mobileLinks.forEach(link => link.addEventListener('click', closeMobileNav));

  // 2. Menu Filter Tabs with Motion Animation
  const filterBtns = document.querySelectorAll('.filter-btn');
  const menuCards = document.querySelectorAll('.menu-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      menuCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 3. IntersectionObserver for Scroll Reveal Choreography
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-delay') || 0;
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, parseInt(delay, 10));
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply reveal class to sections, cards, and proof items
  const revealElements = document.querySelectorAll('.reveal-on-scroll, .proof-item, .flagship-card, .menu-card, .friction-card, .review-card');
  revealElements.forEach((el, idx) => {
    el.classList.add('reveal-item');
    if (!el.getAttribute('data-delay')) {
      el.setAttribute('data-delay', (idx % 4) * 80);
    }
    scrollObserver.observe(el);
  });

  // 4. Pre-Order WhatsApp Generator Modal
  const modalOverlay = document.getElementById('preorder-modal');
  const openModalBtns = document.querySelectorAll('.open-preorder-modal');
  const closeModalBtn = document.getElementById('modal-close-btn');
  const preorderForm = document.getElementById('preorder-form');

  function openModal(dishName = '') {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    if (dishName && document.getElementById('select-dish')) {
      const selectDish = document.getElementById('select-dish');
      for (let option of selectDish.options) {
        if (option.value.toLowerCase().includes(dishName.toLowerCase())) {
          option.selected = true;
          break;
        }
      }
    }
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const dish = btn.getAttribute('data-dish') || '';
      openModal(dish);
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Pre-order Form Submission
  if (preorderForm) {
    preorderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const dish = document.getElementById('select-dish').value;
      const time = document.getElementById('select-time').value;
      const type = document.getElementById('select-type').value;
      const name = document.getElementById('client-name').value.trim();
      const notes = document.getElementById('client-notes').value.trim();

      let text = `Olá, Restaurante Manja Bene! Gostaria de fazer um pedido antecipado.\n\n`;
      if (name) text += `*Nome:* ${name}\n`;
      text += `*Prato Escolhido:* ${dish}\n`;
      text += `*Modalidade:* ${type}\n`;
      text += `*Horário Desejado:* ${time}\n`;
      if (notes) text += `*Observações:* ${notes}\n`;
      text += `\nVim pelo site do Restaurante Manja Bene!`;

      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/5511933347848?text=${encodedText}`;

      window.open(whatsappUrl, '_blank');
      closeModal();
    });
  }

  // Direct WhatsApp Button Helper
  const directWaBtns = document.querySelectorAll('.direct-wa-btn');
  directWaBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const dish = btn.getAttribute('data-dish');
      let text = `Olá, Restaurante Manja Bene! Gostaria de fazer um pedido pelo site.`;
      if (dish) {
        text = `Olá, Restaurante Manja Bene! Gostaria de pedir o prato: *${dish}*.`;
      }
      const whatsappUrl = `https://wa.me/5511933347848?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
    });
  });

  // 5. Header Scroll Shadow & Sticky Mobile Bar Logic
  const header = document.getElementById('main-header');
  const heroSection = document.getElementById('hero');
  const stickyBar = document.querySelector('.mobile-sticky-bar');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Header shadow
    if (scrollY > 40) {
      header.style.boxShadow = '0 4px 16px rgba(110, 40, 20, 0.08)';
    } else {
      header.style.boxShadow = 'none';
    }

    // Mobile sticky bar reveal after Hero
    if (stickyBar && heroSection) {
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      if (scrollY > heroBottom - 200) {
        stickyBar.style.transform = 'translateY(0)';
      } else {
        stickyBar.style.transform = 'translateY(100%)';
      }
    }
  });

});
