
   (() => {
      const sidebar = document.getElementById('sidebar');
      const sidebarToggle = document.getElementById('sidebarToggle');
      const overlay = document.getElementById('overlay');
      const modeToggle = document.getElementById('modeToggle');
      const profileBtn = document.getElementById('profileBtn');
      const profileDropdown = document.getElementById('profileDropdown');

      // Sidebar toggle for mobile
      sidebarToggle.addEventListener('click', () => {
        if (sidebar.classList.contains('-translate-x-full')) {
          sidebar.classList.remove('-translate-x-full');
          overlay.classList.remove('hidden');
          overlay.classList.add('block');
        } else {
          sidebar.classList.add('-translate-x-full');
          overlay.classList.add('hidden');
          overlay.classList.remove('block');
        }
      });

      // Overlay click closes sidebar on mobile
      overlay.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
        overlay.classList.remove('block');
      });

      // Initialize sidebar state for mobile
      function initSidebar() {
        if (window.innerWidth < 768) {
          sidebar.classList.add('-translate-x-full');
          overlay.classList.add('hidden');
          overlay.classList.remove('block');
        } else {
          sidebar.classList.remove('-translate-x-full');
          overlay.classList.add('hidden');
          overlay.classList.remove('block');
        }
      }
      initSidebar();
      window.addEventListener('resize', initSidebar);

      // Profile dropdown toggle
      profileBtn.addEventListener('click', () => {
        const isHidden = profileDropdown.classList.contains('hidden');
        if (isHidden) {
          profileDropdown.classList.remove('hidden');
          profileBtn.setAttribute('aria-expanded', 'true');
        } else {
          profileDropdown.classList.add('hidden');
          profileBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Close profile dropdown on outside click
      document.addEventListener('click', (e) => {
        if (
          !profileBtn.contains(e.target) &&
          !profileDropdown.contains(e.target)
        ) {
          profileDropdown.classList.add('hidden');
          profileBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Dark/Light mode toggle
      function setMode(dark) {
        if (dark) {
          document.documentElement.classList.add('dark');
          document.body.classList.add('bg-gray-900', 'text-gray-300');
          document.body.classList.remove('bg-white', 'text-gray-900');
          modeToggle.innerHTML = '<i class="fas fa-sun fa-lg"></i>';
        } else {
          document.documentElement.classList.remove('dark');
          document.body.classList.remove('bg-gray-900', 'text-gray-300');
          document.body.classList.add('bg-white', 'text-gray-900');
          modeToggle.innerHTML = '<i class="fas fa-moon fa-lg"></i>';
        }
      }

      // Load mode from localStorage or default dark
      let darkMode = localStorage.getItem('darkMode');
      if (darkMode === null) {
        darkMode = 'true';
        localStorage.setItem('darkMode', darkMode);
      }
      setMode(darkMode === 'true');

      modeToggle.addEventListener('click', () => {
        darkMode = localStorage.getItem('darkMode') === 'true' ? 'false' : 'true';
        localStorage.setItem('darkMode', darkMode);
        setMode(darkMode === 'true');
      });
    })();
  