// Create namespace object
const app = {};

// Storing elements in namespace elements
app.threeBars = document.querySelector('#mobileHamContainer');
app.topBar = document.querySelector('#mobileHamBar1');
app.middleBar = document.querySelector('#mobileHamBar2');
app.bottomBar = document.querySelector('#mobileHamBar3');
app.topNav = document.querySelector('#topNavLinksContainer');
app.aboutMe = document.querySelector('#aboutMe');
app.skills = document.querySelector('#skills');
app.projects = document.querySelector('#projects');
app.contact = document.querySelector('#contact');
app.titleWebDev = document.querySelector('#titleWebDev');
app.iconCalendly = document.querySelector('#iconCalendly');
app.iconGithub = document.querySelector('#iconGithub');
app.iconLinkedin = document.querySelector('#iconLinkedin');
app.iconDetailsCalendly = document.querySelector('#iconDetailsCalendly');
app.iconDetailsGithub = document.querySelector('#iconDetailsGithub');
app.iconDetailsLinkedin = document.querySelector('#iconDetailsLinkedin');

app.navBarToggle = () => {
  app.topBar.classList.toggle('bar1Transform');
  app.middleBar.classList.toggle('bar2Transform');
  app.bottomBar.classList.toggle('bar3Transform');
  app.topNav.classList.toggle('navBarExpanded');
}

// Declare init method
app.init = () => {
  app.hamburgerMenu();
  app.navScroll();
  app.titleColor();
  app.contactDesc();
};

app.hamburgerMenu = () => {
  app.threeBars.addEventListener('click', () => {
    app.navBarToggle();
  })
}

app.navScroll = function() {
  document.querySelector(`#arrow`).addEventListener('click', () => {
    app.aboutMe.scrollIntoView({behavior: "smooth"});
  })
  document.querySelector(`#navAboutMe`).addEventListener('click', () => {
    app.aboutMe.scrollIntoView({behavior: "smooth"});
    app.navBarToggle();
  })
  document.querySelector(`#navSkills`).addEventListener('click', () => {
    app.skills.scrollIntoView({behavior: "smooth"});
    app.navBarToggle();
  })
  document.querySelector(`#navProjects`).addEventListener('click', () => {
    app.projects.scrollIntoView({behavior: "smooth"});
    app.navBarToggle();
  })
  document.querySelector(`#navContact`).addEventListener('click', () => {
    app.contact.scrollIntoView({behavior: "smooth"});
    app.navBarToggle();
  })
  document.querySelector(`#hireContact`).addEventListener('click', () => {
    app.contact.scrollIntoView({behavior: "smooth"});
    app.navBarToggle();
  })
}


app.titleColor = () => {
  // Declare and initialize countdown for white bar rendering
  let countdownForBar = 4;

  // Randomizes usable color options in hsl format
  colorRandomizer = () => {
    return `hsl(${Math.floor(Math.random() * (200 - 160 + 1) + 160)} 100% 50%)`;
  }

  // One-second timer to structure title animation
  setInterval(function() {
    countdownForBar--;
    if (countdownForBar === 0) {
      // Begins bar animation, taking one second to fill text
      app.titleWebDev.classList.add('titleBar');

      // After one second, begin changing color of text
      setTimeout(function() {
        app.titleWebDev.classList.add('titleColorNew');
        app.titleWebDev.classList.remove('titleColorToWhite');
        app.titleWebDev.style.backgroundImage = `linear-gradient(40deg, ${colorRandomizer()}, ${colorRandomizer()}, ${colorRandomizer()}, ${colorRandomizer()}, ${colorRandomizer()}, ${colorRandomizer()})`;
        countdownForBar = 4;
      }, 1000);

      // Bar animation ends, reset bar and begin color transition back to white
      setTimeout(function() {
        app.titleWebDev.classList.remove('titleBar');
        app.titleWebDev.classList.add('titleColorToWhite');
      }, 2000);
    }
  }, 1000);
}

app.contactDesc = () => {
  app.iconCalendly.addEventListener("mouseenter", () => {
      app.iconDetailsCalendly.classList.add('contactLinksFadeIn');
      app.iconDetailsCalendly.classList.remove('contactLinksFadeOut');
  })
  app.iconGithub.addEventListener("mouseenter", () => {
    app.iconDetailsGithub.classList.add('contactLinksFadeIn');
    app.iconDetailsGithub.classList.remove('contactLinksFadeOut');
  })
  app.iconLinkedin.addEventListener("mouseenter", () => {
    app.iconDetailsLinkedin.classList.add('contactLinksFadeIn');
    app.iconDetailsLinkedin.classList.remove('contactLinksFadeOut');
  })

  app.iconCalendly.addEventListener("mouseout", () => {
    app.iconDetailsCalendly.classList.add('contactLinksFadeOut');
    app.iconDetailsCalendly.classList.remove('contactLinksFadeIn');
  })
  app.iconGithub.addEventListener("mouseout", () => {
    app.iconDetailsGithub.classList.add('contactLinksFadeOut');
    app.iconDetailsGithub.classList.remove('contactLinksFadeIn');
  })
  app.iconLinkedin.addEventListener("mouseout", () => {
    app.iconDetailsLinkedin.classList.add('contactLinksFadeOut');
    app.iconDetailsLinkedin.classList.remove('contactLinksFadeIn');
  })
}

// Call init method
app.init();
