gsap.registerPlugin(ScrollTrigger);
var t1 = gsap.timeline({
            paused: "true"
      });
      t1.to(".menu", {
            duration: 1,
            x: "0%",
            ease: Expo.easeInOut
      });
      t1.fromTo(".li", {
            y: "-110%",
            opacity: 0 
      },{
            duration: .5,
            opacity: 1,
            y: "0%",
            stagger: 0.25
      });

var t2 = gsap.timeline({
            paused: "true"
      });
      t2.to(".campaign", {
            duration: 1,
            x: "0%",
            ease: Expo.easeInOut
      });


class VerticalCarousel {
      constructor() {
            this.currentEventListener = null;
            this.currentPage = '';
            this.previousPage = '';
            this.newPage = '';
            this.pages = {
                  'page1':  `<article id="page1" class="background page carousel-item">
                  <div class="wrapper">
                  </div>
               </article> 
               `
                  ,

                  'page2': 
                        `
                  <article id="page2" class="background-about page carousel-item">
                        <table>
                              <tr class="about-container">
                                    <td class="about-left-cell">
                                          <div class="about-quote">
                                                <span><span>"Besides my aura & </span><span>influence, of </span><span>course, my biggest <span>asset </span><span>is my versatility"</span></span>
                                          </div> 
                                          <div class="about-text">
                                                <span>Ashley Okoli is a 25 year old Stylist, Designer, Creative Director, and Social Media Influencer, with a knack for making bad b*tches looking even badder.</span>

                                                <span>Ashley enjoys being in front of the camera, either as herself or as one of her many alter egos. </span>
                                                <span>Through fashion – dressing up, and telling stories through the clothes she styles or the clothes she designs is her way of life, she is able to express herself. Which is how she steals freedom in a society that largely constricts it.</span>
                                                <span>Through being so liberated in herself, Ashley is able to inspire people to be free also, or act as a vessel for them to express their own freedom through her.</span>
                                                </span>
                                          
                                    </td>
                                    <td class="about-right-cell">
                                          <div class="image">
                                                <img src="images/background-one.jpg" alt="">
                                          </div>
                                          <div class="brand-item">
                                                <a href="https://bubblegumclub.co.za/fashion/making-waves-in-the-nigerian-alte-movement-ashley-okoli-sets-the-scene/">
                                                      <div class="shape">
                                                            <div class="text">
                                                                  <span>B</span>
                                                                  <span>U</span>
                                                                  <span>B</span>
                                                                  <span>B</span>
                                                                  <span>L</span>
                                                                  <span>E</span>
                                                                  <span>G</span>
                                                                  <span>U</span>
                                                                  <span>M</span>
                                                            </div>
                                                      </div>
                                                </a>
                                          </div>
                                    </td>
                              </tr>
                        </table>
                   </article>
              `
                  ,
              
              'page3': 
                  `<article id="page3" class="background-press carousel-item">
                        <div class="navigation-wrapper">
                              <div class="press-preview-wrapper">
                                    <div class="press-preview"></div>
                              </div>
                              <ul class="navigation-wrapper">
                                    <li class="navigation-item">
                                          <a href="https://www.wmagazine.com/fashion/ashley-okoli-alte-nigeria-interview" target="blank" class="navigation-link navigation-link-1">
                                                <span data-text="W-Magazine">W-Magazine</span>
                                          </a>
                                    </li>
                                    <li class="navigation-item">
                                          <a href="https://www.okayafrica.com/ashley-okoli-creative-director-alte-music-videos/" target="blank" class="navigation-link navigation-link-1">
                                                <span data-text="OkayAfrica.">OkayAfrica.</span>
                                          </a>
                                    </li>
                                    <li class="navigation-item">
                                          <a href="https://www.vogue.com/article/ashley-okoli-alte-fashion-lagos" target="blank" class="navigation-link navigation-link-1">
                                                <span data-text="VOGUE">VOGUE</span>
                                          </a>
                                    </li>
                                    <li class="navigation-item">
                                          <a href="https://ynaija.com/ynaijanonbinary-10-young-nigerians-challenging-conformity-in-the-culture/" target="blank" class="navigation-link navigation-link-1">
                                                <span data-text="YNaija.com">YNaija.com</span>
                                          </a>
                                    </li>
                                    <li class="navigation-item">
                                          <a href="https://www.farfetch.com/ng/stories/women/city-stories-trippin-lagos-solis-ashley-okoli-jess-finesse-edit-ss19.aspx" target="blank" class="navigation-link navigation-link-1">
                                                <span data-text="FARFETCH">FARFETCH</span>
                                          </a>
                                    </li>
                                    <li class="navigation-item">
                                          <a href="https://www.allure.com/story/queer-nigerians-makeup-as-resistence" target="blank" class="navigation-link navigation-link-1">
                                                <span data-text="allure">allure</span>
                                          </a>
                                    </li>
                                    <li class="navigation-item">
                                          <a href="/thepgmclub.com/blog/looking-at-the-alte-creative-ashley-okoli-taking-the-nigeria-fashion-industry-by-storm-with-her-experimental-styling/" target="blank" class="navigation-link navigation-link-1">
                                                <span data-text="pgm club">pgm club</span>
                                          </a>
                                    </li>
                                    <li class="navigation-item">
                                          <a href="https://bubblegumclub.co.za/fashion/making-waves-in-the-nigerian-alte-movement-ashley-okoli-sets-the-scene/" target="blank" class="navigation-link navigation-link-1">
                                                <span data-text="BUBBLEGUM CLUB">BUBBLEGUM CLUB</span>
                                          </a>
                                    </li>
                                    <li class="navigation-item navigation-link">
                                          <a href="https://culted.com/ashley-okoli-lagos-poster-girl/" target="blank" class="navigation-link navigation-link-1">
                                                <span data-text="culted">culted</span>
                                          </a>
                                    </li>
                                    
                              </ul>  
                                
                        </div>
                        <div class="progress-bar oscillate" id="progress-bar"></div>
                         
                  </article>
                   `};
                  this.divs = {
                        'menu':
                        `<div class="menu-btn">
                        <span class="menu-icon"></span>
                        </div>`,
                        'line': `<div class="line scale-x"></div>`
                  };
            }

