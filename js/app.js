import Sketch from './module';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

let titles = gsap.utils.toArray('h2');

titles.forEach(title => {
  let split = new SplitText(title, {type: 'chars', });
  gsap.from(split.chars, {
    scrollTrigger: {
      trigger: title,
      scrub: 1,
      start: 'top 100px',
      end: 'bottom 80%',
      toggleActions: 'restart pause reverse pause',
      markers: {
        startColor: 'white',
        endColor: 'green',
      }
    },
    autoAlpha: 0,
    y: 50,
    ease: 'back(4)',
    // rotation: 90,
    stagger: {
      from: 'end',
      each: 0.05
    },
  });
});
  
let sketch = new Sketch({
  dom: document.getElementById('container')
});

// let o = { a: 0 };
// gsap.to(o, {
//   a: 1,
//   scrollTrigger: {
//     trigger: '.wrap',
//     markers: true,
//     scrub: 2,
//     start: 'top top',
//     end: 'bottom bottom',
//     snap: 1/(titles.length - 1),
//     onUpdate: (self)=> {
//       console.log(sketch.model, self.progress);

//       sketch.model.rotation.y = 2.*3.14 * self.progress;
//       sketch.model.position.z = -2.1*Math.sin(3.14*self.progress);
//     }
//   }
// });

const modelTl = new gsap.timeline({
  
});

modelTl
  .to(sketch.model, {
    rotationY: 360
  })


ScrollTrigger.create({
  animation: modelTl,
  trigger: '.wrap',
  scrub: 2,
  start: 'top top',
  end: 'bottom bottom',
  snap: 1/(titles.length - 1),
  // onUpdate: render
  onUpdate: self => {
    // console.log(sketch.model);
    sketch.model.position.z = 0.5*Math.sin(3.14*self.progress);
    sketch.model.rotation.y = 2.*3.14 * self.progress;
  },
});

function render() {
  sketch.model.position.z = 0.5*Math.sin(3.14*self.progress);
  sketch.model.rotation.y = 2.*3.14 * self.progress;
}

