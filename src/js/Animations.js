import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

const Animations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let timeline = gsap.timeline();

    timeline
      .fromTo('nav', {
        y: -100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        delay: .5,
        duration: .8
      })
      .fromTo('#hero-section img', {
        opacity: 0
      }, {
        opacity: 1,
        duration: 1
      })
      .fromTo('.hero-container h1', {
        x: '-100%',
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 1
      })
      .fromTo('.hero-container .paragraph', {
        x: '100%',
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 1
      }, '>-1')

    /* Scroll Triggers */

    gsap.fromTo('#culture-section .csTrigger', {
      y: -100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '#culture-section h1',
        start: 'top 70%'
      }
    })

    ScrollTrigger.batch('.culture-container div', {
      onEnter: batch => gsap.fromTo(batch, { y: -100, opacity: 0 },
        { y: 0, opacity: 1, stagger: .5 })
    })

    gsap.fromTo('#culture-section .csTrigger2', {
      y: -100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: true,
      scrollTrigger: {
        trigger: '#culture-section .cta',
        start: 'top 80%'
      }
    })
  })
  return (null);
}

export default Animations;



