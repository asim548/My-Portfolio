const portfolioData = {
  skills: [
    { name: "JavaScript", iconClass: "devicon-javascript-plain colored", type: "devicon" },
    { name: "Python", iconClass: "devicon-python-plain colored", type: "devicon" },
    { name: "Java", iconClass: "devicon-java-plain colored", type: "devicon" },
    { name: "C++", iconClass: "devicon-cplusplus-plain colored", type: "devicon" },
    { name: "React", iconClass: "devicon-react-original colored", type: "devicon" },
    { name: "Next.js", iconClass: "devicon-nextjs-original", type: "devicon" },
    { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-plain colored", type: "devicon" },
    { name: "Node.js", iconClass: "devicon-nodejs-plain colored", type: "devicon" },
    { name: "Express.js", iconClass: "devicon-express-original", type: "devicon" },
    { name: "FastAPI", iconClass: "devicon-fastapi-plain colored", type: "devicon" },
    { name: "Flask", iconClass: "devicon-flask-original", type: "devicon" },
    { name: "MongoDB", iconClass: "devicon-mongodb-plain colored", type: "devicon" },
    { name: "MySQL", iconClass: "devicon-mysql-plain colored", type: "devicon" },
    { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored", type: "devicon" },
    { name: "Docker", iconClass: "devicon-docker-plain colored", type: "devicon" },
    { name: "CI/CD", iconClass: "fas fa-arrows-spin", type: "fa" },
    { name: "Git", iconClass: "devicon-git-plain colored", type: "devicon" },
    { name: "GitHub", iconClass: "devicon-github-original", type: "devicon" },
    { name: "Vercel", iconClass: "devicon-vercel-original", type: "devicon" },
    { name: "Render", iconSrc: "https://cdn.simpleicons.org/render/46E3B7", type: "img" },
    { name: "AWS", iconClass: "devicon-amazonwebservices-plain-wordmark colored", type: "devicon" },
    { name: "scikit-learn", iconSrc: "https://cdn.simpleicons.org/scikitlearn/F7931E", type: "img" },
    { name: "NLTK", iconClass: "fas fa-language", type: "fa" },
    { name: "Pandas", iconClass: "devicon-pandas-original colored", type: "devicon" },
    { name: "Streamlit", iconClass: "devicon-streamlit-original colored", type: "devicon" },
    { name: "TF-IDF", iconClass: "fas fa-chart-bar", type: "fa" },
    { name: "Computer Vision", iconClass: "fas fa-eye", type: "fa" },
    { name: "n8n", iconSrc: "https://cdn.simpleicons.org/n8n/EA4B71", type: "img" },
    { name: "Zapier", iconSrc: "https://cdn.simpleicons.org/zapier/FF4A00", type: "img" },
    { name: "Make", iconClass: "fas fa-puzzle-piece", type: "fa" },
    { name: "GoHighLevel", iconClass: "fas fa-robot", type: "fa" },
  ],

  experiences: [
    {
      company: "NOXATECH ORG",
      title: "Software Engineering",
      duration: "June 2025 – Aug 2025",
      icon: "fas fa-laptop-code",
      responsibilities: [
        "Contributed to a Hospital Management System using C++ over an 8-week structured program.",
        "Designed system architecture and implemented core modules including scheduling, patient records, and billing.",
        "Collaborated with the engineering team on software design, testing, and delivery.",
      ],
      aosDelay: 0,
    },
  ],

  projects: [
    {
      title: "CyberGuard — AI Cyberbullying Detection",
      description:
        "End-to-end NLP and ML system that classifies social text into Safe, Toxic, and Severe Bullying. Streamlit app with real-time analysis, batch CSV screening, Plotly dashboards, and 72.5% test accuracy on 11K+ labeled tweets.",
      images: [
        { src: "assets/cyberguard-safe.png", alt: "CyberGuard safe text classification result", caption: "Safe" },
        { src: "assets/cyberguard-toxic.png", alt: "CyberGuard toxic text classification result", caption: "Toxic" },
        { src: "assets/cyberguard-severe.png", alt: "CyberGuard severe bullying classification result", caption: "Severe" },
        { src: "assets/cyberguard-model-insights.png", alt: "CyberGuard model insights and metrics dashboard", caption: "Model Insights" },
      ],
      badges: ["Python", "NLTK", "scikit-learn", "Streamlit"],
      featured: "AI",
      link: "https://github.com/asim548/CyberGuard-AI-Based-Cyberbullying-Detection-System.git",
      wide: true,
    },
    {
      title: "MarketMinds — AI Financial Dashboard",
      description:
        "Real-time investment dashboard integrating AI/ML models for stocks, forex, and crypto insights. Final-year project built with Flask, PostgreSQL, and computer vision pipelines.",
      image: "assets/marketminds-ai-picks.png",
      badges: ["Python", "Flask", "PostgreSQL", "Computer Vision"],
      featured: "FYP",
      link: "https://github.com/asim548/MarketMinds.git",
    },
    {
      title: "MovieHub — Streaming Web App",
      description:
        "Netflix-style MERN platform with admin, seller, and user roles, full authentication, subscription flows, and live deployment on Vercel.",
      image: "assets/moviehub-login.png",
      badges: ["MERN", "Vercel", "RBAC"],
      featured: "MERN",
      link: "https://github.com/asim548/Movie-Hub-Web-Project.git",
    },
    {
      title: "Secure Messaging System",
      description:
        "End-to-end encrypted messaging app using AES-256 for complete data privacy, secure file sharing, and cryptographic workflow controls.",
      image: "assets/info-login.png",
      badges: ["MERN", "AES-256", "Security"],
      featured: "Security",
      link: "https://github.com/asim548/Info_Project.git",
    },
    {
      title: "Real-Time Temperature Prediction",
      description:
        "Live data pipeline and ML model to predict Lahore temperatures in real time, with Airflow orchestration, Docker services, Grafana monitoring, and MinIO storage.",
      image: "assets/mlops-grafana-dashboard.png",
      badges: ["Python", "MongoDB", "MLOps"],
      featured: "Pipeline",
      link: "https://github.com/asim548/Mlops_Project.git",
    },
  ],

  contact: [
    {
      type: "Email",
      value: "asimshehzad7065@gmail.com",
      icon: "fas fa-envelope",
      iconClass: "text-danger",
      link: "mailto:asimshehzad7065@gmail.com",
      aosDelay: 0,
    },
    {
      type: "GitHub",
      value: "github.com/asim548",
      icon: "fab fa-github",
      iconClass: "text-light",
      link: "https://github.com/asim548",
      aosDelay: 60,
    },
    {
      type: "LinkedIn",
      value: "linkedin.com/in/asim-shehzad-09145141a",
      icon: "fab fa-linkedin",
      iconClass: "text-primary",
      link: "https://www.linkedin.com/in/asim-shehzad-09145141a",
      aosDelay: 120,
    },
    {
      type: "Upwork",
      value: "Freelancer profile",
      icon: "fab fa-upwork",
      iconClass: "text-success",
      link: "https://www.upwork.com/freelancers/~014fedc448b9c0cd4d?mp_source=share",
      aosDelay: 180,
    },
    {
      type: "Fiverr",
      value: "Fiverr gigs",
      icon: "fas fa-briefcase",
      iconClass: "text-warning",
      link: "https://www.fiverr.com/s/kLPammN",
      aosDelay: 240,
    },
    {
      type: "Portfolio",
      value: "asimshehzad.vercel.app",
      icon: "fas fa-globe",
      iconClass: "text-info",
      link: "https://asimshehzad.vercel.app/",
      aosDelay: 300,
    },
  ],
};

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({ duration: 900, once: true, offset: 80 });
  initLoadingOverlay();
  initNavigation();
  initSkills();
  initExperience();
  initProjects();
  initContact();
  initLazyLoading();
  initParticles();
});

