/*In this code i'm comparing my initial scroll data("myscroll" which I initialised as 0 as in the top of the page), then I'm checking with an if statement and an else if statement if my scrollTop number increased or decreased (the else if doesn't mean a lot on the first check) If my scrollTop number increases, it means I'm going down the page, so I want to hide the navbar, if it decreases I want to show the navbar, after this is done I'm updating "myscroll" to the current number, so the next time I scroll and call my function it's not doing a comparison against the top of the page.  */

let port= $(window);
let myscroll= 0;
function scrolldirection(){
    if (port.scrollTop() > myscroll){
        $('.nav-bar').fadeOut();
        myscroll=port.scrollTop();
    }else if(port.scrollTop() < myscroll){
        $('.nav-bar').fadeIn();
        myscroll=port.scrollTop();
    }
}
port.scroll(scrolldirection);