/**
 * Add menu item dash
 * Translate along the x axis and as content loads,
 * scale along x-axis and scale shortly on y-axis
 */

/**
 * Set right cell to have background and image to fade out
 */

/**
 * Tap on button to remove div and add the button 
 * element's div name
 */
const buttons = document.getElementsByTagName("button");
      pages = document.querySelector(".page");
      active = document.querySelector(".active");
      inactive = document.querySelector(".inactive");
      preview = document.querySelector(".preview");
      


     

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

class VerticalCarousel {
      constructor() {
            this.currentPage = '';
            this.previousPage = '';
            this.pages = {
                  'page1':  `<article id="page1" class="background page">
                  <div class="wrapper">
                     <nav>
                           <div class="row">
                                 <div class="menu">
                                 <span class="menu-btn">
                                       <span class="menu-icon"></span>
                                 </span>
                                 </div>
                                 <div class="port-and-shop">
                                       <div class="portfolio"></div>
                                       <div class="shopping-bag"></div>
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
                                          <span>“Besides my aura & influence, of course, my biggest asset is my versatility"</span>
                                          </div>    
                                          
                                    </td>
                                    <td class="about-right-cell">
                                          <div class="image">
                                          <img src="images/background-one.jpg" alt="">
                                          </div>
                                    </td>
                              </tr>
                        </table>
                   </article>
              `
                  ,
              
              'page3': 
                  `<article id="page3" class="background-press carousel-item"></article>` 
              
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
                        scale: 0.9,
                        borderRadius: "2vmax",
                        duration: 1,
                        ease: "sine.inOut"
                  });
                  console.log("yes");
            }
      }
    
      navigateTo(page) {
            if (this.pages[page]) {
                  this.currentPage = page;
                  this.renderPage();
                  const currentPageElement = document.getElementById(this.currentPage);
                  gsap.fromTo(currentPageElement, {
                  translateY: "100%"
                  }, {
                        translateY: 0,
                        scale: 1,
                        duration: 1,
                        ease: "sine.inOut",
                        onComplete: () => {
                              currentPageElement.classList.add('current-page');
                        }
                  });
            }
                  
      }

}



navigateTo = function(page) {
      const verticalCarousel = new VerticalCarousel();
      verticalCarousel.setPreviousPage();
      setTimeout(() => {
            verticalCarousel.navigateTo(page);
      }, 1000);
      
}


//     /**
//        * Object.keys(this.page).forEach((page) => {
//                   const newPage = document.createElement('article');
//                   newPage.className = `carousel-item ${page === this.currentPage ? 'active' : ''}`;
//                   newPage.innerHTML = this.pages[page];
//                   carouselWrapper.appendChild(newPage);
//             });
//