// Mixit Up


    var mixer = mixitup('.grid-portfolio-contener');


//scrollify



$(function() {
          $.scrollify({
            section : ".scrollify",
            setHeights: false,
            updateHash: false, 
            
          });
    });
//HAMBURGER MENU

function openMenu(){
    document.getElementById('navbar').style.height="100%";
    
}
function closeMenu(){
    document.getElementById('navbar').style.height="0%";
    
}

// SMOOTH SCROLL

$(function(){
    $('.manu-item a, .scroll-down a, .close-btn ion-icon').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
});

