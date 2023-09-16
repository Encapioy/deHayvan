

const cardFlex = document.querySelector(".card-flex");
const layer = document.querySelector(".layer");

// cardFlex.addEventListener('mouseenter', function() {

// })


cardFlex.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed) / 100

        layer.style.transform = `translateX(${x}px)`
    });
}

// let xValue = 0;

// cardFlex.addEventListener("mousemove", (e) => {
//     xValue = e.clientX - window.innerWidth / 100;

//     const speedx = layer.getAttribute('data-speed')
//     layer.style.transform = `translateX(calc(-50% + ${-xValue * speedx }px))`
// })

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


gsap.to("#header #head-img", {
    scale: 1.5, duration: 7,
    scrollTrigger: {
        trigger: "#header",
        pin: true,
        scrub: 3
    }
});

gsap.to("#header", {
    opacity: 0,
    scrollTrigger: {
        start: '24% center',
        end: '30% center',
        scrub: 3
    }
});

gsap.to(".header-before", {
    opacity: 0,
    scrollTrigger: {
        start: 'top top',
        end: '20% center',
        scrub: 1
    }
});

gsap.from(".header-after h1", {
    opacity: 0,
    scrollTrigger: {
        start: '15% center',
        end: '22% center',
        scrub: 1
    }
});

gsap.from(".header-after p", {
    opacity: 0, y: 40,
    scrollTrigger: {
        start: '15% center',
        end: '22% center',
        scrub: 1
    }
});

gsap.from(".goonies-1", {
    rotation: 90,
    scrollTrigger: {
        start: '50% center',
        end: '80% center',
        scrub: 2
    }
});

gsap.to(".goonies-2", {
    rotation: 360, y: 550, opacity: 0.4,
    scrollTrigger: {
        start: '52% center',
        end: '80% center',
        scrub: 2
    }
});

gsap.to(".goonies-3", {
    rotation: -180, y: 460,
    scrollTrigger: {
        start: '55% center',
        end: '80% center',
        scrub: 2
    }
});

gsap.from(".goonies-4", {
    y: 400,
    scrollTrigger: {
        start: '55% center',
        end: '80% center',
        scrub: 2
    }
});

gsap.from(".goonies-5", {
    rotation: -180, y: 400,
    scrollTrigger: {
        start: '60% center',
        end: '80% center',
        scrub: 2
    }
});

gsap.from(".goonies-text", {
    y: 200, opacity: 0,
    scrollTrigger: {
        start: '60% center',
        end: '70% center',
        scrub: 2
    }
});

gsap.from(".skull", {
    scale: 0.5,
    scrollTrigger: {
        start: '80% center',
        end: '95% center',
        scrub: 2
    }
});

gsap.from(".people", {
    y: 200,
    scrollTrigger: {
        start: '80% center',
        end: '95% center',
        scrub: 2
    }
});