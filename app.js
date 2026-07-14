// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Ensure PORTFOLIO_DATA exists
  if (typeof PORTFOLIO_DATA === "undefined") {
    console.error("PORTFOLIO_DATA is not defined. Please ensure portfolio-data.js is loaded first.");
    return;
  }

  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear();

  // Initialize all functionalities
  initProfileData();
  initTypewriter();
  initHeaderScroll();
  initMobileNav();
  initSkillsFilter();
  initCertifications();
  initProjectsFilter();
  initTimeline();
  initContactForm();
  initScrollReveal();

  // Render LinkedIn Badge after a short delay to guarantee dynamic iframe generation
  setTimeout(() => {
    if (typeof LIRenderAll === "function") {
      LIRenderAll();
    }
  }, 500);
});

/* ==========================================================================
   Render Portfolio Data
   ========================================================================== */
function initProfileData() {
  const data = PORTFOLIO_DATA;
  
  // Set personal titles & bios
  document.getElementById("hero-name").textContent = data.profile.name;
  document.getElementById("hero-bio").textContent = data.profile.bio;
  
  // Set avatar image
  const profileImg = document.getElementById("profile-img");
  if (profileImg) {
    profileImg.src = data.profile.avatarUrl;
    profileImg.alt = `${data.profile.name}'s profile picture`;
  }
  
  // Populate "Recent Tech" list in About section (first 6 skills as an example)
  const recentTechContainer = document.getElementById("about-recent-tech");
  if (recentTechContainer) {
    const recentTech = data.skills.slice(0, 6);
    recentTechContainer.innerHTML = "";
    recentTech.forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill.name;
      recentTechContainer.appendChild(li);
    });
  }

  // Populate Contact section links
  const emailLink = document.getElementById("contact-email-link");
  if (emailLink) {
    emailLink.href = `mailto:${data.profile.email}`;
    emailLink.textContent = data.profile.email;
  }
  
  // Social Links
  const githubLink = document.getElementById("social-github");
  if (githubLink) githubLink.href = data.profile.githubUrl;

  const linkedinLink = document.getElementById("social-linkedin");
  if (linkedinLink) linkedinLink.href = data.profile.linkedinUrl;

  const twitterLink = document.getElementById("social-twitter");
  if (twitterLink) twitterLink.href = data.profile.twitterUrl;
}

/* ==========================================================================
   Typewriter Animation (Hero)
   ========================================================================== */
function initTypewriter() {
  const words = PORTFOLIO_DATA.roles;
  const typewriterSpan = document.getElementById("typewriter");
  if (!typewriterSpan) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      // Remove characters
      typewriterSpan.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // Delete faster
    } else {
      // Add characters
      typewriterSpan.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100; // Type standard speed
    }

    // Determine state
    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at full word
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      // Move to next word
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 500; // Small delay before typing next word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   Header Style on Scroll
   ========================================================================== */
function initHeaderScroll() {
  const header = document.getElementById("site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/* ==========================================================================
   Mobile Navigation Drawer
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById("mobile-nav-toggle");
  const navDrawer = document.getElementById("mobile-nav");
  const links = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !navDrawer) return;

  function toggleMenu() {
    const isOpen = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", !isOpen);
    navDrawer.classList.toggle("active");
    navDrawer.setAttribute("aria-hidden", isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden"; // Disable scroll when menu is open
  }

  toggleBtn.addEventListener("click", toggleMenu);

  // Close drawer when any mobile nav link is clicked
  links.forEach(link => {
    link.addEventListener("click", () => {
      toggleBtn.setAttribute("aria-expanded", "false");
      navDrawer.classList.remove("active");
      navDrawer.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "auto";
    });
  });
}

/* ==========================================================================
   Skills Rendering & Filtering
   ========================================================================== */
function initSkillsFilter() {
  const skillsContainer = document.getElementById("skills-container");
  const filterButtons = document.querySelectorAll(".skills-filter .filter-btn");
  if (!skillsContainer) return;

  const skills = PORTFOLIO_DATA.skills;

  // Render function
  function renderSkills(categoryFilter = "all") {
    skillsContainer.innerHTML = "";
    
    const filteredSkills = categoryFilter === "all" 
      ? skills 
      : skills.filter(skill => skill.category === categoryFilter);

    filteredSkills.forEach(skill => {
      const card = document.createElement("div");
      card.className = "skill-card";
      
      // Select best icon fallback class
      let iconClass = skill.icon || "fa-solid fa-square-terminal";
      
      card.innerHTML = `
        <div class="skill-icon"><i class="${iconClass}"></i></div>
        <span class="skill-name">${skill.name}</span>
      `;
      skillsContainer.appendChild(card);
    });
  }

  // Initial render
  renderSkills();

  // Attach filter events
  filterButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      // Remove active from all
      filterButtons.forEach(b => b.classList.remove("active"));
      // Add active to current
      e.target.classList.add("active");
      // Get filter value
      const filterValue = e.target.getAttribute("data-filter");
      renderSkills(filterValue);
    });
  });
}

