// Preloader
function counter() {
    var count = setInterval(function () {
        var c = parseInt($('.counter').text());
        $('.counter').text((++c).toString());
        if (c == 100) {
            clearInterval(count);
            $('.preloader').addClass('active')
        }
    }, 20)
}
counter()

// Animals Section
const animalsCard = document.querySelectorAll('.animals-card');
const aC1 = document.querySelector('.ac-1');
const aC2 = document.querySelector('.ac-2');
const aC3 = document.querySelector('.ac-3');
const aC4 = document.querySelector('.ac-4');
const cardVideo = document.querySelectorAll('.card-video');
const cV1 = document.querySelector('.cv-1');
const cV2 = document.querySelector('.cv-2');
const cV3 = document.querySelector('.cv-3');
const cV4 = document.querySelector('.cv-4');
const cardInfo = document.querySelectorAll('.card-info');
const cInfo1 = document.querySelector('.c-info-1');
const cInfo2 = document.querySelector('.c-info-2');
const cInfo3 = document.querySelector('.c-info-3');
const cInfo4 = document.querySelector('.c-info-4');
const cInfoParent = document.querySelectorAll('.c-info-parent');
const cip1 = document.querySelector('.cip-1');
const cip2 = document.querySelector('.cip-2');
const cip3 = document.querySelector('.cip-3');
const cip4 = document.querySelector('.cip-4');
const cMobileClose = document.querySelectorAll('.c-info-mobile-close');
const cm1 = document.querySelector('.cm-1');
const cm2 = document.querySelector('.cm-2');
const cm3 = document.querySelector('.cm-3');
const cm4 = document.querySelector('.cm-4');
const cExpand = document.querySelectorAll('.c-info-expand');
const cex1 = document.querySelector('.cex-1');
const cex2 = document.querySelector('.cex-2');
const cex3 = document.querySelector('.cex-3');
const cex4 = document.querySelector('.cex-4');
const cCloseEx = document.querySelectorAll('.c-close-expand');
const ccx1 = document.querySelector('.ccx-1');
const ccx2 = document.querySelector('.ccx-2');
const ccx3 = document.querySelector('.ccx-3');
const ccx4 = document.querySelector('.ccx-4');
const cInfoImg = document.querySelectorAll('.card-info-img');
const cmg1 = document.querySelector('.cmg-1');
const cmg2 = document.querySelector('.cmg-2');
const cmg3 = document.querySelector('.cmg-3');
const cmg4 = document.querySelector('.cmg-4');
const opnInfoAll = document.querySelectorAll('.open-info');
const opnInfo1 = document.querySelector('.opnInfo-1');
const opnInfo2 = document.querySelector('.opnInfo-2');
const opnInfo3 = document.querySelector('.opnInfo-3');
const opnInfo4 = document.querySelector('.opnInfo-4');
const closeVideo = document.querySelector('.close-video');
const videos = document.querySelectorAll('.video');
const nav = document.querySelector('header');

