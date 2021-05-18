(function () {
    $('.btn-drop').each(function () {
        $(this).on('click', function () {
            $($(this).attr('data-target')).toggle('show');
        });

    });

    //$(btn.attr('data-toggle'))
    $('.btn-close').each(function () {
        $(this).on('click', function () {
            if ($(this).attr('data-dismiss')) {
                $(this).closest($(this).attr('data-dismiss')).removeClass('show');
            }
            console.log($(this).attr('data-dismiss'));
        });
    });

    $('[data-toggle=slide-in-wrap]').each(function () {
        $(this).on('click', function () {
            $($(this).attr('data-target')).addClass('show');

        });
    });
})();