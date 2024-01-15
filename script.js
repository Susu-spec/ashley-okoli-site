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
const buttons = document.querySelectorAll(".menu-flex button"),
      line = document.querySelector(".line"),
      pages = document.querySelector(".page"),
      active = document.querySelector(".active"),
      inactive = document.querySelector(".inactive"),
      preview = document.querySelector(".preview"),
      progressBar = document.querySelector(".progress-bar");

var body = document.body;
    docElem = document.documentElement;
      

Array.from(buttons).forEach((button) => {
      let rect = button.getBoundingClientRect();
      console.log(rect);
});


     

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


console.log('worked');

class VerticalCarousel {
      constructor() {
            this.currentPage = '';
            this.previousPage = '';
            this.newPage = '';
            this.pages = {
                  'page1':  `<article id="page1" class="background page carousel-item">
                  <div class="wrapper">
                     <nav>
                           <div class="row">
                                 <div class="menu">
                                 <span class="menu-btn">
                                       <span class="menu-icon"></span>
                                 </span>
                                 </div>
                                 <div class="port-and-shop">
                                       <div class="portfolio"><div class="Profile"><span data-text="Profile"></span></div></div>
                                       <div class="shopping-bag"><div class="Shop"><span data-text="Shop"></span></div>
                                 </div>
                           </div>
                           <div class="logo">
                                 <div class="ashley-logo"></div>
                           </div> 
                     </nav>
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
                                    <div class="press-preview">
                                    <div class="progress-bar" id="progress-bar"></div>
                                    </div>
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
                                    <li class="navigation-item">
                                          <a href="https://culted.com/ashley-okoli-lagos-poster-girl/" target="blank" class="navigation-link navigation-link-1">
                                                <span data-text="culted">culted</span>
                                          </a>
                                    </li>
                              </ul>
                        </div>
                        
                  </article>`           
            };
      }

      renderPage() {
            const carouselWrapper = document.getElementById('carousel-wrapper');
            carouselWrapper.innerHTML = this.pages[this.currentPage];

      }

      setPreviousPage() {
            const carouselWrapper = document.getElementById('carousel-wrapper');
            const previous = carouselWrapper.querySelector('.current-page');

            

            if (previous) {
                  gsap.to(previous, {
                        transform: "translate3d(0, 0, -100px)",
                        borderRadius: "2vmax",
                        duration: .8,
                        ease: "ease.outBack"
                  });
            }
      }

      findIndexOf(page) {
            const keys = Object.keys(this.pages);
            const index = keys.indexOf(page);
            return index !== -1 ? index + 1 : null;
      }
    
      navigateTo(page) {
            if (this.pages[page]) {
                  this.currentPage = page;
                  this.renderPage();
                  
                  // const keys = Object.keys(this.pages);
                  // const pageIndex = this.findIndexOf(this.currentPage);
                  // const key = keys[pageIndex - 2];
                  // carouselWrapper.innerHTML += this.pages[key];
                  const currentPageElement = document.getElementById(this.currentPage);
                  gsap.fromTo(currentPageElement, {
                  translateY: "70%"
                  }, {
                        transform: "translate3d(0, 0, 0)",
                        scale: 1,
                        duration: .8,
                        ease: "ease.outBack",
                        onComplete: () => {
                              currentPageElement.classList.add('current-page');
                        }
                  });
            }
                  
      }

      scroll() {
            if (this.pages['page3']) {
                  window.addEventListener("scroll", function() {
                        var scroll = docElem.scrollTop || body.scrollTop,
                            dh = Math.max(docElem.offsetHeight, body.offsetHeight, docElem.scrollHeight, body.scrollHeight),
                            scrollPercent = (scroll / (dh)) * 100;
                        console.log(scroll);
                        console.log(scrollPercent);
                        progressBar.style.height = `${scrollPercent}%`; 
                  });
            }
      }

      removeDiv(element) {
            element.style.display = "none";
      }

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
      //       line.style.transform = `translateX(${translationValue}) scale(0.1342, 1)`;
      // }

}


const verticalCarousel = new VerticalCarousel();
setTimeout(() => {    
      verticalCarousel.navigateTo('page1');
      verticalCarousel.removeDiv(preview);
}, 5000);

navigateTo = function(page) {
      const verticalCarousel = new VerticalCarousel();
      verticalCarousel.setPreviousPage();
      setTimeout(() => {
            verticalCarousel.navigateTo(page);
            // verticalCarousel.setLine(page);
      }, 1000);

      verticalCarousel.scroll();
    
        
            /**
             * Translate span elements across y-axis
             * 
             * remove about-quote
             * add and translate about across y-axis
             */
}


      






//     /**
//        * Object.keys(this.page).forEach((page) => {
//                   const newPage = document.createElement('article');
//                   newPage.className = `carousel-item ${page === this.currentPage ? 'active' : ''}`;
//                   newPage.innerHTML = this.pages[page];
//                   carouselWrapper.appendChild(newPage);
//             });
//