function initLoadingOverlay() {
  window.addEventListener("load", function () {
    setTimeout(() => {
      const overlay = document.querySelector(".loading-overlay");
      if (overlay) {
        overlay.style.opacity = "0";
        overlay.style.transition = "opacity 0.6s ease";
        setTimeout(() => overlay.remove(), 600);
      }
    }, 800);
  });
}

function initNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        const navCollapse = document.querySelector(".navbar-collapse");
        if (navCollapse && navCollapse.classList.contains("show")) {
          const toggler = document.querySelector(".navbar-toggler");
          if (toggler) toggler.click();
        }
        document.querySelectorAll(".nav-link").forEach((a) => a.classList.remove("active"));
        this.classList.add("active");
      }
    });
  });

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY + 160;
    sections.forEach((section) => {
      if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
        let sectionId = section.getAttribute("id");
        document.querySelectorAll(".nav-link").forEach((link) => link.classList.remove("active"));
        document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add("active");
      }
    });
  });

  window.addEventListener("scroll", function () {
    const hero = document.querySelector(".hero");
    if (hero) {
      const scrollY = window.pageYOffset;
      hero.style.transform = `translateY(${scrollY * -0.18}px)`;
    }
  });

  setTimeout(function () {
    const heroTitle = document.querySelector(".hero-title .gradient-text");
    if (heroTitle) {
      typeEffect(heroTitle, "Asim Shehzad", 65);
    }
  }, 900);
}

