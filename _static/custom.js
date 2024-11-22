$(document).ready(function () {
    $('<a href="https://github.com/PhantomCybernetics" id="phntm-github-link" class="external"><span class="icon"></span>GitHub</a>')
        .appendTo($('body'))

    $('a.external').attr('target', '_blank');
});