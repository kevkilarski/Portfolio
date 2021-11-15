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

// Where to put helper functions?
app.navBarToggle = () => {
  app.topBar.classList.toggle('bar1Transform');
  app.middleBar.classList.toggle('bar2Transform');
  app.bottomBar.classList.toggle('bar3Transform');
  app.topNav.classList.toggle('navBarExpanded');
}

// Declare init method
app.init = () => {
  app.hamburgerMenu();
  app.scroll();
  app.cursor();
};

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


app.cursor = () => {
  // setTimeout(function() {
  let counterBar = 4;
  let counterText = 5;
    setInterval(function() {
      counterBar--;
      console.log("counterBar = ", counterBar);
      console.log("counterText = ", counterText);
      if (counterBar === 0) {
        console.log("Yo!");
        document.querySelector('#titleWeb').classList.add('titleWeb2');
        setTimeout(function() {
          console.log("Hey!");
            let test1 = `hsl(${Math.floor(Math.random() * (200 - 160 + 1) + 160)} 100% 50%)`;
            let test2 = `hsl(${Math.floor(Math.random() * (200 - 160 + 1) + 160)} 100% 50%)`;
            let test3 = `hsl(${Math.floor(Math.random() * (200 - 160 + 1) + 160)} 100% 50%)`;
            let test4 = `hsl(${Math.floor(Math.random() * (200 - 160 + 1) + 160)} 100% 50%)`;
            let test5 = `hsl(${Math.floor(Math.random() * (200 - 160 + 1) + 160)} 100% 50%)`;
            document.querySelector('#titleWeb').classList.add('titleWeb3');
            document.querySelector('#titleWeb').classList.remove('titleWebFade');
            document.querySelector('#titleWeb').style.backgroundImage = `linear-gradient(40deg, ${test1}, ${test2}, ${test3}, ${test4}, ${test5})`;
          counterBar = 4;
        }, 1000);
        setTimeout(function() {
          document.querySelector('#titleWeb').classList.remove('titleWeb2');
          document.querySelector('#titleWeb').classList.add('titleWebFade');

          // document.querySelector('#titleWeb').classList.remove('titleWebFade');
        }, 2000);
      }
      toWhite = ((counterBar * 25) / 2) + '%';
      console.log(toWhite);
    }, 1000);
    // document.querySelector('#titleWeb').style.backgroundImage = `none`;
    // setInterval(function() {
    //   console.log("Hey!");
    //   let color1 = Math.floor(Math.random()*16777215).toString(16);
    //   let color2 = Math.floor(Math.random()*16777215).toString(16);
    //   // document.querySelector('#titleWeb').innerHTML = "hey!!!";
    //   document.querySelector('#titleWeb').classList.add('titleWeb3');
    //   document.querySelector('#titleWeb').style.backgroundImage = `linear-gradient(40deg, #${color1}, #${color2})`;
    // }, 3000);

  // }, 200);
}
  


// Call init method
app.init();
