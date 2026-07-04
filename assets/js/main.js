// VulnQuest Portfolio - Main JavaScript

document.addEventListener('DOMContentLoaded', function () {
  initMobileMenu();
  initSmoothScroll();
  initScrollAnimations();
  initSearch();
  initChallengeFilters();
  initBackToTop();
});

// Mobile Menu Toggle
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      this.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  }
}

// Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Scroll Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card, .section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Search Functionality
let searchIndex = null;

function initSearch() {
  const searchTrigger = document.getElementById('search-trigger');
  const searchModal = document.getElementById('search-modal');
  const searchClose = document.getElementById('search-close');
  const modalInput = document.getElementById('search-modal-input');
  const resultsContainer = document.getElementById('search-results');
  const suggestionsBox = document.getElementById('search-suggestions');

  if (!searchModal || !modalInput) return;

  // Open modal function
  function openSearch() {
    searchModal.classList.add('active');
    searchModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // prevent page scroll
    setTimeout(() => modalInput.focus(), 100);
    
    // Fetch search index if not loaded yet
    if (!searchIndex) {
      fetch('/search.json')
        .then(response => response.json())
        .then(data => {
          searchIndex = data;
        })
        .catch(err => console.error('Failed to load search index:', err));
    }
  }

  // Close modal function
  function closeSearch() {
    searchModal.classList.remove('active');
    searchModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // restore page scroll
    modalInput.value = '';
    resultsContainer.innerHTML = '';
    suggestionsBox.style.display = 'block';
  }

  // Event Listeners for Open/Close
  if (searchTrigger) {
    searchTrigger.addEventListener('click', function(e) {
      e.preventDefault();
      openSearch();
    });
  }

  if (searchClose) {
    searchClose.addEventListener('click', closeSearch);
  }

  // Backdrop click closes
  const backdrop = searchModal.querySelector('.search-modal-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', closeSearch);
  }

  // Keyboard shortcut (Ctrl+K, Cmd+K, or Slash key when not in inputs)
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (searchModal.classList.contains('active')) {
        closeSearch();
      } else {
        openSearch();
      }
    }
    if (e.key === 'Escape' && searchModal.classList.contains('active')) {
      closeSearch();
    }
  });

  // Filter tags click helper
  document.querySelectorAll('.search-tag').forEach(tag => {
    tag.addEventListener('click', function() {
      const filter = this.dataset.filter;
      modalInput.value = filter + ' ';
      modalInput.focus();
      performSearch(modalInput.value);
    });
  });

  // Input event listener
  modalInput.addEventListener('input', function() {
    performSearch(this.value);
  });

  // Keyboard navigation inside results
  modalInput.addEventListener('keydown', function(e) {
    const items = resultsContainer.querySelectorAll('.search-result-item');
    if (items.length === 0) return;

    let activeIdx = -1;
    items.forEach((item, idx) => {
      if (item.classList.contains('active')) {
        activeIdx = idx;
      }
    });

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (activeIdx !== -1) items[activeIdx].classList.remove('active');
      const nextIdx = (activeIdx + 1) % items.length;
      items[nextIdx].classList.add('active');
      items[nextIdx].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (activeIdx !== -1) items[activeIdx].classList.remove('active');
      const prevIdx = (activeIdx - 1 + items.length) % items.length;
      items[prevIdx].classList.add('active');
      items[prevIdx].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIdx !== -1) {
        items[activeIdx].click();
      }
    }
  });

  // Search logic
  function performSearch(query) {
    query = query.trim().toLowerCase();
    if (!query) {
      resultsContainer.innerHTML = '';
      suggestionsBox.style.display = 'block';
      return;
    }

    suggestionsBox.style.display = 'none';

    if (!searchIndex) {
      resultsContainer.innerHTML = '<div class="search-loading">Indexing database... Please wait.</div>';
      return;
    }

    // Parse filters e.g. platform:htb, diff:easy, os:windows, cve:
    let platformFilter = null;
    let diffFilter = null;
    let osFilter = null;
    let textQuery = query;

    const platformMatch = textQuery.match(/platform:([^\s]+)/);
    if (platformMatch) {
      platformFilter = platformMatch[1];
      textQuery = textQuery.replace(platformMatch[0], '');
    }

    const diffMatch = textQuery.match(/diff:([^\s]+)/);
    if (diffMatch) {
      diffFilter = diffMatch[1];
      textQuery = textQuery.replace(diffMatch[0], '');
    }

    const osMatch = textQuery.match(/os:([^\s]+)/);
    if (osMatch) {
      osFilter = osMatch[1];
      textQuery = textQuery.replace(osMatch[0], '');
    }

    textQuery = textQuery.trim();

    // Filter index
    const results = searchIndex.filter(item => {
      // Apply platform filter
      if (platformFilter) {
        const itemPlatform = item.platform.toLowerCase();
        if (platformFilter === 'hackthebox' || platformFilter === 'htb') {
          if (itemPlatform !== 'hackthebox') return false;
        } else if (platformFilter === 'hackmyvm' || platformFilter === 'hmv') {
          if (itemPlatform !== 'hackmyvm') return false;
        } else if (!itemPlatform.includes(platformFilter)) {
          return false;
        }
      }

      // Apply difficulty filter
      if (diffFilter) {
        const itemDiff = item.difficulty.toLowerCase();
        if (!itemDiff.includes(diffFilter)) return false;
      }

      // Apply OS filter
      if (osFilter) {
        const itemOS = item.os.toLowerCase();
        if (!itemOS.includes(osFilter)) return false;
      }

      // Apply text query
      if (textQuery) {
        const titleMatch = item.title.toLowerCase().includes(textQuery);
        const subtitleMatch = (item.subtitle || '').toLowerCase().includes(textQuery);
        const machineMatch = (item.machine_name || '').toLowerCase().includes(textQuery);
        const creatorMatch = (item.creator || '').toLowerCase().includes(textQuery);
        return titleMatch || subtitleMatch || machineMatch || creatorMatch;
      }

      return true;
    });

    displayResults(results, textQuery);
  }

  // Display results list
  function displayResults(results, highlightText) {
    if (results.length === 0) {
      resultsContainer.innerHTML = '<div class="search-no-results">No matches found. Try refining your filters.</div>';
      return;
    }

    let html = '';
    
    // Sort results: put exact matches first, then sort by title
    results.sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      if (highlightText) {
        if (aTitle.startsWith(highlightText) && !bTitle.startsWith(highlightText)) return -1;
        if (!aTitle.startsWith(highlightText) && bTitle.startsWith(highlightText)) return 1;
      }
      return a.title.localeCompare(b.title);
    });

    results.slice(0, 15).forEach((item, idx) => {
      // Determine icon/badge based on platform/type
      let badgeHtml = '';
      let typeLabel = 'Page';
      let iconHtml = '<i class="far fa-file-alt"></i>';

      if (item.platform) {
        typeLabel = item.platform === 'hackthebox' ? 'HackTheBox' : 'HackMyVM';
        const platformClass = item.platform === 'hackthebox' ? 'htb' : 'hmv';
        badgeHtml += `<span class="search-badge ${platformClass}">${typeLabel}</span>`;
        iconHtml = item.os.toLowerCase() === 'windows' ? '<i class="fab fa-windows font-blue" style="color: #00e5ff;"></i>' : '<i class="fab fa-linux font-green" style="color: #00ff66;"></i>';
      }
      
      if (item.difficulty) {
        const diffClass = item.difficulty.toLowerCase();
        badgeHtml += `<span class="search-badge ${diffClass}">${item.difficulty}</span>`;
      }

      // Highlight matching text in title
      let displayTitle = item.title;
      if (highlightText) {
        const regex = new RegExp(`(${escapeRegExp(highlightText)})`, 'gi');
        displayTitle = displayTitle.replace(regex, '<mark>$1</mark>');
      }

      const activeClass = idx === 0 ? 'active' : '';

      html += `
        <a href="${item.url}" class="search-result-item ${activeClass}">
          <div class="result-icon">${iconHtml}</div>
          <div class="result-details">
            <div class="result-title">${displayTitle}</div>
            <div class="result-subtitle">${item.subtitle || ''}</div>
          </div>
          <div class="result-badges">${badgeHtml}</div>
        </a>
      `;
    });

    resultsContainer.innerHTML = html;
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

