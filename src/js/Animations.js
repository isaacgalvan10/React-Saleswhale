import { gsap } from 'gsap';
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

    gsap.fromTo('#progress-section h1', {
      y: -100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '#progress-section h1',
        start: 'top 70%'
      }
    })

    gsap.fromTo('.progress-container', {
      opacity: 0
    }, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '.progress-container',
        toggleActions: 'play none none reverse',
        start: 'top 60%'
      }
    })

    gsap.fromTo('#office-section h1', {
      y: -100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '#office-section h1',
        start: 'top 70%'
      }
    })

    ScrollTrigger.batch('.office-container div', {
      onEnter: batch => gsap.fromTo(batch, { y: -100, opacity: 0 },
        { y: 0, opacity: 1, stagger: .5 })
    })

    gsap.fromTo('#investor-section h1', {
      y: -100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '#investor-section h1',
        start: 'top 70%'
      }
    })

    ScrollTrigger.batch('#investor-section .card', {
      onEnter: batch => gsap.fromTo(batch, { y: -100, opacity: 0 },
        { y: 0, opacity: 1, stagger: .5 })
    })

    gsap.fromTo('.future-container', {
      opacity: 0
    }, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '#future-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.fromTo('.footer-container-1 img', {
      y: -100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.footer-container-1',
        start: 'top 70%'
      }
    })

    ScrollTrigger.batch('.link-container ul', {
      onEnter: batch => gsap.fromTo(batch, { y: -100, opacity: 0 },
        { y: 0, opacity: 1, stagger: .5 })
    })

    gsap.fromTo('.footer-container-2 .fcTrigger', {
      y: -100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '.footer-container-2',
        start: 'top 70%'
      }
    })

    ScrollTrigger.batch('.socialmedia a', {
      onEnter: batch => gsap.fromTo(batch, { y: -100, opacity: 0 },
        { y: 0, opacity: 1, stagger: .5 })
    })

  })
  return (null);
}

export default Animations;



