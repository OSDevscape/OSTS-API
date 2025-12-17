  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mainNav   = document.querySelector('.main-nav');

    if (!hamburger || !mainNav) {
      console.error('Hamburger or main-nav not found');
      return;
    }

    // Open / close when clicking the hamburger
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mainNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Dropdown handler (unchanged)
    window.toggleDropdown = function (event, id) {
      event.stopPropagation();
      const dropdown = document.getElementById(id);

      document.querySelectorAll('.dropdown-content').forEach(el => {
        if (el !== dropdown) el.classList.remove('show');
      });

      if (dropdown) dropdown.classList.toggle('show');
    };

    // Close everything when clicking anywhere else
    window.addEventListener('click', () => {
      document.querySelectorAll('.dropdown-content').forEach(el => el.classList.remove('show'));
      mainNav.classList.remove('open');          // <— removes open
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
