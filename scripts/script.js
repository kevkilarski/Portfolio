// Create namespace object
const app = {};

// Storing elements in namespace elements
app.threeBars = document.querySelector('#mobileHamContainer');
app.topBar = document.querySelector('#mobileHamBar1');
app.middleBar = document.querySelector('#mobileHamBar2');
app.bottomBar = document.querySelector('#mobileHamBar3');
app.nav = document.querySelector('#topNavLinksContainer');

app.arrow = document.querySelector('#arrow')
app.aboutMe = document.querySelector('#aboutMe');

// Declare init method
app.init = () => {
  app.hamburgerMenu();
  app.arrowScroll();
};

app.hamburgerMenu = () => {
  app.threeBars.addEventListener('click', () => {
    app.topBar.classList.toggle('bar1Transform');
    app.middleBar.classList.toggle('bar2Transform');
    app.bottomBar.classList.toggle('bar3Transform');
    app.nav.classList.toggle('navBarExpanded');
  })
}

app.arrowScroll = () => {
  app.arrow.addEventListener('click', () => {
    console.log("hello");
    app.aboutMe.scrollIntoView({behavior: "smooth"});
  })
}



// Call init method
app.init();
