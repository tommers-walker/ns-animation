import { TweenMax } from 'gsap';
const letter_N = document.querySelector('#letter-N');
const letter_i_dot = document.querySelector('#letter-i-dot');
const letter_c = document.querySelector('#letter-c');

const animation = {
  init() {
    const nTl = new TimelineMax();
    nTl
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
      .fromTo(letter_i_dot, 0.2, {
        opacity:0,
        y:-400,
      },
      {
        opacity:1,
        y:0,
        ease:Circ.easeOut,
      })
      .to(letter_i_dot, .10, {
        transformOrigin: "50% 100%",
        scaleY:0.75,
        scaleX:1.25,
        yoyo:true,
        repeat:1
      })
      .to(letter_i_dot, 0.2, {
        y:-200,
        ease:Circ.easeOut,
        yoyo:true,
        repeat:1
      })
      .to(letter_i_dot, .10, {
        transformOrigin: "50% 100%",
        scaleY:0.75,
        scaleX:1.25,
        yoyo:true,
        repeat:1
      })

    const cTl = new TimelineMax();
    cTl
      .fromTo(letter_c, 0.5, {
        opacity:0
      },{
        opacity:1
      })
  }
}
export { animation }
