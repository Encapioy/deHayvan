

const cardFlex = document.querySelector(".card-flex");
const layer = document.querySelector(".layer");

// cardFlex.addEventListener('mouseenter', function() {
    
// })


cardFlex.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100

        layer.style.transform = `translateX(${x}px)`
    });
}

// let xValue = 0;

// cardFlex.addEventListener("mousemove", (e) => {
//     xValue = e.clientX - window.innerWidth / 100;
    
//     const speedx = layer.getAttribute('data-speed')
//     layer.style.transform = `translateX(calc(-50% + ${-xValue * speedx }px))`
// })

const galleryClose = document.querySelector(".gallery-close");
const galleryImg = document.querySelectorAll(".gallery-img");
galleryClose.addEventListener("click", (e) => {
    
})


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
    rotation: -180 ,y: 400,
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