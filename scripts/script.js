// Create namespace object
const app = {};

// Storing elements in namespace elements
app.threeBars = document.querySelector('#threeBars');
app.topBar = document.querySelector('#navBar1');
app.middleBar = document.querySelector('#navBar2');
app.bottomBar = document.querySelector('#navBar3');
app.nav = document.querySelector('#nav');

app.arrow = document.querySelector('#arrowScroll')
app.aboutMe = document.querySelector('#aboutMe');

// Declare init method
app.init = () => {
  app.hamburgerMenu();
  app.arrowScroll();
};

app.hamburgerMenu = () => {
  app.threeBars.addEventListener('click', () => {
    app.topBar.classList.toggle('topTransform');
    app.middleBar.classList.toggle('middleTransform');
    app.bottomBar.classList.toggle('bottomTransform');
    app.nav.classList.toggle('navExpanded');
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
