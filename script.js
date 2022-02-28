const input = $('input');

(function() {
    $('input#name').on('focus', function() {
        $(this).addClass('complete');
    });
});