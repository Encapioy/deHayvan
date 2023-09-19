

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

const gClose = document.querySelector(".g-close");
const titleParent = document.querySelector(".title-parent");
const closeGallery = document.querySelector(".close-gallery");
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
    gImg1.removeAttribute('style');
    gImg2.removeAttribute('style');
    gImg3.removeAttribute('style');
    gImg4.removeAttribute('style');
    gImg5.removeAttribute('style');
    gImg6.removeAttribute('style');
    gImg7.removeAttribute('style');
    gImg8.removeAttribute('style');
    gImg9.removeAttribute('style');
    gImg10.removeAttribute('style');
    gImg11.removeAttribute('style');

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


const aC1 = document.querySelector('.ac-1');
const aC2 = document.querySelector('.ac-2');
const aC3 = document.querySelector('.ac-3');
const aC4 = document.querySelector('.ac-4');
const cV1 = document.querySelector('.cv-1');
const cV2 = document.querySelector('.cv-2');
const cV3 = document.querySelector('.cv-3');
const cV4 = document.querySelector('.cv-4');
const cInfo1 = document.querySelector('.c-info-1');
const cInfo2 = document.querySelector('.c-info-2');
const cInfo3 = document.querySelector('.c-info-3');
const cInfo4 = document.querySelector('.c-info-4');
const closeVideo = document.querySelector('.close-video');
const nav = document.querySelector('nav');

aC1.addEventListener("click", () => {
    cV1.style.zIndex = "100";
    cInfo1.style.zIndex = "101";
    aC1.style.width = "100%";
    aC2.style.opacity = "0";
    aC3.style.opacity = "0";
    aC4.style.opacity = "0";
    closeVideo.style.opacity = "1";
    nav.style.transform = "translateY(-100px)"
})

aC2.addEventListener("click", () => {
    cV2.style.zIndex = "100";
    cInfo2.style.zIndex = "101";
    aC2.style.width = "100%";
    aC1.style.display = "none";
    aC3.style.opacity = "0";
    aC4.style.opacity = "0";
    closeVideo.style.opacity = "1";
    nav.style.transform = "translateY(-100px)"
})

aC3.addEventListener("click", () => {
    cV3.style.zIndex = "100";
    cInfo3.style.zIndex = "101";
    aC3.style.width = "100%";
    aC1.style.display = "none";
    aC2.style.display = "none";
    aC4.style.opacity = "0";
    closeVideo.style.opacity = "1";
    nav.style.transform = "translateY(-100px)"
})

aC4.addEventListener("click", () => {
    cV4.style.zIndex = "100";
    cInfo4.style.zIndex = "101";
    aC4.style.width = "100%";
    aC1.style.display = "none";
    aC2.style.display = "none";
    aC3.style.display = "none";
    closeVideo.style.opacity = "1";
    nav.style.transform = "translateY(-100px)"
})

closeVideo.addEventListener("click", () => {
    cV1.style.zIndex = "";
    cV2.style.zIndex = "";
    cV3.style.zIndex = "";
    cV4.style.zIndex = "";
    cInfo1.style.zIndex = "";
    cInfo2.style.zIndex = "";
    cInfo3.style.zIndex = "";
    cInfo4.style.zIndex = "";
    aC1.style.width = "";
    aC2.style.width = "";
    aC3.style.width = "";
    aC4.style.width = "";
    aC1.style.opacity = "1";
    aC2.style.opacity = "1";
    aC3.style.opacity = "1";
    aC4.style.opacity = "1";
    aC1.style.display = "";
    aC2.style.display = "";
    aC3.style.display = "";
    aC4.style.display = "";
    closeVideo.style.opacity = "0";
    nav.style.transform = "translateY(0px)"
})

// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.matchMedia({
//     '(max-width:992px)': function () {

//         gsap.to("#header #head-img", {
//             scale: 1.5, duration: 20000,
//             scrollTrigger: {
//                 trigger: "#header",
//                 pin: true,
//                 scrub: 3
//             }
//         });

//     },
// })

gsap.fromTo(".pulse", {
    x: 653
},
    {
        x: 965,
        scrollTrigger: {
            start: '85% center',
            end: '95% center',
            scrub: 1
        }
    });

gsap.fromTo(".pulse", {
    x: 330
},
    {
        x: 653,
        scrollTrigger: {
            start: '55% center',
            end: '65% center',
            scrub: 1
        }
    });

gsap.fromTo(".pulse", {
    x: 23,
},
    {
        x: 330,
        scrollTrigger: {
            start: '25% center',
            end: '35% center',
            scrub: 1
        }
    });

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
    });

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
        start: '16% center',
        end: '20% center',
        markers: true,
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

gsap.from(".stone-1", {
    rotation: 90,
    scrollTrigger: {
        start: '30% center',
        end: '45% center',
        scrub: 2
    }
});

gsap.to(".stone-2", {
    rotation: 360, y: 550, opacity: 0.4,
    scrollTrigger: {
        start: '32% center',
        end: '50% center',
        scrub: 2
    }
});

gsap.to(".stone-3", {
    rotation: -180, y: 460,
    scrollTrigger: {
        start: '38% center',
        end: '53% center',
        scrub: 2
    }
});

gsap.from(".stone-4", {
    y: 400,
    scrollTrigger: {
        start: '37% center',
        end: '50% center',
        scrub: 2
    }
});

gsap.from(".stone-5", {
    rotation: -180, y: 400,
    scrollTrigger: {
        start: '39% center',
        end: '50% center',
        scrub: 2
    }
});

gsap.from(".stone-text", {
    y: 80, opacity: 0,
    scrollTrigger: {
        start: '38% center',
        end: '48% center',
        scrub: 2
    }
});

gsap.from(".skull", {
    scale: 0.5,
    scrollTrigger: {
        start: '60% center',
        end: '68% center',
        scrub: 2
    }
});

gsap.from(".people", {
    y: 200,
    scrollTrigger: {
        start: '60% center',
        end: '75% center',
        scrub: 2
    }
});

gsap.from(".footer-title p", {
    opacity: 0,
    scrollTrigger: {
        start: '88% center',
        end: '90% center',
        scrub: 1
    }
});

gsap.from(".footer-title h1", {
    y: 30,
    scrollTrigger: {
        start: '88% center',
        end: '90% center',
        scrub: 1
    }
});

gsap.from(".back-top", {
    y: 30,
    scrollTrigger: {
        start: '88% center',
        end: '90% center',
        scrub: 1
    }
});