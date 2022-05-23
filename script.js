// SeaUp

SU_BGCOLOR = "rgb(187, 212, 252)"
SU_COLOR = "rgb(16, 97, 227)"
SU_WIDTH = "32px"

var select = function(s) {
        return document.querySelector(s);
    },
    selectAll = function(s) {
        return document.querySelectorAll(s);
    },
    animationWindow = select('#animationWindow'),
    animData = {
        wrapper: animationWindow,
        animType: 'svg',
        loop: true,
        prerender: true,
        autoplay: true,
        path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/play_fill_loader.json',
        rendererSettings: {
            //context: canvasContext, // the canvas context
            //scaleMode: 'noScale',
            //clearCanvas: false,
            //progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
            //hideOnTransparent: true //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
        }
    },
    anim;

anim = bodymovin.loadAnimation(animData);
anim.addEventListener('DOMLoaded', onDOMLoaded);
anim.setSpeed(1);

anim.addEventListener('complete', function() {
    console.log('complete')
});


var counter = 0;

function onDOMLoaded(e) {

    console.log('onDOMLoaded')

    $('#su-rect').css("fill", SU_BGCOLOR);

    $("path").each(function(index) {
        // var sw = $(this).css("strokeWidth");
        console.log("path sw", $(this).css("stroke"))
        if ($(this).css("strokeWidth") == "16px")
            $(this).css("strokeWidth", SU_WIDTH);
        if ($(this).css("stroke") == "rgb(246, 70, 62)")
            $(this).css("stroke", SU_COLOR);
        if ($(this).css("fill") == "rgb(247, 70, 62)")
            $(this).css("fill", SU_COLOR);
        // var sw = $(this).prop("stroke-width")
        // console.log("path sw", sw)
        // if (sw == "16")
        //     $(this).prop("stroke-width", "32")
    });

    setInterval(() => {
        document.querySelector(`#su-svg rect`).setAttribute('height', counter + '%')
        counter = (counter + 10) % 100;
    }, 500);

}





//document.querySelector(`#SVG${this.id} rect`).setAttribute('height',this.value+'%')

// ScrubBodymovinTimeline(anim);
//# sourceURL=pen.js

// 
/*
// up animation
(body div svg g g[-1] g).transform
transform="matrix(20,0,0,15,500,300)"
*/

// console.log('setTimeout')
// setInterval(() => {
//     console.log('setTimeout inside')
//     jsonisgod()
// }, 5000);