function typeEffect(element, text, speed = 80) {
  let i = 0;
  element.textContent = "";
  element.style.borderRight = "3px solid rgba(255,255,255,0.7)";
  function typeWriter() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(() => {
        element.style.borderRight = "none";
      }, 800);
    }
  }
  typeWriter();
}

function initSkills() {
  const skillsContainer = document.getElementById("skills-container");
  if (!skillsContainer) return;

  const mernGroup = ["MongoDB", "Express.js", "React", "Node.js"];

  portfolioData.skills.forEach((skill, index) => {
    let iconHtml = "";
    if (skill.type === "devicon") {
      iconHtml = `<i class="${skill.iconClass}" style="font-size:2.2rem;"></i>`;
    } else if (skill.type === "fa") {
      iconHtml = `<i class="${skill.iconClass}" style="font-size:1.8rem;color:var(--amber);"></i>`;
    } else if (skill.type === "img") {
      iconHtml = `<img src="${skill.iconSrc}" alt="${skill.name}" width="36" height="36" style="object-fit:contain;" />`;
    }

    const isMERN = mernGroup.includes(skill.name);
    const delay = 50 * index;

    const skillHtml = `
      <div class="col-6 col-sm-4 col-md-3 col-lg-2" data-aos="fade-up" data-aos-delay="${delay}">
        <div class="skill-card ${isMERN ? "mern-skill" : ""}">
          <div class="skill-inner">
            ${isMERN ? '<span class="mern-dot" aria-hidden="true"></span>' : ""}
            <div class="skill-icon-wrap">${iconHtml}</div>
            <span class="skill-name">${skill.name}</span>
          </div>
        </div>
      </div>
    `;
    skillsContainer.innerHTML += skillHtml;
  });
}

function initExperience() {
  const experienceContainer = document.getElementById("experience-container");
  if (!experienceContainer) return;
  portfolioData.experiences.forEach((exp) => {
    const responsibilitiesList = exp.responsibilities
      .map((resp) => `<li class="exp-item">${resp}</li>`)
      .join("");
    const experienceCardHtml = `
      <div class="exp-card" data-aos="fade-up" data-aos-delay="${exp.aosDelay}">
        <div class="exp-card-accent"></div>
        <div class="exp-card-content">
          <div class="exp-header">
            <div class="exp-icon-wrap"><i class="${exp.icon}"></i></div>
            <div>
              <h4 class="exp-title">${exp.title}</h4>
              <span class="exp-company">${exp.company}</span>
            </div>
          </div>
          <div class="exp-duration"><i class="fa-regular fa-calendar me-2"></i>${exp.duration}</div>
          <ul class="exp-list">${responsibilitiesList}</ul>
        </div>
      </div>
    `;
    experienceContainer.innerHTML += experienceCardHtml;
  });
}

function buildProjectMediaHtml(project) {
  const featuredBadge = project.featured
    ? `<span class="proj-featured-badge">${project.featured}</span>`
    : "";

  if (project.images && project.images.length > 0) {
    const galleryItems = project.images
      .map(
        (img) =>
          `<figure class="proj-gallery-item">
            <img src="${img.src}" alt="${img.alt}" loading="lazy" />
            ${img.caption ? `<figcaption>${img.caption}</figcaption>` : ""}
          </figure>`
      )
      .join("");

    return `
      <div class="proj-gallery-wrapper">
        ${featuredBadge}
        <div class="proj-gallery">${galleryItems}</div>
      </div>
    `;
  }

  return `
    <div class="proj-img-wrapper">
      <img src="${project.image}" alt="${project.title}" loading="lazy" />
      ${featuredBadge}
    </div>
  `;
}