      renderPage() {
            const carouselWrapper = document.getElementById('carousel-wrapper');
            carouselWrapper.innerHTML = this.pages[this.currentPage];
                  setTimeout(() => {
                        const progressBar = document.querySelector('.progress-bar');
                        const carouselItem = document.querySelector('.carousel-item');
                        const aboutQuote = document.querySelector('.about-quote');
                        const aboutText = document.querySelector('.about-text');  
                        

                        const wh = carouselItem.clientHeight,
                              dh = Math.max(carouselItem.scrollHeight);

                        if (progressBar) {
                              carouselItem.style.position = "relative";
                              
                              carouselItem.addEventListener("scroll", function() {
                                    const compStyle = window.getComputedStyle(progressBar);
                                    const height = parseFloat(compStyle.height) || 0;
                              
                                    if (height === 0) {
                                          progressBar.style.height = `30px`;
                                          console.log(progressBar.style.height);
                                          progressBar.classList.add("oscillate");
                                          console.log(height);
                                    }
                                    else {
                                          progressBar.classList.remove("oscillate");
                                    }
                                    
                                    var scrollPos = carouselItem.scrollTop,               
                                          scrollPercent = ((scrollPos / (dh - wh))),
                                          scrollTotal = (scrollPercent * dh),
                                          computedStyle = window.getComputedStyle(progressBar),
                                          marginBottom = parseFloat(computedStyle.marginBottom);
                                    
                                    scrollTotal = Math.min(scrollTotal, dh);
                                    const noBottom = (dh - (marginBottom));
                                    if (scrollTotal > noBottom) {
                                          progressBar.style.height = `${scrollTotal - (marginBottom)}px`;
                                          return;
                                    }
                                    progressBar.style.height = `${scrollTotal}px`;
                              });     
                        }

                        if (aboutQuote) {
                              setTimeout(() => {
                                    this.addDiv(aboutText);
                                    aboutText.classList.add('fade-in');
                                    this.removeDiv(aboutQuote);
                              }, 2500);
                        }

                        const about = document.querySelector('.background-about');
                        const shoppingBag = document.querySelector(".shopping-bag");
                        const portfolio = document.querySelector(".portfolio");
                        const menuBtn = document.querySelector(".menu-btn span");
                        if (about) {
                              shoppingBag.classList.add("shopping-bag-active"); 
                              portfolio.classList.add("portfolio-active");
                              menuBtn.classList.add("menu-dark");
                        }
                        else {
                              shoppingBag.classList.remove("shopping-bag-active"); 
                              portfolio.classList.remove("portfolio-active");
                              menuBtn.classList.remove("menu-dark");
                        }
                        
                  }, 0);
      }