if (window.matchMedia("(max-width: 1024px)").matches) {

    // Scroll To Plot (Mobile Version)
    function scrollToPlot() {
        window.scrollTo(0, 400);
    }

    // Animals Card click (Mobile Version)
    aC1.addEventListener("click", () => {
        cV1.style.zIndex = "100";
        cip1.style.zIndex = "101";
        cip1.style.opacity = "1";
        cm1.style.zIndex = "102";
        cm1.style.display = "block";
    })

    aC2.addEventListener("click", () => {
        cV2.style.zIndex = "100";
        cip2.style.zIndex = "101";
        cip2.style.opacity = "1";
        cm2.style.zIndex = "102";
        cm2.style.display = "block";
    })

    aC3.addEventListener("click", () => {
        cV3.style.zIndex = "100";
        cip3.style.zIndex = "101";
        cip3.style.opacity = "1";
        cm3.style.zIndex = "102";
        cm3.style.display = "block";
    })

    aC4.addEventListener("click", () => {
        cV4.style.zIndex = "100";
        cip4.style.zIndex = "101";
        cip4.style.opacity = "1";
        cm4.style.zIndex = "102";
        cm4.style.display = "block";
    })

    // close expand card info (Mobile Version)

    ccx1.addEventListener("click", () => {
        cex1.style.opacity = "1";
        cmg1.style.height = "";
        opnInfo1.style.display = "block";
        cip1.style.width = "";
        cip1.style.height = "";
        cip1.style.top = "";
        cip1.style.left = "";
        cip1.style.display = "none";
    })

    ccx2.addEventListener("click", () => {
        cex2.style.opacity = "1";
        cmg2.style.height = "";
        opnInfo2.style.display = "block";
        cip2.style.width = "";
        cip2.style.height = "";
        cip2.style.top = "";
        cip2.style.left = "";
        cip2.style.display = "none";
    })

    ccx3.addEventListener("click", () => {
        cex3.style.opacity = "1";
        cmg3.style.height = "";
        opnInfo3.style.display = "block";
        cip3.style.width = "";
        cip3.style.height = "";
        cip3.style.top = "";
        cip3.style.left = "";
        cip3.style.display = "none";
    })

    ccx4.addEventListener("click", () => {
        cex4.style.opacity = "1";
        cmg4.style.height = "";
        opnInfo4.style.display = "block";
        cip4.style.width = "";
        cip4.style.height = "";
        cip4.style.top = "";
        cip4.style.left = "";
        cip4.style.display = "none";
    })


    // open card info (Mobile Version) 
    opnInfo1.addEventListener("click", () => {
        opnInfo1.style.display = "none";
        cip1.style.display = "block";

    })

    opnInfo2.addEventListener("click", () => {
        opnInfo2.style.display = "none";
        cip2.style.display = "block";
    })

    opnInfo3.addEventListener("click", () => {
        opnInfo3.style.display = "none";
        cip3.style.display = "block";
    })

    opnInfo4.addEventListener("click", () => {
        opnInfo4.style.display = "none";
        cip4.style.display = "block";
    })


} else {
    // Scroll To Plot
    function scrollToPlot() {
        window.scrollTo(0, 300);
    }

    // Draggable Card Info
    const container1 = document.querySelector(".ac-1");
    const container2 = document.querySelector(".ac-2");
    const container3 = document.querySelector(".ac-3");
    const container4 = document.querySelector(".ac-4");
    Draggable.create(".cip-1", {
        bounds: container1
    });
    Draggable.create(".cip-2", {
        bounds: container2
    });
    Draggable.create(".cip-3", {
        bounds: container3
    });
    Draggable.create(".cip-4", {
        bounds: container4
    });

    // Animals Card click (Dekstop Version)
    aC1.addEventListener("click", () => {
        cV1.style.zIndex = "100";
        cip1.style.zIndex = "101";
        cip1.style.opacity = "1";
        aC1.style.zIndex = "99";
        aC2.style.width = "0";
        aC3.style.width = "0";
        aC4.style.width = "0";
        closeVideo.style.opacity = "1";
        nav.style.transform = "translateY(-150px)";
    })

    aC2.addEventListener("click", () => {
        cV2.style.zIndex = "100";
        cip2.style.zIndex = "101";
        cip2.style.opacity = "1";
        aC2.style.zIndex = "99";
        aC1.style.width = "0";
        aC3.style.width = "0";
        aC4.style.width = "0";
        closeVideo.style.opacity = "1";
        nav.style.transform = "translateY(-150px)"
    })

    aC3.addEventListener("click", () => {
        cV3.style.zIndex = "100";
        cip3.style.zIndex = "101";
        cip3.style.opacity = "1";
        aC3.style.zIndex = "99";
        aC1.style.width = "0";
        aC2.style.width = "0";
        aC4.style.width = "0";
        closeVideo.style.opacity = "1";
        nav.style.transform = "translateY(-150px)"
    })

    aC4.addEventListener("click", () => {
        cV4.style.zIndex = "100";
        cip4.style.zIndex = "101";
        cip4.style.opacity = "1";
        aC4.style.zIndex = "99";
        aC1.style.width = "0";
        aC2.style.width = "0";
        aC3.style.width = "0";
        closeVideo.style.opacity = "1";
        nav.style.transform = "translateY(-150px)"
    })

    opnInfo1.addEventListener("click", () => {
        cip1.style.display = "block";
        opnInfo1.style.display = "none";
    })

    opnInfo2.addEventListener("click", () => {
        cip2.style.display = "block";
        opnInfo2.style.display = "none";
    })

    opnInfo3.addEventListener("click", () => {
        cip3.style.display = "block";
        opnInfo3.style.display = "none";
    })

    opnInfo4.addEventListener("click", () => {
        cip4.style.display = "block";
        opnInfo4.style.display = "none";
    })

    // close expand card info
    for (let i = 0; i < cCloseEx.length; i++) {

        cCloseEx[i].addEventListener("click", () => {

            for (let i = 0; i < cExpand.length; i++) {
                cExpand[i].style.opacity = "1";
            }

            for (let i = 0; i < cInfoImg.length; i++) {
                cInfoImg[i].style.height = "";
            }

            for (let i = 0; i < opnInfoAll.length; i++) {
                opnInfoAll[i].style.display = "block";
            }

            for (let i = 0; i < cInfoParent.length; i++) {
                cInfoParent[i].style.width = "";
                cInfoParent[i].style.height = "";
                cInfoParent[i].style.top = "";
                cInfoParent[i].style.left = "";
                cInfoParent[i].style.display = "none";
            }

            cCloseEx[i].style.opacity = "";

        })
    }

}


