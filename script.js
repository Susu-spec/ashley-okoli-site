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

// function toggle() {
//       t1.play();
//       if (shoppingBag && portfolio) {
//             shoppingBag.classList.remove("shopping-bag-active"); 
//             portfolio.classList.remove("portfolio-active");
//       }
// }

// function toggleClose() {
//       t1.reverse();
// }

class VerticalCarousel {
      constructor() {
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
                        <div class="progress-bar" id="progress-bar"></div> 
                  </article>`           
            };
      }

      renderPage() {
            const carouselWrapper = document.getElementById('carousel-wrapper');
            carouselWrapper.innerHTML = this.pages[this.currentPage];
            
                  setTimeout(() => {
                        const progressBar = document.querySelector('.carousel-item .progress-bar');
                        const carouselItem = document.querySelector('.carousel-item');
                        const aboutQuote = document.querySelector('.about-quote');
                        const aboutText = document.querySelector('.about-text');
                        
                  
                        if (progressBar) {
                              carouselItem.style.position = "relative";
                              carouselItem.addEventListener("scroll", function() {
                                    var scrollPos = carouselItem.scrollTop,
                                          dh = Math.max(carouselItem.scrollHeight, carouselItem.scrollHeight, window.scrollHeight, window.offsetHeight, window.clientHeight),
                                          wh = window.innerHeight,
                                          scrollHeight = ((scrollPos - dh) / 4) * 100 ,
                                          scrollPercent = dh > wh ? (scrollPos / (dh-wh) ) * 100: (scrollPos / (wh-dh)) * 100;
                                          
                                          scrollPercent = Math.max(scrollPercent, scrollHeight);
     
                                          progressBar.style.height = `${scrollPercent}%`;
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
                        const active = document.querySelector(".menu-active");
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

                        menuBtn.addEventListener("click", () => {
                              if (menuBtn.classList.contains("menu-active")) {
                                    if (about) {
                                          menuBtn.classList.remove("menu__dark--active");
                                          menuBtn.classList.add("menu-active");
                                          menuBtn.classList.add("menu-dark");
                                          
                                    }
                                    else {
                                          menuBtn.classList.remove("menu-active");
                                    } 
                                    t1.reverse();  
                              }
                              else {
                                    if (about) {
                                          menuBtn.classList.remove("menu-dark--active");
                                          menuBtn.classList.add("menu-active");
                                          console.log('hello');
                                    }
                                    else {
                                          menuBtn.classList.add("menu-active");
                                    }
                                    t1.play();
                                    // t1.play();
                              }
                        });
                  }
                  , 0);
      }

      setPreviousPage() {
            const carouselWrapper = document.getElementById('carousel-wrapper');
            const previous = carouselWrapper.querySelector('.current-page');   
            if (previous) {
                  gsap.to(previous, {
                        transform: "translate3d(0, 0, -100px)",
                        borderRadius: "2vmax",
                        duration: .8,
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
            const buttons = document.querySelectorAll('.menu-flex button');
            console.log(buttons);
            const keys = Object.keys(buttons);
            const line = document.querySelector(".line");

            console.log(line.offsetWidth);
            
            // buttons.forEach((button) => {
            //       button.addEventListener("click", () => {}
            
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
                  // transform: "scaleY(.8)",
                  transform: "translateY(70%)",
                  transformOrigin: "bottom"
                  }, {
                        transform: "translate3d(0, 0, 0)",
                        transform: "scale(1)",
                        duration: .6,
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
}


const verticalCarousel = new VerticalCarousel();
const preview = document.querySelector(".preview");
const header = document.querySelector(".header");
if(preview) {
      verticalCarousel.removeDiv(header);
} 
setTimeout(() => {
      verticalCarousel.navigateTo('page1');
      verticalCarousel.removeDiv(preview);
      verticalCarousel.addDiv(header);
}, 5000);

navigateTo = function(page) {
      const verticalCarousel = new VerticalCarousel();
      verticalCarousel.setPreviousPage();
      setTimeout(() => {
            verticalCarousel.navigateTo(page);
      }, 500);

      const buttons = document.querySelectorAll('.menu-flex button');
      for (var i = 0; i < buttons.length; i++) {
            console.log(buttons[i].offsetWidth);
      }     
}


/**
 * Add menu item dash
 * Translate along the x axis and as content loads
 * scale along x-axis and scale shortly on y-axis
 **/

/**
 * Set right cell to have background and image to fade out
 */

/**
 * Tap on button to remove div and add the button 
 * element's div name
 */

 // const keys = Object.keys(this.pages);
                  // const pageIndex = this.findIndexOf(this.currentPage);
                  // const key = keys[pageIndex - 2];
                  // carouselWrapper.innerHTML += this.pages[key];


 // scroll() {
      //       // const carouselWrapper = document.getElementById('carousel-wrapper');
      //       // document.addEventListener("DOMContentLoaded", function() {
      //             // if (this.pages['page3']) {
                        
      //             // }
      //       // }); 
      // }

      // setLine(page) {
      //   const pageIndex = this.findIndexOf(page);
      //       const np = pageIndex / (buttons.length - 1);
      //       const sum = 0;
      //       console.log(sum);
      //       var buttonTotal = 0;
      //       buttons.forEach((button => {
      //                  buttonTotal += button.getBoundingClientRect().x;
      //                  console.log(buttonTotal);
      //             })
      //             );
      //       const average = (sum + buttonTotal) / buttons.length;
      //       console.log(average);

      //       const clicked = buttons[pageIndex].getBoundingClientRect().x;
      //       console.log(clicked);
      //       const translationValue = `${clicked - average}px`;
      //       console.log(translationValue);
   //      line.style.transform = `translateX(${translationValue}) scale(0.1342, 1)`;
      // }



            /**
             * Translate span elements across y-axis
             * 
             * remove about-quote
             * add and translate about across y-axis
             */

//     /**
//        * Object.keys(this.page).forEach((page) => {
//                   const newPage = document.createElement('article');
//                   newPage.className = `carousel-item ${page === this.currentPage ? 'active' : ''}`;
//                   newPage.innerHTML = this.pages[page];
//                   carouselWrapper.appendChild(newPage);
//             });
//
     

/**setTimeout(function () {
      preview.style.display = "none";
}, 5000);
**/

/**
 * header is always present
 * preview will show up until you tap on any button
 * if you tap on another button, the page associated with the button
 * will show up and previous page will scale down and blur and new
 * page will have a transition attached to it where it slowly increases in height
 * 
 */

