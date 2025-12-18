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

async function fetchWithTiming(url, el) {
    const start = performance.now();
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const end = performance.now();
        const data = await response.json();
        const ms = Math.round(end - start);
        // console.log(`Time taken: ${ms} ms`);
        // console.log('Data:', data);
        el.addClass('con-success').append('<span class="label">'+ms+' ms</span>');

        //return { data, duration: end - start };
    } catch (error) {
        const end = performance.now();
        console.error(`Request failed after ${Math.round(end - start)} ms:`, error);
        el.addClass('con-error').append('<span class="label">Error</span>');
    }
}