/* ==========================================================================
   Certifications Rendering
   ========================================================================== */
function initCertifications() {
  const certsContainer = document.getElementById("certs-container");
  if (!certsContainer) return;

  const certsData = PORTFOLIO_DATA.certifications;
  certsContainer.innerHTML = "";

  certsData.forEach(cert => {
    const card = document.createElement("div");
    card.className = "cert-card scroll-reveal";
    
    card.innerHTML = `
      <div class="cert-icon"><i class="${cert.icon}"></i></div>
      <div class="cert-details">
        <h3>${cert.name}</h3>
        <span class="cert-authority">${cert.authority}</span>
        <span class="cert-period">${cert.period}</span>
      </div>
    `;
    
    certsContainer.appendChild(card);
  });
}

/* ==========================================================================
   Projects Rendering & Filtering
   ========================================================================== */
function initProjectsFilter() {
  const projectsContainer = document.getElementById("projects-container");
  const filterButtons = document.querySelectorAll(".projects-filter .filter-btn");
  if (!projectsContainer) return;

  const projects = PORTFOLIO_DATA.projects;

  // Render function
  function renderProjects(categoryFilter = "all") {
    projectsContainer.innerHTML = "";
    
    const filteredProjects = categoryFilter === "all" 
      ? projects 
      : projects.filter(project => project.category === categoryFilter);

    filteredProjects.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card scroll-reveal reveal-active"; // Keep active animations
      
      const tagHTML = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("");
      
      card.innerHTML = `
        <div class="project-img-wrapper">
          <img src="${project.image}" alt="${project.title} screenshot" class="project-img">
        </div>
        <div class="project-info">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">${tagHTML}</div>
          <div class="project-links">
            <a href="${project.github}" class="project-link" target="_blank" aria-label="GitHub Repository"><i class="fa-brands fa-github"></i></a>
            <a href="${project.live}" class="project-link" target="_blank" aria-label="Live Demo Link"><i class="fa-solid fa-up-right-from-square"></i></a>
          </div>
        </div>
      `;
      projectsContainer.appendChild(card);
    });
  }

  // Initial render
  renderProjects();

  // Attach filter events
  filterButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterButtons.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      const filterValue = e.target.getAttribute("data-filter");
      renderProjects(filterValue);
    });
  });
}

/* ==========================================================================
   Timeline Rendering
   ========================================================================== */
function initTimeline() {
  const timelineContainer = document.getElementById("timeline-container");
  if (!timelineContainer) return;

  const timelineData = PORTFOLIO_DATA.timeline;
  timelineContainer.innerHTML = "";

  timelineData.forEach(item => {
    const timelineItem = document.createElement("div");
    timelineItem.className = "timeline-item";
    
    timelineItem.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-period">${item.period}</span>
        <h3 class="timeline-role">${item.title}</h3>
        <span class="timeline-company">${item.company}</span>
        <p class="timeline-description">${item.description}</p>
      </div>
    `;
    
    timelineContainer.appendChild(timelineItem);
  });
}

/* ==========================================================================
   Scroll Reveal Animations
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".scroll-reveal");

  function reveal() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150; //px before element enters viewport

    revealElements.forEach(element => {
      const revealTop = element.getBoundingClientRect().top;

      if (revealTop < windowHeight - revealPoint) {
        element.classList.add("reveal-active");
      }
    });
  }

  // Initial call to reveal elements already in view
  reveal();
  
  // Attach scroll event
  window.addEventListener("scroll", reveal);
}

/* ==========================================================================
   Contact Form Validation & Submission
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const statusDiv = document.getElementById("form-status");
  if (!form || !statusDiv) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById("contact-name").value.trim();
    const emailInput = document.getElementById("contact-email").value.trim();
    const subjectInput = document.getElementById("contact-subject").value.trim();
    const messageInput = document.getElementById("contact-message").value.trim();
    
    // Status loader
    statusDiv.className = "form-status";
    statusDiv.textContent = "Sending message...";
    statusDiv.style.color = "var(--text-light)";
    
    // Simulate API request
    setTimeout(() => {
      if (nameInput && emailInput && subjectInput && messageInput) {
        statusDiv.textContent = `Thank you, ${nameInput}! Your message has been sent successfully.`;
        statusDiv.classList.add("success");
        statusDiv.style.color = "var(--primary)";
        form.reset();
      } else {
        statusDiv.textContent = "Oops! Please make sure all fields are filled out correctly.";
        statusDiv.classList.add("error");
        statusDiv.style.color = "var(--secondary)";
      }
    }, 1200);
  });
}
