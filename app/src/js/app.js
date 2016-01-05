(function() {
    'use strict';

    const   ARROW_RIGHT = 39,
            ARROW_LEFT = 37;

    let     slide = 0;

    window.onload = ready;

    /**
     * Initialization
     */
    function ready() {

        Prism.highlightAll();

        addIds();

        slide = window.location.hash ? parseInt(window.location.hash.split('-').pop()) : 0;
        // Animate to active slide by not specifying a direction
        setSlide(0);


        document.body.addEventListener('keyup', (e) => {
            switch(e.which) {
                case ARROW_LEFT:
                    setSlide(-1);
                    break;
                case ARROW_RIGHT:
                    setSlide();
                    break;
            }
        });
    }

    /**
     * Adds an id to every section
     */
    function addIds() {
        let sections = document.querySelectorAll('section');
        for(let slide = 0; slide < sections.length; slide++) {
            sections[slide].setAttribute('id', `slide-${slide}`);
        }
    }

    /**
     * Moves to the next or previous slide
     * @param {int} dir The number of slides to move. Set to a negative value to go back
     */
    function setSlide(dir = 1) {
        // Don't allow negative slides
        slide = Math.max(0, parseInt(slide) + parseInt(dir));
        slide = Math.min(slide, document.querySelectorAll('section').length - 1);

        let activeSlide = document.getElementById(`slide-${slide}`);

        if(activeSlide) {
            removeAnimations();
            activeSlide.classList.add('animated');
            if(dir === 1 && activeSlide.previousElementSibling) {
                activeSlide.previousElementSibling.classList.add('animated');
            } else if(dir === -1 && activeSlide.nextElementSibling) {
                activeSlide.nextElementSibling.classList.add('animated');
            }

            window.location.href = `#slide-${slide}`;
        }

    }

    /**
     * Remove all animations from slides which aren't 'active'. The only active slides are the current slide and
     * the next / previous slide
     */
    function removeAnimations() {

        let sections = document.querySelectorAll('section');
        for(let slide = 0; slide < sections.length; slide++) {
            sections[slide].classList.remove('animated');
        }
    }
}());