// expand card info 
cex1.addEventListener("click", () => {
    cip1.style.width = "100%";
    cip1.style.height = "100%";
    cip1.style.top = "0";
    ccx1.style.opacity = "1";
    cex1.style.opacity = "0";
    cmg1.style.height = "350px";
})

cex2.addEventListener("click", () => {
    cip2.style.width = "100%";
    cip2.style.height = "100%";
    cip2.style.top = "0";
    ccx2.style.opacity = "1";
    cex2.style.opacity = "0";
    cmg2.style.height = "350px";
})

cex3.addEventListener("click", () => {
    cip3.style.width = "100%";
    cip3.style.height = "100%";
    cip3.style.top = "0";
    ccx3.style.opacity = "1";
    cex3.style.opacity = "0";
    cmg3.style.height = "350px";
})

cex4.addEventListener("click", () => {
    cip4.style.width = "100%";
    cip4.style.height = "100%";
    cip4.style.top = "0";
    ccx4.style.opacity = "1";
    cex4.style.opacity = "0";
    cmg4.style.height = "350px";
})

// Close Video
closeVideo.addEventListener("click", () => {
    for (let i = 0; i < animalsCard.length; i++) {
        animalsCard[i].style.width = "";
        animalsCard[i].style.opacity = "1";
    }

    for (let i = 0; i < cardVideo.length; i++) {
        cardVideo[i].style.zIndex = "";
    }

    for (let i = 0; i < opnInfoAll.length; i++) {
        opnInfoAll[i].style.display = "none";
    }

    for (let i = 0; i < cInfoParent.length; i++) {
        cInfoParent[i].style.zIndex = "";
        cInfoParent[i].style.opacity = "";
        cInfoParent[i].style.display = "block";
    }

    videos.forEach(function (video) {
        video.muted = true;
    })

    closeVideo.style.opacity = "0";
    nav.style.transform = "translateY(0px)";
})

for (let i = 0; i < cMobileClose.length; i++) {

    cMobileClose[i].addEventListener("click", () => {

        for (let i = 0; i < cardVideo.length; i++) {
            cardVideo[i].style.zIndex = "";
        }

        for (let i = 0; i < opnInfoAll.length; i++) {
            opnInfoAll[i].style.display = "";
        }

        for (let i = 0; i < cInfoParent.length; i++) {
            cInfoParent[i].style.zIndex = "";
            cInfoParent[i].style.opacity = "";
            cInfoParent[i].style.display = "";
            cInfoParent[i].style.transform = "translateX(0)";
        }

        cMobileClose[i].style.zIndex = "";
        cMobileClose[i].style.display = "";
    })
}

// Floating Song
const songButton = document.querySelector(".song")
const songFrame = document.querySelector(".song-frame")

songButton.addEventListener("click", () => {
    songFrame.classList.toggle("active");
})

// Credit Section
const cardFlex = document.querySelector(".card-flex");
const layer = document.querySelector(".layer");

cardFlex.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed) / 100

        layer.style.transform = `translateX(${x}px)`
    });
}

