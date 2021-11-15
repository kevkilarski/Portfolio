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

// Declare init method
app.init = () => {
  app.hamburgerMenu();
  app.scroll();
};

// Where to put helper functions?
app.navBarToggle = () => {
  app.topBar.classList.toggle('bar1Transform');
  app.middleBar.classList.toggle('bar2Transform');
  app.bottomBar.classList.toggle('bar3Transform');
  app.topNav.classList.toggle('navBarExpanded');
}

app.hamburgerMenu = () => {
  app.threeBars.addEventListener('click', () => {
    app.navBarToggle();
  })
}

app.scroll = function() {
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




// Call init method
app.init();
