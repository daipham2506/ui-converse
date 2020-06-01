const button = document.getElementById("move-to-top");
window.onscroll = () =>{
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        button.style.display = "block";
    }else{
        button.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
const moveToTop= () =>{
    scrollTo(document.body, 0, 300);   // For Safari
    scrollTo(document.documentElement, 0, 300);
}

function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
        
    var animateScroll = function(){        
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};