// Animaciones y efectos interactivos
document.addEventListener("DOMContentLoaded", () => {
  // Animación del navbar al hacer scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    const isDarkTheme =
      document.documentElement.getAttribute("data-theme") === "dark";
    if (window.scrollY > 100) {
      navbar.style.background = isDarkTheme
        ? "rgba(0, 0, 0, 0.95)"
        : "rgba(255, 255, 255, 0.98)";
      navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.background = isDarkTheme
        ? "rgba(0, 0, 0, 0.95)"
        : "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "none";
    }
  });

  // Animación suave para los enlaces de navegación
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Animación de entrada para las cards de habilidades
  const skillCards = document.querySelectorAll(".skill-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  skillCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
  });

  // Animación para las cards de proyectos
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)";
      card.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    });
  });

  // Efecto de typing para el subtítulo
  const subtitle = document.querySelector(".subtitle");
  const text = subtitle.textContent;
  subtitle.textContent = "";
  let index = 0;

  function typeText() {
    if (index < text.length) {
      subtitle.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, 50);
    }
  }

  // Iniciar el efecto de typing después de un pequeño delay
  setTimeout(typeText, 1000);

  // Animación para los proyectos
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    project.addEventListener("mouseover", () => {
      project.style.backgroundColor = "#e7f3ff";
    });
    project.addEventListener("mouseout", () => {
      project.style.backgroundColor = "white";
    });
  });

  // Función para cambiar el idioma
  function setLanguage(language) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translation = key
        .split(".")
        .reduce((obj, i) => obj[i], translations[language]);
      if (translation) {
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.placeholder = translation;
        } else {
          element.textContent = translation;
        }
      }
    });
    document.documentElement.lang = language;
    localStorage.setItem("preferred-language", language);
    toggleVisibility(language);
  }

  function toggleVisibility(language) {
    const esElements = document.querySelectorAll(
      '[data-i18n][data-i18n$=".es"]'
    );
    const enElements = document.querySelectorAll(
      '[data-i18n][data-i18n$=".en"]'
    );
    if (language === "es") {
      esElements.forEach((el) => (el.style.display = ""));
      enElements.forEach((el) => (el.style.display = "none"));
    } else {
      esElements.forEach((el) => (el.style.display = "none"));
      enElements.forEach((el) => (el.style.display = ""));
    }
  }

  // Selector de idioma con radio buttons
  const languageRadios = document.querySelectorAll('input[name="language"]');
  languageRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      const selectedLanguage = this.value;
      setLanguage(selectedLanguage);
    });
  });

  // Cargar el idioma preferido al iniciar
  const savedLanguage = localStorage.getItem("preferred-language") || "en";
  setLanguage(savedLanguage);

  // Establecer el radio button correcto al cargar
  const languageRadio = document.getElementById(
    `languageSelect-${savedLanguage}`
  );
  if (languageRadio) {
    languageRadio.checked = true;
  }

  // Configuración de temas
  const themes = {
    light: {
      name: "light",
      icon: "fa-sun",
      logoDisplay: { light: "block", dark: "none" },
    },
    dark: {
      name: "dark",
      icon: "fa-moon",
      logoDisplay: { light: "none", dark: "block" },
    },
  };

  // Función para cambiar el tema
  function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";

    // Cambiar tema
    html.setAttribute("data-theme", themes[newTheme].name);

    // Actualizar ícono
    const themeToggleIcon = document.getElementById("theme-toggle-icon");
    if (themeToggleIcon) {
      themeToggleIcon.className = `fas ${themes[newTheme].icon}`;
    }

    // Cambiar logos
    const logoImageLight = document.getElementById("logoImageLight");
    const logoImageDark = document.getElementById("logoImageDark");

    if (logoImageLight) {
      logoImageLight.style.display = themes[newTheme].logoDisplay.light;
    }

    if (logoImageDark) {
      logoImageDark.style.display = themes[newTheme].logoDisplay.dark;
    }

    // Guardar preferencia
    localStorage.setItem("theme", newTheme);
  }

  // Agregar botón de tema si no existe
  function addThemeToggle() {
    const navbar = document.querySelector(".navbar");
    const languageSelector = document.querySelector(".language-selector");

    // Verificar si el botón ya existe
    if (
      navbar &&
      languageSelector &&
      !document.getElementById("theme-toggle")
    ) {
      const themeToggleButton = document.createElement("div");
      themeToggleButton.id = "theme-toggle";
      themeToggleButton.classList.add("theme-toggle");
      themeToggleButton.innerHTML = `
        <button aria-label="Cambiar tema">
          <i id="theme-toggle-icon" class="fas fa-moon"></i>
        </button>
      `;
      themeToggleButton.addEventListener("click", toggleTheme);

      // Insertar al principio del navbar
      navbar.insertBefore(themeToggleButton, languageSelector);
    }
  }

  // Inicializar tema
  function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    const html = document.documentElement;

    // Establecer tema
    html.setAttribute("data-theme", savedTheme);

    // Actualizar ícono
    const themeToggleIcon = document.getElementById("theme-toggle-icon");
    if (themeToggleIcon) {
      themeToggleIcon.className = `fas ${themes[savedTheme].icon}`;
    }

    // Ajustar logos
    const logoImageLight = document.getElementById("logoImageLight");
    const logoImageDark = document.getElementById("logoImageDark");

    if (logoImageLight) {
      logoImageLight.style.display = themes[savedTheme].logoDisplay.light;
    }

    if (logoImageDark) {
      logoImageDark.style.display = themes[savedTheme].logoDisplay.dark;
    }
  }

  // Agregar botón de tema
  addThemeToggle();

  // Inicializar tema
  initTheme();
});
