(function () {
    const wrapper = document.querySelector(".wrapper");
    const carousel = document.querySelector(".carousel");
    const firstCard = carousel.querySelector(".card");
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const carouselChildrens = [...carousel.children];
  
    if (!wrapper || !carousel || !firstCard || !arrowBtns.length) {
      console.error("Some required elements not found. Exiting gclist.js.");
      return;
    }
  
    let isDragging = false;
    let isAutoPlay = true;
    let startX;
    let startScrollLeft;
    let timeoutId;
  
    // Get the number of cards that can fit in the carousel at once
    let cardPerView = Math.round(carousel.offsetWidth / firstCard.offsetWidth);
  
    // Insert copies of the last few cards to the beginning of the carousel for infinite scrolling
    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
      carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });
  
    // Insert copies of the first few cards to the end of the carousel for infinite scrolling
    carouselChildrens.slice(0, cardPerView).forEach(card => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });
  
    // Scroll the carousel to the appropriate position to hide the first few duplicate cards on Firefox
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  
    // Function to handle carousel scroll animation
    const scrollTo = (scrollOffset) => {
      carousel.scrollTo({
        left: scrollOffset,
        behavior: "smooth"
      });
    };
  
    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const scrollOffset = btn.id === "left" ? carousel.scrollLeft - firstCard.offsetWidth : carousel.scrollLeft + firstCard.offsetWidth;
        scrollTo(scrollOffset);
      });
    });
  
    // Event listener for mouse down to start dragging
    carousel.addEventListener("mousedown", (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      // Records the initial cursor and scroll position of the carousel
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    });
  
    // Event listener for mouse move while dragging
    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        // Updates the scroll position of the carousel based on the cursor movement
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
      }
    });
  
    // Event listener for mouse up to stop dragging
    document.addEventListener("mouseup", () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    });
  
    // Function to handle infinite scrolling of the carousel
    const infiniteScroll = () => {
      // If the carousel is at the beginning, scroll to the end
      if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
      }
      // If the carousel is at the end, scroll to the beginning
      else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }
  
      // Clear existing timeout & start autoplay if the mouse is not hovering over the carousel
      clearTimeout(timeoutId);
      if (!wrapper.matches(":hover")) {
        autoPlay();
      }
    };
  
    // Function to handle autoplay of the carousel
    const autoPlay = () => {
      if (window.innerWidth < 800 || !isAutoPlay) return; // Return if the window is smaller than 800 or isAutoPlay is false
      // Autoplay the carousel after every 2500 ms
      timeoutId = setTimeout(() => {
        const scrollOffset = carousel.scrollLeft + firstCard.offsetWidth;
        scrollTo(scrollOffset);
      }, 2500);
    };
  
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
  
    // Start the autoplay
    autoPlay();
  })();
  