import LocomotiveScroll from 'https://cdn.jsdelivr.net/npm/locomotive-scroll@4.0.0/+esm';



  gsap.registerPlugin(ScrollTrigger);



const t2 = gsap.timeline();
t2.to("#black", {
  top: "-100%",
  duration: 1,
});


const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1",
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true,
    markers: false,
    onLeave: () => { 
      gsap.set("#main_text, #nav", { opacity: 0 });
    },
    onEnterBack: () => { 
      gsap.set("#main_text, #nav", { opacity: 1 });
    },
  }
});

tl.to("#hero, #hero1, #hero2, #hero3, #hero4, #hero5", {
  scaleX: 0.15,
  scaleY: 0.4,
  transformOrigin: "center center",
  ease: "power2.inOut",
  duration: 2,
}, 0);

tl.to("#hero #main_text, #nav", {
  opacity: 0,
  duration: 1,
}, 0);

tl.set(".container", {
  display: "block"
}, 1.7);

tl.to(".paragraph p", {
  fontSize: "1.5vw",
  duration: 0.5
}, 1.7);

tl.to("#maintext1", {
  opacity: 1,
  duration: 0.1
}, 1)
  .to("#maintext1 h1", {
    opacity: 1,
    duration: 1
  }, 1.2)
  .to("#maintext1 p", {
    opacity: 1,
    duration: 1
  }, 2.2);

tl.to("#hero1", {
  x: -700,
  y: -270,
  duration: 1
}, 1)
  .to("#hero2", {
    x: 500,
    y: -200,
    duration: 1
  }, 1)
  .to("#hero3", {
    x: -380,
    y: 270,
    duration: 1
  }, 1)
  .to("#hero4", {
    x: -700,
    y: 780,
    duration: 1
  }, 1)
  .to("#hero5", {
    x: 400,
    y: 760,
    duration: 1
  }, 1)
  .to("#hero", {
    x: 670,
    y: 300,
    duration: 1
  }, 1);