      setPreviousPage() {
            const carouselWrapper = document.getElementById('carousel-wrapper');
            const previous = carouselWrapper.querySelector('.current-page');   
            if (previous) {
                  gsap.to(previous, {
                        transform: "translate3d(0, 0, -1300px)",
                        borderRadius: "10vmax",
                        duration: 1.2,
                        ease: "Strong.easeOut",
                  });
            }
      }

      findIndexOf(page) {
            const keys = Object.keys(this.pages);
            const index = keys.indexOf(page);
            return index !== -1 ? index + 1 : null;
      }          
    
      navigateTo(page) {
            var body = document.body;
            document.querySelector(".touch").innerHTML = this.divs[`menu`];
            this.appendLine();
            this.currentEventListener = function () {
                  const menuBtn = document.querySelector(".menu-btn span");  
                  if (menuBtn.classList.contains("menu-active")) {
                        if (page === 'page2') {       
                              setTimeout(() => {
                                    menuBtn.classList.remove("menu-active");
                                    menuBtn.classList.add("menu-dark");
                              }, 1200);
                              t1.reverse();
                        }
                        else {  
                              menuBtn.classList.remove("menu-dark");
                              t1.reverse();
                        }    
                        menuBtn.classList.remove("menu-active"); 
                              
                  }
                  else {
                        t1.play();
                        menuBtn.classList.remove("menu-dark");
                        menuBtn.classList.add("menu-active");      
                  }
            }
 
            if (this.currentEventListener !== null) {
                  const menuContainer = document.querySelector(".menu-btn");
                  menuContainer.addEventListener("click", this.currentEventListener);      
            } 

            if (this.pages[page]) {
                  this.currentPage = page;
                  this.renderPage();
                  
                  if (page === 'page3') {
                        body.classList.add("scroll");
                  }
                  else {
                        body.classList.remove("scroll");
                  }
                  const currentPageElement = document.getElementById(this.currentPage);
                  gsap.fromTo(currentPageElement, {
                  transform: "translateY(70%)",
                  transformOrigin: "bottom"
                  }, {
                        transform: "translate3d(0, 0, 0)",
                        transform: "scale(1)",
                        duration: .8,
                        ease: "ease.OutBack",  /**Strong.easeOut */
                        onComplete: () => {
                              currentPageElement.classList.add('current-page');                              
                        }
                  });
            }      
      }

      removeDiv(element) {
            element.style.display = "none";
      } 

      addDiv(element) {
            element.style.display = "block";
      }

      appendLine () {
            let lineCreate = document.createElement("div");
            lineCreate.classList.add("line", "scale-x");
                  const buttons = document.querySelectorAll('.menu-flex button');
                  const lists = document.querySelectorAll(".menu-flex li");
            lists.forEach((list) => {
                  list.addEventListener("click", (event) => {
                  //       const home = document.getElementById("#home");
                  // if (home) {
                  //       const line = clickedList.querySelector(".line");

                  //       this.removeDiv(line);
                  // }
                        
                        const clickedList = event.currentTarget;
                        const line = clickedList.querySelector(".line");

                        if (!line) {
                              clickedList.appendChild(lineCreate);
                              console.log("No line");
                              const line = clickedList.querySelector(".line");
                              buttons.forEach((button) => {
                                    console.log("Button clicked");
                                    line.style.opacity = "1";
                                    line.style.width = `${button.offsetWidth}px`;
                              });      
                        } 
                  });
            });
      }
}


const verticalCarousel = new VerticalCarousel();
const preview = document.querySelector(".preview");
const header = document.querySelector(".header");
if (preview) {
      verticalCarousel.removeDiv(header);
} 
setTimeout(() => {
      verticalCarousel.navigateTo('page1');
      verticalCarousel.removeDiv(preview);
      verticalCarousel.addDiv(header);
      // verticalCarousel.appendFirstLine();
}, 5000);

navigateTo = function(page) {
      const verticalCarousel = new VerticalCarousel();
      verticalCarousel.setPreviousPage();
      t1.reverse();
      setTimeout(() => {
            verticalCarousel.navigateTo(page);
      }, 1000);        
}


