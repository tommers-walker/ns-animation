import 'gsap';
import '../vendor/DrawSVGPlugin';
import '../vendor/MorphSVGPlugin';
const slider = document.querySelector('#slider');
const container = document.querySelector('.js-animation-container');
const letter_N = document.querySelector('#letter-N');
const letter_i_line = document.querySelector('#letter-i-line');
const letter_i_dot = document.querySelector('#letter-i-dot');
const letter_c = document.querySelector('#letter-c');
const letter_e = document.querySelector('#letter-e');
const letter_a = document.querySelector('#letter-a');
const letter_n = document.querySelector('#letter-n');
const letter_d = document.querySelector('#letter-d');
const letter_S = document.querySelector('#letter-S');
const letter_e_2 = document.querySelector('#letter-e-2');
const letter_o = document.querySelector('#letter-o');

const animation = {
  init() {
    const updateSlider = () => {
      slider.value = masterTl.progress();
    }

    const masterTl = new TimelineMax({paused:true, onUpdate:updateSlider});

    const NTl = new TimelineMax();
    NTl
    .fromTo(letter_N, 1, {
      opacity:0,
      scale:0.5,
      transformOrigin: "50% 50%"
    }, {
      opacity:1,
      scale:1,
      ease:Elastic.easeOut.config(1, 0.2)
    })

    const iTl = new TimelineMax();
    iTl
    .from(letter_i_line, 0.1, {
      opacity: 0,
      y:200,
    })
    .fromTo(letter_i_dot, 0.2, {
      opacity:0,
      y:-200,
    },
    {
      opacity:1,
      y:0,
      ease:Power1.easeIn
    })
    .to(letter_i_dot, 0.1, {
      transformOrigin: "50% 100%",
      scaleY:0.75,
      scaleX:1.25,
      yoyo:true,
      repeat:1
    })
    .to(letter_i_dot, 0.2, {
      y:-150,
      ease:Circ.easeOut,
      yoyo:true,
      repeat:1
    })
    .to(letter_i_dot, 0.1, {
      transformOrigin: "50% 100%",
      scaleY:0.75,
      scaleX:1.25,
      yoyo:true,
      repeat:1
    })

    const cTl = new TimelineMax();
    cTl
    .from(letter_c, 1, {drawSVG:"0"})
    .to(letter_c, 0.1, {stroke:"#FFF"})
    .to(letter_c, 0.5, {fill:"#000"}, "-=0.2")

    const eTl = new TimelineMax();
    eTl
    .fromTo(letter_e, 1, {
      x:-300,
      rotation:0,
      transformOrigin: "50% 50%"
    }, {
      x:0,
      rotation:720,
      ease:Elastic.easeOut.config(1, 0.75)
    })

    const aTl = new TimelineMax();
    aTl
    .from(letter_a, 0.1, {
      opacity:0,
      y:-200,
      ease:Power1.easeIn
    })
    .to(letter_a, .1, {
      transformOrigin: "50% 100%",
      scaleY:0.75,
      scaleX:1.25,
      yoyo:true,
      repeat:1
    })

    const nTl = new TimelineMax();
    nTl
    .from(letter_n, 0.1, {
      opacity:0,
      y:-200,
      ease:Power1.easeIn
    })
    .to(letter_n, .1, {
      transformOrigin: "50% 100%",
      scaleY:0.75,
      scaleX:1.25,
      yoyo:true,
      repeat:1
    })

    const dTl = new TimelineMax();
    dTl
    .from(letter_d, 0.1, {
      opacity:0,
      y:-200,
      ease:Power1.easeIn
    })
    .to(letter_d, .1, {
      transformOrigin: "50% 100%",
      scaleY:0.75,
      scaleX:1.25,
      yoyo:true,
      repeat:1
    })

    const STl = new TimelineMax();
    STl
    .from(letter_S, 0.1, {
      opacity:0,
      scale:0,
      transformOrigin: "50% 50%"
    })
    .fromTo(letter_S, 0.02, {
      rotation:-5,
      transformOrigin: "50% 50%"
    }, {
      rotation:5,
      yoyo:true,
      repeat:10
    })
    .to(letter_S, 0.1, {
      rotation:0
    })

    const e2Tl = new TimelineMax();
    e2Tl
    .fromTo(letter_e_2, 0.5, {
      opacity:0,
      y:200
    }, {
      opacity:1,
      y:-100
    })
    .to(letter_e_2, 0.2, {
      y:0
    })
    .to(letter_e_2, 0.5, {
      rotation:360*5,
      transformOrigin: "50% 50%"
    }, "-=0.5")
    // .to(letter_e_2, 1, {
    //   smoothOrigin:false,
    //   transformOrigin: "50% 100%",
    //   scaleY:0.75,
    //   scaleX:1.25,
    //   yoyo:true,
    //   repeat:1
    // }, "-=0.1")

    // const oTl = new TimelineMax();
    // oTl
    // .to(letter_o, 0.05, {
    //   scaleX:0.01,
    //   yoyo:true,
    //   repeat:21,
    //   ease:Power0.easeNone,
    //   transformOrigin: "50% 50%"
    // })

    masterTl.add([NTl, iTl, cTl, eTl, aTl, nTl, dTl, STl], 0, "start", 0.1)
    container.classList += ' is-visible';
    // masterTl.timeScale( 0.5 );
    masterTl.play()

    slider.addEventListener('input', function(e) {
      masterTl.progress(this.value).pause();
    })
  }
}
export { animation }
