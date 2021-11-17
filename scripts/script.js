// Creating namespace object
const app = {};

// Storing elements and functions in namespace elements
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

app.polyfillScrollingForMobile = () => {
  !function(){"use strict";function o(){var o=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==o.__forceSmoothScrollPolyfill__)){var l,e=o.HTMLElement||o.Element,r=468,i={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elementScroll:e.prototype.scroll||n,scrollIntoView:e.prototype.scrollIntoView},s=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now,c=(l=o.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);o.scroll=o.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?h.call(o,t.body,void 0!==arguments[0].left?~~arguments[0].left:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:o.scrollY||o.pageYOffset):i.scroll.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:o.scrollY||o.pageYOffset))},o.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?i.scrollBy.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var o=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var l=function(o){for(;o!==t.body&&!1===(e=p(l=o,"Y")&&a(l,"Y"),r=p(l,"X")&&a(l,"X"),e||r);)o=o.parentNode||o.host;var l,e,r;return o}(this),e=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(h.call(this,l,l.scrollLeft+r.left-e.left,l.scrollTop+r.top-e.top),"fixed"!==o.getComputedStyle(l).position&&o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function n(o,t){this.scrollLeft=o,this.scrollTop=t}function f(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function p(o,t){return"Y"===t?o.clientHeight+c<o.scrollHeight:"X"===t?o.clientWidth+c<o.scrollWidth:void 0}function a(t,l){var e=o.getComputedStyle(t,null)["overflow"+l];return"auto"===e||"scroll"===e}function d(t){var l,e,i,c,n=(s()-t.startTime)/r;c=n=n>1?1:n,l=.5*(1-Math.cos(Math.PI*c)),e=t.startX+(t.x-t.startX)*l,i=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,i),e===t.x&&i===t.y||o.requestAnimationFrame(d.bind(o,t))}function h(l,e,r){var c,f,p,a,h=s();l===t.body?(c=o,f=o.scrollX||o.pageXOffset,p=o.scrollY||o.pageYOffset,a=i.scroll):(c=l,f=l.scrollLeft,p=l.scrollTop,a=n),d({scrollable:c,method:a,startTime:h,startX:f,startY:p,x:e,y:r})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:o}:o()}();
}

app.navBarRevert = () => {
  app.topBar.classList.remove('bar1Transform');
  app.middleBar.classList.remove('bar2Transform');
  app.bottomBar.classList.remove('bar3Transform');
  app.topNav.classList.remove('navBarExpanded');
}


// Declaring init method
app.init = () => {
  app.hamburgerMenu();
  app.navScroll();
  app.titleColor();
  app.contactDesc();
  app.polyfillScrollingForMobile();
};


// Open and close hamburger menu
app.hamburgerMenu = () => {
  app.threeBars.addEventListener('click', () => {
    app.topBar.classList.toggle('bar1Transform');
    app.middleBar.classList.toggle('bar2Transform');
    app.bottomBar.classList.toggle('bar3Transform');
    app.topNav.classList.toggle('navBarExpanded');
  })
}


// Page scroll from top nav bar
app.navScroll = function() {
  document.querySelector(`#arrow`).addEventListener('click', () => {
    app.aboutMe.scrollIntoView({behavior: "smooth"});
  })
  document.querySelector(`#hireContact`).addEventListener('click', () => {
    app.contact.scrollIntoView({behavior: "smooth"});
  })
  document.querySelector(`#navAboutMe`).addEventListener('click', () => {
    app.aboutMe.scrollIntoView({behavior: "smooth"});
    app.navBarRevert();
  })
  document.querySelector(`#navSkills`).addEventListener('click', () => {
    app.skills.scrollIntoView({behavior: "smooth"});
    app.navBarRevert();
  })
  document.querySelector(`#navProjects`).addEventListener('click', () => {
    app.projects.scrollIntoView({behavior: "smooth"});
    app.navBarRevert();
  })
  document.querySelector(`#navContact`).addEventListener('click', () => {
    app.contact.scrollIntoView({behavior: "smooth"});
    app.navBarRevert();
  })
}


// Title animation
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


// Rendering icon fade upon hover
app.contactDesc = () => {
  app.iconCalendly.addEventListener("mouseenter", () => {
      app.iconDetailsCalendly.classList.toggle('contactLinksFadeIn');
  })
  app.iconGithub.addEventListener("mouseenter", () => {
    app.iconDetailsGithub.classList.toggle('contactLinksFadeIn');
  })
  app.iconLinkedin.addEventListener("mouseenter", () => {
    app.iconDetailsLinkedin.classList.toggle('contactLinksFadeIn');
  })
  app.iconCalendly.addEventListener("mouseout", () => {
    app.iconDetailsCalendly.classList.toggle('contactLinksFadeIn');
  })
  app.iconGithub.addEventListener("mouseout", () => {
    app.iconDetailsGithub.classList.toggle('contactLinksFadeIn');
  })
  app.iconLinkedin.addEventListener("mouseout", () => {
    app.iconDetailsLinkedin.classList.toggle('contactLinksFadeIn');
  })
}


// Call init method
app.init();