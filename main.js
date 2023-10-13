$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const novaTarefa = $('#task-request').val();
        const adicionaNovaTarefa = $('<li style="display: none"></li>');
        $(`<li>${novaTarefa}</li>`).appendTo(adicionaNovaTarefa);

        $(adicionaNovaTarefa).fadeIn(700);
        $(adicionaNovaTarefa).appendTo('#task-list');
        $('#task-request').val('');
    });
    $('#task-list').on('click', 'li', function() {
    $(this).toggleClass('line-through');
    });
})