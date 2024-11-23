$(document).ready(function () {
    $('<a href="https://github.com/PhantomCybernetics" id="phntm-github-link" class="external"><span class="icon"></span>GitHub</a>')
        .appendTo($('body'))

    let copy_el = $('div[role="contentinfo"]');
    let phntm = 'Phantom Cybernetics Inc';
    copy_el.html(copy_el.text().replace(phntm, '<a href="https://phntm.io" class="external">'+phntm+'</a>'))

    $('a.external').attr('target', '_blank');
});