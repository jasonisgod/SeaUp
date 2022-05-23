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
    // console.log('complete')
});


var counter = 0;

function onDOMLoaded(e) {

    // console.log('onDOMLoaded')

    $('#su-rect-1').css("fill", "white");
    $('#su-rect-2').css("fill", SU_BGCOLOR);
    $('#su-wave').css("fill", SU_BGCOLOR);

    $("path").each(function(index) {
        console.log("path sw", $(this).css("stroke"))
        if ($(this).css("strokeWidth") == "16px")
            $(this).css("strokeWidth", SU_WIDTH);
        if ($(this).css("stroke") == "rgb(246, 70, 62)")
            $(this).css("stroke", SU_COLOR);
        if ($(this).css("fill") == "rgb(247, 70, 62)")
            $(this).css("fill", SU_COLOR);
    });

    setInterval(() => {
        $(`#su-svg-1`).css('height', (99 - counter) + '%')
        $(`#su-svg-2`).css('height', counter + '%')
        counter = Math.min(counter + 10, 100)
    }, 500);

}