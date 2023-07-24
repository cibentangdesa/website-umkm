function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleScroll() {
    let count = 0;
    const elementsPhoto = [
        "photo_section",
        "photo_section_1",
        "photo_section_2",
    ];

    const headerPhoto = document.getElementById(elementsPhoto[0]);
    if (isElementInViewport(headerPhoto)) {
        elementsPhoto.forEach((elementId) => {
            const element = document.getElementById(elementId);
            element.classList.add("fade-in-up-animation");
        });
        count ++;
    }

    const elementsVideo = [
        "video_section",
        "video_frame",
    ];

    const headerVideo = document.getElementById(elementsVideo[0]);
    if (isElementInViewport(headerVideo)) {
        elementsVideo.forEach((elementId) => {
            const element = document.getElementById(elementId);
            element.classList.add("fade-in-up-animation");
        });
        count ++;
    }

    const elementsOrder = [
        "order_section",
        "order_list"
    ];

    const headerOrder = document.getElementById(elementsOrder[0]);
    if (isElementInViewport(headerOrder)) {
        elementsOrder.forEach((elementId) => {
            const element = document.getElementById(elementId);
            element.classList.add("fade-in-up-animation");
        });
        count ++;
    }


    if (count == 3) {
        window.removeEventListener("scroll", handleScroll);
    }
  }
  
  window.addEventListener("scroll", handleScroll);
  