// Gallery Section
const gClose = document.querySelector(".g-close");
const titleParent = document.querySelector(".title-parent");
const closeGallery = document.querySelector(".close-gallery");
const galleryImg = document.querySelectorAll(".gallery-img");
const gImg1 = document.querySelector("#g-img-1");
const gImg2 = document.querySelector("#g-img-2");
const gImg3 = document.querySelector("#g-img-3");
const gImg4 = document.querySelector("#g-img-4");
const gImg5 = document.querySelector("#g-img-5");
const gImg6 = document.querySelector("#g-img-6");
const gImg7 = document.querySelector("#g-img-7");
const gImg8 = document.querySelector("#g-img-8");
const gImg9 = document.querySelector("#g-img-9");
const gImg10 = document.querySelector("#g-img-10");
const gImg11 = document.querySelector("#g-img-11");

gClose.addEventListener("click", () => {
    titleParent.style.opacity = 0;
    closeGallery.style.opacity = 1;
    closeGallery.style.transform = 'translateY(34vh)';
    for (let i = 0; i < galleryImg.length; i++) {
        galleryImg[i].removeAttribute('style');
    }

})

closeGallery.addEventListener("click", () => {
    titleParent.style.opacity = 1;
    closeGallery.style.opacity = 0;
    closeGallery.style.transform = 'translateY(0)';
    gImg1.style.transform = "scale(0.2)";
    gImg2.style.transform = "scale(0.4) translateX(-580px)";
    gImg3.style.transform = "translateY(140px)";
    gImg4.style.transform = "scale(0.7) translateY(180px)";
    gImg5.style.transform = "scale(0.8) translateX(-100px) translateY(-60px)";
    gImg6.style.transform = "scale(0.6) translateX(380px)";
    gImg7.style.transform = "scale(0.5)";
    gImg8.style.transform = "scale(0.4)";
    gImg9.style.transform = "scale(0.2, 0.2)";
    gImg10.style.transform = "translateY(-80px)";
    gImg11.style.transform = "scale(0.6)";
})

gImg1.style.transform = "scale(0.2)";
gImg2.style.transform = "scale(0.4) translateX(-580px)";
gImg3.style.transform = "translateY(140px)";
gImg4.style.transform = "scale(0.7) translateY(180px)";
gImg5.style.transform = "scale(0.8) translateX(-100px) translateY(-60px)";
gImg6.style.transform = "scale(0.6) translateX(380px)";
gImg7.style.transform = "scale(0.5)";
gImg8.style.transform = "scale(0.4)";
gImg9.style.transform = "scale(0.2, 0.2)";
gImg10.style.transform = "translateY(-80px)";
gImg11.style.transform = "scale(0.6)";

// Back To Top
function scrollToTop() {
    window.scrollTo(0, 0);
}



// Animation On Scroll
let mm = gsap.matchMedia();

