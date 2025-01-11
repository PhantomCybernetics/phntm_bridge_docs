$(document).ready(function () {

    $('.fa.fa-github')
        .text('Edit page')
        .click(function(e) {
            e.preventDefault();
            window.open($(this).attr('href'), '_blank');
        });

    $('<li class="wy-breadcrumbs-aside"><a href="https://github.com/PhantomCybernetics" id="phntm-github-link" class="external"><span class="icon"></span>GitHub</a></li>')
        .insertBefore($('LI.wy-breadcrumbs-aside'))

    let copy_el = $('div[role="contentinfo"]');
    let phntm = 'Phantom Cybernetics Inc';
    copy_el.html(copy_el.text().replace(phntm, '<a href="https://www.phantomcybernetics.com" class="external">'+phntm+'</a>'))

    $('a.external').attr('target', '_blank');
});

// Next/previous controls
function plusSlides(n, id_cont) {
    window.slideIndex[id_cont] += n;
    showSlides(id_cont);
}

// Thumbnail image controls
function currentSlide(n, id_cont) {
    window.slideIndex[id_cont] = n;
    showSlides(id_cont);
}

function showSlides(id_cont) {
    let i;
    let cont = document.getElementById(id_cont);
    let slides = cont.getElementsByClassName("mySlides");
    let dots = cont.getElementsByClassName("dot");

    let n = window.slideIndex[id_cont];
    if (n > slides.length) {window.slideIndex[id_cont] = 1}
    if (n < 1) {window.slideIndex[id_cont] = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[window.slideIndex[id_cont]-1].style.display = "block";
    dots[window.slideIndex[id_cont]-1].className += " active";
}