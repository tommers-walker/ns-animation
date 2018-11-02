import 'gsap';
import '../vendor/DrawSVGPlugin';
import '../vendor/MorphSVGPlugin';
const playBtn = document.querySelector('#play-button');
const playIcon = document.querySelector('#play');
const pauseIcon = document.querySelector('#pause');
const repeatIcon = document.querySelector('#repeat');
const slider = document.querySelector('#slider');
const container = document.querySelector('.js-animation-container');
const controls = document.querySelector('.js-controls');
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
const letter_r = document.querySelector('#letter-r');
const letter_i_2_line = document.querySelector('#letter-i-2-line');
const letter_i_2_dot = document.querySelector('#letter-i-2-dot');
const letter_u = document.querySelector('#letter-u');
const letter_s_2 = document.querySelector('#letter-s-2');

const animation = {
  init() {
    const updateSlider = () => {
      slider.value = masterTl.progress();
    }

    const playToPauseTl = new TimelineLite({paused:true})
    playToPauseTl
    .to(playIcon, 0.1, {
      opacity:0,
      scale:0,
      transformOrigin:"50% 50%",
    })
    .to(pauseIcon, 0.1, {
      opacity:1,
      scale:1,
      transformOrigin:"50% 50%"
    }, "-=0.1")

    const playToRepeatTl = new TimelineLite({paused:true})
    playToRepeatTl
    .to(playIcon, 0.1, {
      opacity:0,
      scale:0,
      transformOrigin:"50% 50%",
    })
    .to(repeatIcon, 0.1, {
      opacity:1,
      scale:1,
      transformOrigin:"50% 50%"
    }, "-=0.1")

    const NTl = new TimelineMax();
    NTl
    .fromTo(letter_N, 1, {
      opacity:0,
      scale:2,
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
    .to(letter_c, 0.1, {stroke:"#FFF", strokeWidth:0})
    .to(letter_c, 0.5, {fill:"#000"}, "-=0.2")

    const eTl = new TimelineMax();
    eTl
    .fromTo(letter_e, 1, {
      x:-500,
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
    .fromTo(letter_S, 0.5, {
      opacity:0,
      scaleY:0.3,
      scaleX:0.3,
      transformOrigin: "50% 100%"
    }, {
      opacity:1
    })
    .fromTo(letter_S, 0.025, {
      rotation:-10,
      transformOrigin: "50% 100%"
    }, {
      rotation:10,
      yoyo:true,
      repeat:20
    }, "-=0.5")
    .to(letter_S, 0.025, {
      rotation:0,
      transformOrigin: "50% 100%"
    })
    .to(letter_S, 0.3, {
      scale:1,
      transformOrigin: "50% 100%",
      ease:Elastic.easeOut.config(1, 0.2)
    })

    const e2Tl = new TimelineMax();
    e2Tl
    .fromTo(letter_e_2, 0.3, {
      opacity:0,
      y:300
    }, {
      opacity:1,
      y:-100
    })
    .to(letter_e_2, 0.1, {
      y:0,
      ease:Power1.easeOut
    })
    .to(letter_e_2, 0.5, {
      rotation:360*5,
      transformOrigin: "50% 50%",
    }, "-=0.5")
    .to(letter_e_2, 0.1, {
      smoothOrigin:false,
      transformOrigin: "50% 100%",
      scaleY:0.75,
      scaleX:1.25,
      yoyo:true,
      repeat:1
    })

    const rTl = new TimelineMax();
    rTl
    .from(letter_r, 0.3, {drawSVG:"0"})
    .to(letter_r, 0.1, {stroke:"#FFF", strokeWidth:0})
    .to(letter_r, 0.5, {fill:"#000"}, "-=0.2")

    const i2Tl = new TimelineMax();
    i2Tl
    .from(letter_i_2_line, 0.1, {
      opacity: 0,
      y:200,
    })
    .fromTo(letter_i_2_dot, 0.2, {
      opacity:0,
      y:-200,
    },
    {
      opacity:1,
      y:0,
      ease:Power1.easeIn
    })
    .to(letter_i_2_dot, 0.1, {
      transformOrigin: "50% 100%",
      scaleY:0.75,
      scaleX:1.25,
      yoyo:true,
      repeat:1
    })
    .to(letter_i_2_dot, 0.2, {
      y:-150,
      ease:Circ.easeOut,
      yoyo:true,
      repeat:1
    })
    .to(letter_i_2_dot, 0.1, {
      transformOrigin: "50% 100%",
      scaleY:0.75,
      scaleX:1.25,
      yoyo:true,
      repeat:1
    })

    const oTl = new TimelineMax();
    oTl
    .fromTo(letter_o, 0.05, {
      opacity:0
    }, {
      opacity:1,
      yoyo:true,
      repeat:12,
      ease:RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize:  true, clamp: false}),
    })

    const uTl = new TimelineMax();
    uTl
    .fromTo(letter_u, 0.1, {
      opacity:0,
      x:-300,
      transformOrigin: "50% 50%"
    }, {
      opacity:1,
      x:0
    })
    .to(letter_u, 0.1, {
      skewX:-15,
      transformOrigin: "100% 100%",
      yoyo:true,
      repeat:1
    })

    const s2Tl = new TimelineMax()
    s2Tl
    .fromTo(letter_s_2, 0.5, {
      opacity:0
    }, {
      opacity:1
    })
    .from(letter_s_2, 0.3, {drawSVG:"0"})
    .to(letter_s_2, 0.1, {stroke:"#FFF", strokeWidth:0})
    .to(letter_s_2, 0.5, {fill:"#000"}, "-=0.2")
    .to(letter_s_2, 0.5, {
      x:60,
      rotation:360,
      ease:Elastic.easeOut.config(1, 0.75),
      transformOrigin: "50% 50%"
    })
    .to(letter_s_2, 0.1, {
      transformOrigin: "50% 100%",
      scaleY:0.75,
      scaleX:1.25,
      yoyo:true,
      repeat:1,
      ease:Circ.easeOut
    })
    .to(letter_s_2, 0.075, {
      y:-30,
      x:40
    })
    .to(letter_s_2, 0.075, {
      y:0,
      x:30
    })
    .to(letter_s_2, 0.075, {
      scaleY:0.75,
      scaleX:1.25,
      transformOrigin: "50% 100%",
      yoyo:true,
      repeat:1
    })
    .to(letter_s_2, 0.075, {
      y:-30,
      x:10
    })
    .to(letter_s_2, 0.075, {
      y:0,
      x:0
    })
    .to(letter_s_2, 0.075, {
      scaleY:0.75,
      scaleX:1.25,
      transformOrigin: "50% 100%",
      yoyo:true,
      repeat:1
    })

    const masterTl = new TimelineMax({
      paused:true,
      onUpdate:updateSlider,
      onComplete: function() {
        playToRepeatTl.play();
      }
    })

    masterTl.set([pauseIcon, repeatIcon], {opacity:0, scale:0, transformOrigin:"50% 50%"})
    masterTl.set([letter_c, letter_r, letter_s_2], {fill:"#FFF", stroke:"#000", strokeWidth:2})
    masterTl.add([NTl, iTl, cTl, eTl, aTl, nTl, dTl, STl, e2Tl, rTl, i2Tl, oTl, uTl], 0, "start", 0.2)
    masterTl.add(s2Tl, "-=1.8")
    container.classList += ' is-visible';
    controls.classList += ' is-visible';
    masterTl.play()

    slider.addEventListener('input', function(e) {
      masterTl.progress(this.value).pause();
    })

    playBtn.addEventListener('click', () => {
      masterTl.paused(!masterTl.paused());
      if (masterTl.progress() != 1) {
        masterTl.paused() ? playToPauseTl.play() : playToPauseTl.reverse()
      } else {
        playToRepeatTl.reverse();
        masterTl.restart();
      }
    })
  }
}
export { animation }
