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