function initProjects() {
  const projectsContainer = document.getElementById("projects-container");
  if (!projectsContainer) return;
  projectsContainer.innerHTML = "";

  if (portfolioData.projects.length === 0) {
    projectsContainer.innerHTML = `
      <div class="col-12">
        <div class="empty-projects-card" data-aos="fade-up">
          <div class="empty-icon"><i class="fas fa-code"></i></div>
          <h4>Projects Coming Soon</h4>
          <p>Exciting work is in progress. Check back soon!</p>
        </div>
      </div>
    `;
    return;
  }

  portfolioData.projects.forEach((project, index) => {
    const badgesHtml = project.badges
      .map((badge) => `<span class="proj-badge">${badge}</span>`)
      .join("");
    let actionBtns = "";
    if (project.video && project.link) {
      actionBtns = `
        <div class="project-action-row">
          <button class="project-action-btn" data-video="${project.video}" data-title="${project.title}">
            <i class="fas fa-play"></i> Demo
          </button>
          <a class="project-action-btn" href="${project.link}" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt"></i> Live
          </a>
        </div>
      `;
    } else if (project.video) {
      actionBtns = `
        <div class="project-action-row">
          <button class="project-action-btn" data-video="${project.video}" data-title="${project.title}">
            <i class="fas fa-play"></i> Demo
          </button>
        </div>
      `;
    } else if (project.link) {
      const isRepo = project.link.includes("github.com");
      const label = isRepo ? "Repo" : "Live";
      const iconClass = isRepo ? "fab fa-github" : "fas fa-external-link-alt";
      actionBtns = `
        <div class="project-action-row">
          <a class="project-action-btn" href="${project.link}" target="_blank" rel="noopener noreferrer">
            <i class="${iconClass}"></i> ${label}
          </a>
        </div>
      `;
    }

    const colClass = project.wide ? "col-12" : "col";
    const cardClass = project.wide ? "proj-card proj-card-wide" : "proj-card";

    const projectHtml = `
      <div class="${colClass}" data-aos="fade-up" data-aos-delay="${index * 80}">
        <div class="${cardClass}">
          ${buildProjectMediaHtml(project)}
          <div class="proj-body">
            <h4 class="proj-title">${project.title}</h4>
            <div class="proj-badges">${badgesHtml}</div>
            <p class="proj-desc">${project.description}</p>
            ${actionBtns}
          </div>
        </div>
      </div>
    `;
    projectsContainer.innerHTML += projectHtml;
  });

  document.querySelectorAll(".project-action-btn[data-video]").forEach((btn) => {
    btn.addEventListener("click", function () {
      openVideoModal(this.getAttribute("data-video"), this.getAttribute("data-title"));
    });
  });
}

function openVideoModal(videoUrl, title) {
  let embedUrl = "";
  if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
    let videoId = "";
    if (videoUrl.includes("youtu.be/")) {
      videoId = videoUrl.split("youtu.be/")[1].split(/[?&]/)[0];
    } else if (videoUrl.includes("v=")) {
      videoId = videoUrl.split("v=")[1].split("&")[0];
    }
    embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  } else {
    embedUrl = videoUrl;
  }
  const modalBody = document.getElementById("videoModalBody");
  modalBody.innerHTML = `
    <div class="ratio ratio-16x9">
      <iframe src="${embedUrl}" title="${title || "Project Demo"}" allowfullscreen allow="autoplay"></iframe>
    </div>
  `;
  document.getElementById("videoModalLabel").textContent = title || "Project Demo";
  const videoModal = new bootstrap.Modal(document.getElementById("videoModal"));
  videoModal.show();
  document.getElementById("videoModal").addEventListener(
    "hidden.bs.modal",
    function () {
      modalBody.innerHTML = "";
      document.getElementById("videoModalLabel").textContent = "";
    },
    { once: true }
  );
}

function initContact() {
  const contactContainer = document.getElementById("contact-container");
  if (!contactContainer) return;
  portfolioData.contact.forEach((contact) => {
    const isExternal = contact.link.startsWith("http");
    const targetAttrs = isExternal ? ' target="_blank" rel="noopener noreferrer"' : "";
    const contactHtml = `
      <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${contact.aosDelay}">
        <a href="${contact.link}" class="contact-card text-decoration-none"${targetAttrs}>
          <div class="contact-icon-wrap">
            <i class="${contact.icon} ${contact.iconClass}"></i>
          </div>
          <div class="contact-info">
            <h5>${contact.type}</h5>
            <p>${contact.value}</p>
          </div>
          <i class="fas fa-arrow-up-right-from-square contact-arrow"></i>
        </a>
      </div>
    `;
    contactContainer.innerHTML += contactHtml;
  });
}

function initLazyLoading() {
  const lazyImages = document.querySelectorAll("img.lazyload");
  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target;
          if (image.dataset.src) {
            image.src = image.dataset.src;
            image.onload = () => image.classList.remove("lazyload");
          }
          observer.unobserve(image);
        }
      });
    },
    { rootMargin: "200px" }
  );
  lazyImages.forEach((image) => imageObserver.observe(image));
}

function initParticles() {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  for (let i = 0; i < 18; i++) {
    const dot = document.createElement("div");
    dot.classList.add("hero-particle");
    dot.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      width: ${Math.random() * 4 + 2}px;
      height: ${Math.random() * 4 + 2}px;
      animation-delay: ${Math.random() * 8}s;
      animation-duration: ${Math.random() * 10 + 8}s;
      opacity: ${Math.random() * 0.4 + 0.1};
    `;
    hero.appendChild(dot);
  }
}