mm.add({
    isDekstop: "(min-width: 501px)",
    isMobile: "(max-width: 500px)"
}, (context) => {
    let { isMobile, isDekstop } = context.conditions;

    gsap.fromTo(".pulse", {
        x: isMobile ? 180 : 660
    },
        {
            x: isMobile ? 270 : 980,
            scrollTrigger: {
                start: isMobile ? '79% center' : '85% center',
                end: isMobile ? '84% center' : '95% center',
                scrub: 1
            }
        }
    );

    gsap.fromTo(".pulse", {
        x: isMobile ? 95 : 330
    },
        {
            x: isMobile ? 180 : 660,
            scrollTrigger: {
                start: isMobile ? '53% center' : '55% center',
                end: isMobile ? '58% center' : '65% center',
                scrub: 1
            }
        }
    );

    gsap.fromTo(".pulse", {
        x: isMobile ? 10 : 15,
    },
        {
            x: isMobile ? 95 : 330,
            scrollTrigger: {
                start: isMobile ? '23% center' : '25% center',
                end: isMobile ? '28% center' : '35% center',
                scrub: 1
            }
        }
    );

    gsap.fromTo(".pulse", {
        opacity: 0,
    },
        {
            opacity: 1,
            scrollTrigger: {
                start: 'top top',
                end: '22% center',
                scrub: 1
            }
        }
    );

    gsap.to("#header #head-img", {
        scale: 1.5, duration: 15,
        scrollTrigger: {
            trigger: "#header",
            pin: true,
            scrub: 3
        }
    });

    gsap.to("#head-img", {
        opacity: 0,
        scrollTrigger: {
            start: isMobile ? '10% center' : '16% center',
            end: isMobile ? '16% center' : '20% center',
            scrub: 3
        }
    });

    gsap.to(".header-before", {
        opacity: 0,
        scrollTrigger: {
            start: 'top top',
            end: '9% center',
            scrub: 1
        }
    });

    gsap.from(".header-after h1", {
        opacity: 0,
        scrollTrigger: {
            start: '9% center',
            end: '10% center',
            scrub: 1
        }
    });

    gsap.from(".header-after p", {
        opacity: 0, y: 60,
        scrollTrigger: {
            start: '9% center',
            end: '13% center',
            scrub: 1
        }
    });

    gsap.to(".header-after-text", {
        opacity: 0,
        scrollTrigger: {
            start: '19% center',
            end: '21% center',
            scrub: 1
        }
    });

    gsap.fromTo(".draw-line-inner-1", {
        y: -220
    },
        {
            y: 220,
            scrollTrigger: {
                start: '12% center',
                end: '24% center',
                scrub: 1
            }
        });

    gsap.to(".mouse", {
        opacity: 0,
        scrollTrigger: {
            start: '9% center',
            end: '11% center',
            scrub: 1
        }
    })

    gsap.from(".ac-1", {
        y: 70, opacity: 0,
        scrollTrigger: {
            start: isMobile ? '0' : '20% center',
            end: '21% center',
        }
    });

    gsap.from(".ac-2", {
        y: 70, opacity: 0, delay: 0.1,
        scrollTrigger: {
            start: isMobile ? '0' : '20% center',
            end: '21% center',
        }
    });
    gsap.from(".ac-3", {
        y: 70, opacity: 0, delay: 0.2,
        scrollTrigger: {
            start: isMobile ? '0' : '20% center',
            end: '21% center',
        }
    });
    gsap.from(".ac-4", {
        y: 70, opacity: 0, delay: 0.3,
        scrollTrigger: {
            start: isMobile ? '0' : '20% center',
            end: '21% center',
        }
    });

    gsap.from(".stone-1", {
        rotation: 45,
        scrollTrigger: {
            start: '30% center',
            end: '45% center',
            scrub: 1
        }
    });

    gsap.to(".stone-2", {
        rotation: 360, y: 750, opacity: 0.4,
        scrollTrigger: {
            start: '32% center',
            end: '54% center',
            scrub: 1
        }
    });

    gsap.to(".stone-3", {
        rotation: -180, y: 650,
        scrollTrigger: {
            start: '36% center',
            end: '56% center',
            scrub: 1
        }
    });

    gsap.from(".stone-4", {
        y: 400,
        scrollTrigger: {
            start: '37% center',
            end: '50% center',
            scrub: 1
        }
    });

    gsap.from(".stone-5", {
        rotation: -180, y: 400,
        scrollTrigger: {
            start: '39% center',
            end: '50% center',
            scrub: 1
        }
    });

    gsap.from(".stone-text", {
        y: 80, opacity: 0,
        scrollTrigger: {
            start: '38% center',
            end: '47% center',
            scrub: 1
        }
    });

    gsap.from(".skull", {
        scale: 0.5,
        scrollTrigger: {
            start: isMobile ? '68% center' : '62% center',
            end: isMobile ? '80% center' : '70% center',
            scrub: 1
        }
    });

    gsap.from(".people", {
        y: 100,
        scrollTrigger: {
            start: isMobile ? '68% center' : '62% center',
            end: isMobile ? '80% center' : '72% center',
            scrub: 1
        }
    });

    gsap.from(".footer-title p", {
        opacity: 0,
        scrollTrigger: {
            start: isMobile ? '90% center' : '88% center',
            end: isMobile ? '92% center' : '90% center',
            scrub: 1
        }
    });

    gsap.from(".footer-title h1", {
        y: 30,
        scrollTrigger: {
            start: isMobile ? '90% center' : '88% center',
            end: isMobile ? '92% center' : '90% center',
            scrub: 1
        }
    });

    gsap.from(".back-top", {
        y: 30,
        scrollTrigger: {
            start: isMobile ? '90% center' : '88% center',
            end: isMobile ? '92% center' : '90% center',
            scrub: 1
        }
    });
})