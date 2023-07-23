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
    const elementsGallery = [
      "gallery_taital",
      "gallery_section_1",
      "gallery_section_2",
      "gallery_section_3",
      // tambahkan id elemen lainnya di sini jika diperlukan
    ];

    const headerGallery = document.getElementById(elementsGallery[0]);
    if (isElementInViewport(headerGallery)) {
        elementsGallery.forEach((elementId) => {
            const element = document.getElementById(elementId);
            element.classList.add("fade-in-up-animation");
        });
        count ++;
    }

    const elementsCarousel = [
        "umkm_section",
        "main_slider"
    ]

    const headerCarousel = document.getElementById(elementsCarousel[0]);
    if (isElementInViewport(headerCarousel)) {
        elementsCarousel.forEach((elementId) => {
            const element = document.getElementById(elementId);
            element.classList.add("fade-in-up-animation");
        });
        count ++;
    }

    const elementsContact = [
        "contact_section",
        "map",
        "form"
    ]

    const headerContact = document.getElementById(elementsContact[0]);
    if (isElementInViewport(headerContact)) {
        elementsContact.forEach((elementId) => {
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
  