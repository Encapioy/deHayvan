function scrollToTop() {
    window.scrollTo(0, 0);
}

function counter() {
    var count = setInterval(function () {
        var c = parseInt($('.counter').text());
        $('.counter').text((++c).toString());
        if (c == 100) {
            clearInterval(count);
            $('.preloader').addClass('active')
        }
    }, 60)
}
counter()

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
const closeVideo = document.querySelector('.close-video');
const nav = document.querySelector('nav');

if (window.matchMedia("(max-width: 500px)").matches) {

    aC1.addEventListener("click", () => {
        cV1.style.zIndex = "100";
        cInfo1.style.zIndex = "101";
        cInfo1.style.opacity = "1";
    })

    aC2.addEventListener("click", () => {
        cV2.style.zIndex = "100";
        cInfo2.style.zIndex = "101";
        cInfo2.style.opacity = "1";
    })

    aC3.addEventListener("click", () => {
        cV3.style.zIndex = "100";
        cInfo3.style.zIndex = "101";
        cInfo3.style.opacity = "1";
    })

    aC4.addEventListener("click", () => {
        cV4.style.zIndex = "100";
        cInfo4.style.zIndex = "101";
        cInfo4.style.opacity = "1";
    })

    for (let i = 0; i < cardInfo.length; i++) {
        cardInfo[i].addEventListener("click", () => {
            cardInfo[i].style.zIndex = "";
            cardInfo[i].style.opacity = "";

            for (let i = 0; i < cardVideo.length; i++) {
                cardVideo[i].style.zIndex = "";
            }
        })
    }

} else {

    let draggableElem = document.querySelectorAll(".card-info");
    let initialX = 0,
        initialY = 0;
    let moveElement = false;

    // Events Ovject 
    let events = {
        mouse: {
            down: "mousedown",
            move: "mousemove",
            up: "mouseup",
        },
        touch: {
            down: "touchstart",
            move: "touchmove",
            up: "touchend",
        },
    };

    let deviceType = "";

    // Detech touch device 
    const isTouchDevice = () => {
        try {
            // We try to create TouchEvent (it would fail for fesktops and throw error) 
            document.createEvent("TouchEvent");
            deviceType = "touch";
            return true;
        } catch (e) {
            deviceType = "mouse";
            return false;
        }
    };

    isTouchDevice();

    for (let i = 0; i < draggableElem.length; i++) {

        // Start (mouse down / touch start)
        draggableElem[i].addEventListener(events[deviceType].down,
            (e) => {
                e.preventDefault();
                // initial x and y points
                initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
                initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
                // Start movement
                moveElement = true;
            }
        );

        // Move
        draggableElem[i].addEventListener(events[deviceType].move,
            (e) => {
                // i movement == true then set top and left to new X and Y while removing any offset
                if (moveElement) {
                    e.preventDefault();
                    let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
                    let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
                    draggableElem[i].style.top = draggableElem[i].offsetTop - ((initialY - newY) * 2) + "px";
                    draggableElem[i].style.left = draggableElem[i].offsetLeft - ((initialX - newX) * 2) + "px";
                    initialX = newX;
                    initialY = newY;
                }
            }
        );

        // mouse up / touch end
        draggableElem[i].addEventListener(events[deviceType].up,
            (stopMovement = (e) => {
                moveElement = false;
            })
        );

        draggableElem[i].addEventListener("mouseleave", stopMovement);
        draggableElem[i].addEventListener(events[deviceType].up,
            (e) => {
                moveElement = false;
            }
        );

    }

    aC1.addEventListener("click", () => {
        cV1.style.zIndex = "100";
        cInfo1.style.zIndex = "101";
        cInfo1.style.opacity = "1";
        aC1.style.zIndex = "99";
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
        cInfo2.style.opacity = "1";
        aC2.style.zIndex = "99";
        aC2.style.width = "100%";
        aC2.style.transform = "translateX(-316px)";
        aC1.style.opacity = "0";
        aC3.style.opacity = "0";
        aC4.style.opacity = "0";
        closeVideo.style.opacity = "1";
        nav.style.transform = "translateY(-100px)"
    })

    aC3.addEventListener("click", () => {
        cV3.style.zIndex = "100";
        cInfo3.style.zIndex = "101";
        cInfo3.style.opacity = "1";
        aC3.style.zIndex = "99";
        aC3.style.width = "100%";
        aC3.style.transform = "translateX(316px)";
        aC1.style.opacity = "0";
        aC2.style.opacity = "0";
        aC4.style.opacity = "0";
        closeVideo.style.opacity = "1";
        nav.style.transform = "translateY(-100px)"
    })

    aC4.addEventListener("click", () => {
        cV4.style.zIndex = "100";
        cInfo4.style.zIndex = "101";
        cInfo4.style.opacity = "1";
        aC4.style.zIndex = "99";
        aC4.style.width = "100%";
        aC1.style.opacity = "0";
        aC2.style.opacity = "0";
        aC2.style.opacity = "0";
        closeVideo.style.opacity = "1";
        nav.style.transform = "translateY(-100px)"
    })
}

closeVideo.addEventListener("click", () => {
    for (let i = 0; i < animalsCard.length; i++) {
        animalsCard[i].style.width = "";
        animalsCard[i].style.opacity = "1";
    }

    for (let i = 0; i < cardVideo.length; i++) {
        cardVideo[i].style.zIndex = "";
    }

    for (let i = 0; i < cardInfo.length; i++) {
        cardInfo[i].style.zIndex = "";
        cardInfo[i].style.opacity = "";
    }

    aC2.style.transform = "translateX(0px)";
    aC3.style.transform = "translateX(0px)";
    closeVideo.style.opacity = "0";
    nav.style.transform = "translateY(0px)";
})




let mm = gsap.matchMedia();

mm.add({
    isDekstop: "(min-width: 501px)",
    isMobile: "(max-width: 500px)"
}, (context) => {
    let { isMobile, isDekstop } = context.conditions;

    gsap.fromTo(".pulse", {
        x: isMobile ? 195 : 653
    },
        {
            x: isMobile ? 293 : 965,
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
            x: isMobile ? 195 : 653,
            scrollTrigger: {
                start: isMobile ? '53% center' : '55% center',
                end: isMobile ? '58% center' : '65% center',
                scrub: 1
            }
        }
    );

    gsap.fromTo(".pulse", {
        x: isMobile ? 10 : 23,
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

    gsap.from("#animals", {
        opacity: 0,
        scrollTrigger: {
            start: isMobile ? '18% center' : '23% center',
            end: isMobile ? '20% center' : '25% center',
            scrub: 3
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
            start: isMobile ? '68% center' : '60% center',
            end: isMobile ? '70% center' : '68% center',
            scrub: 2
        }
    });

    gsap.from(".people", {
        y: 200,
        scrollTrigger: {
            start: isMobile ? '68% center' : '60% center',
            end: isMobile ? '75% center' : '75% center',
            scrub: 2
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
            start: '88% center',
            end: '90% center',
            scrub: 1
        }
    });
})