// Copy Code Button
function addCopyButtons() {
  document.querySelectorAll('pre').forEach(pre => {
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.innerHTML = '<i class="far fa-copy"></i> Copy';
    button.addEventListener('click', function () {
      const code = pre.querySelector('code').textContent;
      navigator.clipboard.writeText(code).then(() => {
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
          button.innerHTML = '<i class="far fa-copy"></i> Copy';
        }, 2000);
      });
    });
    pre.style.position = 'relative';
    pre.appendChild(button);
  });
}

// Initialize copy buttons after content loads
if (document.readyState === 'complete') {
  addCopyButtons();
} else {
  window.addEventListener('load', addCopyButtons);
}

// Console Easter Egg
console.log('%c🛡️ VulnQuest Portfolio', 'font-size: 24px; font-weight: bold; color: #00d9ff;');
console.log('%cBuilt with passion for offensive security', 'font-size: 14px; color: #7c3aed;');
console.log('%cLooking for vulnerabilities? You\'re in the right place! 🔍', 'font-size: 12px; color: #10b981;');

// Challenge Year Filtering
function initChallengeFilters() {
  const filterBtns = document.querySelectorAll('.challenge-year-nav .mf-btn');
  const cards = document.querySelectorAll('.challenge-card');

  if (filterBtns.length === 0 || cards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active from all sibling buttons
      const container = this.closest('.challenge-year-nav');
      if (container) {
        container.querySelectorAll('.mf-btn').forEach(b => b.classList.remove('active'));
      }
      this.classList.add('active');

      const filter = this.dataset.filter;

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.year === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Back to Top Button
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}


