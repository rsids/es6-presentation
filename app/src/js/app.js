(function() {
    'use strict';
    const ARROW_RIGHT = 39,
        ARROW_LEFT = 37;
    let slide = 0;
    window.onload = ready;

    function ready() {
        if(!window.location.hash) {
            setSlide(0);
        }


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

    function setSlide(dir = 1) {
        slide = Math.min(0, slide + dir);
        window.location.href = `#slide-${slide}`;
    }
}());