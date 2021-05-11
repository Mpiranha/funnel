(function () {
    $('.btn-drop').each(function () {
        $(this).on('click', function () {
            $($(this).attr('data-target')).toggle('show');
        });

    });
})();