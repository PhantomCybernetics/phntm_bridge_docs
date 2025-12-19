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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithTiming(url, el) {

    let combined_time = 0;
    let num_samples = 0;
    let err = false;

    for (let i = 0; i < 5; i++) { // averaging multiple samples
        const start = performance.now();
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            const end = performance.now();
            combined_time += end - start;
            num_samples++;
            await sleep(100); // chill a bit
        } catch (error) {
            const end = performance.now();
            console.error(`Request failed after ${Math.round(end - start)} ms:`, error);
            err = true;
            break;
        }
    }

    if (!err) {
        const ms = Math.round(combined_time / num_samples);
        el.addClass('con-success').append('<span class="label">'+ms+' ms</span>');
    } else {
        el.addClass('con-error').append('<span class="label">Error</span>');
    }
}