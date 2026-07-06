/* nav.js — Shared Sidebar Navigation */
(function () {
  const NAV_ITEMS = [
    { href: 'index.html',    icon: '🏠', label: 'Home' },
    { href: 'todo.html',     icon: '✅', label: 'Tasks' },
    { href: 'calendar.html', icon: '📅', label: 'Calendar' },
    { href: 'about.html',    icon: 'ℹ️',  label: 'About' },
    { href: 'pricing.html',  icon: '💎', label: 'Pricing' },
  ];

  const AUTH_ITEMS = [
    { href: 'signin.html',  icon: '🔑', label: 'Sign In' },
    { href: 'signup.html',  icon: '🚀', label: 'Sign Up' },
  ];

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function buildSidebar() {
    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';
    sidebar.id = 'sidebar';

    /* Logo */
    sidebar.innerHTML = `
      <div class="sidebar-logo">
        <div class="logo-icon">⚡</div>
        <span class="logo-text">TaskFlow</span>
      </div>
      <div class="nav-label">Main Menu</div>
    `;

    /* Main nav */
    NAV_ITEMS.forEach(item => {
      const a = document.createElement('a');
      a.href = item.href;
      a.className = 'nav-link' + (currentPage === item.href ? ' active' : '');
      a.innerHTML = `<span class="nav-icon">${item.icon}</span>${item.label}`;
      sidebar.appendChild(a);
    });

    /* Auth section */
    const authLabel = document.createElement('div');
    authLabel.className = 'nav-label mt-6';
    authLabel.textContent = 'Account';
    sidebar.appendChild(authLabel);

    AUTH_ITEMS.forEach(item => {
      const a = document.createElement('a');
      a.href = item.href;
      a.className = 'nav-link' + (currentPage === item.href ? ' active' : '');
      a.innerHTML = `<span class="nav-icon">${item.icon}</span>${item.label}`;
      sidebar.appendChild(a);
    });

    /* User chip at bottom */
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (user) {
      const bottom = document.createElement('div');
      bottom.className = 'sidebar-bottom';
      const initials = (user.name || 'U').split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2);
      bottom.innerHTML = `
        <div class="sidebar-user">
          <div class="user-avatar">${initials}</div>
          <div>
            <div class="user-name">${user.name || 'User'}</div>
            <div class="user-email">${user.email || ''}</div>
          </div>
        </div>
      `;
      sidebar.appendChild(bottom);
    }

    return sidebar;
  }

  function buildTopbar() {
    const bar = document.createElement('header');
    bar.className = 'topbar';
    bar.innerHTML = `
      <div class="topbar-logo">
        <span>⚡</span> TaskFlow
      </div>
      <button class="topbar-menu-btn" id="mobile-menu-btn" aria-label="Open menu">☰</button>
    `;
    return bar;
  }

  function buildOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.id = 'sidebar-overlay';
    return overlay;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const layout = document.getElementById('app-layout');
    if (!layout) return;

    const sidebar  = buildSidebar();
    const topbar   = buildTopbar();
    const overlay  = buildOverlay();

    layout.prepend(sidebar);
    document.body.insertBefore(topbar, layout);
    document.body.appendChild(overlay);

    /* Mobile toggle */
    document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    });
  });

  /* ── Shared Toast utility ───────────────────────────────── */
  window.showToast = function(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }

    const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || 'ℹ️'}</span>
      <span class="toast-msg">${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('removing');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  };
})();
