$('.math_icon').each(function() {
    const check ='<!-- check --><path d="M4 8L7 11" class="check"/><path d="M13.4248 4L6.00018 11.4246" class="check"/>';
    const plus = '<!-- plus --><path d="M3 8H13.5"class="plus"/><path d="M8.25 2.74994L8.25 13.2499" class="plus"/>'
    const minus = '<!-- minus --><path d="M3 8H13.5" class="minus"/>';
    const ex = '<!-- ex --><path d="M4.5376 4.28772L11.9622 11.7123" class="ex"/><path d="M11.9624 4.28772L4.53778 11.7123" class="ex"/>';

    $(this).html(check + plus + minus + ex)
})